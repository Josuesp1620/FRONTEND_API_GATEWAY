import { GatewayApplicationEntity as Entity } from '@/Dashboard/gateway_application/domain/entities'
import { GatewayApplicationRepository as Repository } from '@/Dashboard/gateway_application/domain/repositories'

export class GetAlldUseCase {

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
