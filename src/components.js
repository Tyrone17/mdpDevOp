import './App.css';
import'./Viewer';
import $ from 'jquery';
import { marked } from 'marked';

const eg = {
  h1:"# Markdown Previewer (mdp)",
  h2:"## latest version",
  t:"Heres some code, `<div></div>`, between 2 backticks.",
  ml1:"```// this is multi-line code:",
  ml2:"function anotherExample(firstLine, lastLine) {",
  ml3:"if (firstLine == '```' && lastLine == '```') {",
  ml4:"return multiLineCode;",
  ml5:"  }",
  ml6:"}",
  ml7:"```",
  lk:"There's also [links](https:/techserv-bit.co.za)",
  bq:">Block quote!",
  ls:"- And of course there are lists"
}

var egArr =[eg.h1,eg.h2,eg.t,eg.ml1,eg.ml2,eg.ml3,eg.ml4,eg.ml5,eg.ml6,eg.ml7,eg.bq,eg.lk,eg.ls]

function Content(props) {
  // console.log(marked($("#content").val()))
    return (
    <div className='App'>
      <br></br>
      <textarea onInput={() => document.getElementById('preview').innerHTML = (marked($("#editor").val()))} id='editor' name='content' className='Textarea'>
      {egArr[0]+"\n\n"+egArr[1]+"\n\n"+egArr[2]+"\n"+egArr[3]+"\n"+egArr[4]+"\n\n"+egArr[5]+"\n\n"+egArr[6]+"\n\n"+egArr[7]+"\n\n"+egArr[8]+"\n\n"+egArr[9]+"\n\n"+egArr[10]+"\n\n"+egArr[11]+"\n\n"+egArr[12]+"\r"}
      </textarea>
      <br></br>
    </div>
    );
}


export default Content;
