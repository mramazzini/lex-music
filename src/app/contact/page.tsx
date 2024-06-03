import ContactForm from "../components/Contact/ContactForm";
import ParticlesContainer from "../components/Contact/Particles";
import Footer from "../components/Footer";
import Navbar from "../components/Homepage/Navbar";

const Contact = () => {
  return (
    <>
      <ParticlesContainer />
      <Navbar />
      <main className="min-h-screen flex justify-start items-center flex-col px-48 py-24 z-[1] relative">
        <div className="flex flex-col items-center justify-start md:w-[1000px] md:h-[1000px] border border-secondary p-8 md:p-24 bg-black rounded-lg">
          <h1 className="text-6xl font-bold text-white">Contact</h1>
          <p className="text-neutral-content text-lg m-4">
            Want to work together? Send me a message!
          </p>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
