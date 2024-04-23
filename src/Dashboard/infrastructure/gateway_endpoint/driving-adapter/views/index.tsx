import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DialogCreate } from "./Create";
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "@/components/ui/table";
import { useAppSelector } from "@/redux/hooks";
import { GatewayEndPointEntity as Entity } from "@/Dashboard/domain/gateway_endpoint/entities";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

export const CadEndpoint = ({app_id}:{ app_id : string}) => {  
  const entities = useAppSelector((state) => state.gatewayEndPointReducer);
  console.log(entities.gatewayEndPoint?.filter((entity) => entity.app_id === app_id))
  console.log(entities.gatewayEndPoint)
  const filteredEntities : Entity[] | undefined = entities.gatewayEndPoint?.filter((entity) => entity.app_id === app_id);
  

  return (
      <Card x-chunk="dashboard-07-chunk-1">
      <CardHeader className="flex">
      <div className="flex items-center gap-4">

        <h1 className="flex-1 text-xl font-semibold ">
          Endpoints
        </h1>
        <div className="items-center gap-2 md:ml-auto md:flex"> 
          <DialogCreate app_id={app_id}/>
        </div>
        </div>


      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>                  
            <TableRow>
              <TableHead className="w-[100px]">Route</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>State</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {filteredEntities && filteredEntities.length !== 0 && (
            filteredEntities.map((entity) => (
              <TableRow key={entity?.id}>
            <TableCell className='font-medium'>
                {entity?.route}
            </TableCell>
            <TableCell className='font-medium'>                      
                <Badge variant='default'>{entity?.method}</Badge>
            </TableCell>
            <TableCell className='font-medium'>
                <Badge variant='default' className={clsx(`bg-${entity?.active ? 'green' : 'red'}-600 hover:bg-${entity?.active ? 'green' : 'red'}-600`)}>{entity?.active ? 'Active' : 'Inactive'}</Badge>
            </TableCell>
          </TableRow>
            ))
          )}

          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}