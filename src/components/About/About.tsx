import AboutCard from "./AboutCard.tsx";

export default function About(){
    return (
        <div className="relative flex items-center justify-center">
            <div className="absolute top-50 right-44 w-[500px] h-[150px] bg-[#FDE68A] transform -rotate-45 opacity-75 z-0"/>
            <div className="absolute top-12 right-12 w-12 h-12 rounded-full bg-blue-500/80 opacity-75"/>
            <div className="absolute bottom-36 right-1/3 w-16 h-16 rounded-full bg-[#15803D] opacity-75"/>
            <div className="absolute bottom-12 right-12 w-24 h-32 rounded-full bg-pink-500/70 opacity-75"/>
            <AboutCard/>
        </div>
    )
}