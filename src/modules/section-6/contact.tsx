import { MapPin } from "lucide-react";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="flex-col lg:flex-row  w-full min-h-screen flex h-max lg:h-screen bg-blue-500/10  px-6 lg:px-60"
      >
        <div className="w-full h-max lg:h-screen py-6 lg:py-20 flex flex-col justify-center gap-4">
          <h2 className="text-2xl font-bold">
            Talk to us about your <br /> dental concerns
          </h2>
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex justify-center items-center">
              <MapPin className="text-blue-500" />
            </div>
            <p className="text-slate-700 font-bold text-2xl">London, UK</p>
          </div>
        </div>

        <div className="w-full py-6 lg:py-20 flex justify-end items-center">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
