import { GatewayApplicationEntity as Entity } from '@/Dashboard/domain/gateway_application/entities';
import { CustomReponse } from '@/shared/entities/Response';
import { AxiosConfig } from '@/shared/services/axios';

class GatewayApplicationAdapter {
  private _axios: AxiosConfig;

  constructor(baseUrl: string) {
    console.log(baseUrl)
    this._axios = new AxiosConfig(baseUrl);
    this._axios.setHeaders({
      "Content-Type": "application/json"
    });
  }

  async getAll(): Promise<CustomReponse<Entity[]>> {
    try {
      const response : CustomReponse<Entity[]> = await this._axios.get(`/gateway-application/get-all`);
      return response;
    } catch (error) {
      console.error('Error al obtener las aplicaciones:', error);
      throw error;
    }
  }

  async getById(id: string): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.get(`/gateway-application/get-by-id?id=${id}`);
      return response;
    } catch (error) {
      console.error('Error al obtener la aplicación por ID:', error);
      throw error;
    }
  }

  async create(data: Entity): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.post(`/gateway-application/create`, data);
      return response;
    } catch (error) {
      console.error('Error al crear la aplicación:', error);
      throw error;
    }
  }

  async update(data: Entity): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.put(`/gateway-application/update`, data);
      return response;
    } catch (error) {
      console.error('Error al crear la aplicación:', error);
      throw error;
    }
  }

  async delete(id: string): Promise<CustomReponse<null>> {
    try {
      const response : CustomReponse<null> = await this._axios.delete(`/gateway-application/delete?id=${id}`);
      return response;
    } catch (error) {
      console.error('Error al eliminar la aplicación:', error);
      throw error;
    }
  }
}

const base_url : string = `${import.meta.env.VITE_API_URL}`;
const GatewayApplicationAxios = new GatewayApplicationAdapter(base_url);

export {
  GatewayApplicationAxios
};