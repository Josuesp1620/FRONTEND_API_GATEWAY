import { GatewayEndPointEntity as Entity } from '../entities'

export interface GatewayEndpointRepository {
    getAll: () => Promise<Entity[] | null>
    save: (entity: Entity) => Promise<Entity | null>
    update: (entity: Entity) => Promise<Entity | null>
    delete: (id: string) => Promise<void | null >
    getById: (id: string) => Promise<Entity | null>
}
