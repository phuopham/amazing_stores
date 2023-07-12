"use client"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { ColorColumn, columns } from "./column"
import { ApiList } from "@/components/ui/api-list"

export const ColorsClient = ({ data }: { data: ColorColumn[] }) => {
    const router = useRouter()
    const params = useParams()
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title='Colors' description={`Manage ${data.length} colors for your store`} />
                <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
                    <Plus className="w-4 h-4" /> Add new
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="name" columns={columns} data={data} />
            <Heading title="API routes" description="API calls for colors" />
            <Separator />
            <ApiList entityName="colors" entityIdName="colorId" />

        </>
    )
}
