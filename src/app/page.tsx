import Card from '@/components/Card'
import { IProduct } from '@/types/IProduct.interface'

async function getProducts(): Promise<IProduct[] | null> {
    try {
        const response = await fetch(process.env.API_LINK!)
        const data = response.json()

        return data
    } catch (e) {
        console.log(e)
        return null
    }
}

export default async function Home() {
    const products = await getProducts()

    return (
        <section>
            <ul className="flex flex-wrap justify-center gap-3">
                {products?.map((product) => {
                    return (
                        <li key={product.id}>
                            <Card
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                category={product.category}
                                image={product.image}
                            />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
