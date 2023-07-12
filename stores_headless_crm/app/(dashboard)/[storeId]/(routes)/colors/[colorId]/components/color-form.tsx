'use client'

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Color } from "@prisma/client"
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

interface ColorFormProps {
    initialData: Color | null
}

const formSchema = z.object({
    name: z.string().min(1),
    value: z.string().min(1)
})

type ColorFormValues = z.infer<typeof formSchema>

const ColorForm = ({ initialData }: ColorFormProps) => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const params = useParams()
    const router = useRouter()

    const title = initialData ? "Edit xolor" : "Create color"
    const description = initialData ? "Modify color" : "Add a new color"
    const toastMsg = initialData ? "Color updated successfully." : "Color created successfully."
    const action = initialData ? "Save changes" : "Create"
    const form = useForm<ColorFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            name: '',
            value: ''
        }
    })

    const onSubmit = async (data: ColorFormValues) => {
        try {
            setLoading(true)
            if (initialData)
                await axios.patch(`/api/${params.storeId}/colors/${params.colorId}`, data)
            else
                await axios.post(`/api/${params.storeId}/colors`, data)
            router.refresh()
            router.push(`/${params.storeId}/colors`)
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
            await axios.delete(`/api/${params.storeId}/colors/${params.ColorId}`)
            router.refresh()
            router.push(`/${params.storeId}/colors`)
            toast.success('Color deleted successfully!')
        } catch (error) {
            toast.error('Cannot delete color by now!!!!')
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
                    <div className="grid grid-cols-3 gap-8">
                        <FormField control={form.control} name='name' render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input disabled={loading} placeholder='Color name' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name='value' render={({ field }) => (
                            <FormItem>
                                <FormLabel>Value</FormLabel>
                                <FormControl>
                                    <Input disabled={loading} placeholder='Color value' {...field} />
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

export default ColorForm