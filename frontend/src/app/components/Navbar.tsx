import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <nav className="flex justify-between items-center p-4 w-full z-50 text-white fixed font-thin">
                <div className="text-xl hover:text-accent duration-75">Mads Hermansen</div>
                <div className="flex space-x-4">
                    <Link href="/" className="hover:text-accent duration-75">Home</Link>
                    <Link href="/projects" className="hover:text-accent duration-75">Projects</Link>
                    <Link href="/" className="hover:text-accent duration-75">Contact</Link>
                </div>
            </nav>
        </div>
    )
}