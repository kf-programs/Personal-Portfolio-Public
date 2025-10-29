import { Helmet } from 'react-helmet-async'
import kitApiApp from '../assets/kitApiApp.png';
import miniAudit from '../assets/mini-audit.png';
import portfolioBuilding from '../assets/portfolioBuildingEdited.gif';
import unitTestVideo from '../assets/unitTestAIPrompting.mp4';

export default function AiIntegration() {
  return (
    <section className="bg-white mx-0 text-center md:text-left ">
      <section className="mx-auto rounded-3xl space-y-12 p-5 md:p-20 hero-gradient-bg">
        <Helmet>
          <title>Your Name — AI Integration</title>
          <meta name="description" content="AI Integration — Projects, systems and writeups by Your Name." />
          <meta property="og:title" content="Your Name — AI Integration" />
          <meta property="og:description" content="AI Integration — Projects, systems and writeups by Your Name." />
        </Helmet>

        <div>
            <h1 className="text-4xl md:text-5xl/16 md:text-7xl/28 md:w-4/5 text-white heading-pop text-glow-heavy">AI Integration and Conscious Application</h1>
            <p className="pt-5 text-4xl/14 font-semibold text-glow-light">
            The software experience to use AI as the productivity tool it was meant to be, not as the solo developer
            </p>
        </div>
      </section>

      <section>
        <div className="">

          <div className={`flex justify-start rounded-3xl shadow-lg`}>
            <div className={`flex w-full p-8`}>
              <div className="md:px-28">
                <div className={`w-full p-8 hero-gradient-text rounded-lg shadow-lg`}>
                    <h2 className="text-4xl md:text-5xl font-semibold mb-2 heading-pop text-glow-light">From Vibe-Coded to Polished Project</h2>
                </div>
                <div className="flex flex-col">
                  <div className="p-7">
                      <p className='text-xl/8 font-semibold text-justify'>It's exciting when an idea takes shape! Using new AI tools can be great to quickly generate a working proof-of-concept (aka a "vibe-coded" prototype). But, without a seasoned software developer at the wheel, if you try to polish that project with vibe-coding alone, cracks are going to begin to form.</p>
                      <ul className="md:list-disc list-inside text-xl px-5 pt-3 space-y-3">
                          <li>AI's limited memory (known as it's context window) or new chat sessions means your AI developer will <span className='text-hero-secondary font-bold'>forget what's already been done</span>, leading to duplications and incompatibilities.</li>
                          <li>The often <span className='text-hero-secondary font-bold'>sycophantic tendencies of AI</span> means it will try to do what you ask, regardless of whether there's a better solution.</li>
                          <li>Without a <span className='text-hero-secondary font-bold'>prompter with a software knowledge base</span>, prompts to AI will likely not yield the best results.</li>
                          <li>There is <span className='text-hero-secondary font-bold'>no real human to be thinking ahead</span> to considerations like how to get this application deployed.</li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex justify-start rounded-3xl shadow-lg`}>
            <div className={`flex w-full`}>
              <div className="">
                <div className='hero-gradient-bg py-14 md:px-28 rounded-lg shadow-lg'>
                    <div className={`p-8 rounded-lg shadow-lg`}>
                        <h2 className="text-4xl md:text-5xl text-center text-white font-semibold mb-2 heading-pop text-glow-heavy">Elevating Your Vision with Engineering Expertise</h2>
                    </div>
                </div>
                <div className="md:px-28">
                  <div className="pt-7 md:py-10 px-7">
                      <p className='text-xl/8 font-semibold text-center'>
                      It's not enough to simply hand an AI a prompt and accept the output. Your vision deserves better. I bridge the gap by integrating my decade of <span className='text-hero-primary font-bold'>software development and team leadership</span> experience directly into the development process.
                      </p>
                      <p className='text-xl/8 font-semibold text-center pt-4'>
                      I treat AI just as a powerful assistant. I directly guide the AI's output through specific prompts and critically <span className='text-hero-primary font-bold'>audit the generated code</span>. This rigorous approach ensures we achieve not just functionality, but <span className='text-hero-primary font-bold'>high code quality</span>.
                      </p>
                      <p className='text-xl/8 font-semibold text-center pt-4'>
                      I can transform prototypes into high quality projects by clearing up <span className='text-hero-primary font-bold'>technical debt</span>, implementing best practices like automated testing, and setting up professional environments that leverage <span className='text-hero-primary font-bold'>cloud services</span> like AWS.
                      </p>
                      <p className='text-xl/8 font-semibold text-center py-4'>
                      Take a look at this video showing how my <span className='text-hero-primary font-bold'>careful analysis of the code</span> and previous software experience allows me to <span className='text-hero-primary font-bold'>craft a thorough prompt</span> that enables AI to quickly generate robust automated tests that keep the code scalable and maintainable.
                      </p>
                      <div className="flex justify-center">
                        <video
                          controls
                          className="w-full max-w-3xl rounded-lg shadow-lg my-6"
                          aria-label="Unit test AI prompting demo"
                        >
                          <source src={unitTestVideo} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex justify-start rounded-3xl shadow-lg hero-gradient-bg `}>
            <div className={`flex w-full p-8 `}>
              <div className="md:px-28">
                <div className={`w-full p-8 rounded-lg shadow-lg`}>
                    <h2 className="text-4xl md:text-5xl text-white font-semibold mb-2 heading-pop text-glow-heavy text-center">Applied Generative AI</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-7">
                      <p className='text-xl/8 font-semibold text-justify'>
                      Using AI to assist with coding a solution can be great for productivity, but with my coursework in <span className='text-white font-bold'>Purdue University's Applied Generative AI Specialization</span> program, I can build applications that incorporate AI directly into their core functionality.</p>
                      <p className='text-xl/8 font-semibold text-justify'>My practical experience covers the key components of modern AI application development:</p>
                      <ul className="md:list-disc list-inside text-xl px-5 pt-3 space-y-3">
                          <li><span className='text-white font-bold'>Prompt Engineering</span>: Designing effective inputs to maximize the accuracy and relevance of AI outputs.</li>
                          <li><span className='text-white font-bold'>Transformer Architectures & LLMs</span>: Understanding the models that power modern language solutions.</li>
                          <li><span className='text-white font-bold'>Agentic AI Frameworks</span>: Utilizing tools like <span className='text-white font-bold'>LangChain</span> to build complex, multi-step, reasoning agents.</li>
                      </ul>
                  </div>
                  <div className="p-7 w-11/12 md:w-4/5 mx-auto rounded-lg shadow-xl border border-white/60 bg-transparent">
                    <h3 className="text-4xl text-white font-semibold mb-2 heading-pop text-glow-heavy text-center">Principle of Ethical AI Development</h3>
                    <p className='text-xl/8 font-semibold text-justify'>Just because we <span className='text-white font-bold'>can</span> build something with AI doesn't mean we <span className='text-white font-bold'>should</span>. My projects are grounded in <span className='text-white font-bold'>ethical considerations</span>. For instance, you will not find any AI-generated art on this website because my research has yet to reconcile its ethical implications regarding creator rights and compensation. I always strive to keep ethics at the forefront, but I'm always up for a rational debate!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </section>
  )
}
