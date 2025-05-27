import Header from '../components/Header';
import LoginForm from '../components/login/LoginForm';
import RegisterForm from '../components/login/RegisterForm';

export default function MyAccont() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex w-screen h-screen">
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
}
