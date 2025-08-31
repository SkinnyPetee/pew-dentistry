import { MapPin } from "lucide-react";
import ContactForm from "./contact-form";
import { Button } from "../../components/ui/button";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="flex-col lg:flex-row  w-full min-h-screen flex h-max lg:h-screen bg-teal-500/10  px-6 lg:px-30"
      >
        <div className="w-full h-max lg:h-screen py-6 lg:py-20 flex flex-col justify-center gap-4">
          <h2 className="text-2xl font-bold">
            Talk to us about your <br /> dental concerns
          </h2>
          <div className="flex gap-3">
            <div className="min-w-10 h-10 rounded-lg bg-teal-500/10 flex justify-center items-center">
              <MapPin className="text-teal-500" />
            </div>
            <p className="text-slate-600 font-medium text-md">
              Pewsey Dental Practice, 15 North Street, Pewsey, Wiltshire, SN9
              5ES <br /> Tel: 01672 563622 <br /> E-Mail:
              pewseydental@btconnect.com
              <br />
              <Button
                className="bg-teal-500 hover:bg-teal-500/10 text-white mt-6"
                asChild
              >
                <a
                  href="https://www.google.com/maps?ll=51.339352,-1.766213&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=7199976388193657615"
                  target="_blank"
                >
                  Find Us on Google Maps
                </a>
              </Button>
            </p>
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
