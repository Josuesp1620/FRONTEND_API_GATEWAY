import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { TableDisable, TableActive, TableAll } from "./Table"
import { DialogCreate } from "./Create";

export const GatewayApplication = () => {

    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Tabs defaultValue="all">
                <div className="flex items-center">
                    <TabsList>
                    <TabsTrigger value="all">Todos</TabsTrigger>
                    <TabsTrigger value="active">Activos</TabsTrigger>
                    <TabsTrigger value="disable">Desactivados</TabsTrigger>
                    </TabsList>    
                    <DialogCreate />                                         
                </div>

                <TableAll />
                {/* <TableActive />
                <TableDisable /> */}
            </Tabs>
      </main>
    );
}