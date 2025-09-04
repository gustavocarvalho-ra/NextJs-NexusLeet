
export default function InputAt() {
  return (
    <div className="relative">
      <input 
        id="input"
        name="input"
        type="text"
        className="ease focus:border-50 peer w-full rouded-md border border-white bg-transparent px-3 py-3 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-50 hover:border-slate-300 focus:outline-none"
      />
      <label 
        htmlFor="input"
        className="pointer-events-none absolute left-2.5 top-2 origin-left transform cursor-text bg-amber-800 px-1 text-sm text-red transition-all duration-150 peer-focus:-top2 peer-focus:left-2.5 peer-focus:scale-90 peer-focus:text-xs peer-focus:text-slate-50"
      >
        test input
      </label>
    </div>
  )
}