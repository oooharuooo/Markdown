import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [text,setText] = useState("markdown preview")

  return <main>
    <section className="markdown">
        <textarea className="input" value={text} onChange={e => setText(e.target.value)}>{text}</textarea>
        <article className="result">
          <h1>{text}</h1>
        </article>
    </section>
  </main>
}

export default App
