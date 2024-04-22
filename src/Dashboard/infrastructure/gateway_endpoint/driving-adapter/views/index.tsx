import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DialogCreate } from "./Create";
import { Table, TableHead, TableHeader, TableRow, TableBody } from "@/components/ui/table";

export const CadEndpoint = ({app_id}:{ app_id : string}) => {

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

            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
}