import { getImageById } from "@/db/queries/select";

export default async function ImageModal({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;

    const idAsNumber = parseInt(id);

    if (isNaN(idAsNumber)) {
        throw new Error("Invalid image id");
    }

    const image = await getImageById(idAsNumber);

    return (
        <div>
            <img src={image.url} alt={image.name} />
        </div>
    )
}