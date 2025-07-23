
interface CardProps {
  Name: React.ReactNode;
  Price: React.ReactNode;
  Type: React.ReactNode;
}

export default function Card({Name, Price, Type}: CardProps) {
  return (
    <div className="bg-(--mod) min-w-65 h-100 p-3 flex items-center flex-col gap-3 rounded-lg transition duration-250 ease-in-out hover:shadow-lg/30 cursor-pointer">
      <div className="bg-amber-100 w-[90%] h-3/4 rounded-lg"></div>
      <div className="bg-amber-100 w-full h-1/4">
        <h1>{Name}</h1>
        <h2>{Price}</h2>
        <h3>{Type}</h3>
      </div>
    </div>
  )
}