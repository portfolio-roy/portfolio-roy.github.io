// components/ContactForm.js
const ContactForm = () => {
    return (
      <form
        className="my-contact-form flex flex-col space-y-4"
        action="https://formspree.io/f/xdojwqqv"
        method="POST"
        id="contact-form"
      >
        <label className="flex flex-col">
          <span className="sr-only">Name</span>
          <input
            type="text"
            name="full-name"
            maxLength="30"
            placeholder="Full name"
            id="full-name"
            required
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="flex flex-col">
          <span className="sr-only">Email</span>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            id="email"
            required
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="flex flex-col">
          <span className="sr-only">Your message</span>
          <textarea
            name="message"
            placeholder="Enter text here"
            maxLength="500"
            id="message"
            required
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </label>
        <span id="error-message" className="text-red-500"></span>
        <button
          className="btn btn-primary bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 transition-colors"
          id="btn-submit"
          type="submit"
        >
          Get In Touch
        </button>
      </form>
    );
  };
  
  export default ContactForm;
  