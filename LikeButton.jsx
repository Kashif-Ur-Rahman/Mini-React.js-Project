import { useState } from "react";

export default function LikeButton() {

    let [isLiked, setisLiked] = useState(false);
    let toggleLike = () => {
        setisLiked(!isLiked);
        // console.log("Toggle...");
    };

    // Adding Styles for the Liked Icon...
    let LikeStyles = {
        color: 'red',
        width: '50px',
        fontSize: '40px'
    };

    // Adding Styles for the no Liked Icon...
    let noLikeStyles = {
        width: '50px',
        fontSize: '40px'
    };

    // let clicked = () => {
    //     console.log("Clicked...");
    // };
    return (
        <div>
            <h3>Creating a Like Button ⇩</h3>
            <p onClick={toggleLike}>
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={LikeStyles}></i>
                ) : (
                    <i className="fa-regular fa-heart" style={noLikeStyles}>

                    </i>)}
            </p>
        </div>
    )
};