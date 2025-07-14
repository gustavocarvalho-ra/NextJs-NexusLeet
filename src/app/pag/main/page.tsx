// import Footer from "./components/Footer";
// import MyAccont from "./my-account/page";
import Card from './../../components/ui/Product/Card';
import Header  from '@/app/components/Header';

export default function Main() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <h1>Tela inicial</h1>
      <div className='w-11/12 h-screen flex flex-wrap gap-4 justify-center'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
