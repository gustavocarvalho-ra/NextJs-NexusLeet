
interface CardProps {
  Name: React.ReactNode;
  Price: React.ReactNode;
  Type: React.ReactNode;
}

export default function Card({Name, Price, Type}: CardProps) {
  return (
    <div className="bg-amber-600 w-full h-full p-2 flex items-center flex-col gap-2">
      <div className="bg-amber-100 w-[80%] h-3/4 rounded-lg"></div>
      <div className="bg-amber-100 w-full h-1/4">
        <h1>{Name}</h1>
        <h2>{Price}</h2>
        <h3>{Type}</h3>
      </div>
    </div>
  )
}