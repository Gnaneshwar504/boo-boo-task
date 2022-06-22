
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const Header =()=>{
    return(
        <>
    <nav className="navbar navbar-invoiced navbar-expand">
        <div className="container flex-col">
            <a href="/#/last" className="navbar-brand">
                Invoice Generator
            </a>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/help" className="nav-link">
                            Help
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a href="/guide" className="nav-link">
                            Invoicing Guide
                        </a>
                    </li>
                    <li className="nav-item btn-success">
                        <a href="/upgrade" className=" nav-link  rounded-pill">
                            Upgrade
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
    )
}
export default Header