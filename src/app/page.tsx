// import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/ui/Modal";
// import MyAccont from "./my-account/page";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <h1>Tela inicial</h1>
      {/* <MyAccont /> */}
      {/* <Footer /> */}
      <Modal />
    </div>
  );
}
