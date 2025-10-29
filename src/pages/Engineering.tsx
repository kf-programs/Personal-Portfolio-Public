import { Helmet } from 'react-helmet-async'

export default function Engineering() {
  return (
    <section className="bg-white mx-0 text-center md:text-left ">
      <section className="mx-auto rounded-3xl space-y-12 p-5 md:p-20 hero-gradient-bg">
        <Helmet>
          <title>Your Name — Engineering</title>
          <meta name="description" content="Engineering — Projects, systems and writeups by Your Name." />
          <meta property="og:title" content="Your Name — Engineering" />
          <meta property="og:description" content="Engineering — Projects, systems and writeups by Your Name." />
        </Helmet>

        <div>
            <h1 className="text-4xl md:text-5xl/16 md:text-7xl/28 md:w-4/5 text-white heading-pop text-glow-heavy">Software Engineering & Scalable Development</h1>
            <p className="pt-5 text-4xl/14 font-semibold text-glow-light">
            A decade of dedicated experience in Software Development to help you create and continuously improve reliable, scalable web applications crucial to modern company operations.
            </p>
        </div>
      </section>

      <section>
        <div className="">
          <div className={`flex justify-start rounded-3xl shadow-lg`}>
            <div className={`flex w-full p-8`}>
              <div className="md:px-28">
                <div className={`w-full p-8 hero-gradient-text rounded-lg shadow-lg`}>
                    <h2 className="text-4xl md:text-5xl font-semibold mb-2 heading-pop text-glow-light">Full-Stack Mastery and Agile Delivery</h2>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="p-7 md:w-1/2">
                      <h3 className="text-3xl font-semibold mb-2 heading-pop text-hero-primary text-glow-light">End-to-End Product Ownership</h3>
                      <ul className="md:list-disc list-inside text-xl px-5">
                          <li>Expertise across the Agile Software Development Lifecycle (SDLC)</li>
                          <li>Partnering with product managers and stakeholders</li>
                          <li>Thorough specifications</li>
                          <li>Code Reviews</li>
                          <li>Stakeholder demos</li>
                          <li>Collaborating with QA and technical writers</li>
                      </ul>
                  </div>
                  <div className="p-7 md:w-1/2">
                      <h3 className="text-3xl font-semibold mb-2 heading-pop text-hero-secondary text-glow-light">Core Technology Stack</h3>
                      <ul className="md:list-disc list-inside text-xl px-5">
                          <li>Languages: Java, JavaScript, HTML, Python</li>
                          <li>Frameworks: Spring, JUnit, React.js, Tailwind CSS</li>
                          <li>Databases: SQL, MongoDB (NoSQL)</li>
                          <li>Feature enhancement and bug resolution of existing applications</li>
                          <li>Creating new products from the ground up</li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex justify-start rounded-3xl shadow-lg hero-gradient-bg `}>
            <div className={`flex w-full p-8 `}>
              <div className="md:px-28">
                <div className={`w-full p-8 rounded-lg shadow-lg`}>
                    <h2 className="text-4xl md:text-5xl text-white font-semibold mb-2 heading-pop text-glow-heavy">Cloud-Native Architecture & Modern Frameworks</h2>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="p-7 md:w-1/2">
                      <h3 className="text-3xl font-semibold mb-2 heading-pop text-white text-glow-heavy">Next-Generation Web Applications</h3>
                      <p className='text-xl/8 font-semibold text-justify'>I design and deploy complex, <span className='text-white font-bold'>full-stack</span> applications built for the modern cloud. A recent project 
                        involved developing a solution with a <span className='text-white font-bold'>React frontend</span> and a <span className='text-white font-bold'>Java API backend</span>, leveraging a comprehensive
                         suite of <span className='text-white font-bold'>AWS services (including S3, Lambda, API Gateway, and CloudFront)</span> to ensure robust hosting and
                          efficient deployment.</p>
                  </div>
                  <div className="p-7 md:w-1/2">
                      <h3 className="text-3xl font-semibold mb-2 heading-pop text-white text-glow-heavy">Enterprise Development</h3>
                      <p className='text-xl/8 font-semibold text-justify'>I have built complex, multi-functional applications for large-scale enterprise use. 
                        My experience includes developing dynamic web dashboards using <span className='text-white font-bold'>AngularJS</span> with <span className='text-white font-bold'>Bootstrap</span>, coupled with backend-for-frontend
                         services built on <span className='text-white font-bold'>Spring Boot</span> and <span className='text-white font-bold'>Node.js</span>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex justify-start rounded-3xl shadow-lg`}>
            <div className={`flex w-full p-8`}>
              <div className="md:px-28">
                <div className={`w-full p-8 hero-gradient-text rounded-lg shadow-lg`}>
                    <h2 className="text-4xl md:text-5xl font-semibold mb-2 heading-pop text-glow-light">Code Quality and Innovative Engineering</h2>
                </div>
                <div className={`w-full p-8 hero-gradient-text rounded-lg shadow-lg`}>
                    <p className='text-2xl font-semibold'>Quality is not an afterthought. It is fundamental.</p>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="p-7 md:w-1/2">
                      <h3 className="text-3xl font-semibold mb-2 heading-pop text-hero-primary text-glow-light">Development Discipline</h3>
                      <p className='text-xl/8 font-semibold text-justify'>Trained in <span className='text-hero-primary font-bold'>Test Driven Development (TDD)</span>, experienced in <span className='text-hero-primary font-bold'>automated testing</span> and 
                        <span className='text-hero-primary font-bold'> Continuous Integration and Continuous Deployment (CI/CD)</span> pipelines, and a strong advocate for <span className='text-hero-primary font-bold'>code reviews</span> and <span className='text-hero-primary font-bold'>pair programming</span>
                      </p>
                  </div>
                  <div className="p-7 md:w-1/2">
                      <h3 className="text-3xl font-semibold mb-2 heading-pop text-hero-secondary text-glow-light">Applied Generative AI</h3>
                      <p className='text-xl/8 font-semibold text-justify'>The ability for generative AI to assist in software development is undeniable, but only when
                        <span className='text-hero-secondary font-bold'> used correctly</span>. My existing software engineering expertise allows me to work with AI tools, rather than blindly following them,
                         to <span className='text-hero-secondary font-bold'>enhance productivity</span>. With skilled <span className='text-hero-secondary font-bold'>prompt engineering</span>, I have successfully integrated tools like <span className='text-hero-secondary font-bold'>GitHub Copilot</span> while 
                         understanding the limitations and risks of AI-generated code.
                      </p>
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
