import imgTren from "../assets/elinsurgente105.webp";
import imgTrenSet from "../assets/elinsurgente105.webp?w=400;800;1200&format=webp&as=srcset";
import imgTumi from "../assets/elinsurgente72.webp";
import imgTumiSet from "../assets/elinsurgente72.webp?w=400;800;1200&format=webp&as=srcset";
import imgAsos from "../assets/elinsurgente101.webp";
import imgAsosSet from "../assets/elinsurgente101.webp?w=400;800;1200&format=webp&as=srcset";
import imgEsta from "../assets/elinsurgente79.webp";
import imgEstaSet from "../assets/elinsurgente79.webp?w=400;800;1200&format=webp&as=srcset";
import imgItre from "../assets/elinsurgente122.webp";
import imgItreSet from "../assets/elinsurgente122.webp?w=400;800;1200&format=webp&as=srcset";
import imgEst2 from "../assets/elinsurgente98-1.webp";
import imgEst2Set from "../assets/elinsurgente98-1.webp?w=400;800;1200&format=webp&as=srcset";
import { SEO } from "../components/SEO";
import { FeatureCard } from "../ui/FeatureCard";
import { Button } from "../ui/Button";
import {
  TarjetaIcon,
  TiempoIcon,
  AsistenciaIcon,
  PasajerosIcon,
  LineaSeguridadIcon,
  VideovigilanciaIcon,
  BotonAscensoIcon,
  EquipajeIcon,
  SeguroViajeroIcon,
} from "../ui/icons/HowItWorksIcons";

export function ComoFunciona() {
  return (
    <div className="w-full">
      <SEO title="¿Cómo Funciona?" description="Guía paso a paso sobre cómo usar el Tren El Insurgente, recomendaciones y reglas en estaciones y trenes." />
      <section className="bg-linear-to-b from-timt-primary to-transparent py-30">
        <div className="w-full px-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-timt-text md:text-5xl">
            ¿Cómo Funciona?
          </h2>
        </div>
      </section>
      <div className="space-y-3 px-4">
        <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-col lg:flex-row lg:items-center bg-timt-bg rounded-2xl">
          {/* Contenedor de Textos (Cards) */}
          <div className="order-1 flex w-full flex-col gap-6 md:order-2 lg:order-2 lg:w-1/2">
            <FeatureCard
              icon={<TarjetaIcon className="w-14 h-14" />}
              title="Tarjeta Movilidad Integrada"
              description={
                <>
                  Puedes acceder con tu{" "}
                  <strong>tarjeta de Movilidad Integrada</strong> o adquirir tu
                  boleto en el <strong>módulo a la entrada</strong> de la
                  estación.
                </>
              }
              button={<Button to="/guia-usuario" size="sm">Más información</Button>}
            />
            <FeatureCard
              icon={<TiempoIcon className="w-14 h-14" />}
              title="Tiempo de espera y recorrido"
              description={
                <>
                  La frecuencia de El Insurgente es de <strong>10 minutos</strong>
                  . La duración de Zinacantepec - Observatorio es de{" "}
                  <strong>60 minutos</strong>.
                </>
              }
            />
            <FeatureCard
              icon={<AsistenciaIcon className="w-14 h-14" />}
              title="Atención y Asistencia"
              description={
                <>
                  Si tienes dudas, presiona el <strong>botón de ayuda</strong> en
                  el intercomunicador o busca al{" "}
                  <strong>jefe o jefa de estación</strong>.
                </>
              }
            />
          </div>

          {/* Contenedor de Imágenes */}
          <div className="order-2 flex w-full flex-col gap-4 md:order-1 lg:order-1 lg:w-1/2">
            {/* Imagen 0 (oculta en mobile, visible en md en adelante) */}
            <img
              loading="lazy"
              src={imgTren}
              srcSet={imgTrenSet}
              sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
              alt="Tren El Insurgente"
              className="hidden h-auto w-full rounded-2xl object-cover shadow-md transition-transform duration-300 hover:scale-105 md:block"
            />
            {/* Imágenes 1 y 2 (visibles siempre) */}
            <div className="flex gap-4">
              <img
                src={imgTumi}
                srcSet={imgTumiSet}
                sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
                alt="Tarjeta TUMI"
                className="h-auto w-1/2 rounded-2xl object-cover shadow-md transition-transform duration-300 hover:scale-105"
              />
              <img
                src={imgAsos}
                srcSet={imgAsosSet}
                sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
                alt="Asistencia"
                className="h-auto w-1/2 rounded-2xl object-cover shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>
        <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-col lg:flex-row lg:items-center bg-timt-bg rounded-2xl">
          <div className="order-2 flex w-full flex-col gap-4 md:order-1 lg:order-1 lg:w-1/2">
            <h1 className="text-center text-2xl tracking-tight text-timt-text md:text-5xl">
              En la Estación
            </h1>
            <p className="text-gray-600">
              Las estaciones cuentan con <strong> escaleras eléctricas </strong>{" "}
              y pantallas de información, <strong>sonorización</strong> y
              ventilación natural.
            </p>
            <img
              loading="lazy"
              className="h-auto w-11/12 rounded-2xl object-cover shadow-md transition-transform duration-300 hover:scale-105 items-center"
              src={imgEsta}
              srcSet={imgEstaSet}
              sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
              alt="img_esta"
            />
          </div>
          <div className="order-1 flex w-full flex-col gap-6 md:order-2 lg:order-2 lg:w-1/2">
            <FeatureCard
              icon={<PasajerosIcon className="w-14 h-14" />}
              title="Atención a Pasajeros"
              description={
                <>
                  Se recomienda estar atentos a las{" "}
                  <strong>indicaciones en las pantallas</strong> , los timbres
                  sonoros y el voceo para el cierre de puertas, durante el
                  ascenso y descenso de los trenes.
                </>
              }
            />
            <FeatureCard
              icon={<LineaSeguridadIcon className="w-14 h-14" />}
              title="Línea de Seguridad"
              description={
                <>
                  <strong>No rebasar</strong> la línea de color amarillo que se
                  encuentra en el borde del andén mientras esperas la llegada
                  del tren.
                </>
              }
            />
            <FeatureCard
              icon={<VideovigilanciaIcon className="w-14 h-14" />}
              title="Videovigilancia"
              description={
                <>
                  Las estaciones y trenes cuentan con un sistema de{" "}
                  <strong>videovigilancia</strong> monitoreado 24/7.
                </>
              }
            />
          </div>
        </section>
        <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-col lg:flex-row lg:items-center bg-timt-bg rounded-2xl">
          <div className="order-2 flex w-full flex-col gap-4 md:order-1 lg:order-1 lg:w-1/2">
            <h2 className="text-center text-2xl tracking-tight text-timt-text md:text-5xl">
              En el Tren
            </h2>
            <p className="text-gray-600">
              Con <strong>326 asientos ergonómicos</strong> y 2 espacios para
              sillas de ruedas. Interior del tren climatizado y pantallas de
              información.
            </p>
            <img loading="lazy" className="rounded-3xl" src={imgItre} srcSet={imgItreSet} sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px" alt="img_itren" />
          </div>
          <div className="order-1 flex w-full flex-col gap-6 md:order-2 lg:order-2 lg:w-1/2">
            <FeatureCard
              icon={<BotonAscensoIcon className="w-14 h-14" />}
              title="Botón de Ascenso y Descenso"
              description={
                <>
                  Recuerda <strong>presionar el botón</strong> para abrir y cerrar
                  la puerta del tren.
                </>
              }
            />
            <FeatureCard
              icon={<EquipajeIcon className="w-14 h-14" />}
              title="Equipaje"
              description={
                <>
                  No ingresar a los trenes con bolsas, portafolios o maletas que{" "}
                  <strong>excedan 80 x 60 x 30 cm</strong>
                </>
              }
            />
            <FeatureCard
              icon={<SeguroViajeroIcon className="w-14 h-14" />}
              title="Seguro de viajero"
              description={
                <>
                  Desde el ingreso a la estación{" "}
                  <strong>hasta la salida en la estación de destino</strong>,
                  cuentas con un seguro de viajero.
                </>
              }
            />
          </div>
        </section>
        <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-col lg:flex-row lg:items-center bg-timt-bg rounded-2xl">
          <div className="order-2 flex w-full flex-col gap-4 md:order-1 lg:order-1 lg:w-1/2">
            <h2 className="text-center text-2xl tracking-tight text-timt-text md:text-5xl">
              Recomendaciones Generales
            </h2>
            <p className="text-gray-600">
              Los Jefes y las Jefas de Estación y personal de seguridad estarán
              alertas sobre cualquier agresión, acoso o contingencia que pudiera
              surgir.
            </p>
            <img loading="lazy" className="rounded-2xl" src={imgEst2} srcSet={imgEst2Set} sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px" alt="img_est2" />
          </div>
          <div className="order-1 flex w-full flex-col gap-6 md:order-2 lg:order-2 lg:w-1/2">
            <div className="ml-4 flex flex-col">
              {/* Elemento 1 */}
              <div className="relative pl-8 pb-10 border-l-2 border-timt-primary">
                {/* Punto con centrado exacto y sombra coloreada */}
                <div className="absolute top-0 left-[.5px] -translate-x-1/2 w-6 h-6 rounded-full bg-timt-primary border-4 border-timt-bg shadow-md shadow-timt-primary/60"></div>
                <div className="-mt-1">
                  <h2 className="mb-2 text-xl font-bold text-timt-text">
                    Sólo en caso de emergencia
                  </h2>
                  <p className="text-gray-600">
                    Utilizar los dispositivos ubicados en las estaciones,
                    paraderos y trenes, tales como: palancas de emergencia,
                    extintores contra incendios, escaleras de emergencia,
                    interfón, entre otros.
                  </p>
                </div>
              </div>

              {/* Elemento 2 */}
              <div className="relative pl-8 pb-10 border-l-2 border-timt-primary">
                <div className="absolute top-0 left-[.5px] -translate-x-1/2 w-6 h-6 rounded-full bg-timt-primary border-4 border-timt-bg shadow-md shadow-timt-primary/60"></div>
                <div className="-mt-1">
                  <h2 className="mb-2 text-xl font-bold text-timt-text">
                    Acceso al Tren
                  </h2>
                  <p className="text-gray-600">
                    No obstaculizar la apertura ni cierre de las puertas de los
                    trenes, ni hacer uso indebido de los botones para el control
                    de puertas, ni de las palancas de emergencia ubicados al
                    interior de los trenes.
                  </p>
                </div>
              </div>

              {/* Elemento 3 */}
              <div className="relative pl-8 pb-10 border-l-2 border-timt-primary">
                <div className="absolute top-0 left-[.5px] -translate-x-1/2 w-6 h-6 rounded-full bg-timt-primary border-4 border-timt-bg shadow-md shadow-timt-primary/60"></div>
                <div className="-mt-1">
                  <h2 className="mb-2 text-xl font-bold text-timt-text">
                    Ruido
                  </h2>
                  <p className="text-gray-600">
                    No molestar a los usuarios con el funcionamiento de aparatos
                    de radio con alto volumen, altavoces u otro tipo de aparatos
                    sonoros, dentro de los trenes y estaciones.
                  </p>
                </div>
              </div>

              {/* Elemento 4 */}
              <div className="relative pl-8 pb-10 border-l-2 border-timt-primary">
                <div className="absolute top-0 left-[.5px] -translate-x-1/2 w-6 h-6 rounded-full bg-timt-primary border-4 border-timt-bg shadow-md shadow-timt-primary/60"></div>
                <div className="-mt-1">
                  <h2 className="mb-2 text-xl font-bold text-timt-text">
                    Animales de Compañía
                  </h2>
                  <p className="text-gray-600">
                    Solo se permitirá la transportación de mascotas (perros y
                    gatos pequeños) en trasportadora, sin molestar, ni
                    obstaculizar el flujo de los usuarios. Si es un perro de
                    asistencia, puede ingresar sin ningún problema.
                  </p>
                </div>
              </div>

              {/* Elemento Final */}
              <div className="relative pl-8 border-l-2 border-transparent">
                <div className="absolute top-0 left-[.5px] -translate-x-1/2 w-6 h-6 rounded-full bg-timt-primary border-4 border-timt-bg shadow-md shadow-timt-primary/60"></div>
                <div className="-mt-1">
                  <h2 className="mb-2 text-xl font-bold text-timt-text">
                    Alimentos y Bebidas
                  </h2>
                  <p className="text-gray-600">
                    No consumir alimentos, ni bebidas en las instalaciones o
                    trenes, con excepción de los espacios designados para dichos
                    fines en las estaciones y paraderos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
