import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PlusCircle } from 'lucide-react'
import { useForm } from 'react-hook-form';
import { GatewayEndPointEntity as Entity } from '@/Dashboard/domain/gateway_endpoint/entities'
import React from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { createEntity } from '../../helpers/createEntity'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ROUTE_METHOD } from '@/Dashboard/domain/gateway_endpoint/types'

export function DialogCreate({app_id}:{app_id : string}) {

  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false)

  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Entity>({ defaultValues: {
    method: 'GET',
    active: false
  } });
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size='sm' className='h-8 gap-1 ml-auto'>
            <PlusCircle className='h-3.5 w-3.5' />
            <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
              Add
            </span>
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add New Endpoint</DialogTitle>
        </DialogHeader>
        <form className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='route' className='text-left'>
              Route
            </Label>
            <Input
              id='route'
              placeholder='/path'
              className='col-span-3'
              {...register('route',  { required: true })}
            />
          </div>
          {errors.route && (<p className='text-right'>{errors.route.message}</p>)}
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='method' className='text-left'>
              Method
            </Label>
            <Select defaultValue={'GET'} onValueChange={(e : ROUTE_METHOD) => setValue('method', e)}> 
              <SelectTrigger id="method" aria-label="Select status" className='col-span-3'>
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent className=''>
                <SelectItem value="GET">GET</SelectItem>
                <SelectItem value="POST">POST</SelectItem>
                <SelectItem value="PUT">PUT</SelectItem>
                <SelectItem value="DELETE">DELETE</SelectItem>
                <SelectItem value="PATCH">PATCH</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {errors && errors.method && (<p className='text-right'>{errors.method.message}</p>)}
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='active' className='text-left'>
              State
            </Label>
            <Switch onCheckedChange={(e)=> setValue('active', e)} />
          </div>
        </form>
        <DialogFooter>
          <Button type='submit' variant={'outline'} onClick={() => {
            setOpen(false)
            reset()
          }}>Cancel</Button>
          <Button type='submit' onClick={handleSubmit(async (data) => await createEntity({data, app_id, dispatch, setOpen, reset}))}>Guardar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
