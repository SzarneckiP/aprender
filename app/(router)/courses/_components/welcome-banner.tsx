import Image from "next/image"


const WelcomeBanner = () => {
    return (
        <div className="flex gap-5 items-center bg-white rounded-xl p-5">
            <Image src={'/bird.svg'} alt="bird" width={100} height={100} />
            <div>
                <p className="font-bold text-5xl mb-2">
                    Welcome to
                    <span className="text-primary"> Estudiante</span>
                </p>
                <p className="text-neutral-400 font-semibold text-xl">Explore, Learn and Build All Real Life Projects</p>
            </div>

        </div>
    )
}

export default WelcomeBanner