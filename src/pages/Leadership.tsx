import { Helmet } from 'react-helmet-async'
import areWeFriendsRfPR from '../assets/areWeFriendsRfPR.png';

export default function Leadership() {
  return (
    <section className="bg-white mx-0 text-center md:text-left">
      <section className="mx-auto rounded-3xl space-y-12 p-5 md:p-20 hero-gradient-bg">
        <Helmet>
          <title>Your Name — Leadership</title>
          <meta name="description" content="Leadership — Projects, systems and writeups by Your Name." />
          <meta property="og:title" content="Your Name — Leadership" />
          <meta property="og:description" content="Leadership — Projects, systems and writeups by Your Name." />
        </Helmet>

        <div>
            <h1 className="text-4xl md:text-5xl/16 md:text-7xl/28 md:w-4/5 text-white heading-pop text-glow-heavy">Software Team Leadership & Conscious Management</h1>
            <p className="pt-5 text-4xl/14 font-semibold text-glow-light">
            Experienced Software Engineering Manager with a passion for building high-performing teams by fostering a culture of collaboration, compassion and respect
            </p>
        </div>
      </section>

      <section>
        <div className="">
          <div className={`flex justify-start rounded-3xl shadow-lg`}>
            <div className={`flex w-full p-8`}>
              <div className="md:px-28">
                <div className={`w-full p-8 hero-gradient-text rounded-lg shadow-lg`}>
                    <h2 className="text-4xl md:text-5xl font-semibold mb-2 heading-pop text-glow-light">Strategic Process Leadership</h2>
                </div>
                <div className="flex flex-col">
                  <div className="p-7">
                      <h3 className="text-3xl font-semibold mb-2 heading-pop text-hero-primary text-glow-light">Agile SDLC Transformation</h3>
                      <p className='text-xl/8 font-semibold text-justify'>
                      I created and implemented an <span className='text-hero-primary font-bold'>Agile SDLC</span> that <span className='text-hero-primary font-bold'>improved cross-departmental communication</span> resulting in <span className='text-hero-primary font-bold'>less software rework and fewer bugs</span> for a live production SaaS with a weekly release schedule.
                      </p>
                  </div>
                  <div className="px-7 pb-7">
                      <h3 className="text-3xl font-semibold mb-2 heading-pop text-hero-secondary text-glow-light">End-to-End Delivery Ownership</h3>
                      <p className='text-xl/8 font-semibold text-justify'>Leveraging my background as a developer, I remain hands-on throughout the product lifecycle. I guide teams through:</p>
                      <ul className="md:list-disc list-inside text-xl px-5">
                          <li>Collaborating with <span className='text-hero-secondary font-bold'>stakeholders and product managers</span> to define specifications.</li>
                          <li>Ensuring quality through <span className='text-hero-secondary font-bold'>code reviews</span> and working with QA.</li>
                          <li>Communicating changes by presenting demos and coordinating with <span className='text-hero-secondary font-bold'>technical writers</span>.</li>
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
                        <h2 className="text-4xl md:text-5xl text-center text-white font-semibold mb-2 heading-pop text-glow-heavy">Building Respectful Workplaces</h2>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:px-28">
                  <div className="pt-7 md:py-20 px-7 md:w-1/2">
                      <p className='text-xl/8 font-semibold text-justify'>
                      My commitment to building <span className='text-hero-primary font-bold'>compassionate and productive work relationships</span> is a core part of my leadership brand, as demonstrated by my co-authorship of a best-selling book on relationships at work, <a target="_blank" rel="noopener noreferrer" href='https://www.amazon.com/dp/B0F9VS9CMK' className='app-link'>Are We Friends or Coworkers: Exploring Relationships at Work</a>.
                      </p> 
                        <p className='text-xl/8 font-semibold text-justify pt-5'>
                        I also facilitate the <a target="_blank" rel="noopener noreferrer" href='https://www.respectforpeopleroadmap.com/' className='app-link'>Respect for People Roadmap</a> framework, which is designed to improve company performance by teaching respectful workplace practices across all organizational levels.
                        </p>
                  </div>
                  <div className="p-7 md:w-1/2">
                      <img src={areWeFriendsRfPR} alt="Are We Friends or Coworkers Book Cover and Respect for People Roadmap logo" className="mx-auto md:mx-0 rounded-lg shadow-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex justify-start rounded-3xl shadow-lg hero-gradient-bg `}>
            <div className={`flex w-full p-8 `}>
              <div className="md:px-28">
                <div className={`w-full p-8 rounded-lg shadow-lg`}>
                    <h2 className="text-4xl md:text-5xl text-white font-semibold mb-2 heading-pop text-glow-heavy">Fostering High-Performing Teams</h2>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="p-7 md:w-1/2">
                      <h3 className="text-3xl font-semibold mb-2 heading-pop text-white text-glow-heavy">Mentorship and Career Growth</h3>
                      <p className='text-xl/8 font-semibold text-justify'>
                      I prioritize the growth and well-being of my team members. I have successfully <span className='text-white font-bold'>hired, mentored, and led</span> teams ranging from industry veterans to new developers. My focus on developing talent has directly led to approval for <span className='text-white font-bold'>multiple promotions</span> and a high-trust, low-stress environment that resulted in <span className='text-white font-bold'>zero team turnover</span> during my tenure.
                      </p>
                  </div>
                  <div className="p-7 md:w-1/2">
                      <h3 className="text-3xl font-semibold mb-2 heading-pop text-white text-glow-heavy">Remote Collaboration</h3>
                      <p className='text-xl/8 font-semibold text-justify'>
                      I successfully manage and unite remote engineering teams. I employ innovative processes, such as <span className='text-white font-bold'>regular study halls and pairing sessions</span>, to foster deep collaboration, build strong bonds, and maintain a highly productive team culture despite geographical distance.
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex justify-start rounded-3xl shadow-lg`}>
            <div className={`flex w-full p-8`}>
              <div className="md:px-28">
                <div className={`w-full p-8 hero-gradient-text rounded-lg shadow-lg`}>
                    <h2 className="text-4xl font-semibold mb-2 heading-pop text-glow-light">Applying Technical Leadership to Non-Profit Work</h2>
                </div>
                <div className="">
                  <div className="p-7">
                      <p className='text-xl/10 font-semibold text-justify'>I extend my technical and leadership skills to the non-profit sector. As a volunteer <span className='text-hero-secondary font-bold'>Platform Operations Manager</span> for a <span className='text-hero-secondary font-bold'>non-profit startup</span>, I took ownership of their low-code platform. I led key projects, including <span className='text-hero-secondary font-bold'>improving website SEO</span> and creating self-paced courses, coordinating the efforts of multiple volunteers to <span className='text-hero-secondary font-bold'>drive community engagement and marketing</span>.
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
