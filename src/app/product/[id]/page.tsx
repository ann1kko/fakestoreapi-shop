import { IProduct } from '@/types/IProduct.interface'

export async function generateStaticParams() {
    const products = await fetch(`${process.env.API_LINK}/products`).then(
        (res) => res.json()
    )

    return products.map((product: { id: string }) => ({
        id: product.id.toString(),
    }))
}

async function getProduct(id: string): Promise<IProduct | null> {
    try {
        const response = await fetch(`${process.env.API_LINK!}/products/${+id}`)
        if (!response.ok) {
            throw new Error('data fetch is failed')
        }

        return response.json()
    } catch (error) {
        console.log(error)
        return null
    }
}

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    // const product = await getProduct(id)

    return (
        <section>
            
        </section>
    )
}
