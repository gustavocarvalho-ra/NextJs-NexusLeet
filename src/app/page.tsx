import Footer from "./components/Footer";
import Header from "./components/Header";
import MyAccont from "./my-account/page";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      {/* <Header /> */}
      <MyAccont />
      {/* <Footer /> */}
    </div>
  );
}
