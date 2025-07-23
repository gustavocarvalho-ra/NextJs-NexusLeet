// import Footer from "./components/Footer";
// import MyAccont from "./my-account/page";
import Card from './../../components/ui/Product/Card';
import Header  from '@/app/components/Header';

export default function Main() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <h1>Tela inicial</h1>
      <div className='w-full h-full flex justify-center'>

        <div className='w-8/12 h-screen grid grid-cols-6 gap-4 '>
          <Card Name="test" Price="99,99" Type="test"/>
          <Card Name="test" Price="99,99" Type="test"/>
          <Card Name="test" Price="99,99" Type="test"/>
          <Card Name="test" Price="99,99" Type="test"/>
          <Card Name="test" Price="99,99" Type="test"/>
          <Card Name="test" Price="99,99" Type="test"/>
          <Card Name="test" Price="99,99" Type="test"/>
          <Card Name="test" Price="99,99" Type="test"/>
          <Card Name="test" Price="99,99" Type="test"/>
          <Card Name="test" Price="99,99" Type="test"/>
          <Card Name="test" Price="99,99" Type="test"/>
          <Card Name="test" Price="99,99" Type="test"/>
        </div>
      </div>
    </div>
  );
}
