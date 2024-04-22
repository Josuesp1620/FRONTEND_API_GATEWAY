import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAllUseCase as UseCase } from '@/Dashboard/application/gateway_application/use_cases'
import { GatewayApplicationEntity as Entity } from '@/Dashboard/domain/gateway_application/entities'
import { ImplementationAxios } from "@/Dashboard/infrastructure/gateway_application/implementation/axios";

type GatewayApplicationSlice = {
    gatewayApplication: Entity[] | null;    
};

const initialState: GatewayApplicationSlice = {
  gatewayApplication: null,
};

export const fetchAll = createAsyncThunk(
  "gatewayApplication/fetchAll",
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

export const gateway_application_slice = createSlice({
  name: "gateway_application_slice",
  initialState,
  reducers: {
    addGatewayApplication: (state, action: PayloadAction<any>) => {
      state.gatewayApplication = [...state.gatewayApplication!, action.payload];
    },
    deleteGatewayApplication: (state, action: PayloadAction<{ id: string }>) => {
      state.gatewayApplication = state.gatewayApplication!.filter(app => app.id !== action.payload.id);
    }, 
    updateGatewayApplication: (state, action: PayloadAction<{ id: string, field: string, value: any }>) => {
      console.log(state.gatewayApplication )
      state.gatewayApplication = state.gatewayApplication!.map(app => {
        console.log(app.id === action.payload.id)
        if (app.id === action.payload.id) {
          return { ...app, [action.payload.field]: action.payload.value };
        }
        return app;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, (state: GatewayApplicationSlice, action: PayloadAction<Entity[] | null>) => {
      state.gatewayApplication = action.payload
    })
  },
});


export const {
  addGatewayApplication, 
  deleteGatewayApplication,
  updateGatewayApplication,
} = gateway_application_slice.actions;

export default gateway_application_slice.reducer;