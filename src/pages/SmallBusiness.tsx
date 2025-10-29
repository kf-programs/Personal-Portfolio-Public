import { Helmet } from 'react-helmet-async'
import kitApiApp from '../assets/kitApiApp.png';
import miniAudit from '../assets/mini-audit.png';
import portfolioBuilding from '../assets/portfolioBuildingEdited.gif';

export default function SmallBusiness() {
  return (
    <section className="bg-white mx-0 text-center md:text-left ">
      <section className="mx-auto rounded-3xl space-y-12 p-5 md:p-20 hero-gradient-bg">
        <Helmet>
          <title>Your Name — Small Business</title>
          <meta name="description" content="Small Business — Projects, systems and writeups by Your Name." />
          <meta property="og:title" content="Your Name — Small Business" />
          <meta property="og:description" content="Small Business — Projects, systems and writeups by Your Name." />
        </Helmet>

        <div>
            <h1 className="text-4xl md:text-5xl/16 md:text-7xl/28 md:w-4/5 text-white heading-pop text-glow-heavy">Small Business Technology & Ethical Automation</h1>
            <p className="pt-5 text-4xl/14 font-semibold text-glow-light">
            Technology and automation to help your business grow and to help you save time
            </p>
        </div>
      </section>

      <section>
        <div className="">
          <div className={`flex justify-center rounded-3xl shadow-lg`}>
            <div className={`flex w-full p-8`}>
              <div className="w-full md:px-28 mx-auto">
                <div className={`w-full p-8 hero-gradient-text rounded-lg shadow-lg mx-auto`}>
                    <p className="text-3xl text-center font-semibold mb-2 heading-pop text-glow-light">
                      My passion lies in supporting others to do great things; to use technology to help brighten the world in small ways.
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
                        <h2 className="text-4xl md:text-5xl text-center text-white font-semibold mb-2 heading-pop text-glow-heavy">Workflow Automation</h2>
                    </div>
                </div>
                <div className="md:px-28">
                  <div className="pt-7 md:py-10 px-7">
                      <p className='text-xl/8 font-semibold text-center'>
                      Running a small business or online community takes a lot of time and energy, especially when you have to do everything manually. There are services out there that can help automate your workflows, but they again demand your time and energy to learn and implement.
                      </p>
                      <p className='text-xl/8 font-semibold text-center pt-4'>
                      I was honored to help <a target="_blank" rel="noopener noreferrer" href='https://www.changingwork.org/' className='app-link'>Changing Work</a>, a nonprofit whose mission was to promote conscious business practices, <span className='text-hero-primary font-bold'>develop and implement workflow automations</span>. Using Zapier, a workflow automation tool, I was able to integrate their Circle community platform and Kit, their email marketing tool, into workflows that <span className='text-hero-primary font-bold'>saved the founders' time, streamlined marketing, and made a smoother experience for their members</span>.
                      </p>
                      <p className='text-xl/8 font-semibold text-center py-4'>
                      And that's just the tip of the iceberg of what workflow automation can help with.
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex justify-start rounded-3xl shadow-lg hero-gradient-bg `}>
            <div className={`flex w-full p-8 `}>
              <div className="md:px-28">
                <div className={`w-full p-8 rounded-lg shadow-lg`}>
                    <h2 className="text-4xl md:text-5xl text-white font-semibold mb-2 heading-pop text-glow-heavy text-center">Take Things Further with Customized Solutions</h2>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="p-7 md:w-1/2">
                      <p className='text-xl/8 font-semibold text-justify'>
                      Thanks to my experience in software solutions, I can <span className='text-white font-bold'>go further than out-of-the-box workflow automations.</span> Take this use case I engineered during my non-profit work: They needed to import and tag potential clients into their mailing list, but only under specific circumstances. When Kit's web platform fell short, I created <span className='text-white font-bold'>a custom app to integrate with Kit's API</span> to get the emails imported just how they wanted.
                      </p>
                      <p className='text-xl/8 font-semibold text-justify'>
                      Technologies Used: <span className='text-white font-bold'>React.js, Java, Springboot</span>
                      </p>
                  </div>
                  <div className="md:mt-4 p-7 md:w-1/2">
                    <img src={kitApiApp} alt="Custom app integrating with Kit's API" className="mx-auto md:mx-0 rounded-lg shadow-lg" />
                    <div className='flex items-center justify-center mt-8'>
                        <button
                        type="button"
                        aria-label="Open GitHub repository in new tab"
                        onClick={() => window.open('https://github.com/', '_blank', 'noopener,noreferrer')}
                        className="button-white"
                      >
                        View the code on GitHub
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex justify-start rounded-3xl shadow-lg`}>
            <div className={`flex w-full p-8`}>
              <div className="md:px-28">
                <div className={`w-full p-8 hero-gradient-text rounded-lg shadow-lg`}>
                    <h2 className="text-4xl md:text-5xl font-semibold mb-2 heading-pop text-glow-light">Custom Web Application Development</h2>
                </div>
                <div className="p-7">
                      <p className='text-xl/8 font-semibold text-center'>It is exciting when I get to collaborate to create tools that have to potential to help others. One such case was when I helped a well-being coach turn a great idea to help his clients regain their energy and capacity <span className='text-hero-secondary font-bold'>from a clunky excel spreadsheet into an interactive web application</span>.</p>
                      <p className='text-xl/8 font-semibold text-center pt-7'> 
                      This tool is personalized to the coach's nature based branding and provides a seamless way for users to self-assess, with their answers being <span className='text-hero-secondary font-bold'>sent directly to the coach via email</span> for follow-up and targeted coaching services.
                        At the same time, the coach gains a direct, low-friction channel to <span className='text-hero-secondary font-bold'>engage with potential clients</span> and gather valuable insights, <span className='text-hero-secondary font-bold'>streamlining lead generation</span>.
                      </p>
                      <p className='text-xl/8 font-semibold text-center pt-7'> 
                      The app <span className='text-hero-secondary font-bold'>securely integrates with his Kit API</span> for seamless email automation in the future, creating a smooth, engaging experience for users while giving the coach <span className='text-hero-secondary font-bold'>a powerful tool to grow his business.</span>
                      </p>
                  </div>
                <div className="flex flex-col md:flex-row">
                  <div className="p-7 md:w-5/8">
                    <img src={miniAudit} alt="View of coach's personalized web application" className="mx-auto md:mx-0 rounded-lg shadow-lg" />
                    
                  </div>
                  <div className="p-7 md:w-3/8">
                    <p className='text-xl/8 font-semibold text-center'> 
                      The app is deployed with Amazon Web Services so it is <span className='text-hero-secondary font-bold'>highly available, secure, and scalable</span>.
                      </p>
                      <p className='text-xl/8 font-semibold text-justify pt-7'>
                      Technologies Used: <span className='text-hero-secondary font-bold'>React.js, Bootstrap, Java, Amazon Web Services S3, AWS Lambda, AWS Cloudfront, AWS Simple Email Service, AWS Certificate Manager, AWS API Gateway, AWS SSM</span>
                      </p>
                      <div className='flex items-center justify-center mt-8'>
                        <button
                            type="button"
                            aria-label="Open GitHub repository in new tab"
                            onClick={() => window.open('https://github.com/', '_blank', 'noopener,noreferrer')}
                            className="button-blue"
                        >
                            View the code on GitHub
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex justify-start rounded-3xl shadow-lg pb-10`}>
            <div className={`flex w-full`}>
              <div className="">
                <div className='hero-gradient-bg py-14 md:px-28 rounded-lg shadow-lg'>
                    <div className={`p-8 rounded-lg shadow-lg`}>
                        <h2 className="text-4xl md:text-5xl text-center text-white font-semibold mb-2 heading-pop text-glow-heavy">Reclaim Your Time: Website Optimization & Edits</h2>
                    </div>
                </div>
                <div className="md:px-28">
                  <div className="pt-7 md:py-10 px-7">
                      <p className='text-xl/8 font-semibold text-center'>
                      Squarespace isn't always as quick and easy as their commercials would have you believe.
                      </p>
                      <p className='text-xl/8 font-semibold text-center pt-7'> 
                      If you're running a small business, making tweaks to your website to be more mobile friendly is probably furthest from your mind. I've given time back to founders by implementing Squarespace changes and making more advanced edits like improving website SEO, adding custom CSS, and optimizing page load times with JavaScript.
                      </p>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="p-7 md:pl-15 md:w-1/2">
                        <p className='text-xl/8 font-semibold text-justify'>
                        <span className='text-hero-primary font-bold'>Looking for something more customized?</span> This website was completely built and deployed by me rather than using a web development tool like Squarespace or WordPress. This allows for far more customization that what is possible with those tools.
                        </p>
                        <p className='text-xl/8 font-semibold text-justify'>
                        Technologies Used: <span className='text-hero-primary font-bold'>React.js Tailwind CSS, Amazon Web Services S3, AWS Cloudfront, AWS WAF</span>
                        </p>
                        <div className='flex items-center justify-center mt-8'>
                        <button
                            type="button"
                            aria-label="Open GitHub repository in new tab"
                            onClick={() => window.open('https://github.com/', '_blank', 'noopener,noreferrer')}
                            className="button-violet"
                        >
                            View the code on GitHub
                        </button>
                    </div>
                    </div>
                    <div className="p-7 md:w-1/2 flex items-center justify-center">
                        <img src={portfolioBuilding} alt="Me working on this website" className="w-4/5 h-auto rounded-lg shadow-lg" />
                    </div>
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
