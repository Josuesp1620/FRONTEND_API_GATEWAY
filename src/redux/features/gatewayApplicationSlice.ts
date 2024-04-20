import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAlldUseCase as UseCase } from '@/Dashboard/gateway_application/application/use_cases'
import { GatewayApplicationEntity as Entity } from '@/Dashboard/gateway_application/domain/entities'
import { ImplementationAxios } from "@/Dashboard/gateway_application/infrastructure/implementation/axios";

type gatewayApplicationSlice = {
    gatewayApplication: Entity[] | null;
};

const initialState: gatewayApplicationSlice = {
  gatewayApplication: null,
};

export const fetchAll = createAsyncThunk(
  "gatewayApplication/fetchAll",
  async () => {
    try {      
      const axiosRepository = new ImplementationAxios();
      const useCase = new UseCase(axiosRepository);
      const entities : Entity[] | null = await useCase.run()
      return entities
    } catch (error) {
      console.error("Error fetching:", error);
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, (state:gatewayApplicationSlice, action:any) => {
      state.gatewayApplication = action.payload
    })
  },
});


export const {
  addGatewayApplication, 
  deleteGatewayApplication
} = gateway_application_slice.actions;

export default gateway_application_slice.reducer;