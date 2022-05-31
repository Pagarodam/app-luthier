import Titles from 'components/UI/Titles';
import Image from 'next/image';

export default function Images({ onClick }) {
  const photos = [
    {
      src: '/../public/Construccion/1.jpeg',
      alt: 'cosa 1',
      tittle: 'Cosita cositas 1'
    },
    {
      src: '/../public/Construccion/2.jpeg',
      alt: 'cosa 2',
      tittle: 'Cosita cositas 2'
    },
    {
      src: '/../public/Construccion/3.jpeg',
      alt: 'cosa 3',
      tittle: 'Cosita cositas 3'
    },
    {
      src: '/../public/Construccion/4.jpeg',
      alt: 'cosa 4',
      tittle: 'Cosita cositas 4'
    },
    {
      src: '/../public/Construccion/5.jpeg',
      alt: 'cosa 5',
      tittle: 'Cosita cositas 5'
    },
    {
      src: '/../public/Construccion/6.jpeg',
      alt: 'cosa 6',
      tittle: 'Cosita cositas 6'
    },
    {
      src: '/../public/Construccion/7.jpeg',
      alt: 'cosa 7',
      tittle: 'Cosita cositas 7'
    },
    {
      src: '/../public/Construccion/8.jpeg',
      alt: 'cosa 8',
      tittle: 'Cosita cositas 8'
    },
    {
      src: '/../public/Construccion/9.jpeg',
      alt: 'cosa 9',
      tittle: 'Cosita cositas 9'
    },
    {
      src: '/../public/Construccion/10.jpeg',
      alt: 'cosa 10',
      tittle: 'Cosita cositas 10'
    },
    {
      src: '/../public/Construccion/11.jpeg',
      alt: 'cosa 11',
      tittle: 'Cosita cositas 11'
    },
    {
      src: '/../public/Construccion/12.jpeg',
      alt: 'cosa 12',
      tittle: 'Cosita cositas 12'
    },
    {
      src: '/../public/Construccion/13.jpeg',
      alt: 'cosa 13',
      tittle: 'Cosita cositas 13'
    },
    {
      src: '/../public/Construccion/14.jpeg',
      alt: 'cosa 14',
      tittle: 'Cosita cositas 14'
    },
    {
      src: '/../public/Construccion/15.jpeg',
      alt: 'cosa 15',
      tittle: 'Cosita cositas 15'
    },
    {
      src: '/../public/Construccion/17.jpeg',
      alt: 'cosa 17',
      tittle: 'Cosita cositas 17'
    },
    {
      src: '/../public/Construccion/18.jpeg',
      alt: 'cosa 18',
      tittle: 'Cosita cositas 18'
    },
    {
      src: '/../public/Construccion/19.jpeg',
      alt: 'cosa 19',
      tittle: 'Cosita cositas 19'
    },
    {
      src: '/../public/Construccion/20.jpeg',
      alt: 'cosa 20',
      tittle: 'Cosita cositas 20'
    },
    {
      src: '/../public/Construccion/21.jpeg',
      alt: 'cosa 21',
      tittle: 'Cosita cositas 21'
    },
    {
      src: '/../public/Construccion/22.jpeg',
      alt: 'cosa 22',
      tittle: 'Cosita cositas 22'
    },
    {
      src: '/../public/Construccion/23.jpeg',
      alt: 'cosa 23',
      tittle: 'Cosita cositas 23'
    },
    {
      src: '/../public/Construccion/24.jpeg',
      alt: 'cosa 24',
      tittle: 'Cosita cositas 24'
    },
    {
      src: '/../public/Construccion/25.jpeg',
      alt: 'cosa 25',
      tittle: 'Cosita cositas 25'
    },
    {
      src: '/../public/Construccion/26.jpeg',
      alt: 'cosa 26',
      tittle: 'Cosita cositas 26'
    },
    {
      src: '/../public/Construccion/27.jpeg',
      alt: 'cosa 27',
      tittle: 'Cosita cositas 27'
    },
    {
      src: '/../public/Construccion/28.jpeg',
      alt: 'cosa 28',
      tittle: 'Cosita cositas 28'
    },
    {
      src: '/../public/Construccion/29.jpeg',
      alt: 'cosa 29',
      tittle: 'Cosita cositas 29'
    },
    {
      src: '/../public/Construccion/30.jpeg',
      alt: 'cosa 30',
      tittle: 'Cosita cositas 30'
    },
    {
      src: '/../public/Construccion/31.jpeg',
      alt: 'cosa 31',
      tittle: 'Cosita cositas 31'
    },
    {
      src: '/../public/Construccion/32.jpeg',
      alt: 'cosa 32',
      tittle: 'Cosita cositas 32'
    }
  ];

  return (
    <>
      <Titles
        className="text-2xl rounded-l-lg mt-2 p-8 bg-blue-700 text-center font-bold leading-7 text-white-900  sm:text-3xl sm:truncate"
        label={'Proceso de fabricación'}
      />
      <div className="flex flex-wrap m-2">
        {photos.map((photos, index) => (
          <div
            onClick={() => onClick(photos.src, photos.alt)}
            id={`item${index}`}
            key={index}
            className=" hover:cursor-pointer border-4 rounded m-2"
          >
            <Image src={photos.src} alt={photos.alt} height={400} width={600} />
          </div>
        ))}
      </div>
    </>
  );
}
