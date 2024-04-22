import { updateGatewayApplication } from "@/redux/features/gatewayApplicationSlice";

export const updateState = async ({id, state, dispatch} : { id : string, state : any, dispatch: any}) => {
    try {  
        dispatch(updateGatewayApplication({id: id, field: 'active', value: state === 'active' ? true : false }))    
        // const axiosRepository = new ImplementationAxios();
        // const useCase = new UseCase(axiosRepository);
        // await useCase.run(id)        
    } catch (error) {
       console.error("Error fetching:", error);
    }
}