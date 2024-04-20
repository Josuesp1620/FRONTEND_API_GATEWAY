import { GatewayApplicationEntity as Entity } from '@/Dashboard/gateway_application/domain/entities'
import { GatewayApplicationRepository as Repository } from '@/Dashboard/gateway_application/domain/repositories'

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
