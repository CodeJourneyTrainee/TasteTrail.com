import Contact from "./Contact";
import food from "./Image/food.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
const About = () => {
    return(
    <> 
    <h1 style={{textAlign:"center", marginTop:"70px", marginBottom:"50px"}}>About Us</h1>
    <div className="row">
    <div className="col-sm-6 p-5">
<h3 style={{textAlign:"center", marginTop:"70px"}}>From foodies, with love</h3>
<p style={{ marginTop:"10px"}}>Our solution was born from the desire to create a flawless food ordering experience and end-to-end superior customer flows. FromAs such, our website builder comes with a built-in free online ordering system, marketing tools and a team dedicated to your success. the very start, our goal was to enable restaurant owners like you to kickstart or level up their business while remaining cost efficient.</p>
</div>

<div className="col-sm-6">
<img src={food} alt="food" style={{width:"90%", height:"90%"}}/>  
</div>

</div>
<Contact/>
</>
    );
  };
  
  export default About;