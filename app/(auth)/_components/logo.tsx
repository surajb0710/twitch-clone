import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import RabbitLive from '../../../public/rabbit.svg';
import Image from 'next/image';

const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const Logo = () => {
  console.log('Font Class Name:', font.className);
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-4">
        <Image src={RabbitLive} alt="Rabbit" className="h-20 w-20" />
      </div>
      <div className={cn('flex flex-col items-center', font.className)}>
        <p className="text-xl font-semibold">Rabbit Live</p>
        <p className="text-sm text-muted-forground">let&apos;s go live</p>
      </div>
    </div>
  );
};
