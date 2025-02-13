
function Button() {


    const handleClick = (e) => {
        e.preventDefault();
        
        console.log(e.target.textContent)
    }

    return (
        //pass parameters to onClick function with arrow function callback
        <button onClick={(e) => handleClick(e)} className="button">Click me!</button>
    );
}

export default Button;