import { Helmet } from 'react-helmet-async'
import mePic from '../assets/mePic.png';

import SocialLinks from '../components/SocialLinks'

export default function About() {
  return (
    <section>
      <Helmet>
        <title>Your Name — About</title>
        <meta name="description" content="About — Short bio and background of Your Name." />
        <meta property="og:title" content="Your Name — About" />
        <meta property="og:description" content="About — Short bio and background of Your Name." />
      </Helmet>

      <div className="mx-auto p-5 md:px-20">
        <div className={`w-full p-8 hero-gradient-text rounded-lg shadow-lg`}>
            <h2 className="text-4xl md:text-5xl font-semibold mb-2 heading-pop text-glow-light">About Me</h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="p-7 md:w-1/5">
              <img src={mePic} alt="Custom app integrating with Kit's API" className="mx-auto md:mx-0 rounded-lg shadow-lg" />
              <div className='pt-5 flex justify-end'>
                  <SocialLinks size={38} />
              </div>
          </div>
          <div className="p-7 md:w-4/5 space-y-7">
              <p className='text-xl/8 font-semibold text-justify'>
              Hi! thank you very much for checking out my portfolio. I hope it helps you gain a little insight into the types of work I've done and where my passions lie.
              </p>
          </div>
        </div>
      </div>
    </section>
  )
}
