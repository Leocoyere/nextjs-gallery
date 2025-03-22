import { getImageById } from "@/db/queries/select";

export default async function FullPageImageView(props: {
    id: number
}) {
    const image = await getImageById(props.id);

    return (
        <div className="flex w-full h-full min-w-0">
            <div className="flex-shrink flex justify-center items-center">
                <img src={image.url} alt={image.name} className="flex-shrink object-contain" />
            </div>

            <aside className="w-48 flex flex-col flex-shrink-0 border-l">
                <div className="text-xl font-bold">
                    {image.name}
                </div>
            </aside>
        </div>
    )
}