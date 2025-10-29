import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="bg-white mx-0 text-center md:text-left">
        <section className="mx-auto rounded-3xl space-y-12 p-5 md:p-20 hero-gradient-bg">
        <Helmet>
            <title>Your Name — Home</title>
            <meta name="description" content="Home — Personal portfolio of Your Name. Browse projects and get in touch." />
            <meta property="og:title" content="Your Name — Home" />
            <meta property="og:description" content="Home — Personal portfolio of Your Name. Browse projects and get in touch." />
        </Helmet>

        <div>
            <h1 className="text-4xl md:text-5xl/16 md:text-7xl/28 md:w-4/5 text-white heading-pop text-glow-heavy">Name | Technology and Conscious Management</h1>
            <p className="pt-5 text-4xl/14 font-semibold text-glow-light">
            Technology Professional who delivers robust software solutions, leads high-performing teams with integrity, and leverages AI to build the future of workflow and web applications. My approach is rooted in responsible innovation and a focus on long-term, ethical value.
            </p>
        </div>

        </section>
        <section>
            <div className="">
              <div className={`flex justify-center rounded-3xl shadow-lg pb-10`}>
                <div className={`flex w-full p-8`}>
                  <div className="w-full md:px-28 mx-auto">
                    <div className={`w-full p-8 hero-gradient-text rounded-lg shadow-lg mx-auto`}>
                        <p className="text-3xl text-center font-semibold mb-2 heading-pop text-glow-light">
                          Ready to build something impactful? Explore my areas of expertise below.
                        </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`flex justify-start rounded-3xl shadow-lg`}>
                <div className={`flex w-full`}>
                  <div className="">
                    <div className='hero-gradient-bg py-14 md:px-28 rounded-lg shadow-lg'>
                        <div className={`p-8 rounded-lg shadow-lg`}>
                            <h2 className="text-4xl md:text-5xl text-center text-white font-semibold mb-2 heading-pop text-glow-heavy">Software Engineering & Development</h2>
                        </div>
                    </div>
                    <div className="py-8 px-8 md:px-48">
                      <div className="p-7">
                          <p className='text-3xl/12 font-semibold text-center'>
                          I build the reliable, high-performance foundation your business needs. Specializing in <span className='text-hero-primary font-bold'>full-stack development</span> and <span className='text-hero-primary font-bold'>end-to-end SDLC ownership</span>, I transform ideas—from initial prototypes to enterprise features—into clean, maintainable, and <span className='text-hero-primary font-bold'>production-ready code</span> by collaborating closely with all stakeholders.
                          </p>
                      </div>
                      <div className='flex items-center justify-center'>
                          <Link
                          aria-label="Go to Engineering page"
                          to="/engineering"
                          className="button-violet"
                        >
                          See More About My Software Development
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`flex justify-start rounded-3xl shadow-lg hero-gradient-bg `}>
                <div className={`flex w-full p-8`}>
                  <div className='md:px-28'>
                      <div className={`w-full p-8 rounded-lg shadow-lg`}>
                        <h2 className="text-4xl md:text-5xl text-white font-semibold mb-2 heading-pop text-glow-heavy text-center">Conscious Team Leadership & Management</h2>
                      </div>
                    <div className="md:px-48">
                      <div className="p-7">
                          <p className='text-3xl/12 font-semibold text-center'>
                          Drive success through process and people. I lead <span className='text-white font-bold'>Agile development teams</span> to optimize the entire <span className='text-white font-bold'>SDLC</span>, focusing on fairness, mutual respect, and mentorship to achieve <span className='text-white font-bold'>high retention and consistent delivery</span>.</p>
                      </div>
                      <div className='flex items-center justify-center'>
                        <Link
                          aria-label="Go to Leadership page"
                          to="/leadership"
                          className="button-white"
                        >
                          Learn More About My Leadership Style
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`flex justify-start rounded-3xl shadow-lg`}>
                <div className={`flex w-full p-8`}>
                  <div className="md:px-28">
                    <div className={`w-full p-8 hero-gradient-text rounded-lg shadow-lg`}>
                        <h2 className="text-4xl md:text-5xl font-semibold mb-2 heading-pop text-glow-light text-center">Small Business Technology & Automation</h2>
                    </div>
                    <div className="md:px-48">
                      <div className="p-7">
                          <p className='text-3xl/12 font-semibold text-center'>I deliver practical <span className='text-hero-secondary font-bold'>workflow automation, implement custom web solutions, and use AI responsibly</span> to free up founder time and drive responsible growth.
                          </p>
                      </div>
                      <div className='flex items-center justify-center'>
                        <Link
                          aria-label="Go to Small Business page"
                          to="/small-business"
                          className="button-blue"
                        >
                          Explore Small Business Solutions
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`flex justify-start rounded-3xl shadow-lg hero-gradient-bg `}>
                <div className={`flex w-full p-8`}>
                  <div>
                    <div className="md:px-28">
                      <div className={`w-full p-8 rounded-lg shadow-lg`}>
                        <h2 className="text-4xl md:text-5xl text-white font-semibold mb-2 heading-pop text-glow-heavy text-center">AI Engineering & Ethical Application</h2>
                      </div>
                    </div>
                    <div className="md:px-48">
                      <div className="p-7">
                          <p className='text-3xl/12 font-semibold text-center'>
                          Don't let your <span className='text-white font-bold'>AI prototypes</span> turn into technical debt. I bridge the gap between "vibe-coded" concepts and <span className='text-white font-bold'>scalable, secure applications</span>. I audit AI-generated code and apply my expertise in <span className='text-white font-bold'>GenAI frameworks</span> to deliver truly robust systems.</p>
                      </div>
                      <div className='flex items-center justify-center'>
                        <Link
                          aria-label="Go to AI Integration page"
                          to="/ai-integration"
                          className="button-white"
                        >
                          Discover AI Integration Strategies
                        </Link>
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
