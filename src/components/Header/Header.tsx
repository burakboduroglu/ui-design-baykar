import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="px-6 py-4 max-w-7xl mx-auto font-roboto">
            <nav className="flex items-center justify-between">
                <Link to="/" className="text-3xl font-bold text-headerColor">Collers</Link>
                <div className="hidden md:flex items-center space-x-8">
                    {
                        [
                            {name: 'Products', link: '/products'},
                            {name: 'Solutions', link: '/solutions'},
                            {name: 'Pricing', link: '/pricing'},
                            {name: 'Resources', link: '/resources'},
                            {name: 'Log In', link: '/login'},
                            {name: 'Sign up now', link: '/signup'},
                        ].map((navItem, index) => (
                            <nav className="flex text-headerColor text-base font-medium gap-2 pt-3 pb-3 pr-2 pl-2">
                                {index === 5 ? (
                                    <Link to={navItem.link}
                                          className="p-3 border-2 rounded-lg border-headerColor">
                                        {navItem.name}
                                    </Link>
                                ) : (
                                    <Link key={navItem.name} to={navItem.link}>
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