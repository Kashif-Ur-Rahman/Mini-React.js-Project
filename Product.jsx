import Price from "./Price";
import "./Product.css";

export default function Product({title, idx}) {
    let oldPrices = ["32002", "31000", "28000", "250030"];
    let newPrices = ["21000", "28000", "3500", "22000"];
    let description =[
         ["Lenovo best selling laptops", "Extra-Ordinary - Price"], 
         ["Dell best selling laptops", "Perfect One"], 
         ["HP best selling laptops",  "HP - The Best"], 
         ["Lenovo best selling laptops", "High-Resolution - Lenovo"]
        ];
    
    return (
        <div className={`Product Product-${idx}`}> 
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    
        </div>
        
    );
    
};
