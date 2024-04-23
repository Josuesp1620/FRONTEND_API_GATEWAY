import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAllUseCase as UseCase } from '@/Dashboard/application/gateway_endpoint/use_cases'
import { GatewayEndPointEntity as Entity } from '@/Dashboard/domain/gateway_endpoint/entities'
import { ImplementationAxios } from "@/Dashboard/infrastructure/gateway_endpoint/implementation/axios";

type GatewayEndPointSlice = {
    gatewayEndPoint: Entity[] | null;    
};

const initialState: GatewayEndPointSlice = {
  gatewayEndPoint: null,
};

export const fetchAll = createAsyncThunk(
  "gatewayEndPoint/fetchAll",
  async () => {
    try {      
      const axiosRepository = new ImplementationAxios();
      const useCase = new UseCase(axiosRepository);
      const entities: Entity[] | null = await useCase.run()
      return entities
    } catch (error) {
      console.error("Error fetching:", error);
      throw error;
    }
  },
)

export const gateway_endpoint_slice = createSlice({
  name: "gateway_endpoint_slice",
  initialState,
  reducers: {
    addGatewayEndPoint: (state, action: PayloadAction<any>) => {
      state.gatewayEndPoint = [...state.gatewayEndPoint!, action.payload];
    },
    deleteGatewayEndPoint: (state, action: PayloadAction<{ id: string }>) => {
      state.gatewayEndPoint = state.gatewayEndPoint!.filter(app => app.id !== action.payload.id);
    }, 
    updateGatewayEndPoint: (state, action: PayloadAction<{ id: string, field: string, value: any }>) => {
      console.log(state.gatewayEndPoint )
      state.gatewayEndPoint = state.gatewayEndPoint!.map(app => {
        console.log(app.id === action.payload.id)
        if (app.id === action.payload.id) {
          return { ...app, [action.payload.field]: action.payload.value };
        }
        return app;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, (state: GatewayEndPointSlice, action: PayloadAction<Entity[] | null>) => {
      state.gatewayEndPoint = action.payload
    })
  },
});


export const {
  addGatewayEndPoint, 
  deleteGatewayEndPoint,
  updateGatewayEndPoint,
} = gateway_endpoint_slice.actions;

export default gateway_endpoint_slice.reducer;