import { Helmet } from 'react-helmet-async'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <section>
      <Helmet>
        <title>Your Name — Contact</title>
        <meta name="description" content="Contact — Get in touch with Your Name for projects or inquiries." />
        <meta property="og:title" content="Your Name — Contact" />
        <meta property="og:description" content="Contact — Get in touch with Your Name for projects or inquiries." />
      </Helmet>

      <div className={`w-full p-8 hero-gradient-text rounded-lg shadow-lg`}>
          <h2 className="text-4xl md:text-5xl font-semibold mb-2 heading-pop text-glow-light">Contact Me</h2>
      </div>
      <p className='p-7 md:px-30 md:py-10 text-xl/8 font-semibold text-center'>Whether you have a question, want to discuss working together, or just want to say hi, please fill out the form below and I'll get back to you as soon as possible. Thanks!</p>
      <ContactForm />

    </section>
  )
}
