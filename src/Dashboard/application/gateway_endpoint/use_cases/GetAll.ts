import { GatewayEndPointEntity as Entity } from '@/Dashboard/domain/gateway_endpoint/entities'
import { GatewayEndpointRepository as Repository } from '@/Dashboard/domain/gateway_endpoint/repositories'

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
