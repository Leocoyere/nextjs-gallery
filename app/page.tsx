import { getImages } from '../db/queries/select';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images].map((image, index) => (
        <div key={image.name + index} className="w-48 flex flex-col">
          <img src={image.url} alt={`image-${image.id}`} />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}
