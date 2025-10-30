import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <Helmet>
        <title>Your Name — Not Found</title>
        <meta name="description" content="Not Found — Your Name Page Not Found" />
        <meta property="og:title" content="Your Name — Not Found" />
        <meta property="og:description" content="Not Found — Your Name Page Not Found" />
      </Helmet>

      <div className={`w-full p-8 hero-gradient-text rounded-lg shadow-lg`}>
          <h2 className="text-4xl md:text-5xl font-semibold mb-2 heading-pop text-glow-light">Oops!</h2>
      </div>
      <p className='p-7 md:px-30 md:py-10 text-xl/8 font-semibold text-center'>
        It looks like you reached a page that doesn't exist. Please check the URL or{' '}
        <Link to="/" className="underline hover:text-hero-primary">return to the homepage</Link>.
      </p>
    </section>
  )
}
