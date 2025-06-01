import Header from '../components/Header';
import LoginForm from '../components/login/LoginForm';
import RegisterForm from '../components/login/RegisterForm';

import { getServerSession } from 'next-auth';
import { authOptions } from '../lib/auth';
import { redirect } from 'next/navigation';


export default async function MyAccont() {
  const session = await getServerSession(authOptions)

  if (!session) {
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

  redirect("/my-account/user");
}
