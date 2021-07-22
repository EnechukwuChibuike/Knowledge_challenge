import "../styles/header.css";
import { Navbar } from "react-bootstrap";
function Header() {
   return (
      <>
         <div className="main">
            <Navbar expand="lg">
               <Navbar.Brand className="text-white" href="#home">
                  LOGO
               </Navbar.Brand>
            </Navbar>
         </div>
      </>
   );
}

export default Header;
