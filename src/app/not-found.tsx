import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="bg-black flex justify-center items-center flex-col w-screen h-screen">
        <div>
          <Image src={"/not.png"} alt="Image 404" width={650} height={650} />
        </div>
        <Link 
          href={'/'} 
          className="w-xl bg-[#f00] hover:bg-amber-200 ease-in-out duration-250 text-3xl text-(#000) rounded-lg flex justify-center"
        >
          Voltar para o menu principal
        </Link>
      </main>
    </>
  );
}