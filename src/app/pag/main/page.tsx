// import Footer from "./components/Footer";
// import MyAccont from "./my-account/page";
import Card from './../../components/ui/Product/Card';
import Header  from '@/app/components/Header';
import MenuCategoria from '@/app/components/MenuCategoria';

export default function Main() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className='w-full h-full flex'>
        <div className='w-1/4'>
          <MenuCategoria className=''/>
        </div>
        <div className='w-3/4 min-h-screen grid grid-cols-4 gap-5.5 flex-wrap '>

          <Card id={1} Name="test" Price="99,99" Type="test"/>
          <Card id={1} Name="test" Price="99,99" Type="test"/>
          <Card id={1} Name="test" Price="99,99" Type="test"/>
          <Card id={1} Name="test" Price="99,99" Type="test"/>
          <Card id={1} Name="test" Price="99,99" Type="test"/>
          <Card id={1} Name="test" Price="99,99" Type="test"/>
          <Card id={1} Name="test" Price="99,99" Type="test"/>
          <Card id={1} Name="test" Price="99,99" Type="test"/>
          <Card id={1} Name="test" Price="99,99" Type="test"/>
          <Card id={1} Name="test" Price="99,99" Type="test"/>
          <Card id={1} Name="test" Price="99,99" Type="test"/>
          <Card id={1} Name="test" Price="99,99" Type="test"/>
          <Card id={1} Name="test" Price="99,99" Type="test"/>
        </div>
      </div>
    </div>
  );
}
