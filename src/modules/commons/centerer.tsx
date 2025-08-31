const Centerer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full px-6  lg:px-60 relative flex justify-center">
        {children}
      </div>
    </>
  );
};

export default Centerer;
