import prismadb from "@/lib/prismadb"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export const GET = async (req: Request, { params }: { params: { productId: string } }) => {
    try {
        if (!params.productId) return new NextResponse('Product ID is required', { status: 400 })

        const product = await prismadb.product.findUnique({
            where: {
                id: params.productId
            },
            include: {
                images: true,
                category: true,
                size: true,
                color: true,
            }
        })
        return NextResponse.json(product)

    } catch (error) {
        console.log('[PRODUCT_GET]', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}

export const PATCH = async (req: Request, { params }: { params: { storeId: string, productId: string } }) => {
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

        if (!params.productId) return new NextResponse('product ID is required', { status: 400 })

        const storeUserById = await prismadb.store.findFirst({
            where: {
                id: params.storeId,
                userId: userId
            }
        })

        if (!storeUserById) return new NextResponse('Unauthorized', { status: 403 })

        await prismadb.product.update({
            where: {
                id: params.productId
            },
            data: {
                name: name,
                price: price,
                categoryId: categoryId,
                sizeId: sizeId,
                colorId: colorId,
                isFeatured: isFeatured,
                isArchived: isArchived,
                images: {
                    deleteMany: {}
                }
            }
        })

        const product = prismadb.product.update({
            where: {
                id: params.productId
            },
            data: {
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
        console.log('[PRODUCT_PATCH]', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}

export const DELETE = async (req: Request, { params }: { params: { storeId: string, productId: string } }) => {
    try {
        const { userId } = auth()

        if (!userId) return new NextResponse("Unauthenticated", { status: 401 })

        if (!params.storeId) return new NextResponse('Store ID is required', { status: 400 })

        if (!params.productId) return new NextResponse('Product ID is required', { status: 400 })

        const storeUserById = await prismadb.store.findFirst({
            where: {
                id: params.storeId,
                userId: userId
            }
        })

        if (!storeUserById) return new NextResponse('Unauthorized', { status: 403 })

        const product = await prismadb.product.deleteMany({
            where: {
                id: params.productId,
                storeId: params.storeId
            }
        })
        return NextResponse.json(product)

    } catch (error) {
        console.log('[PRODUCT_DELETE]', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}