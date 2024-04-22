import { ImplementationAxios } from '../../implementation/axios'
import { CreateUseCase as UseCase } from '@/Dashboard/application/gateway_endpoint/use_cases'
import { GatewayEndPointEntity as Entity } from '@/Dashboard/domain/gateway_endpoint/entities'
import { addGatewayEndPoint } from '@/redux/features/gatewayEndPointSlice'

export const createEntity = async ({data, app_id, dispatch, setOpen, reset} : {data : Entity, app_id : string, dispatch : any, setOpen : any, reset : any}) => {    
  const axiosRepository = new ImplementationAxios()
  const useCase = new UseCase(axiosRepository)    
  try {
    data.app_id = app_id
    const entity = await useCase.run(data)
    console.log(entity)
    dispatch(addGatewayEndPoint(entity))
    setOpen(false)
    reset()
  }catch(e) {
    console.log(e)
  }
}