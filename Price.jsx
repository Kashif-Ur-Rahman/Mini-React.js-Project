export default function Price({oldPrice, newPrice}) {
    let oldStyles = {
        textDecorationLine : "line-through",
    };
    let newStyles  ={
        fontWeight: "bold",
    };
    let styles = {
        backgroundColor: "black", 
        height: "30px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
    }
    return (
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp; &nbsp;
            <span style={newStyles}>{newPrice}</span>

        </div>
    );
}