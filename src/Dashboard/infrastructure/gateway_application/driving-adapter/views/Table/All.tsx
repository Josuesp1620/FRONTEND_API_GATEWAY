import { Copy, Eye, RefreshCcwDot, Trash2, } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from '@/components/ui/table'
import { TabsContent, } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import React from 'react'
import clsx from 'clsx'
import { fetchAll } from '@/redux/features/gatewayApplicationSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { GatewayApplicationEntity as Entity } from '@/Dashboard/domain/gateway_application/entities'
import { deleteEntity } from '../../helpers/deleteEntity'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Link } from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
                <CardTitle>Applications</CardTitle>
            </CardHeader>
            <CardContent>
            <ScrollArea className="h-96 w-full">

                <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>State</TableHead>
                                <TableHead className='hidden md:table-cell'>
                                    Api Key
                                </TableHead>
                                <TableHead>
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody className='w-auto'>
                        {entities.gatewayApplication && entities.gatewayApplication.length !== 0 && (
                                entities.gatewayApplication?.map((entity : Entity) => (
                                    <TableRow key={entity.id}>

                                    <TableCell className='font-medium'>
                                        {entity.name}
                                    </TableCell>
            
                                    <TableCell>
                                        <Badge variant='default' className={clsx(`bg-${entity.active ? 'green' : 'red'}-600 hover:bg-${entity.active ? 'green' : 'red'}-600`)}>{entity.active ? 'Active' : 'Inactive'}</Badge>
                                    </TableCell>
            
                                    <TableCell>
                                        <div className='flex items-center space-x-2'>
                                            <Input                            
                                                id='link'
                                                type='password'
                                                value={entity.api_key}
                                                readOnly
                                            />
                                            <CopyToClipboard text={entity.api_key!}>
                                                <Button type='submit' size='sm' className='px-3'>
                                                    <span className='sr-only'>Copy</span>
                                                    <Copy className='h-4 w-4' />
                                                </Button>
                                            </CopyToClipboard>                                        
                                        </div>
                                    </TableCell>                                                                    
            
                                    <TableCell>
                                        <div className='flex items-center gap-4'>
                                            <Link to={`/edit/${entity.id}`}>
                                                <Button size={'sm'} variant={'outline'}>
                                                    <Eye className='h-4 w-4 cursor-pointer'/>
                                                </Button>
                                            </Link>
                                            <Button variant={'outline'} size={'sm'} onClick={() => deleteEntity({id : entity.id!, dispatch})}>
                                                <span className='sr-only'>Delete</span>
                                                <Trash2 className='h-4 w-4' />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                ))
                            )}
                        </TableBody>
                </Table>
                </ScrollArea>

            </CardContent>                
            </Card>
        </TabsContent>
    );
}