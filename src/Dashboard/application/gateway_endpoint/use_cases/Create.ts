import { GatewayEndPointEntity as Entity } from '@/Dashboard/domain/gateway_endpoint/entities'
import { GatewayEndpointRepository as Repository } from '@/Dashboard/domain/gateway_endpoint/repositories'
import { CreateEntityException } from '@/shared/exceptions'

export class CreateUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(data: Entity): Promise<Entity> {
        const entity: Entity | null = await this._repository.save(data)

        if(entity === null) throw new CreateEntityException()
        
        return entity
    }
}
