import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-[#073763] text-white py-6">
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <p>© {new Date().getFullYear()} The Sunset Vista Company LLC</p>
                <nav className="flex items-center space-x-4">
                    <Link className="hover:underline" href="mailto:davin@sunsetvista.co">
                        davin@sunsetvista.co
                    </Link>
                    {/*<Link className="hover:underline" href="#">*/}
                    {/*    Privacy*/}
                    {/*</Link>*/}
                    {/*<Link className="hover:underline" href="#">*/}
                    {/*    Terms*/}
                    {/*</Link>*/}
                    {/*<Link href="#"/>*/}
                </nav>
            </div>
        </footer>
    )
}