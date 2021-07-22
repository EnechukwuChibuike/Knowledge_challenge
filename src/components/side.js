import "../styles/side.css";
import { Button } from "react-bootstrap";
import { FilePerson } from "react-bootstrap-icons";
import { ShareFill } from "react-bootstrap-icons";
import { PersonLinesFill } from "react-bootstrap-icons";
import { PenFill } from "react-bootstrap-icons";
import { Facebook } from "react-bootstrap-icons";

function Side() {
   return (
      <>
         <div className="side">
            <Button className="sideBtn">
               <FilePerson size={30} />
               <p className="pl-2">about the developer</p>
            </Button>
            <Button className="sideBtn">
               <ShareFill size={30} />
               <p>
                  Share on <Facebook size={30} />
               </p>
            </Button>
            <Button className="sideBtn">
               <PenFill size={30} />
               <p>Write a review</p>
            </Button>
            <Button className="sideBtn">
               <PersonLinesFill size={30} />
               <p>Contact developer</p>
            </Button>
         </div>
      </>
   );
}

export default Side;
