import { ChevronLeft, Copy, PlusCircle, } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Table, TableBody, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import React from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import clsx from "clsx"
import { updateState } from "../../helpers/updateState"
import { GatewayApplicationEntity as Entity} from "@/Dashboard/domain/gateway_application/entities"
import CopyToClipboard from "react-copy-to-clipboard"

export function EditView() {
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const { id } = useParams();

  const dispatch = useAppDispatch()
  const entities = useAppSelector((state) => state.gatewayApplicationReducer);
  const filteredEntity : Entity | undefined = entities.gatewayApplication?.filter((entity) => entity.id === id)[0];

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid w-full flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <Link to={'/admin'}>  
            <Button variant="outline" size="icon" className="h-7 w-7">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            Gateway Application
          </h1>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-0">
              <CardHeader>
                <div className="flex items-center gap-4">  
                  <h1 className="flex-1 text-xl font-semibold ">
                    Details
                  </h1>
                  <div className="items-center gap-2 md:ml-auto md:flex">              
                    <Button variant="outline" size="sm" className={clsx(`${editMode ? 'hidden' : 'flex'}`)} onClick={() => setEditMode(true)}>
                        Edit
                    </Button>
                    <Button size="sm" disabled={!editMode} onClick={() => setEditMode(false)}>Save</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      className="w-full"
                      readOnly={!editMode}
                      defaultValue={filteredEntity?.name}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor='upstream_url'>
                      Api Url
                    </Label>
                    <Input
                      id='upstream_url'
                      readOnly={!editMode}
                      defaultValue={filteredEntity?.upstream_url}
                      className="w-full"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor='origin_urls'>
                      Origins
                    </Label>
                    <Input
                      id='origin_urls'
                      readOnly={!editMode}
                      defaultValue={filteredEntity?.origin_urls}
                      className='col-span-3'
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-1">
              <CardHeader className="flex">
              <div className="flex items-center gap-4">

                <h1 className="flex-1 text-xl font-semibold ">
                  Endpoints
                </h1>
                <div className="items-center gap-2 md:ml-auto md:flex">              
                  <Button size='sm' className='h-8 gap-1 ml-auto'>
                    <PlusCircle className='h-3.5 w-3.5' />
                    <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                      Add
                    </span>
                  </Button> 
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
              <CardFooter className="justify-center border-t p-4">
                
              </CardFooter>
            </Card>
            
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-3">
              <CardHeader>
                <div className="flex items-center gap-4">  
                  <h1 className="flex-1 text-xl font-semibold ">
                    State
                  </h1>
                  <div className="items-center gap-2 md:ml-auto md:flex">              
                    <Badge variant='default' className={clsx(`bg-${filteredEntity?.active ? 'green' : 'red'}-600 hover:bg-${filteredEntity?.active ? 'green' : 'red'}-600`)}>{filteredEntity?.active ? 'Active' : 'Inactive'}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="status">State</Label>
                    <Select defaultValue={filteredEntity?.active ? 'active' : 'inactive'} onValueChange={(e) => updateState({id : id!, state : e, dispatch})}>
                      <SelectTrigger id="status" aria-label="Select status">
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inactive">Inactive</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card x-chunk="dashboard-07-chunk-3">
              <CardHeader>
                <div className="flex items-center gap-4">  
                  <h1 className="flex-1 text-xl font-semibold ">
                    API KEY
                  </h1>
                </div>
              </CardHeader>
              <CardContent>
                <div className='flex items-center space-x-2'>
                  <Input                            
                      id='link'
                      type='text'
                      defaultValue={filteredEntity?.api_key}
                      readOnly
                  />
                  <CopyToClipboard text={filteredEntity?.api_key!}>
                      <Button type='submit' size='sm' className='px-3'>
                          <span className='sr-only'>Copy</span>
                          <Copy className='h-4 w-4' />
                      </Button>
                  </CopyToClipboard>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">Save</Button>
        </div>
      </div>
    </main>
  )
}
