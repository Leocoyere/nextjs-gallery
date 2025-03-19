import { SignedOut, SignedIn } from '@clerk/nextjs';
import { getImages } from '../db/queries/select';

export const dynamic = 'force-dynamic';

async function Images() {
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

export default async function Home() {

	return (
		<main>
			<SignedOut>
				<h1 className="text-center text-2xl font-bold h-full w-full">Please sign in</h1>
			</SignedOut>
			<SignedIn>
				<Images />
			</SignedIn>
		</main>
	);
}
