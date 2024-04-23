import React from "react";
import RouteIndex from "./Router";
import { useAppDispatch } from "./redux/hooks";
import { fetchAll as fetchAllApplication} from '@/redux/features/gatewayApplicationSlice'
import { fetchAll as fetchAllEndPoint } from '@/redux/features/gatewayEndPointSlice'
function App() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchAllApplication())
    dispatch(fetchAllEndPoint())
}, []);
  return (
    <RouteIndex />
  );
}

export default App;
