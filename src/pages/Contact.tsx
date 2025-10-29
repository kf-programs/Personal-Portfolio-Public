import { Helmet } from 'react-helmet-async'

export default function Contact() {
  return (
    <section>
      <Helmet>
        <title>Your Name — Contact</title>
        <meta name="description" content="Contact — Get in touch with Your Name for projects or inquiries." />
        <meta property="og:title" content="Your Name — Contact" />
        <meta property="og:description" content="Contact — Get in touch with Your Name for projects or inquiries." />
      </Helmet>

      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="mb-6">Email: hello@example.com — replace with your contact info.</p>
    </section>
  )
}
