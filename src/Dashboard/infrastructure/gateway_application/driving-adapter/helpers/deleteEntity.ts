import { deleteGatewayApplication } from "@/redux/features/gatewayApplicationSlice";
import { ImplementationAxios } from "../../implementation/axios";
import { DeleteUseCase as UseCase} from "@/Dashboard/application/gateway_application/use_cases";

export const deleteEntity = async ({id, dispatch} : { id : string, dispatch: any}) => {
    try {  
        dispatch(deleteGatewayApplication({id: id}))    
        const axiosRepository = new ImplementationAxios();
        const useCase = new UseCase(axiosRepository);
        await useCase.run(id)        
    } catch (error) {
       console.error("Error fetching:", error);
    }
}