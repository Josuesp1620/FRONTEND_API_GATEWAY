import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PlusCircle } from 'lucide-react'
import { useForm } from 'react-hook-form';
import { GatewayApplicationEntity as Entity } from '@/Dashboard/domain/gateway_application/entities'
import { schema } from '../../validations/GatewayApplication'
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { createEntity } from '../../helpers/createEntity'

export function DialogCreate() {
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Entity>({ resolver: zodResolver(schema) });
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size='sm' className='h-8 gap-1 ml-auto'>
            <PlusCircle className='h-3.5 w-3.5' />
            <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
              Add Application
            </span>
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Create New Application</DialogTitle>
        </DialogHeader>
        <form className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-left'>
              Name
            </Label>
            <Input
              {...register('name',  { required: true })}
              id='name'
              placeholder='API REST'
              className='col-span-3'
            />
          </div>
          {errors.name && (<p className='text-right'>{errors.name.message}</p>)}
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='upstream_url' className='text-left'>
              Api Url
            </Label>
            <Input
              {...register('upstream_url',  { required: true })}
              id='upstream_url'
              placeholder='http://localhost'
              className='col-span-3'
            />
          </div>
          {errors && errors.upstream_url && (<p className='text-right'>{errors.upstream_url.message}</p>)}
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='origin_urls' className='text-left'>
              Origins
            </Label>
            <Input
              {...register('origin_urls',  { required: true })}
              id='origin_urls'
              placeholder='http://localhost, http://localhost'
              className='col-span-3'
            />
          </div>
        </form>
        <DialogFooter>
          <Button type='submit' variant={'outline'} onClick={() => {
            setOpen(false)
            reset()
          }}>Cancel</Button>
          <Button type='submit' onClick={handleSubmit(async (data) => await createEntity({data, dispatch, setOpen, reset}))}>Guardar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
