import React, {useState} from 'react'
import PropTypes from 'prop-types'

function TextForm(props) {
    const upperClick = () => {
        console.log("Upper Case button was clicked!");
        setText(text.toUpperCase()) //to convert the text to upper case
        props.showAlert("Converted to uppercase", "success")
    }

    const typedText = (event) => {
        console.log("User typed something...");
        setText(event.target.value) //to take value from the user
    }

    const lowerClick = () => {
        console.log("Lower case button was clicked!");
        setText(text.toLowerCase())
    }

     const clearClick = () => {
        console.log("Clear Text button was clicked!");
        let newtext = '';
        setText(newtext);
     }

     
    const [text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#02182e'}}>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">{props.label}</label>
                <textarea className="form-control" value={text} onChange={typedText} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'#02182e', color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={upperClick}>Convert to UpperCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={lowerClick}>Convert to LowerCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={clearClick}>Clear Text</button>
        </div>
        <div className="container my-4" style={{color:props.mode==='dark'?'white':'#02182e'}}>
            <h1>Your text summary:</h1>
            <p>{text?text.split(/\s+/).filter((element)=>{return element.length != 0}).length:0} words and {text.length} characters</p>
            <h3>Text Preview:</h3>
            <p>{text.length>0?text:"Enter the text in the box to preview it"}</p>
        </div>
        </>
    )
}

TextForm.propTypes = {
    label: PropTypes.string.isRequired
};

TextForm.defaultProps = {
    label: "Enter below:"
};

export default TextForm