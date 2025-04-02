import Link from 'next/link'

export default function Header() {
    return (
        <header className="mb-10 p-1">
            <div className="container">
                <nav className="flex justify-between">
                    <Link className="font-bold text-xl" href="/">
                        Shop
                    </Link>

                    <ul className="flex gap-4">
                        <li className="hover:text-sky-500 transition duration-75">
                            <Link href="/cart">Кошик</Link>
                        </li>
                        <li className="hover:text-sky-500 transition duration-75">
                            <Link href="/favorites">Відкладені</Link>
                        </li>
                        <li className="hover:text-sky-500 transition duration-75">
                            <Link href="/profile">Профіль</Link>
                        </li>
                        <li className="hover:text-sky-500 transition duration-75">
                            <Link href="/signin">Логін</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
