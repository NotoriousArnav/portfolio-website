import type { MetaFunction } from "@remix-run/node";
import { animate, createDraggable, utils, createSpring, createScope } from 'animejs';
import neopanda from '/public/neopanda.svg';
import downArrow from '/public/down-arrow.svg';
import { useEffect, useRef, useState } from "react";
import Markdown from 'react-markdown';

export const meta: MetaFunction = () => {
  return [
    { title: "Arnav Ghosh" },
    { name: "description", content: "Welcome to neopanda.tech!" },
  ];
};

export default function Index() {
  const root = useRef(null);
  const scope = useRef(null);
  const [i, setI] = useState(0);
  const markdown_content = `
# Arnav Ghosh

**Full Stack Developer | Web Scraper | FOSS Enthusiast**

📍 Siliguri, West Bengal, India  
🎓 BCA Student at Siliguri Institute of Technology (2023–2027)  
📧 [justarnav2004@gmail.com](mailto:justarnav2004@gmail.com)  
🌐 [arnavg.netlify.app](https://arnavg.netlify.app)  
🐙 [GitHub: NotoriousArnav](https://github.com/NotoriousArnav)  
💼 [LinkedIn: arnv2004](https://www.linkedin.com/in/arnv2004/)

---

## 🧠 About Me

I'm Arnav Ghosh, a passionate developer who thrives on solving problems—especially those I create myself. As the founder of the BroCode Tech Community, I aim to empower developers through collaboration and open-source contributions. My interests span from AI and full-stack development to cybersecurity and creative tech.

---

## 🛠️ Skills & Technologies

- **Languages:** Python, JavaScript, TypeScript, C, Bash
- **Frameworks & Libraries:** FastAPI, Django, Flask, React, Next.js, Langchain, LangGraph
- **Tools & Platforms:** Git, GitHub, Linux (Arch, Fedora), Docker, Postman, BeautifulSoup
- **Areas of Interest:** AI, Web Scraping, OSINT, Cybersecurity, Reverse Engineering, Creative Tech (SonicPi, Analog Synths)

---

## 🚀 Projects

### [Aditya: AI Assistant](https://github.com/NotoriousArnav/SimpleChatBot)
An AI assistant utilizing the Mixtral-8x7B model and Langchain to perform tasks effectively.

### [BlogBrew/Bromine](https://github.com/NotoriousArnav/blogbrew)
An open-source platform built with Django, allowing users to host and publish blogs.

### [CrawlX](https://github.com/NotoriousArnav/crawlx)
A FastAPI-based API designed for web scraping, enabling data extraction from various websites, including Single Page Applications (SPAs).

### [Langchain Researcher Agent (POC)](https://github.com/NotoriousArnav/Langchain_Researcher_Agent)
A Proof of Concept Research Agent that can research topics online.

### [OpenRizz](https://github.com/NotoriousArnav/OpenRizz)
An API for generating pickup/flirt lines using Langchain and FastAPI.

---

## 📝 Publications & Blogs

I regularly write articles on [Bromine](https://bromine.vercel.app/profile/NotoriousArnav), sharing insights on tech projects and developments. Some of my notable articles include:

- [The Illusion of Recycling: Why Repairing is the Only Sustainable Option](https://bromine.vercel.app/blogs/the-illusion-of-recycling-why-repairing-is-the-only-sustainable-option-915ed127c46a/)
- [Web Scraping with Python using BeautifulSoup, Requests, and some Love](https://bromine.vercel.app/blogs/web-scraping-with-python-using-beautifulsoup-requests-and-some-914557650be8/)
- [Understanding Micro SaaS: A Guide to Building a Successful Micro SaaS Business](https://bromine.vercel.app/blogs/understanding-micro-saas-a-guide-to-building-a-successful-micro-saas-business-9f76bd633c44/)
- [Evaluating the Impact of Social Media Restrictions on Education and Communication](https://bromine.vercel.app/blogs/evaluating-the-impact-of-social-media-restrictions-on-education-and-communication-8d85f0680b75/)

---

## 👥 Community Involvement

- **Founder & Maintainer:** [BroCode Tech Community](https://brocode-tech.netlify.app)
  - A community aimed at bringing like-minded developers together to build and empower the FOSS community and newbie developers.
  - Conducted several webinars and seminars to provide quickstart guides to many newbie developers.

- **Hackathon Team Captain:** Team Parmanu Shakti
  - Led the team for the Hack-a-Verse Hackathon held at Siliguri College of Technology.
  - [LinkedIn Post](https://www.linkedin.com/posts/arnv2004_fakenews-innovationinindia-deeplearning-activity-7315084317070635008-tGZ-)

---

## 📬 Contact Me

Feel free to reach out to me through any of the following platforms:

- 📧 Email: [justarnav2004@gmail.com](mailto:justarnav2004@gmail.com)
- 🐙 GitHub: [NotoriousArnav](https://github.com/NotoriousArnav)
- 💼 LinkedIn: [arnv2004](https://www.linkedin.com/in/arnv2004/)
- 🌐 Portfolio: [arnavg.netlify.app](https://arnavg.netlify.app)

  `;

  useEffect(() => {
    scope.current = createScope({root}).add(scope => {

      createDraggable('#neopanda', {
        container: [0, 0, 0, 0],
        release: createSpring({ stiffness: 200 })
      });

      scope.add('rotatePanda', (i) => {
        animate('#neopanda', {
          rotate: i * 360,
          ease: 'out(4)',
          duration: 1000,
        });
      })

    animate('#downArrow', {
        scale: [
          { to: 1.25, ease: 'inOut(3)', duration: 200 },
          { to: 1, ease: createSpring({ stiffness: 300 }) }
        ],
        translateY: [
          { value: 200, duration: 500, easing: 'easeOutCubic' },
          { value: 0, duration: 800, easing: 'easeOutBounce' }
        ],
        loop: true,
        loopDelay: 250,
    });

    })
    return () => scope.current.revert();
  }, [])

  const handleRotation = () => {
    const r = i+1;
    setI(r);
    scope.current.methods.rotatePanda(r);
  }
  

  return (
    <div ref={root} id="home" className="grid gap-16 text-center items-center justify-center h-svh">
      <br />
      <div id="name" className="m-auto w-1/2 grid p-8 py-28 border-2 border-dashed border-gray-500 hover:border-gray-600 active:border-gray-700 active:border-4 items-center text-center justify-center">
        <img id="neopanda" className="w-64 m-auto" src={neopanda} alt="neopanda logo"  onClick={handleRotation} />
        
        <h1 className="text-4xl font-bold p-4">
          Hello, I'm&nbsp;
          <span>
            Arnav
          </span>
          !
        </h1>
        <p>
          This might be the Second Iteration, but this website is still under development.
        </p>
          {/*Scroll down icon with Animation using Anime JS*/}
        <span className="p-4">
          Scroll down
        <img id="downArrow" className="w-10 m-auto" src={downArrow} alt="Scroll down icon" />
        </span>
      </div>
      <section className="aboutSection p-6 border-2 border-dashed w-full">
        <Markdown>{markdown_content}</Markdown>
      </section>
    </div>
  );
}
