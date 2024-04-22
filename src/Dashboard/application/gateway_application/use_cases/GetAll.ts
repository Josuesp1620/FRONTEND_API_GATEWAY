import { GatewayApplicationEntity as Entity } from '@/Dashboard/domain/gateway_application/entities'
import { GatewayApplicationRepository as Repository } from '@/Dashboard/domain/gateway_application/repositories'

export class GetAllUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(): Promise<Entity[] | null > {
        const entities: Entity[] | null = await this._repository.getAll()
        return entities
    }
}
