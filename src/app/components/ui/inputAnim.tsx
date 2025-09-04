
export default function InputAt() {
  return (
    <div className="relative">
      <input 
        required
        id="input"
        name="input"
        type="text"
        className="px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 peer focus:border-red-700 bg-inherit"
      />
      <label 
        htmlFor="input"
        className="absolute left-0 top-2 px-1 text-lg tracking-wide peer-focus:text-red-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-200 ml-2 peer-valid:text-sm peer-valid:-translate-y-5"
      >
        test input
      </label>
    </div>
  )
}