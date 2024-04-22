import { Copy, MoreHorizontal, RefreshCcwDot, } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, } from '@/components/ui/dropdown-menu'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from '@/components/ui/table'
import { TabsContent, } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import React from 'react'
import clsx from 'clsx'
import { fetchAll } from '@/redux/features/gatewayApplicationSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { GatewayApplicationEntity as Entity } from '@/Dashboard/gateway_application/domain/entities'
import { deleteEntity } from '../../helpers/deleteEntity'
import { ScrollArea } from '@/components/ui/scroll-area'

export const TableAll = () => {
    const dispatch = useAppDispatch();
    const entities = useAppSelector((state) => state.gatewayApplicationReducer);

    React.useEffect(() => {
        dispatch(fetchAll())
    }, []);
    
    return (
        <TabsContent value='all'>
            <Card x-chunk='dashboard-06-chunk-0'>
            <CardHeader>
                <CardTitle>Aplicaciones</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <ScrollArea className="h-96 w-full">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nombre</TableHead>
                                <TableHead>Estado</TableHead>
                                <TableHead className='hidden md:table-cell'>
                                    Api Key
                                </TableHead>
                                <TableHead className='hidden md:table-cell'>
                                    Routes
                                </TableHead>
                                <TableHead>
                                    <span className='sr-only'>Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody className='w-auto'>
                        {entities.gatewayApplication && entities.gatewayApplication.length !== 0 && (
                                entities.gatewayApplication?.map((entity : Entity) => (
                                    <TableRow>

                                    <TableCell className='font-medium'>
                                        {entity.name}
                                    </TableCell>
            
                                    <TableCell>
                                        <Badge variant='default' className={clsx(`bg-${entity.active ? 'green' : 'red'}-600 hover:bg-${entity.active ? 'green' : 'red'}-600`)}>{entity.active ? 'Activo' : 'Desactivado'}</Badge>
                                    </TableCell>
            
                                    <TableCell>
                                        <div className='flex items-center space-x-2'>
                                            <Input                            
                                            id='link'
                                            type='text'
                                            value={entity.api_key}
                                            defaultValue={entity.api_key}
                                            readOnly
                                            />
                                            <Button type='submit' size='sm' className='px-3'>
                                                <span className='sr-only'>Copy</span>
                                                <Copy className='h-4 w-4' />
                                            </Button>
                                            <Button type='submit' size='sm' className='px-3'>
                                                <span className='sr-only'>Regenerate</span>
                                                <RefreshCcwDot className='h-4 w-4'/>
                                            </Button>
                                        </div>
                                    </TableCell>

                                        
                                    <TableCell>
                                        Building
                                    </TableCell>
            
                                    <TableCell>
                                        <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                            aria-haspopup='true'
                                            size='icon'
                                            variant='ghost'
                                            >
                                            <MoreHorizontal className='h-4 w-4' />
                                            <span className='sr-only'>Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align='end'>
                                            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                            <DropdownMenuItem>Editar</DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => deleteEntity({id : entity.id!, dispatch})}>Eliminar</DropdownMenuItem>
                                        </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                ))
                            )}
                        </TableBody>
                    </ScrollArea>
                </Table>
            </CardContent>                
            </Card>
        </TabsContent>
    );
}