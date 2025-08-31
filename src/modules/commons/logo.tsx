const Logo = () => {
  return (
    <>
      <a href="#hero">
        <div className="flex items-center gap-4">
          <img
            className="w-[30px] h-[30px] object-cover"
            src="/images/logo/logo.jpg"
            alt="logo image"
          />
          <p className=" font-bold text-sm">
            <span className="text-teal-500">P</span>ewsey{" "}
            <span className="text-teal-500">D</span>ental <br />{" "}
            <span className="text-teal-500">P</span>ractice
          </p>
        </div>
      </a>
    </>
  );
};

export default Logo;
