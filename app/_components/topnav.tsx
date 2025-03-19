import { SignInButton } from "@clerk/nextjs";

import { SignedOut, UserButton } from "@clerk/nextjs";

import { SignedIn } from "@clerk/nextjs";

export function TopNav() {
    return (
        <nav className="flex justify-between items-center p-4 font-semibold">
            <h1>Gallery</h1>

            <div>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
            </div>
        </nav>
    );
  }
  