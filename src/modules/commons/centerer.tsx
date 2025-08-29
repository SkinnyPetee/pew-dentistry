const Centerer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full px-6 px-6 lg:px-60 relative">{children}</div>
    </>
  );
};

export default Centerer;
