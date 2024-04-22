import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { TableAll } from "./All";
import { DialogCreate } from "../Create";

export const TableView = () => {

    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Tabs defaultValue="all">
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="active">Active</TabsTrigger>
                        <TabsTrigger value="disable">Inactive</TabsTrigger>
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