import prismadb from "@/lib/prismadb"
import { format } from 'date-fns'
import { SizesClient } from "./components/client"
import { SizeColumn } from "./components/column"

const SizesPage = async ({ params }: { params: { storeId: string } }) => {

    const sizes = await prismadb.size.findMany({
        where: {
            storeId: params.storeId
        }, orderBy: {
            createdAt: 'desc'
        }
    })

    const formattedSizes: SizeColumn[] = sizes.map((item) => ({
        id: item.id,
        name: item.name,
        value: item.value,
        createdAt: format(item.createdAt, 'MMM do yyyy')
    }))

    return (
        <div className="flex-col space-y-4 p-8 pt-6">
            <SizesClient data={formattedSizes} />
        </div>
    )
}

export default SizesPage