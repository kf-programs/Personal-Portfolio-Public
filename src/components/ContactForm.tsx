import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.currentTarget; // typed as HTMLFormElement
    const formData = new FormData(form);

    // read the access key from Vite env (.env -> VITE_WEB3FORMS_ACCESS_KEY)
    const accessKey = (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY || "";
    if (!accessKey) {
      console.warn("VITE_WEB3FORMS_ACCESS_KEY is not set.");
    }
    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="w-full flex justify-center pb-7">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-xl bg-white p-6 rounded-xl shadow-md space-y-4"
        aria-labelledby="contact-form-title"
      >
        <h2 id="contact-form-title" className="text-2xl font-semibold text-slate-800">
          Get in touch
        </h2>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="block w-full px-4 py-2 border border-slate-200 rounded-lg shadow-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="block w-full px-4 py-2 border border-slate-200 rounded-lg shadow-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="block w-full px-4 py-3 border border-slate-200 rounded-lg shadow-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-y"
            placeholder="Tell me about your project or question..."
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <button
            type="submit"
            className="button-hero-secondary"
          >
            Send Message
          </button>

          <div aria-live="polite" role="status" className="text-sm text-slate-600">
            {result && <span>{result}</span>}
          </div>
        </div>
      </form>
    </div>
  );
}