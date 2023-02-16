import React, { useState } from 'react'// usestate hooks




export default function TextFrom(props) {
    const handleUpClick = () => {
        console.log('Upper case is Clicked' + text);
        let newText = text.toUpperCase();

        setText(newText);
    }

    const handleLoClick = () => {
        console.log('Upper case is Clicked' + text);
        let newText = text.toLowerCase();

        setText(newText);
    }
    const Speak_Baby = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }


    const handleFirst = () => {
        let tempText = text.split(/[  ]+/);
        let newText = "";
        tempText.forEach((e) => {
            e = e.charAt(0).toUpperCase() + e.slice(1);
            newText = newText + e + " ";
        })
        setText(newText);

    }
    const handleClrClick = () => {
        console.log('Upper case is Clicked' + text);
        let newText = '';

        setText(newText);
    }
    const handleOnchange = (event) => {
        console.log('On change');
        setText(event.target.value);
    }
    const [text, setText] = useState('');// state variable concept

    return (
        <>
            <div className="container">
                <h1>{props.heading} </h1>
                <div className="mb-3">

                    <textarea className="form-control" id="MyBox" value={text} onChange={handleOnchange} rows="8"></textarea>
                </div>
                <button className="btn btn-success mx-1" onClick={handleUpClick}> Convert to Uppercase</button>
                <button className="btn btn-success mx-1" onClick={handleLoClick}> Convert to Lowercase</button>
                <button className="btn btn-success mx-1" onClick={Speak_Baby}> Speak</button>
                <button className="btn btn-success mx-1" onClick={handleFirst}> First letter Caps</button>
                <button className="btn btn-danger mx-1" onClick={handleClrClick}> Clear</button>



            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>  {text.split(" ").length} words and {text.length} Characters</p>
                <p>  {0.008 * text.split(" ").length} minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
        </>
    )
}
