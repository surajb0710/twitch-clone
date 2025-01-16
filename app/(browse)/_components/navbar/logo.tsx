import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import RabbitLive from '../../../../public/rabbit.svg';
import Image from 'next/image';
import Link from 'next/link';

const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden lg:flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-2">
          <Image src={RabbitLive} alt="Rabbit" className="h-10 w-10" />
        </div>
        <div className={cn(font.className)}>
          <p className="text-lg font-semibold">Rabbit Live</p>
          <p className="text-xs text-muted-forground">let&apos;s go live</p>
        </div>
      </div>
    </Link>
  );
};
