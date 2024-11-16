import HeroImage from "./HeroImage.tsx";
import HeroContent from "./HeroContent.tsx";
import HeroFeature from "./HeroFeature.tsx";

export default function Hero() {
    return (

        <div className="mt-3 3xl:mt-20">
            {/* Hero Background */}
            <div
                className="absolute bottom-0 inset-x-0  bg-[#FEF3C7] h-[80%]"
                style={{clipPath: 'polygon(0 110%, 100% 10%, 100% 100%, 100% 100%)'}}
            ></div>
            <main
                className="px-6 py-12 max-w-7xl mx-auto font-roboto text-heroColor relative w-full overflow-hidden">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Hero Content */}
                    <HeroContent/>
                    {/* Hero Image */}
                        <HeroImage/>
                        {/* Hero Features */}
                        <HeroFeature/>
                </div>
            </main>
        </div>
    )
}