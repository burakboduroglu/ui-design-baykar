import HeroImage from "./HeroImage.tsx";
import HeroContent from "./HeroContent.tsx";
import HeroFeature from "./HeroFeature.tsx";

export default function Hero() {
    return (
        <div className="relative">
            {/* Hero Background */}
            <div
                className="absolute bottom-0 inset-x-0 bg-[#FEF3C7] h-full"
                style={{
                    clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)'
                }}
            />
            <main
                className="px-6 py-12 max-w-7xl mx-auto font-roboto text-heroColor relative w-full overflow-hidden">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Hero Content */}
                    <HeroContent/>
                    {/* Hero Image */}
                    <HeroImage/>
                    {/* Hero Features */}
                </div>
                <div className="pt-8">
                    <HeroFeature/>
                </div>
            </main>
        </div>
    );
}

