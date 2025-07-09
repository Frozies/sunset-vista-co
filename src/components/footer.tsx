import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer className="bg-[#073763]/95 backdrop-blur-md text-white py-10 border-t border-[#F0C244]/20 shadow-inner">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-lg font-bold tracking-wide">© {new Date().getFullYear()} The Sunset Vista Company LLC</span>
                    <span className="text-sm text-[#F0C244]">Websites, Ecommerce, Blockchain & More</span>
                </div>
                <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="flex gap-4 mb-1">
                        <Link href="mailto:davin@sunsetvista.co" className="hover:text-[#F0C244] transition" aria-label="Email">
                            <FaEnvelope className="w-5 h-5" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/davinyoung/" className="hover:text-[#F0C244] transition" aria-label="LinkedIn" target="_blank" rel="noopener">
                            <FaLinkedin className="w-5 h-5" />
                        </Link>
                        <Link href="https://github.com/frozies" className="hover:text-[#F0C244] transition" aria-label="GitHub" target="_blank" rel="noopener">
                            <FaGithub className="w-5 h-5" />
                        </Link>
                    </div>
                    <span className="text-xs text-gray-300">davin@sunsetvista.co</span>
                </div>
            </div>
        </footer>
    )
}