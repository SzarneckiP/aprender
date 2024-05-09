import Header from "./_components/header"
import SideNav from "./_components/SideNav"


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="sm:w-64 hidden sm:block fixed">
        <SideNav />
      </div>
      <div className="sm:ml-64">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default layout