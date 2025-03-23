import { SignInButton } from "@clerk/nextjs";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";   
import SimpleUploadButton from "./simple-upload-button";

export function TopNav() {    
    return (
        <nav className="flex justify-between items-center p-4 font-semibold border-b border-gray-200">
            <h1 className="text-2xl">Gallery</h1>

            <div className="flex flex-row gap-4 items-center">
                <SignedIn>
                    <SimpleUploadButton />
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
            </div>
        </nav>
    );
  }
  