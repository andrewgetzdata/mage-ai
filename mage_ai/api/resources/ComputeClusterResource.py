from mage_ai.api.resources.GenericResource import GenericResource
from mage_ai.services.compute.aws.models import Cluster
from mage_ai.services.compute.models import ComputeService
from mage_ai.services.spark.constants import ComputeServiceUUID


class ComputeClusterResource(GenericResource):
    @classmethod
    async def collection(self, _query, _meta, user, **kwargs):
        parent_model = kwargs.get('parent_model')

        clusters = []

        if isinstance(parent_model, ComputeService):
            if ComputeServiceUUID.AWS_EMR == parent_model.uuid:
                result = parent_model.clusters_and_metadata()
                clusters = [dict(
                    cluster=cluster,
                ) for cluster in result.get('clusters') or []]

        return self.build_result_set(
            clusters,
            user,
            **kwargs,
        )

    @classmethod
    async def member(self, pk, user, **kwargs):
        parent_model = kwargs.get('parent_model')

        cluster = None

        if isinstance(parent_model, ComputeService):
            if ComputeServiceUUID.AWS_EMR == parent_model.uuid:
                cluster = parent_model.get_cluster_details(pk)

        return self(dict(
            cluster=cluster,
        ), user, **kwargs)

    @classmethod
    def create(self, payload, user, **kwargs):
        parent_model = kwargs.get('parent_model')

        cluster = None

        if isinstance(parent_model, ComputeService):
            if ComputeServiceUUID.AWS_EMR == parent_model.uuid:
                cluster = parent_model.create_cluster()

        return self(dict(
            cluster=cluster,
        ), user, **kwargs)

    async def delete(self, **kwargs):
        parent_model = kwargs.get('parent_model')

        if isinstance(parent_model, ComputeService):
            if ComputeServiceUUID.AWS_EMR == parent_model.uuid:
                cluster_id = self.get_cluster_id()
                if cluster_id:
                    parent_model.terminate_clusters([cluster_id])

    async def update(self, payload, **kwargs):
        parent_model = kwargs.get('parent_model')

        if isinstance(parent_model, ComputeService):
            if ComputeServiceUUID.AWS_EMR == parent_model.uuid:
                cluster_id = self.get_cluster_id()
                if cluster_id:
                    cluster = parent_model.update_cluster(cluster_id, payload)
                    if cluster:
                        self.model = dict(cluster=cluster)

    def get_cluster_id(self) -> str:
        cluster_id = None

        if 'cluster' in self.model:
            cluster = self.model.get('cluster')
            if cluster:
                cluster_id = None
                if isinstance(cluster, Cluster):
                    cluster_id = cluster.id
                elif isinstance(cluster, dict):
                    cluster_id = cluster.get('id')

        return cluster_id