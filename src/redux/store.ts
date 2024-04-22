import { configureStore } from "@reduxjs/toolkit";
import gatewayApplicationReducer from "@/redux/features/gatewayApplicationSlice"
import gatewayEndPointReducer from "@/redux/features/gatewayEndPointSlice"

export const store = configureStore({
  reducer: {
    gatewayApplicationReducer,
    gatewayEndPointReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;