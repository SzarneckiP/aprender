import { menu } from "@/lib/menu"
import Image from "next/image"

const SideNav = () => {

  return (
    <div className="p-5 bg-white shadow-sm border rounded-sm h-screen">
      <div className="flex">
        <Image src={'/logo.svg'} width={40} height={40} alt='logo' />
        <p className="text-primary text-3xl p-2 font-bold">Estudiante</p>
      </div>
      <hr className="mt-5" />
      <div className="mt-8" >
        {menu.map((item) => (
          <div
            key={item.id}
            className="group flex gap-3 flex-row mt-2 p-3 items-center text-[18px] rounded-md cursor-pointer text-neutral-600 hover:bg-primary hover:text-white hover:font-bold transition"
          >
            <item.icon
              className="group-hover:animate-bounce group-text-primary"
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideNav