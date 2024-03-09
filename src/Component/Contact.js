// import { Button } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import kitchen1 from "./Image/kitchen1.jpg";
import kitchen2 from "./Image/kitchen2.jpg";
import kitchen3 from "./Image/kitchen3.jpg";
import restaurant from "./Image/restaurant.jpg";
import facebook from "./Image/facebook.jpg";
import insta from "./Image/insta.jpg";


const Contact = () => {
  const border= {
    textDecoration: "none",
    color:"black",
  };
const line={
  borderRadius: "25px",
  borderColor:"blue",
  color:"blue",
};
    return(
     <>
    <h1 style={{marginTop:"60px", textAlign:"center", marginBottom:"20px"}}>Contact</h1>
<div className="row ms-5">
<div className="col-sm-2 mt-5 pt-5">
    <p><strong>Phone No:</strong> 1234567890</p>
    <p><strong>Address:</strong> Main road, Udupi.</p>
    <a style={border} href="mailto:abcd123@gmail.com"><strong>Mail:</strong>abcd123@gmail.com</a>
    </div>
    <div className="col-sm-7">
    <img src={restaurant} alt="food" style={{width:"800px", height:"300px"}}/>
    </div>
    <div className="col-sm-3 mt-5">
    <button style={line}>Privacy Policy + Terms & Conditions</button><br/>
    <img src={facebook} alt="food" style={{width:"40px", height:"40px", marginTop:"50px", marginLeft:"70px"}}/>
    <img src={insta} alt="food" style={{width:"50px", height:"50px", marginTop:"50px", marginLeft:"30px"}}/>
    </div>
    </div>
    <img src={kitchen1} alt="kitchen" style={{width:"400px", height:"250px", marginTop:"30px", marginLeft:"100px"}}/>
    <img src={kitchen2} alt="kitchen" style={{width:"300px", height:"200px", marginTop:"30px", marginLeft:"100px"}}/>
    <img src={kitchen3} alt="kitchen" style={{width:"400px", height:"250px", marginTop:"30px", marginLeft:"100px"}}/>
    <hr></hr>
    <p style={{marginTop:"10px", textAlign:"center"}}>&copy; Food</p>
    </>
    );
  }
  
  export default Contact;