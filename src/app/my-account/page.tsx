import LoginForm from '../components/login/LoginForm';
import RegisterForm from '../components/login/RegisterForm';

export default function MyAccont() {
  return (
    <div className="w-screen h-screen flex">
      <LoginForm />
      <RegisterForm />
    </div>
  );
}
