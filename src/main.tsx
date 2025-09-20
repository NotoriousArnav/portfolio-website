import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router";
import ReactMarkdown from 'react-markdown';
import { getMarkdownContent } from './components/pages/Index.tsx';

// Check if the Device Width is less than 768px and height is less than 1024px
// If Yes, do not show This Page and show a message to use a larger screen

// Prevent Execution of the following code if the screen is too small
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

if ( window.innerWidth < 768 || window.innerHeight < 924 ) {
  // Show a message to use a larger screen
  // But also render the markdown content

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4">
        <h1 className="emergencyh1 font-bold mb-4">Screen Too Small</h1>
        <p className="text-lg mb-8 text-center">Please use a larger screen to view this portfolio, meanwhile you can see the Important details above.</p>
        <div className="emergencyportfolio w-full max-w-3xl bg-gray-800 p-4 rounded-lg shadow-lg overflow-y-auto max-h-[70vh]">
            {getMarkdownContent({
              url: new URL("/portfolio.md", import.meta.url).href,
              renderToHtml: true,
            }).then(content => content as string)}
        </div>
      </div>
    </StrictMode>
  )
}

