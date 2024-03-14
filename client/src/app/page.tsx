import ButtonRedirect from '@/app/components/ButtonRedirect';
import { ModeToggle } from '@/components/toggle-mode';
import Link from 'next/link';
import { redirect } from 'next/navigation';

// const isAuth = false;
export default function Home() {
  // if (!isAuth) {
  //   redirect('/login');
  // }
  return (
    <main>
      <Link
        href='/login'
        className='text-white h-10 w-20 bg-green-500 p-6 text-center items-center flex rounded'
      >
        Login
      </Link>
      <ModeToggle></ModeToggle>
      <ButtonRedirect></ButtonRedirect>
    </main>
  );
}
