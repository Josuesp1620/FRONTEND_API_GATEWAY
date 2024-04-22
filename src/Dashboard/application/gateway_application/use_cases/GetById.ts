import { GatewayApplicationEntity as Entity } from '@/Dashboard/domain/gateway_application/entities'
import { GatewayApplicationRepository as Repository } from '@/Dashboard/domain/gateway_application/repositories'

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
