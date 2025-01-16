import { UserButton } from '@clerk/nextjs';

// 2:04:46

export default function Home() {
  return (
    <div>
      only Authenticated users can see this
      <UserButton />
    </div>
  );
}
