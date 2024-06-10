function handleFormSubmit(event) {
   alert("Form Submitted Successfully!");
    event.preventDefault();
}

export default function Form() {
    return(
        <div>
            <form onClick={handleFormSubmit}>
                <input placeholder="Enter your name" type="text" />
                <button className="submit">Submit</button>
            </form>
        </div>
    )
};
