import { CourseListsProps } from "@/app/_utils/types"
import Image from "next/image"

interface CourseCardPros {
    data: CourseListsProps,
}

const CourseCard = ({ data }: CourseCardPros) => {
    console.log(data)
    return (
        <div className="shadow rounded-lg">
            <Image
                className="rounded-t-xl"
                src={data?.baner?.url as string}
                width={300}
                height={150}
                alt="baner"
            />
            <div className="p-2">
                <p className="font-semibold">{data.name}</p>
                <p className="text-sm text-neutral-400">{data.author}</p>
                <div className="flex gap-2">
                    <Image
                        src={'/youtube.png'}
                        alt="youtube"
                        width={20}
                        height={20}
                    />
                    <p className="text-neutral-400 text-sm">Watch on YouTube</p>
                </div>
                <p className="text-end text-primary text-sm">{data.free ? 'Free' : 'Paid'}</p>
            </div>
        </div>
    )
}

export default CourseCard