import Titles from 'components/UI/Titles';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-[url('/assets/Logo-Llamas.jpeg')] rounded-xl border-8">
      <div className="bg-slate-500/[.90]">
        <section className="text-white ">
          <Titles
            className="text-2xl rounded-l-lg p-8 bg-blue-700/[.60] text-center font-bold leading-7 text-white-900  sm:text-3xl sm:truncate"
            label={'José Llamas, Guitarras artesanas'}
          />
          <div className="flex flex-row pt-8">
            <div className="basis-1/2 flex fles-row pl-40">
              <div className="pr-8">
                <Image
                  className="rounded-full"
                  alt={'Lijado a mano'}
                  src="/assets/Llamas-perfil.jpg"
                  width={280}
                  height={150}
                />
              </div>
              <div>
                <Image
                  className="rounded-full"
                  alt={'Lijado a mano'}
                  src="/assets/Llamas-perfil2.jpg"
                  width={280}
                  height={150}
                />
              </div>
            </div>
            <div className="basis-1/2">
              <p className="p-4 text-center ">
                Hijo de un trapecista polaco y una costurera de Onil Jose crecío
                y vivió en las calles de Alicante donde forjo su sueño de ser
                musico. A muy corta edad ya manejaba intrumentos tales como la
                pandereta, el silbato y el fruncio etrusco, reservado solo para
                los musicos mas atrevidos ya que es un intrumento que, como
                todos sabemos, su ejecución conlleva un inminente peligro.
                Pronto las mieles de la musica se le quedaron cortas y comenzó
                su curiosidad por la construccion de intrumentos musicales, a lo
                cual se dedica actualmente desde su laboratorio en las
                profundidades de San Blas. Muchos son los que en las calurosas
                noches Alicantinas perciben su aquelarre de musicas extrañas y
                olor a ebano.
              </p>
            </div>
          </div>

          <article>
            <Titles
              className="text-2xl rounded-l-lg mt-8 p-8 bg-blue-700/[.60] text-center font-bold leading-7 text-white-900  sm:text-3xl sm:truncate"
              label="Guitarras hechas a mano usando las tecnicas de siempre"
            />
            <div className="flex flex-row pt-8">
              <div className="basis-1/2">
                <p className="p-4 text-center">
                  Nos hemos preocupado por que la fabricación de nuestras
                  guitarras sea de la manera mas artesanal posible.Todos los
                  componentes son lijados y tallados a mano. Cada guitarra es
                  unica y las maderas usadas las tratamos como lo que son, seres
                  vivos que necesitán respirar y cariño. Así se consiguen
                  guitarras con alma y una resonancia especial ya que gracias a
                  nuestro lijado a mano la madera no se abrasa, mantiene abierto
                  el poro y no es sometida a cambios bruscos de temperatura.
                  Puedes mirar todo el proceso de construcción de mi primera
                  guitarra{' '}
                  <Link href="/gallery">
                    <a className="hover:cursor-pointer hover:bg-gray-900 rounded">
                      aqui
                    </a>
                  </Link>
                  .
                </p>
              </div>
              <div className="basis-1/2 flex fles-row pl-40">
                <div className="pr-8">
                  <Image
                    className="rounded-full"
                    alt={'Lijado a mano'}
                    src="/Construccion/Fabricacion1.jpeg"
                    width={280}
                    height={150}
                  />
                </div>
                <div>
                  <Image
                    className="rounded-full"
                    alt={'Lijado a mano'}
                    src="/Construccion/Fabricacion2.jpeg"
                    width={280}
                    height={150}
                  />
                </div>
              </div>
            </div>
          </article>
          <article>
            <Titles
              className="text-2xl rounded-l-lg mt-8 p-8 bg-blue-700/[.60] text-center font-bold leading-7 text-white-900  sm:text-3xl sm:truncate"
              label="Elige entre una gran selección de guitarras"
            />
            <div className="flex flex-row pt-8">
              <div className="basis-1/2 flex fles-row pl-40">
                <div className="pr-8">
                  <Image
                    className="rounded-full"
                    alt={'Lijado a mano'}
                    src="/Construccion/Guitarras1.jpeg"
                    width={280}
                    height={150}
                  />
                </div>
                <div>
                  <Image
                    className="rounded-full"
                    alt={'Lijado a mano'}
                    src="/Construccion/Guitarras2.jpg"
                    width={280}
                    height={150}
                  />
                </div>
              </div>
              <div className="basis-1/2">
                <p className="p-4 text-center">
                  Tendrás la oportunidad de elegir entre decenas de guitarras
                  configuradas por mi personalmente con la combinación de
                  maderas que para mi gusto son las mas adecuadas para cada
                  situación. Desde las guitarras mas Flamencas hasta los estilos
                  mas clasicos pasando por mis experimentos, en mi afán de
                  seguir desarrollandome como musico y luthier he probado
                  infinidad de combinaciones de grosores y maderas y os ofrezco
                  mi mejor selección. Consulta{' '}
                  <Link href="/shop/guitars-configurator">
                    <a className="rounded hover:bg-gray-900">aqui</a>
                  </Link>{' '}
                  todos los modelos que tenemos en la tienda.
                </p>
              </div>
            </div>
          </article>
          <article>
            <Titles
              className="text-2xl rounded-l-lg mt-8 p-8 bg-blue-700/[.60] text-center font-bold leading-7 text-white-900  sm:text-3xl sm:truncate"
              label="Atrevete y experimenta"
            />
            <div className="flex flex-row pt-8">
              <div className="basis-1/2">
                <p className="p-4 text-center">
                  ¿Hay alguna madera que te llame la atención, crees haber dado
                  con una combinación de maderas ideal para tu estilo? no te
                  cortes y pidemelo. Cotillea entre los cientos de componentes
                  de los que disponemos y elige tu propia aventura. Fabricadas
                  bajo demanda y con los materiales que tu elijas las guitarras
                  se crearán según tus gustos y necesidades y siempre contaras
                  con el consejo de nuestros luthiers.
                </p>
              </div>
              <div className="basis-1/2 flex fles-row pl-40">
                <div className="pr-8">
                  <Image
                    className="rounded-full"
                    alt={'Lijado a mano'}
                    src="/Construccion/3.jpeg"
                    width={280}
                    height={150}
                  />
                </div>
                <div>
                  <Image
                    className="rounded-full"
                    alt={'Lijado a mano'}
                    src="/assets/Maderas/Fondo/fondo-ebano-fsc-100-especial-133€.jpg"
                    width={280}
                    height={150}
                  />
                </div>
              </div>
            </div>
          </article>
          <article>
            <Titles
              className="text-2xl rounded-l-lg mt-8 p-8 bg-blue-700/[.60] text-center font-bold leading-7 text-white-900  sm:text-3xl sm:truncate"
              label="¿Como? ¿Que todavia quieres mas?"
            />
            <div className="flex flex-row pt-8">
              <div className="basis-1/2 flex fles-row pl-40">
                <div className="pr-8">
                  <Image
                    className="rounded-full"
                    alt={'Lijado a mano'}
                    src="/Construccion/Guitarras3.jpg"
                    width={280}
                    height={150}
                  />
                </div>
                <div>
                  <Image
                    className="rounded-full"
                    alt={'Lijado a mano'}
                    src="/Construccion/Guitarras4.jpg"
                    width={280}
                    height={150}
                  />
                </div>
              </div>

              <div className="basis-1/2">
                <p className="p-4 text-center">
                  Estamos abiertos a todo, no te cortes y entra en nuestra
                  seccion de{' '}
                  <Link href="/contact">
                    <a className=" hover:bg-gray-900 rounded">contacto</a>
                  </Link>{' '}
                  y pideme lo que se te ocurra. Nos encanta jugar e investigar y
                  siempre estamos abiertos a nuevas ideas. Estoy deseando
                  aceptar nuevos retos y correr aventuras musicales.
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
