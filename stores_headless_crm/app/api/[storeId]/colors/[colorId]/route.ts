import prismadb from "@/lib/prismadb"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export const GET = async (req: Request, { params }: { params: { colorId: string } }) => {
    try {
        if (!params.colorId) return new NextResponse('Color ID is required', { status: 400 })

        const color = await prismadb.color.findUnique({
            where: {
                id: params.colorId
            }
        })
        return NextResponse.json(color)

    } catch (error) {
        console.log('[COLOR_GET]', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}

export const PATCH = async (req: Request, { params }: { params: { storeId: string, colorId: string } }) => {
    try {
        const { userId } = auth()
        const { name, value } = await req.json()

        console.log(params)
        if (!userId) return new NextResponse("Unauthenticated", { status: 401 })

        if (!name) return new NextResponse('Color name is required', { status: 400 })

        if (!value) return new NextResponse('Color value is required', { status: 400 })

        if (!params.colorId) return new NextResponse('Color ID is required', { status: 400 })

        const storeUserById = await prismadb.store.findFirst({
            where: {
                id: params.storeId,
                userId: userId
            }
        })

        if (!storeUserById) return new NextResponse('Unauthorized', { status: 403 })

        const color = await prismadb.color.updateMany({
            where: {
                id: params.colorId,
            },
            data: {
                name: name,
                value: value
            }
        })
        console.log(name)
        console.log(value)
        console.log(params.colorId)
        console.log(color)
        return NextResponse.json(color)

    } catch (error) {
        console.log('[COLOR_PATCH]', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}

export const DELETE = async (req: Request, { params }: { params: { storeId: string, colorId: string } }) => {
    try {
        const { userId } = auth()

        if (!userId) return new NextResponse("Unauthenticated", { status: 401 })

        if (!params.storeId) return new NextResponse('Store ID is required', { status: 400 })

        if (!params.colorId) return new NextResponse('Color ID is required', { status: 400 })

        const storeUserById = await prismadb.store.findFirst({
            where: {
                id: params.storeId,
                userId: userId
            }
        })

        if (!storeUserById) return new NextResponse('Unauthorized', { status: 403 })

        const color = await prismadb.color.deleteMany({
            where: {
                id: params.colorId,
                storeId: params.storeId
            }
        })
        return NextResponse.json(color)

    } catch (error) {
        console.log('[COLOR_DELETE]', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}