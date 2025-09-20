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

export default function Index({
  render,
}:{
  render?: boolean;
}) {
  const [markdownContent, setMarkdownContent] = React.useState<string>("Loading...");

  React.useEffect(() => {
    getMarkdownContent({
      url: new URL("/portfolio.md", import.meta.url).href,
      renderToHtml: render,
    }).then(content => setMarkdownContent(content));
  }, [render]);

  return (
    <div className="text-3xl w-[69vw]">

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
