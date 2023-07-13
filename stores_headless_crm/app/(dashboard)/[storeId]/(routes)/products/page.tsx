import prismadb from "@/lib/prismadb"
import { format } from 'date-fns'
import { ProductClient } from "./components/client"
import { ProductColumn } from "./components/column"
import { formatter } from "@/lib/utils"

const ProductsPage = async ({ params }: { params: { storeId: string } }) => {

    const products = await prismadb.product.findMany({
        where: {
            storeId: params.storeId
        },
        include: {
            category: true,
            color: true,
            size: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    const formattedProducts: ProductColumn[] = products.map((item) => ({
        id: item.id,
        name: item.name,
        isFeatured: item.isFeatured,
        isArchived: item.isArchived,
        price: formatter.format(item.price.toNumber()),
        category: item.category.name,
        size: item.size.name,
        color: item.color.value,
        createdAt: format(item.createdAt, 'MMM do yyyy')
    }))

    return (
        <div className="flex-col space-y-4 p-8 pt-6">
            <ProductClient data={formattedProducts} />
        </div>
    )
}

export default ProductsPage