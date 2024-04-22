import { createBrowserRouter } from 'react-router-dom'
import { RoutesDashboard } from './Dashboard/Router'

const routerBase = createBrowserRouter([
    ...RoutesDashboard
], { basename: "/web" })
export default routerBase
