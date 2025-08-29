const Footer = () => {
  return (
    <>
      <footer
        className="border-t bg-blue-500"
        role="contentinfo"
        aria-label="Footer"
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-6 text-center">
          <p className="text-sm  text-white font-semibold">
            © {new Date().getFullYear()} Pewsey Dental, UK
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
