//app/page.tsx
import { UserButton } from "@clerk/nextjs/app-beta";

export default function UserButtonComponent() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
