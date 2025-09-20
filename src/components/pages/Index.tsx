import React from 'react'
import { Windows98CommandPrompt } from '../ui/Windows98';
import ReactMarkdown from 'react-markdown';

export async function getMarkdownContent({
  url,
  renderToHtml = false,
}:{
  url: string,
  renderToHtml?: boolean,
}){
  return fetch(url).then(res => res.text()).then(text => {
    if(renderToHtml){
      return <ReactMarkdown>
        {text}
      </ReactMarkdown>;
    }
    return text;
  });
}

export default function Index() {
  const [markdownContent, setMarkdownContent] = React.useState<string>("Loading...");
  const [renderToHtml, setRenderToHtml] = React.useState<boolean>(false);

  React.useEffect(() => {
    getMarkdownContent({
      url: new URL("/portfolio.md", import.meta.url).href,
      renderToHtml: renderToHtml,
    }).then(content => setMarkdownContent(content));
  }, []);

  return (
    <div className="text-3xl w-[69vw]">
      <button
        onClick={() => {
          setRenderToHtml(!renderToHtml);
          getMarkdownContent({
            url: new URL("/portfolio.md", import.meta.url).href,
            renderToHtml: !renderToHtml,
          }).then(content => setMarkdownContent(content));
        }}
      >
        {renderToHtml ? "Show Raw Markdown" : "Render to HTML"}
      </button>
      <Windows98CommandPrompt
        className="w-full m-0 p-0"
      >
        C:\Windows\system32&gt; type C:\Users\Arnav\Desktop\profile.md
        <br />
        {markdownContent}
      </Windows98CommandPrompt>
    </div>
  )
}
