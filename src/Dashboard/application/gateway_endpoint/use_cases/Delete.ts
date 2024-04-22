import { GatewayEndpointRepository as Repository } from '@/Dashboard/domain/gateway_endpoint/repositories'

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
