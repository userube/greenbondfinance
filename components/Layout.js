import Sidebar from "./Sidebar"
import DashboardHeader from "./DashboardHeader"
import FLoatingMenus from "./FLoatingMenus"


const Layout = ({pageTitle, children}) => {
    return (
        <>  
            <FLoatingMenus/>
            <Sidebar/>
            <DashboardHeader pageTitle={pageTitle}/>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ background: '#f3f3f3', height: '100%' }}>
                {children}
            </main>
        </>
    )
}

export default Layout