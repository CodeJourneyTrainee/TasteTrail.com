import Dosa from "./Image/Dosa.jpg";
import Burrito from "./Image/Burrito.jpeg";
import Curd from "./Image/Curd.jpg";
import Idli from "./Image/Idli.jpg";
import lunch from "./Image/lunch.jpeg";
import Puri from "./Image/Puri.jpeg";
import Friedrice from "./Image/Friedrice.jpg";
import paddu from "./Image/paddu.jpg";
import samosa1 from "./Image/samosa1.jpg";
import veg1 from "./Image/veg1.jpg";
import nonveg from "./Image/nonveg.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./buttons.module.css";
import pathsStyles from "./paths.module.css";
import removeStyles from "./remove.module.css";
import Contact from "./Contact";
import React, { useState } from "react";

function Home() {
  const background2 = {
    // backgroundColor: 'gray',
      padding: "50px",
  };
  const path={
    color: "green",
    position: "sticky",
    top: "100px",
  };
  const imageStyle = {
    height: "200px", 
    width: "200px",
    borderRadius: "10px", 
    margin: "10px", 
  };
 const veg={
height:"20px",
width:"20px",
marginRight:"10px",
 }
 const recipe={
  padding:"20px",
  boxShadow:" 0 0 25px 0 black",
 }

 const [isVisible, setVisible] = useState(true);
  
  const [selectedItems, setSelectedItems] = useState([]);

  const hungrySection = () => {
    setVisible(!isVisible);
  };
  
  const addToCart = (itemName, itemPrice) => {
    const newItem = { name: itemName, price: itemPrice };
    setSelectedItems([...selectedItems, newItem]);
  
    // Toggle visibility based on the current state
    if (isVisible) {
      hungrySection();
    }
  };
  const removeFromCart = (index) => {
    const updatedItems = [...selectedItems];
    updatedItems.splice(index, 1);
    setSelectedItems(updatedItems);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-8">
          <h1 style={{textAlign:"center",  marginTop:"70px"}}>Our Top Menu</h1>
          <div className="d-flex  justify-content-around mt-5" >

            <div style={recipe}>
              <a href="https://en.wikipedia.org/wiki/Masala_dosa">
            <img src={Dosa} alt="Dosa" style={imageStyle} /> </a>
            <h4 style={{textAlign:"center"}}>Masala Dosa</h4> 
            <div className="d-flex">
            <p className="ps-3">  <img src={veg1}  alt="veg" style={veg} />Veg</p>
            <p className="ps-5"> <strong>₹</strong> 70.00</p>
            </div>
            <button className={styles.buttons} type="button" onClick={() => addToCart("Masala Dosa", 70)} >Add Cart</button>

            </div>

            <div style={recipe}>
              <a href="https://en.wikipedia.org/wiki/Idli">
            <img src={Idli} alt="Idli" style={imageStyle} /></a> 
            <h4 style={{textAlign:"center"}}>Idli</h4> 
            <div className="d-flex">
            <p className="ps-3">  <img src={veg1}  alt="veg" style={veg} />Veg</p>
            <p className="ps-5"> <strong>₹</strong> 50.00</p>
            </div>
            <button className={styles.buttons} type="button" onClick={() => addToCart("Idli", 50)}>Add Cart</button>
            </div>

            <div style={recipe}>
              <a href="https://en.wikipedia.org/wiki/Puri_(food)">
            <img src={Puri} alt="Puri" style={imageStyle} /> </a>
            <h4 style={{textAlign:"center"}}>Puri(Poori)</h4> 
            <div className="d-flex">
            <p className="ps-3">  <img src={veg1}  alt="veg" style={veg} />Veg</p>
            <p className="ps-5"> <strong>₹</strong> 40.00</p>
            </div>
            <button className={styles.buttons} type="button" onClick={() => addToCart("Puri", 40)}>Add Cart</button>
            </div>

            </div>

            <div className="d-flex  justify-content-around mt-5 ">
            <div style={recipe}>
              <a href="https://en.wikipedia.org/wiki/Paddu#">
            <img src={paddu} alt="paddu" style={imageStyle} /> </a>
            <h4 style={{textAlign:"center"}}>Paddu</h4> 
            <div className="d-flex">
            <p className="ps-3">  <img src={veg1}  alt="veg" style={veg} />Veg</p>
            <p className="ps-5"> <strong>₹</strong> 30.00</p>
            </div>
            <button className={styles.buttons} type="button" onClick={() => addToCart("Paddu", 30)}>Add Cart</button>
            </div>
            
            <div style={recipe}>
              <a href="https://en.wikipedia.org/wiki/Burrito">
            <img src={Burrito} alt="Burrito" style={imageStyle} /></a>
            <h4 style={{textAlign:"center"}}>Burrito</h4> 
            <div className="d-flex">
            <p className="ps-3">  <img src={nonveg}  alt="veg" style={veg} />Non-Veg</p>
            <p className="ps-5"> <strong>₹</strong> 30.00</p>
            </div>
            <button className={styles.buttons} type="button" onClick={() => addToCart("Burrito", 30)}>Add Cart</button>
            </div>
            
            <div style={recipe}>
              <a href="https://en.wikipedia.org/wiki/Curd_rice">
            <img src={Curd} alt="Curd" style={imageStyle} /></a>
            <h4 style={{textAlign:"center"}}>Curd Rice</h4> 
            <div className="d-flex">
            <p className="ps-3">  <img src={veg1}  alt="veg" style={veg} />Veg</p>
            <p className="ps-5"> <strong>₹</strong> 75.00</p>
            </div>
            <button className={styles.buttons} type="button" onClick={() => addToCart("Curd Rice", 75)}>Add Cart</button>
            </div>
            
            </div>
            <div className="d-flex  justify-content-around mt-5">
            <div style={recipe}>
              <a href="https://en.wikipedia.org/wiki/Indian_cuisine">
            <img src={lunch} alt="Lunch" style={imageStyle} /></a>
            <h4 style={{textAlign:"center"}}>Lunch</h4> 
            <div className="d-flex">
            <p className="ps-3">  <img src={veg1}  alt="veg" style={veg} />Veg</p>
            <p className="ps-5"> <strong>₹</strong> 100.00</p>
            </div>
            <button className={styles.buttons} type="button" onClick={() => addToCart("Lunch", 100)}>Add Cart</button>
            </div>

            <div style={recipe}>
              <a href="https://en.wikipedia.org/wiki/Fried_rice">
            <img src={Friedrice} alt="Friedrice" style={imageStyle} /></a>
            <h4 style={{textAlign:"center"}}>Friedrice</h4> 
            <div className="d-flex">
            <p className="ps-3">  <img src={veg1}  alt="veg" style={veg} />Veg</p>
            <p className="ps-5"> <strong>₹</strong> 45.00</p>
            </div>
            <button className={styles.buttons} type="button" onClick={() => addToCart("Friedrice", 45)}>Add Cart</button>
            </div>

            <div style={recipe}>
              <a href="https://en.wikipedia.org/wiki/Samosa">
            <img src={samosa1} alt="Samosa" style={imageStyle} /></a>
            <h4 style={{textAlign:"center"}}>Samosa</h4> 
            <div className="d-flex">
            <p className="ps-3">  <img src={veg1}  alt="veg" style={veg} />Veg</p>
            <p className="ps-5"> <strong>₹</strong> 20.00</p>
            </div>
            <button className={styles.buttons} type="button" onClick={() => addToCart("Samosa", 20)}>Add Cart</button>
            </div>

            </div>
        </div>

        <div style={background2} className="col-sm-4">
        {isVisible ? (
          <div style={path}>
          <h4 style={{textAlign:"center",marginTop:"150px"}}>Are You Hungry???</h4>
          <h1 style={{textAlign:"right",marginTop:"30px"}}>Don't Wait!</h1>
          <h5 style={{textAlign:"left", marginTop:"30px"}}>Let start to order food now.</h5>
          <p style={{marginTop:"50px", textAlign:"center",}}>"Tell me what you eat, and I will tell you what you are."</p>
          <p style={{textAlign:"right"}}>- Jean Anthelme Brillat-Savarin</p>
          </div>
          ):(
            <div className={pathsStyles.paths}>
            <h2>Order Items:</h2>
              <ul>
                {selectedItems.map((item, index) => (
                  <li key={index}>
                    {item.name} - ₹{item.price.toFixed(2)}
                    <button
                  className={removeStyles.remove}
                  type="button"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
                  </li>
                ))}
              </ul>
              <p style={{margin:"30px"}}><strong>Total Amount: ₹  </strong>{selectedItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</p>
                     </div>
          )}
        </div>
     
      </div>
      <Contact/>
    </>
  );
}

export default Home;
