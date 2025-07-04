import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
      <header className="bg-[#073763] text-white py-4">
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
              <Link href="#">
                  <div className="flex items-center">
                      {/*<MountainIcon className="h-6 w-6 mr-2"/>*/}
                      {/*<span className="text-lg font-bold">Sunset Vista Co</span>*/}
                      <Image src={'/logo.png'} alt={"The Sunset Vista Company"} width={200} height={100}/>
                  </div>
              </Link>
              <nav className="flex items-center space-x-4">
                  <Link className="hover:underline" href="#about">
                      About
                  </Link>
                  <Link className="hover:underline" href="#services">
                      Services
                  </Link>
                  <Link className="hover:underline" href="#projects">
                      Projects
                  </Link>
                  <Link className="hover:underline" href="#contact">
                      Contact
                  </Link>
              </nav>
          </div>
      </header>
  );
};