// import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/ui/Product/Card";
// import MyAccont from "./my-account/page";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <h1>Tela inicial</h1>
      <Card />
      {/* <MyAccont /> */}
      {/* <Footer /> */}
    </div>
  );
}
