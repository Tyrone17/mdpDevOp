import './App.css';
import'./Viewer';
import $ from 'jquery';
import { marked } from 'marked';

function Content(props) {
  // console.log(marked($("#content").val()))
    return (
    <div className='App'>
      <br></br>
      <textarea onInput={() => document.getElementById('render').innerHTML = (marked($("#content").val()))} id='content' name='content' className='Textarea'>
      This is the textarea

      **This is strong text**
      </textarea>
    </div>
    );
}


export default Content;
