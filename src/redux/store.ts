import { configureStore } from "@reduxjs/toolkit";
import gatewayApplicationReducer from "@/redux/features/gatewayApplicationSlice"

export const store = configureStore({
  reducer: {
    gatewayApplicationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;