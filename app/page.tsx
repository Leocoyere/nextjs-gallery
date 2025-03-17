import { getImages } from '../db/queries/select';

export default async function Home() {
  const images = await getImages();

  if (!images) {
    return {
      notFound: true,
    }
  }

  return (
    <div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images].map((image, index) => (
        <div key={image.id + index} className="w-48">
          <img src={image.url} alt={`image-${image.id}`} />
        </div>
      ))}
    </div>
  );
}
