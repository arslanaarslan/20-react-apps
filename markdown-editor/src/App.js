// import logo from './logo.svg';
import React, { useState } from 'react';
import { marked } from 'marked';
import ReactMarkdown from 'react-markdown';
import './App.css';

export default function App() {
  const [markdown, setMarkdown] = useState('# sup');

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div onChange={handleChange} className="app">
      <textarea value={markdown}/>

      {/* <div className="preview" dangerouslySetInnerHTML={{__html: marked(markdown)}} /> */}
      <ReactMarkdown className="preview">{markdown}</ReactMarkdown>
    </div>
  );
}

// export default App;
