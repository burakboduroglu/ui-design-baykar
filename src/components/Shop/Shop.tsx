import {Cart} from "iconoir-react";

export default function Shop() {
    const products = [
        {
            id: 1,
            image: "/img/products/1.png",
            title: "Title",
            description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        },
        {
            id: 2,
            image: "/img/products/2.png",
            title: "Title",
            description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        },
        {
            id: 3,
            image: "/img/products/3.png",
            title: "Title",
            description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        },
    ]

    return (
        <div className="bg-[#0F172A] min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                {/* Shop Header */}
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl font-bold text-white">The best of the best</h1>
                    <button
                        className="text-lg px-6 py-2 rounded-lg border-2 border-white text-white hover:bg-white/10 transition-colors">
                        Sign up now
                    </button>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="relative group m-3">
                            {/* Decorative Background Elements */}
                            <div
                                className="absolute -left-4 -top-4 w-96 h-40 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/30 transition-colors"/>
                            <div
                                className="absolute -right-4 -bottom-4 w-96 h-40 bg-green-500/20 rounded-full blur-xl group-hover:bg-green-500/30 transition-colors"/>

                            {/* Card Content */}
                            <div className="relative bg-[#151922] rounded-2xl overflow-hidden">
                                {/* Image Container */}
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt="Sneaker"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="p-6 pt-10">
                                    <h2 className="text-2xl font-semibold text-white mb-2">{product.title}</h2>
                                    <p className="pt-3 text-white text-lg mb-6">{product.description}</p>
                                    <button
                                        className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">
                                        <Cart className="w-4 h-4"/>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}