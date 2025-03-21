import { getImageById } from "@/db/queries/select";
import { Modal } from "./modal";
import FullPageImageView from "@/components/full-image-page";

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
        <Modal>
            <FullPageImageView id={idAsNumber} />
        </Modal>
    )
}