import { IProduct } from '@/types/IProduct.interface'
import { ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
    Button,
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from './ui'

export default function ProductCard({
    category,
    description,
    id,
    image,
    price,
    title,
}: IProduct) {
    return (
        <Card className="w-[300px] h-[450px]  border border-gray-700/50 rounded-2xl p-1 flex flex-col">
            <CardHeader className="flex flex-col items-center justify-center">
                <Link href={`/product/${id}`}>
                    <Image
                        className="w-52 h-52"
                        src={image}
                        alt={title}
                        width={200}
                        height={200}
                        priority
                    />
                </Link>
                <Link href={`/product/${id}`}>
                    <CardTitle className="line-clamp-2 text-center">{title}</CardTitle>
                </Link>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <p className="text-md line-clamp-3">{description}</p>
            </CardContent>
            <CardFooter className="flex flex-col mt-auto gap-2">
                <div className=" w-full flex justify-between">
                    <span className="text-md font-bold">{price}$</span>
                    <span className="uppercase text-sm font-bold text-gray-900/60">
                        {category}
                    </span>
                </div>
                <div className="flex w-full gap-3 justify-center items-center ">
                    <Button className=" w-1/2">
                        <Star />
                    </Button>
                    <Button className=" w-1/2">
                        <ShoppingCart />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
