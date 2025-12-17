import { useState } from "react";
import { contactDetails } from "../constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 px-8 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="text-slate-500 mb-10">
        Have a project in mind? Contact me at{" "}
        <span className="text-accent font-semibold">
          {contactDetails.email}
        </span>
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6 text-left"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col space-y-2">
            <label htmlFor="name" className="font-semibold text-slate-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
              className="p-3 bg-slate-100 border-none rounded-md focus:ring-2 focus:ring-accent outline-none"
            />
          </div>
          <div className="flex-1 flex flex-col space-y-2">
            <label htmlFor="email" className="font-semibold text-slate-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              onChange={handleChange}
              required
              className="p-3 bg-slate-100 border-none rounded-md focus:ring-2 focus:ring-accent outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="font-semibold text-slate-700">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            id="message"
            onChange={handleChange}
            placeholder="Tell me about your project..."
            required
            className="p-3 bg-slate-100 border-none rounded-md focus:ring-2 focus:ring-accent outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-accent text-white font-bold py-3 px-8 rounded-md self-center md:self-start transition-transform hover:scale-105 "
        >
          Submit
        </button>
      </form>
    </section>
  );
}
