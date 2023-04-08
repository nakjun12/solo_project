function Block({
  title,

  children,
}: {
  title: string;

  children?: React.ReactNode;
}) {
  return (
    <div className="bg-block rounded-lg shadow-lg p-6 ">
      <h2 className="text-2xl font-bold pb-4 mb-12 border-b-2 border-b-button">
        {title}
      </h2>

      {children}
    </div>
  );
}

export default Block;
