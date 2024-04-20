import { GatewayApplicationEntity as Entity } from '../entities'

export interface GatewayApplicationRepository {
    getAll: () => Promise<Entity[] | null>
    save: (user: Entity) => Promise<Entity | null>
    update: (user: Entity) => Promise<Entity | null>
    delete: (id: string) => Promise<void>
    getById: (id: string) => Promise<Entity | null>
}
