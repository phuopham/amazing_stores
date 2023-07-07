"use client"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Billboard } from "@prisma/client"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { BillboardColumn, columns } from "./column"

export const BillboardClient = ({ data }: { data: BillboardColumn[] }) => {
    const router = useRouter()
    const params = useParams()
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={`Billboard ${data.length}`} description='abc for me' />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="w-4 h-4" /> Add new
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="label" columns={columns} data={data} />
        </>
    )
}
