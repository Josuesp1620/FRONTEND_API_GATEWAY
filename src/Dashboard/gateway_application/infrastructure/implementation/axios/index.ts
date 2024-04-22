import { GatewayApplicationEntity as Entity } from "@/Dashboard/gateway_application/domain/entities";
import { GatewayApplicationRepository as Repository } from "@/Dashboard/gateway_application/domain/repositories";
import { GatewayApplicationAxios as Axios } from '@/Dashboard/gateway_application/infrastructure/driven-adapter/axios'

class ImplementationAxios implements Repository {

    async getAll(): Promise<Entity[] | null > {
        const { data }: { data: Entity[] } = await Axios.getAll();
        if (!data) return null;
        return data;
    }
    
    async save (_data: Entity): Promise<Entity | null> {
        try{
            const body : Entity = {
                name: _data.name,
                upstream_url: _data.upstream_url,
                origin_urls: _data.origin_urls,
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