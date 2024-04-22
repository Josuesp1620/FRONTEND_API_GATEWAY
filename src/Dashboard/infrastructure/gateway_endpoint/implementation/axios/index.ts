import { GatewayEndPointEntity as Entity } from "@/Dashboard/domain/gateway_endpoint/entities";
import { GatewayEndpointRepository as Repository } from "@/Dashboard/domain/gateway_endpoint/repositories";
import { GatewayEndPointAxios as Axios } from '@/Dashboard/infrastructure/gateway_endpoint/driven-adapter/axios'

class ImplementationAxios implements Repository {

    async getAll(): Promise<Entity[] | null > {
        const { data }: { data: Entity[] } = await Axios.getAll();
        if (!data) return null;
        return data;
    }
    
    async save (_data: Entity): Promise<Entity | null> {
        try{
            const body : Entity = {
                active: _data?.active,
                app_id: _data?.app_id,
                method: _data?.method,
                route: _data?.route
            }
            const { data } : { data: Entity } = await Axios.create(body);
            return data
        }catch {
            return null
        }
    }   

    async update(_data: Entity): Promise<Entity | null> {
        try{
            const { data } : { data: Entity } = await Axios.update(_data);
            return data
        }catch {
            return null
        }
    }    

    async delete (id: string) : Promise<void | null > {
        try {
            await Axios.delete(id)
        }catch (e) {
            return null
        }
    }

    async getById(id: string): Promise<Entity | null> {
        const { data } : { data: Entity } = await Axios.getById(id);
    
        if (!data) return null;
    
        return data
    }
    
}

export {
    ImplementationAxios
}