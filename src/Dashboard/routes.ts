import { EditView } from "./infrastructure/gateway_application/driving-adapter/views/Edit";
import { TableView } from "./infrastructure/gateway_application/driving-adapter/views/Table";


interface RouteObject {
    path: string;
    component: React.ComponentType<any>;
    exact?: boolean;
}

const dashboardRoutes: Array<RouteObject> = [
    { path: "/admin", component: TableView },
    { path: "/edit/:id", component: EditView },

]

export { dashboardRoutes };
