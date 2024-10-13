"use client"; // Required for Clerk hooks and client components

import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-700 py-4 px-6 flex items-center justify-between shadow-md z-50">
      <div className="flex items-center">
        <Link href="/">
          <div className="text-lg uppercase font-bold text-white">
            Clerk Auth App
          </div>
        </Link>
      </div>

      <div className="text-white flex items-center">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="text-gray-300 hover:text-white mr-4">
              Sign In
            </button>
          </SignInButton>
          <Link href="/sign-up" className="text-gray-300 hover:text-white">
            Sign Up
          </Link>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;
