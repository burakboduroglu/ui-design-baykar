export default function HeroImage(){
    return (
        <section className="relative w-full h-[350px] mt-0">
            <div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FBBF24] rounded-end-50px mr-[124px]"/>
            <div className="absolute inset-3 flex items-center justify-center mb-24">
                <img src="../../../public/img/nike.png" alt="Hero Image"
                     className="w-[486px] h-[423px] object-cover rounded-end-50px"/>
            </div>
        </section>
    )
}