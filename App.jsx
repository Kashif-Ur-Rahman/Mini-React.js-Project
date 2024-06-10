import AllProducts from './AllProducts.jsx';
import './App.css';
import Form from "./Form.jsx";
import Counter from './Counter.jsx';
import LikeButton from './LikeButton.jsx';

function App() {
    return (
        <>
        <h1>Laptops Specifications and Prices || Buy Now </h1>
        <AllProducts />
        <Form />
        <h2>States in React ⇩</h2>
        <Counter />

        <h2>React Hooks :<span> use State</span></h2>

        <LikeButton />
        </>
    )
}

export default App;
