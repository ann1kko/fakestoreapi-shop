import { IProduct } from '@/types/IProduct.interface'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({
    category,
    description,
    id,
    image,
    price,
    title,
}: IProduct) {
    return (
        <article className="w-[300px] h-[400px] border border-gray-700/50 rounded-2xl p-2 flex flex-col">
            <Link className="flex justify-center" href={`/product/${id}`}>
                <Image
                    className="w-52 h-52"
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                />
            </Link>
            <div>
                <Link className="flex justify-center mt-2" href={`/product/${id}`}>
                    <h2 className="font-bold text-md mb-2 line-clamp-2">
                        {title}
                    </h2>
                </Link>
                <p className="text-md line-clamp-3">{description}</p>
            </div>
            <div className="mt-auto flex justify-between">
                <span className="text-sm font-bold">{price}$</span>
                <span className="uppercase text-sm font-bold text-gray-900/60">
                    {category}
                </span>
            </div>
        </article>
    )
}
