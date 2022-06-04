import Titles from 'components/UI/Titles';
import Image from 'next/image';

export default function Images({ onClick }) {
  const photos = [
    {
      src: '/Construccion/1.jpeg',
      alt: 'cosa 1',
      tittle: 'Cosita cositas 1'
    },
    {
      src: '/Construccion/2.jpeg',
      alt: 'cosa 2',
      tittle: 'Cosita cositas 2'
    },
    {
      src: '/Construccion/3.jpeg',
      alt: 'cosa 3',
      tittle: 'Cosita cositas 3'
    },
    {
      src: '/Construccion/4.jpeg',
      alt: 'cosa 4',
      tittle: 'Cosita cositas 4'
    },
    {
      src: '/Construccion/5.jpeg',
      alt: 'cosa 5',
      tittle: 'Cosita cositas 5'
    },
    {
      src: '/Construccion/6.jpeg',
      alt: 'cosa 6',
      tittle: 'Cosita cositas 6'
    },
    {
      src: '/Construccion/7.jpeg',
      alt: 'cosa 7',
      tittle: 'Cosita cositas 7'
    },
    {
      src: '/Construccion/8.jpeg',
      alt: 'cosa 8',
      tittle: 'Cosita cositas 8'
    },
    {
      src: '/Construccion/9.jpeg',
      alt: 'cosa 9',
      tittle: 'Cosita cositas 9'
    },
    {
      src: '/Construccion/10.jpeg',
      alt: 'cosa 10',
      tittle: 'Cosita cositas 10'
    },
    {
      src: '/Construccion/11.jpeg',
      alt: 'cosa 11',
      tittle: 'Cosita cositas 11'
    },
    {
      src: '/Construccion/12.jpeg',
      alt: 'cosa 12',
      tittle: 'Cosita cositas 12'
    },
    {
      src: '/Construccion/13.jpeg',
      alt: 'cosa 13',
      tittle: 'Cosita cositas 13'
    },
    {
      src: '/Construccion/14.jpeg',
      alt: 'cosa 14',
      tittle: 'Cosita cositas 14'
    },
    {
      src: '/Construccion/15.jpeg',
      alt: 'cosa 15',
      tittle: 'Cosita cositas 15'
    },
    {
      src: '/Construccion/17.jpeg',
      alt: 'cosa 17',
      tittle: 'Cosita cositas 17'
    },
    {
      src: '/Construccion/18.jpeg',
      alt: 'cosa 18',
      tittle: 'Cosita cositas 18'
    },
    {
      src: '/Construccion/19.jpeg',
      alt: 'cosa 19',
      tittle: 'Cosita cositas 19'
    },
    {
      src: '/Construccion/20.jpeg',
      alt: 'cosa 20',
      tittle: 'Cosita cositas 20'
    },
    {
      src: '/Construccion/21.jpeg',
      alt: 'cosa 21',
      tittle: 'Cosita cositas 21'
    },
    {
      src: '/Construccion/22.jpeg',
      alt: 'cosa 22',
      tittle: 'Cosita cositas 22'
    },
    {
      src: '/Construccion/23.jpeg',
      alt: 'cosa 23',
      tittle: 'Cosita cositas 23'
    },
    {
      src: '/Construccion/24.jpeg',
      alt: 'cosa 24',
      tittle: 'Cosita cositas 24'
    },
    {
      src: '/Construccion/25.jpeg',
      alt: 'cosa 25',
      tittle: 'Cosita cositas 25'
    },
    {
      src: '/Construccion/26.jpeg',
      alt: 'cosa 26',
      tittle: 'Cosita cositas 26'
    },
    {
      src: '/Construccion/27.jpeg',
      alt: 'cosa 27',
      tittle: 'Cosita cositas 27'
    },
    {
      src: '/Construccion/28.jpeg',
      alt: 'cosa 28',
      tittle: 'Cosita cositas 28'
    },
    {
      src: '/Construccion/29.jpeg',
      alt: 'cosa 29',
      tittle: 'Cosita cositas 29'
    },
    {
      src: '/Construccion/30.jpeg',
      alt: 'cosa 30',
      tittle: 'Cosita cositas 30'
    },
    {
      src: '/Construccion/31.jpeg',
      alt: 'cosa 31',
      tittle: 'Cosita cositas 31'
    },
    {
      src: '/Construccion/32.jpeg',
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
