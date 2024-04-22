import { ImplementationAxios } from '../../implementation/axios'
import { CreateUseCase as UseCase } from '@/Dashboard/gateway_application/application/use_cases'
import { GatewayApplicationEntity as Entity } from '@/Dashboard/gateway_application/domain/entities'
import { addGatewayApplication } from '@/redux/features/gatewayApplicationSlice'

export const createEntity = async ({data, dispatch, setOpen, reset} : {data : Entity, dispatch : any, setOpen : any, reset : any}) => {    
    const axiosRepository = new ImplementationAxios()
    const useCase = new UseCase(axiosRepository)    
    try {
      const entity = await useCase.run(data)
      dispatch(addGatewayApplication(entity))
      setOpen(false)
      reset()
    }catch(e) {
      console.log(e)
    }
  }