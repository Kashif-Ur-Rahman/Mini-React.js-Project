import Product from "./Product.jsx";
import Button from "./Button.jsx";
import ImagesComponent from "./ImageComponent.jsx";
function AllProducts() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        
    }
    return (
        <div style={styles}>
            <Product title="Lenovo IdeaPad 1 15" idx={0} />
            <Product title="DELL Vostro 15 3520 Laptop" idx={1} />
            <Product title="HP 15 FD0336nia - Raptor Lake" idx={2} />
            <Product title="Lenovo IdeaPad Slim 3 15 -" idx={3} />
            <Button />
          
        </div>
    );
}

export default AllProducts;
