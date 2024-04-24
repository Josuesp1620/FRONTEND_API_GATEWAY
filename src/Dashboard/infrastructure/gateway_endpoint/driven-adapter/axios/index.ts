import { GatewayEndPointEntity as Entity } from '@/Dashboard/domain/gateway_endpoint/entities';
import { CustomReponse } from '@/shared/entities/Response';
import { AxiosConfig } from '@/shared/services/axios';

class GatewayEndPointAdapter {
  private _axios: AxiosConfig;

  constructor(baseUrl: string) {
    this._axios = new AxiosConfig(baseUrl);
    this._axios.setHeaders({
      "Content-Type": "application/json"
    });
  }

  async getAll(): Promise<CustomReponse<Entity[]>> {
    try {
      const response : CustomReponse<Entity[]> = await this._axios.get(`/gateway-endpoint/get-all`);
      return response;
    } catch (error) {
      console.error('Error al obtener los endpoints:', error);
      throw error;
    }
  }

  async getById(id: string): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.get(`/gateway-endpoint/get-by-id?id=${id}`);
      return response;
    } catch (error) {
      console.error('Error al obtener el endpoint por ID:', error);
      throw error;
    }
  }

  async create(data: Entity): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.post(`/gateway-endpoint/create`, data);
      return response;
    } catch (error) {
      console.error('Error al crear el endpoint:', error);
      throw error;
    }
  }

  async update(data: Entity): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.put(`/gateway-endpoint/update`, data);
      return response;
    } catch (error) {
      console.error('Error al crear el endpoint:', error);
      throw error;
    }
  }

  async delete(id: string): Promise<CustomReponse<null>> {
    try {
      const response : CustomReponse<null> = await this._axios.delete(`/gateway-endpoint/delete?id=${id}`);
      return response;
    } catch (error) {
      console.error('Error al eliminar el endpoint:', error);
      throw error;
    }
  }
}

const base_url : string = `${import.meta.env.VITE_API_URL}`;
const GatewayEndPointAxios = new GatewayEndPointAdapter(base_url);

export {
  GatewayEndPointAxios
};