import HeroImage from "./HeroImage.tsx";
import HeroContent from "./HeroContent.tsx";
import HeroFeature from "./HeroFeature.tsx";

export default function Hero() {
    return (
        <>
            {/* Hero Background */}
            <div
                className="absolute bottom-0 inset-x-0 h-3/4 bg-[#FEF3C7]"
                style={{clipPath: 'polygon(5% 100%, 100% 0, 100% 100%, 0 100%)'}}
            ></div>
            <main className="px-6 py-12 max-w-7xl mx-auto font-roboto text-heroColor relative w-full overflow-hidden">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Hero Content */}
                    <HeroContent/>
                    {/* Hero Image */}
                    <HeroImage/>
                    {/* Hero Features */}
                    <HeroFeature/>
                </div>
            </main>
        </>
    )
}