import prismadb from "@/lib/prismadb"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export const GET = async (req: Request, { params }: { params: { storeId: string } }) => {
    try {

        if (!params.storeId) return new NextResponse('Store ID is required', { status: 400 })

        const colors = await prismadb.color.findMany({
            where: {
                storeId: params.storeId
            }
        })
        return NextResponse.json(colors)

    } catch (error) {
        console.log('[COLORS_GET]', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}

export const POST = async (req: Request, { params }: { params: { storeId: string } }) => {
    try {
        const { userId } = auth()
        const { name, value } = await req.json()

        if (!userId) return new NextResponse("Unauthenticated", { status: 401 })

        if (!name) return new NextResponse('Name is required', { status: 400 })

        if (!value) return new NextResponse('Color value is required', { status: 400 })

        if (!params.storeId) return new NextResponse('Store ID is required', { status: 400 })

        const storeByUserId = await prismadb.store.findFirst({
            where: {
                id: params.storeId,
                userId: userId
            }
        })

        if (!storeByUserId) return new NextResponse('Unauthorized', { status: 403 })

        const color = await prismadb.color.create({
            data: {
                name: name,
                value: value,
                storeId: params.storeId
            }
        })
        return NextResponse.json(color)

    } catch (error) {
        console.log('[COLORS_POST]', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}