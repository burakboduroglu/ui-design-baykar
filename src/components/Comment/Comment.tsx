import {useRef} from 'react'
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Button} from '@/components/ui/button'
import {MoveRight, MoveLeft} from "lucide-react";
import {comments} from '@/lib/data'



export default function Comment() {
    const sliderRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const {scrollLeft, clientWidth} = sliderRef.current
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
            sliderRef.current.scrollTo({left: scrollTo, behavior: 'smooth'})
        }
    }

    return (
        <section className="relative 3xl:w-full max-w-6xl mx-auto px-6 py-12 font-roboto">
            {/* Title and Buttons */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold">Because they love us</h1>
                {/* Scroll buttons */}
                <div className="flex gap-3">
                    <Button
                        variant="custom"
                        size="icon"
                        onClick={() => scroll('left')}
                    >
                        <MoveLeft className="h-3 w-3"/>
                    </Button>
                    <Button
                        variant="custom"
                        size="icon"
                        onClick={() => scroll('right')}
                    >
                        <MoveRight className="h-3 w-3"/>
                    </Button>
                </div>
            </div>

            {/* Comments */}
            <div
                ref={sliderRef}
                className="flex overflow-x-auto scrollbar-hide"
                style={{scrollBehavior: 'smooth'}}
            >
                {comments.map((comment) => (
                    <div
                        key={comment.id}
                        className="flex-shrink-0 md:w-96 lg:w-80 snap-center w-full p-3">

                        <div className="bg-white h-full flex flex-col justify-between pt-8 shadow-xl rounded-2xl p-6">
                            <div className="p-1">
                                <div className="flex gap-3 h-10 w-full mb-4 text-[#475569]">
                                    <img src={`/img/company/${comment.company.logo}`} alt={comment.company.name} className="h-6 w-6"/>
                                    <p className="font-extrabold">{comment.company.name}</p>
                                </div>
                                <p className="font-normal text-base mb-4">{comment.content}</p>
                            </div>
                            <div className="flex items-center pt-6 pb-3">
                                <Avatar className="h-10 w-10 mr-4">
                                    <AvatarImage src={`/img/customers/${comment.avatar}`} alt={comment.author}/>
                                    <AvatarFallback>{comment.author[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{comment.author}</p>
                                    <p className="text-sm text-gray-500">{comment.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}