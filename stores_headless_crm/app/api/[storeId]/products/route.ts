import prismadb from "@/lib/prismadb"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export const GET = async (req: Request, { params }: { params: { storeId: string } }) => {
    try {

        if (!params.storeId) return new NextResponse('Store ID is required', { status: 400 })

        const { searchParams } = new URL(req.url)
        const categoryId = searchParams.get('categoryId') || undefined
        const sizeId = searchParams.get('sizeId') || undefined
        const colorId = searchParams.get('colorID') || undefined
        const isFeatured = searchParams.get('isFeatured') ? true : undefined

        const products = await prismadb.product.findMany({
            where: {
                storeId: params.storeId,
                categoryId: categoryId,
                sizeId: sizeId,
                colorId: colorId,
                isFeatured: isFeatured,
                isArchived: false
            },
            include: {
                category: true,
                images: true,
                color: true,
                size: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        return NextResponse.json(products)

    } catch (error) {
        console.log('[PRODUCTS_GET]', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}

export const POST = async (req: Request, { params }: { params: { storeId: string } }) => {
    try {
        const { userId } = auth()
        const { name, price, categoryId, sizeId, colorId, isFeatured, isArchived, images } = await req.json()

        if (!userId) return new NextResponse("Unauthenticated", { status: 401 })

        if (!name) return new NextResponse('Name is required', { status: 400 })

        if (!images || !images.length) return new NextResponse('At least 1 image is required', { status: 400 })

        if (!price) return new NextResponse('Price is required', { status: 400 })
        if (!categoryId) return new NextResponse('Category is required', { status: 400 })
        if (!sizeId) return new NextResponse('Size is required', { status: 400 })
        if (!colorId) return new NextResponse('Color is required', { status: 400 })

        if (!params.storeId) return new NextResponse('Store ID is required', { status: 400 })

        const storeByUserId = await prismadb.store.findFirst({
            where: {
                id: params.storeId,
                userId: userId
            }
        })

        if (!storeByUserId) return new NextResponse('Unauthorized', { status: 403 })

        const product = await prismadb.product.create({
            data: {
                name: name,
                price: price,
                isFeatured: isFeatured,
                isArchived: isArchived,
                categoryId: categoryId,
                colorId: colorId,
                sizeId: sizeId,
                storeId: params.storeId,
                images: {
                    createMany: {
                        data: [
                            ...images.map((image: { url: string }) => image)
                        ]
                    }
                }
            }
        })
        return NextResponse.json(product)

    } catch (error) {
        console.log('[PRODUCTS_POST]', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}