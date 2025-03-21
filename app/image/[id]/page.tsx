export default async function ImageModal({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    
    return (
        <div>{id}</div>
    )
}