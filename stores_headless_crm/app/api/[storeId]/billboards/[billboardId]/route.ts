import prismadb from "@/lib/prismadb"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export const GET = async (req: Request, { params }: { params: { billboardId: string } }) => {
    try {
        if (!params.billboardId) return new NextResponse('Billboard ID is required', { status: 400 })

        const billboard = await prismadb.billboard.findUnique({
            where: {
                id: params.billboardId
            }
        })
        return NextResponse.json(billboard)

    } catch (error) {
        console.log('[BILLBOARD_GET]', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}

export const PATCH = async (req: Request, { params }: { params: { storeId: string, billboardId: string } }) => {
    try {
        const { userId } = auth()
        const { label, imageUrl } = await req.json()

        if (!userId) return new NextResponse("Unauthenticated", { status: 401 })

        if (!label) return new NextResponse('Label is required', { status: 400 })

        if (!imageUrl) return new NextResponse('Image URL is required', { status: 400 })

        if (!params.billboardId) return new NextResponse('Billboard ID is required', { status: 400 })

        const storeUserById = await prismadb.store.findFirst({
            where: {
                id: params.storeId,
                userId: userId
            }
        })

        if (!storeUserById) return new NextResponse('Unauthorized', { status: 403 })

        const billboard = await prismadb.billboard.updateMany({
            where: {
                id: params.billboardId,
                storeId: params.storeId
            },
            data: {
                label: label,
                imageUrl: imageUrl
            }
        })
        return NextResponse.json(billboard)

    } catch (error) {
        console.log('[BILLBOARD_PATCH]', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}

export const DELETE = async (req: Request, { params }: { params: { storeId: string, billboardId: string } }) => {
    try {
        const { userId } = auth()

        if (!userId) return new NextResponse("Unauthenticated", { status: 401 })

        if (!params.storeId) return new NextResponse('Store ID is required', { status: 400 })

        if (!params.billboardId) return new NextResponse('Billboard ID is required', { status: 400 })

        const storeUserById = await prismadb.store.findFirst({
            where: {
                id: params.storeId,
                userId: userId
            }
        })

        if (!storeUserById) return new NextResponse('Unauthorized', { status: 403 })

        const billboard = await prismadb.billboard.deleteMany({
            where: {
                id: params.billboardId,
                storeId: params.storeId
            }
        })
        return NextResponse.json(billboard)

    } catch (error) {
        console.log('[BILLBOARD_DELETE]', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}