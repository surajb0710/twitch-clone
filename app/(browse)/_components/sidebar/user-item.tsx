'use client';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/use-sidebar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { UserAvatar } from '@/components/user-avatar';

interface UserItemProps {
  username: string;
  imageUrl: string;
  isLive?: boolean;
}

const UserItem = ({ username, imageUrl, isLive }: UserItemProps) => {
  const pathname = usePathname();
  const { collapsed } = useSidebar((state) => state);
  const href = `/$(username)`;
  const isActive = pathname === href;

  return (
    <Button
      asChild
      variant={'ghost'}
      className={cn(
        'w-full h-12',
        collapsed ? 'justify-center' : 'justify-start',
        isActive && 'bg-accent'
      )}
    >
      <Link href={href}>
        <div
          className={cn(
            'flex items-center w-full gap-x-4',
            collapsed && 'justify-center'
          )}
        >
          <UserAvatar imageUrl={imageUrl} username={username} isLive={isLive} />
        </div>
      </Link>
    </Button>
  );
};

export default UserItem;
