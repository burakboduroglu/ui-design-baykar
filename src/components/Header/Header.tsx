// @ts-ignore
import { Link } from "react-scroll";
import {headers} from "@/lib/data.ts";

export default function Header() {
    return (
        <header className="px-6 py-4 max-w-7xl mx-auto font-roboto">
            <nav className="flex items-center justify-between">
                <Link to="hero" smooth={true} duration={500} className="text-3xl font-bold text-headerColor cursor-pointer">
                    Collers
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    {
                        headers.map((navItem, index) => (
                            <nav className="flex text-headerColor text-base font-medium gap-2 pt-3 pb-3 pr-2 pl-2" key={navItem.name}>
                                {index === 5 ? (
                                    <Link to={navItem.link} smooth={true} duration={500} className="p-3 border-2 rounded-lg border-headerColor cursor-pointer">
                                        {navItem.name}
                                    </Link>
                                ) : (
                                    <Link to={navItem.link} smooth={true} duration={500} className="cursor-pointer">
                                        {navItem.name}
                                    </Link>
                                )}
                            </nav>
                        ))
                    }
                </div>
            </nav>
        </header>
    );
}