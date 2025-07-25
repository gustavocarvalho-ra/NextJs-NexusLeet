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

        <div className='w-9/12 min-h-screen grid grid-cols-5 gap-5.5 flex-wrap '>
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
          <Card Name="test" Price="99,99" Type="test"/>
        </div>
      </div>
    </div>
  );
}
