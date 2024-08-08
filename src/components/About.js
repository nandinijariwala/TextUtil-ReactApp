import React, { useState } from "react";

export default function About(props) {

//    const [myStyle, setMyStyle] = useState(
//     {
//         color: 'black',
//         backgroundColor: 'white'
//     }
// )

let myStyle={
  color: props.mode === 'dark' ? 'white' : '#000f37',
  backgroundColor: props.mode === 'dark' ? '#000f37' : 'white',
  border: '1px solid',
  borderColor: props.mode === 'dark' ? 'white' : '#000f37',
}

// const toggleStyle=()=>{
//     if(myStyle.color==='black'){
//         setMyStyle({
//             color: 'white',
//         backgroundColor: 'black',
//         border: '1px solid white'
//         })
//         setbtntext("Enable Ligth Mode")
//     }
//     else{
//         setMyStyle({
//             color: 'black',
//         backgroundColor: 'white'
//         })
//         setbtntext("Enable Dark Mode")
//     }
// }

  return (
    <div className="container" >
      <h1 className="my-3" style={{color: props.mode === 'dark' ? 'white' : '#000f37'}} >About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
            <strong>Analyze your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Textutils gives you way to analyze your text quickly and efficientky.</strong>
              Be it word, Count, Character count.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
            <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils is a free character counter tool that provides instant character count aand word statistics for a given text.</strong> 
              TextUtils reports the number of word and character. Thus it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            <strong>Browser Commpatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This word counter software works in any web browsers such as Chrome, firefox, Internet Explorer, Safari, Opera.</strong>
              It suits to count characters in facebook, blog, books,excel document, pdf document, essays, etc.

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
