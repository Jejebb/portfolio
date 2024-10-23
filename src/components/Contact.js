export default function Contact() {
  return (
    <div className="p-8 bg-gray-100" id="contact">
      <div className="max-w-lg mx-auto text-center">
        {/* Title */}
        <h2 className="text-md font-semibold text-gray-700">Get in Touch</h2>
        <p className="text-2xl font-bold text-gray-900">Contact Me</p>
        <p className="mt-2 text-sm text-gray-600">Reach out via email, phone, or the form below.</p>

        {/* Contact Info */}
        <div className="mt-4 space-y-1">
          <p className="text-gray-800 text-sm">Jayveecayetano@gmail.com</p>
          <p className="text-gray-800 text-sm">0999555789</p>
        </div>

        {/* GitHub Link */}
        <div className="mt-4">
          <a href="https://github.com/Jejebb" className="text-gray-600 hover:text-gray-900 text-sm">
            GitHub
          </a>
        </div>

        {/* Contact Form */}
        <div className="mt-8">
          <form className="space-y-2">
            <input
              type="text"
              className="w-full px-2 py-1 border border-gray-300 rounded"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="w-full px-2 py-1 border border-gray-300 rounded"
              placeholder="Your Email"
            />
            <textarea
              className="w-full px-2 py-1 border border-gray-300 rounded"
              placeholder="Your Message"
              rows="3"
            />
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-indigo-600 rounded hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
