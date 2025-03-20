"use client"

import { SignInButton } from "@clerk/nextjs";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import { UploadButton } from "@/utils/uploadthing";
import { useRouter } from "next/navigation";

export function TopNav() {
    const router = useRouter();
    
    return (
        <nav className="flex justify-between items-center p-4 font-semibold border-b border-gray-200">
            <h1 className="text-2xl">Gallery</h1>

            <div className="flex flex-row">
                <SignedIn>
                    <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {
                        router.refresh()
                    }} />
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
            </div>
        </nav>
    );
  }
  