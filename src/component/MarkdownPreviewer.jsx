import React, {useState} from 'react';
import {marked} from 'marked';
import './MarkdownPreviewer.css';

const initialMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...

[Link to Google](https://www.google.com)

Here is some inline code: \`<div></div>\`

\`\`\`
// This is a code block
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

- List item 1
- List item 2

> This is a blockquote

![Image](https://via.placeholder.com/150)

**This is bold text**
`;

const MarkdownPreviewer = () => {
    const [markdown, setMarkdown] = useState(initialMarkdown);

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div className="container">
      <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
      />
            <div
                id="preview"
                dangerouslySetInnerHTML={{__html: marked.parse(markdown)}}
            />
        </div>
    );
};
export default MarkdownPreviewer;