import { GatewayApplicationRepository as Repository } from '@/Dashboard/gateway_application/domain/repositories'

export class DeleteUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(id : string): Promise<void | null > {
        const deleted = await this._repository.delete(id)
        if(deleted === null){
            return null
        }
    }
}
