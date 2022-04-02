import autoprefixer from 'autoprefixer';
import Image from 'next/image';

export default function Images() {
  const photos = [
    {
      src: '/../public/Construccion/1.jpeg',
      alt: 'cosa 1',
      tittle: 'Cosita cositas 1',
    },
    {
      src: '/../public/Construccion/2.jpeg',
      alt: 'cosa 2',
      tittle: 'Cosita cositas 2',
    },
    {
      src: '/../public/Construccion/3.jpeg',
      alt: 'cosa 3',
      tittle: 'Cosita cositas 3',
    },
    {
      src: '/../public/Construccion/4.jpeg',
      alt: 'cosa 4',
      tittle: 'Cosita cositas 4',
    },
    {
      src: '/../public/Construccion/5.jpeg',
      alt: 'cosa 5',
      tittle: 'Cosita cositas 5',
    },
    {
      src: '/../public/Construccion/6.jpeg',
      alt: 'cosa 6',
      tittle: 'Cosita cositas 6',
    },
  ];
  return (
    <>
      {photos.map((photos, index) => (
        <div
          id={`item${index}`}
          key={index}
          className="carousel-item flex justify-center"
        >
          <Image
            src={photos.src}
            alt={photos.alt}
            height={400}
            width={600}
            className="w-full"
          />
        </div>
      ))}
    </>
  );
}
