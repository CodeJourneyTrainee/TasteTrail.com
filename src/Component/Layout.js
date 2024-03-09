import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "./Image/logo1.jpg";

const Layout = () => {

  const contact = {
    height: "60px", 
    width: "60px",
  };
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top ps-4">
      <Link className="nav-link" to="/">
      <img src={logo1} alt="logo"  style={contact} className="rounded-pill"/>
      </Link>
      <div>
       <span className="navbar-text ps-5 text-white" style={{fontSize:"30px"}}><em>Fusion Flavors</em></span>
       </div>
        <ul className="navbar-nav text-light ps-5">
          <li className="nav-item ps-5">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item ps-5">
            <Link className="nav-link" to="/About">About</Link>
          </li>
          <li className="nav-item ps-5">
            <Link className="nav-link" to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;