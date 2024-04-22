import { deleteGatewayApplication } from "@/redux/features/gatewayApplicationSlice";

export const deleteEntity = async ({id, dispatch} : { id : string, dispatch: any}) => {
    try {  
        dispatch(deleteGatewayApplication({id: id}))    
        // const axiosRepository = new ImplementationAxios();
        // const useCase = new UseCase(axiosRepository);
        // const entities : Entity[] | null = await useCase.run()
        // return entities
    } catch (error) {
       console.error("Error fetching:", error);
    }
}