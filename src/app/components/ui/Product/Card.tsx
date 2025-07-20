

export default function Card(Name, Price, Type) {
  return (
    <div className="bg-amber-600 w-full h-full p-2 flex items-center flex-col gap-2">
      <div className="bg-amber-100 w-[80%] h-3/4"></div>
      <div className="bg-amber-100 w-full h-1/4"></div>
    </div>
  )
}