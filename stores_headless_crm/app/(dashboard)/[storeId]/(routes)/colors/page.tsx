import prismadb from "@/lib/prismadb"
import { format } from 'date-fns'
import { ColorsClient } from "./components/client"
import { ColorColumn } from "./components/column"

const ColorsPage = async ({ params }: { params: { storeId: string } }) => {

    const Colors = await prismadb.color.findMany({
        where: {
            storeId: params.storeId
        }, orderBy: {
            createdAt: 'desc'
        }
    })

    const formattedColors: ColorColumn[] = Colors.map((item) => ({
        id: item.id,
        name: item.name,
        value: item.value,
        createdAt: format(item.createdAt, 'MMM do yyyy')
    }))

    return (
        <div className="flex-col space-y-4 p-8 pt-6">
            <ColorsClient data={formattedColors} />
        </div>
    )
}

export default ColorsPage