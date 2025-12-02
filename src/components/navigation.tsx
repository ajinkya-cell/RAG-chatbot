import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Navigation = () => {
  return (
    <nav className="border-b max-w-4xl  backdrop-blur-sm w-4xl mb-5 rounded-4xl">
      <div className="flex container h-16 items-center justify-between px-4   mx-auto">
        {/* <div className="text-xl font-semibold">RAG Chatbot</div> */}
        <Image src="/pages-pro.png" alt="RAG - chatbot" width="150" height="150"/>
        <div className="flex gap-2">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost">Sign In</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button>Sign Up</Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <SignOutButton>
              <Button variant="outline">Sign Out</Button>
              
            </SignOutButton>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};