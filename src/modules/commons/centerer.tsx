const Centerer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full px-6 md:px-30 lg:px-60 relative">{children}</div>
    </>
  );
};

export default Centerer;
