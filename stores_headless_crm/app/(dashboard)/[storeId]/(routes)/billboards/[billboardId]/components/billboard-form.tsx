'use client'

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Billboard } from "@prisma/client"
import { Trash } from "lucide-react"
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "react-hot-toast"
import axios from "axios"
import { useParams, useRouter } from "next/navigation"
import { AlertModal } from "@/components/modals/alert-modal"
import { ImageUpload } from "@/components/ui/image-upload"

interface BillboardFormProps {
    initialData: Billboard | null
}

const formSchema = z.object({
    label: z.string().min(1),
    imageUrl: z.string().min(1)
})

type BillboardFormValues = z.infer<typeof formSchema>

const BillboardForm = ({ initialData }: BillboardFormProps) => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const params = useParams()
    const router = useRouter()

    const title = initialData ? "Edit billboard" : "Create billboard"
    const description = initialData ? "Modify billboard" : "Add a new billboard"
    const toastMsg = initialData ? "Billboard updated successfully." : "Billboard created successfully."
    const action = initialData ? "Save changes" : "Create"
    const form = useForm<BillboardFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            label: '',
            imageUrl: ''
        }
    })

    const onSubmit = async (data: BillboardFormValues) => {
        try {
            setLoading(true)
            if (initialData)
                await axios.patch(`/api/${params.storeId}/billboards/${params.billboardId}`, data)
            else
                await axios.post(`/api/${params.storeId}/billboards`, data)
            router.refresh()
            router.push(`/${params.storeId}/billboards`)
            toast.success(toastMsg)
        } catch (error) {
            toast.error('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    const onConfirmDelete = async () => {
        try {
            setLoading(true)
            await axios.delete(`/api/${params.storeId}/billboards/${params.billboardId}`)
            router.refresh()
            router.push(`/${params.storeId}/billboards`)
            toast.success('Billboard deleted successfully!')
        } catch (error) {
            toast.error('Cannot delete billboard by now!!!!')
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <AlertModal isOpen={open} loading={loading} onClose={() => setOpen(false)} onConfirm={onConfirmDelete} />
            <div className="flex items-center justify-between">
                <Heading title={title} description={description} />
                {initialData && <Button disabled={loading} variant='destructive' size='icon' onClick={() => setOpen(true)}><Trash className='h-4 w-4' /></Button>}
            </div>
            <Separator />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                    <FormField control={form.control} name='imageUrl' render={({ field }) => (
                        <FormItem>
                            <FormLabel>Background image</FormLabel>
                            <FormControl>
                                <ImageUpload disabled={loading} onChange={(url) => field.onChange(url)} onRemove={() => field.onChange('')} value={field.value ? [field.value] : []} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <div className="grid grid-cols-3 gap-8">
                        <FormField control={form.control} name='label' render={({ field }) => (
                            <FormItem>
                                <FormLabel>Label</FormLabel>
                                <FormControl>
                                    <Input disabled={loading} placeholder='Billboard label' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                    <Button disabled={loading} className="ml-auto" type="submit">{action}</Button>
                </form>
            </Form>
        </>
    )
}

export default BillboardForm