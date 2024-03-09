const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex items-center justify-center p-20 m-4 border-slate-500 shadow-lg">
        {children}
      </div>
    </>
  );
};

export default Card;
