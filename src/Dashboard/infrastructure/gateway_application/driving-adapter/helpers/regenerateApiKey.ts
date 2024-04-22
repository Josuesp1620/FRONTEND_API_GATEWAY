import { updateGatewayApplication } from "@/redux/features/gatewayApplicationSlice";
import { v4 as uuidv4 } from 'uuid';

export const updateApiKeyEntity = async ({id, dispatch} : { id : string, dispatch: any}) => {
    try {  
        dispatch(updateGatewayApplication({id: id, field: 'api_key', value: uuidv4()}))    
        // const axiosRepository = new ImplementationAxios();
        // const useCase = new UseCase(axiosRepository);
        // await useCase.run(id)        
    } catch (error) {
       console.error("Error fetching:", error);
    }
}