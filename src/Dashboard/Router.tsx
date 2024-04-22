import { Dashboard } from ".";
import { EditView } from "./infrastructure/gateway_application/driving-adapter/views/Edit";
import { TableView } from "./infrastructure/gateway_application/driving-adapter/views/Table";
export const RoutesDashboard = [
    {
        path: '/admin',
        element: (
            <Dashboard>
                <TableView />
            </Dashboard>
        )
    },
    {
        path: '/edit/:id',
        element: (
            <Dashboard>
                <EditView />
            </Dashboard>
        )
    }
];