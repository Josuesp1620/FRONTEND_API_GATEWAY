import { GatewayEndPointEntity as Entity } from '@/Dashboard/domain/gateway_endpoint/entities'
import { GatewayEndpointRepository as Repository } from '@/Dashboard/domain/gateway_endpoint/repositories'

export class GetByIdUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(id: string): Promise<Entity | null > {
        const entity: Entity | null = await this._repository.getById(id)
        return entity
    }
}
