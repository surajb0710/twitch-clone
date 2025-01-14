import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      only Authenticated users can see this
      <UserButton />
    </div>
  );
}
