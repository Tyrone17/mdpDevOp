// import App from './App';
import { marked } from 'marked';
import { useState } from "react";
import './App.css';
import React from 'react';
import $ from "jquery";
import App from './App';

const HtmlToReactParser = require('html-to-react').Parser;

function Viewer(){ 
  return(
    <div className='Render'>
    {/* <h3>
        HTML preview
    </h3> */}
    <StatefulComp style={App.Render} />
    </div>
)}

export class StatefulComp extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    const htmlAdd = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');
    var html = marked.parse(document.getElementById('content').innerHTML);
    this.state ={
      // text:html,
      text: html,
      altTetx: htmlAdd
    }
    // Only change code above this line
  }
  render() {
    return (
      <div>
        {/* <FavoriteColor /> */}
        {/* <h4 className=''>Rendered Data:</h4> */}
        {/* <SetView /> */}
        <RealTimeView />
      </div>
    );
  }
};

export function RealTimeView(){
  var objectProto = new StatefulComp();
  var tD = objectProto.state.text;
  var inputField = document.getElementById('content').addEventListener("input", ()=>{
    marked.parse($("#content").val())
  })
  var [data, setState] = useState(inputField);
  return(
    <>
      {/* Raw data */}
      <div id="render">{tD}</div>
      {/* <div>{data}</div> */}
      <button
        type="button"
        // jQuery here will only work with root and subroot elements (rendererd)
        // Nested elements cannot be accessed using this selector
        // TODO: Create rendered element for the input section only - id="input"
        // onClick={() => setState($("#content").val())}
        // Heritage Day 2023, by TTM of techservbit
        onInput={() => setState(tD)}
      >View</button>
    </>
  )
}

// export function SetView(){
//   // var htmlView = marked(document.getElementById('content').value);
//   // var objectProto = new StatefulComp(); 
//   // var tD = objectProto.state.text;
//   // var input = $("#content").html();
//   var input = marked.parse($("#content").val());
//   var [data, setState] = useState(input);
//   // var input = $("#app").text();
//   const htmlInput = input;
//   const htmlToReactParser = new HtmlToReactParser();
//   const reactElement = htmlToReactParser.parse(htmlInput);
//   return(
//     <>
//       {/* Raw data */}
//       {/* <div>{data}</div> */}
//       <div>{reactElement}</div>
//       <button
//         type="button"
//         // jQuery here will only work with root and subroot elements (rendererd)
//         // Nested elements cannot be accessed using this selector
//         // TODO: Create rendered element for the input section only - id="input"
//         // onClick={() => setState($("#content").val())}
//         // Heritage Day 2023, by TTM of techservbit
//         onClick={() => setState(marked.parse($("#content").val()))}
//       >View</button>
//     </>
//   )
// }

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <div>My favorite color is {color}!</div>
//       <div>{}</div>
//       <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//     </>
//   )
// }


export default Viewer