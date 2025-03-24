import { getImageById } from "@/db/queries/select";
import { clerkClient } from "@clerk/nextjs/server";

export default async function FullPageImageView(props: {
    id: number
}) {
    const image = await getImageById(props.id);
    const client = await clerkClient();
    const uploaderInfo = await client.users.getUser(image.userId);

    return (
        <div className="flex w-full h-full min-w-0">
            <div className="flex-shrink flex justify-center items-center w-full">
                <img src={image.url} alt={image.name} className="flex-shrink object-contain" />
            </div>

            <aside className="w-48 flex flex-col flex-shrink-0 border-l">
                <div className="text-lg border-b text-center p-2">
                    {image.name}
                </div>

                <div className="flex flex-col p-2">
                    <span>Uploaded By:</span>
                    <span>{uploaderInfo.fullName}</span>
                </div>

                <div className="flex flex-col p-2">
                    <span>Created On:</span>
                    <span>{image.createdAt.toLocaleDateString()}</span>
                </div>

            </aside>
        </div>
    )
}