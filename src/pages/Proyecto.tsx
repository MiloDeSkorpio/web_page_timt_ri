import imgEsca from "../assets/elinsurgente78.webp";
import imgEscaSet from "../assets/elinsurgente78.webp?w=400;800;1200&format=webp&as=srcset";
import imgAnde from "../assets/elinsurgente97.webp";
import imgAndeSet from "../assets/elinsurgente97.webp?w=400;800;1200&format=webp&as=srcset";
import imgSena from "../assets/elinsurgente76.webp";
import imgSenaSet from "../assets/elinsurgente76.webp?w=400;800;1200&format=webp&as=srcset";
import imgCond from "../assets/elinsurgente110.webp";
import imgCondSet from "../assets/elinsurgente110.webp?w=400;800;1200&format=webp&as=srcset";
import imgAsie from "../assets/elinsurgente25.webp";
import imgAsieSet from "../assets/elinsurgente25.webp?w=400;800;1200&format=webp&as=srcset";
import imgAsi2 from "../assets/IMG_6105.webp";
import imgAsi2Set from "../assets/IMG_6105.webp?w=400;800;1200&format=webp&as=srcset";
import imgSimu from "../assets/elinsurgente21.webp";
import imgSimuSet from "../assets/elinsurgente21.webp?w=400;800;1200&format=webp&as=srcset";
import imgPane from "../assets/elinsurgente1.webp";
import imgPaneSet from "../assets/elinsurgente1.webp?w=400;800;1200&format=webp&as=srcset";
import imgCcop from "../assets/elinsurgente9.webp";
import imgCcopSet from "../assets/elinsurgente9.webp?w=400;800;1200&format=webp&as=srcset";

import { SEO } from "../components/SEO";
import { FeatureCard } from "../ui/FeatureCard";
import { StatsRow } from "../ui/StatsRow";
import {
  SolucionesIcon,
  EstacionesIcon,
  AccesibilidadIcon,
  PasajerosTrenIcon,
  ComodidadIcon,
  FrenosIcon,
  PresenciaIcon,
  CamarasIcon,
  ComunicacionIcon,
  IncendiosIcon,
} from "../ui/icons/ProjectIcons";

export function Proyecto() {
  return (
    <div className="w-full">
      <SEO title="El Proyecto" description="Conoce la infraestructura, tecnología y características del Tren El Insurgente." />
      <section className="bg-linear-to-b from-timt-primary to-transparent py-30">
        <div className="px-6">
          <h1 className="text-center text-3xl font-extrabold tracking-tight text-timt-text md:text-5xl">
            El Proyecto
          </h1>
        </div>
      </section>
      <div className="space-y-3 px-4">
        <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center bg-timt-bg rounded-2xl">
          <div className="order-2 lg:order-1 w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4 h-auto md:h-125">
            <img
              loading="lazy"
              className="hidden md:block md:col-span-2 md:row-span-2 h-full w-full rounded-2xl object-cover shadow-md transition-transform duration-300 hover:scale-105"
              src={imgEsca}
              srcSet={imgEscaSet}
              sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
              alt="img_esca"
            />
            <img
              loading="lazy"
              className="col-span-1 md:col-span-1 md:row-span-1 h-48 md:h-full w-full rounded-2xl object-cover shadow-md transition-transform duration-300 hover:scale-105"
              src={imgAnde}
              srcSet={imgAndeSet}
              sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
              alt="img_ande"
            />
            <img
              loading="lazy"
              className="col-span-1 md:col-span-1 md:row-span-1 h-48 md:h-full w-full rounded-2xl object-cover shadow-md transition-transform duration-300 hover:scale-105"
              src={imgSena}
              srcSet={imgSenaSet}
              sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
              alt="img_sena"
            />
          </div>
          <div className="order-1 lg:order-2 flex w-full flex-col gap-8 lg:w-1/2">
            <h1 className="text-center text-3xl font-extrabold tracking-tight text-timt-text md:text-5xl mb-2">
              Infraestructura
            </h1>
            <FeatureCard
              layout="column"
              icon={<SolucionesIcon className="w-16 h-16" />}
              title="Soluciones Estructurales"
              description="58 km de viaducto con una catenaria de 25,000 VCA y 7 estaciones elevadas, listas para ti."
            />
            <FeatureCard
              layout="column"
              icon={<EstacionesIcon className="w-16 h-16" />}
              title="Estaciones de 200 metros"
              description="Las estaciones cuentan con escaleras eléctricas y pantallas de información, sonorización y ventilación natural."
            />
            <FeatureCard
              layout="column"
              icon={<AccesibilidadIcon className="w-16 h-16" />}
              title="Accesibilidad"
              description="Estaciones con rampas, elevadores y cinta podotáctil. Los trenes cuentan con espacios designados para personas de movilidad reducida."
            />
          </div>
        </section>
        <StatsRow
          stats={[
            {
              id: 1,
              value: 4.9,
              duration: 2000,
              unit: "km",
              label: "de Viaducto",
            },
            {
              id: 2,
              value: 48.4,
              duration: 2500,
              unit: "km",
              label: "de Viaducto Elevado",
            },
            {
              id: 3,
              value: 4.9,
              duration: 2000,
              unit: "km",
              label: "de Bitúnel",
            },
          ]}
        />
        <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center bg-timt-bg rounded-2xl">
          <div className="order-2 lg:order-1 w-full lg:w-1/2 flex flex-col md:grid md:grid-cols-3 gap-4 h-auto md:h-125">
            <img
              loading="lazy"
              className="md:col-span-2 md:row-span-2 h-48 md:h-full w-full rounded-2xl object-cover shadow-md transition-transform duration-300 hover:scale-105"
              src={imgCond}
              srcSet={imgCondSet}
              sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
              alt="img_cond"
            />
            <img
              loading="lazy"
              className="md:col-span-1 md:row-span-1 h-48 md:h-full w-full rounded-2xl object-cover shadow-md transition-transform duration-300 hover:scale-105"
              src={imgAsie}
              srcSet={imgAsieSet}
              sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
              alt="img_asie"
            />
            <img
              loading="lazy"
              className="md:col-span-1 md:row-span-1 h-48 md:h-full w-full rounded-2xl object-cover shadow-md transition-transform duration-300 hover:scale-105"
              src={imgAsi2}
              srcSet={imgAsi2Set}
              sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
              alt="img_asi2"
            />
          </div>
          <div className="order-1 lg:order-2 flex w-full flex-col gap-6 lg:w-1/2">
            <h1 className="text-center text-3xl font-extrabold tracking-tight text-timt-text md:text-5xl mb-4">
              Tecnología en Trenes
            </h1>
            <FeatureCard
              layout="column"
              icon={<PasajerosTrenIcon className="w-16 h-16" />}
              title="719 pasajeros por tren"
              description="Con 326 asientos ergonómicos y 2 espacios para sillas de ruedas."
            />
            <FeatureCard
              layout="column"
              icon={<ComodidadIcon className="w-16 h-16" />}
              title="Comodidad"
              description="Interior del tren climatizado y Pantallas de información y voceo."
            />
            <FeatureCard
              layout="column"
              icon={<FrenosIcon className="w-16 h-16" />}
              title="3 tipos de frenos"
              description="Electroneumático, Electrodinámico regenerativo y Magnético para una mayor adherencia en pendientes."
            />
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              layout="gradient"
              icon={<PresenciaIcon className="w-full h-full" />}
              title="Dispositivo de presencia"
              description="Sistema de seguridad que detiene el tren en ausencia del conductor."
            />
            <FeatureCard
              layout="gradient"
              icon={<CamarasIcon className="w-full h-full" />}
              title="Cámaras de Seguridad"
              description="Cámara frontal y retrovisora, así como equipo de videovigilancia en todo el tren."
            />
            <FeatureCard
              layout="gradient"
              icon={<ComunicacionIcon className="w-full h-full" />}
              title="Comunicación"
              description="Con tierra mediante red inalámbrica de banda ancha y Radio GSM-R."
            />
            <FeatureCard
              layout="gradient"
              icon={<IncendiosIcon className="w-full h-full" />}
              title="Detección de Incendios"
              description="Sistema de detección de incendios con sensores en todos los vagones."
            />
          </div>
        </section>
        <StatsRow
          stats={[
            {
              id: 1,
              value: 120,
              duration: 2000,
              unit: "km",
              label: "de Velocidad Máxima",
            },
            {
              id: 2,
              value: 25000,
              duration: 2500,
              unit: "VCA",
              label: "de Catenaria",
            },
            {
              id: 3,
              value: 98.97,
              duration: 2000,
              unit: "m",
              label: "de Longitud",
            },
          ]}
        />
        <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center bg-timt-bg rounded-2xl">
          <div className="order-2 lg:order-1 w-full lg:w-1/2 flex flex-col md:grid md:grid-cols-3 gap-4 h-auto md:h-125">
            <img
              loading="lazy"
              className="md:col-span-2 md:row-span-2 h-48 md:h-full w-full rounded-2xl object-cover shadow-md transition-transform duration-300 hover:scale-105"
              src={imgSimu}
              srcSet={imgSimuSet}
              sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
              alt="img_simu"
            />
            <img
              loading="lazy"
              className="md:col-span-1 md:row-span-1 h-48 md:h-full w-full rounded-2xl object-cover shadow-md transition-transform duration-300 hover:scale-105"
              src={imgPane}
              srcSet={imgPaneSet}
              sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
              alt="img_pane"
            />
            <img
              loading="lazy"
              className="md:col-span-1 md:row-span-1 h-48 md:h-full w-full rounded-2xl object-cover shadow-md transition-transform duration-300 hover:scale-105"
              src={imgCcop}
              srcSet={imgCcopSet}
              sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
              alt="img_ccop"
            />
          </div>
          <div className="order-1 lg:order-2 flex w-full flex-col gap-4 lg:w-1/2">
            <h1 className="text-center text-3xl font-extrabold tracking-tight text-timt-text md:text-5xl mb-4">
              Centro de Control y Mantenimiento
            </h1>
            <div className="text-left mt-2">
              <h2 className="text-xl font-bold text-timt-primary mb-1">
                Centro de Control y Seguridad
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Se podrá observar en tiempo real el comportamiento de las
                estructuras de obra civil de la línea como viaductos, columnas,
                trabes, estructuras y puentes.
              </p>
            </div>
            <div className="text-left mt-2">
              <h2 className="text-xl font-bold text-timt-primary mb-1">
                Mantenimiento
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Talleres para mantenimiento mayor y menor de todos los trenes.
              </p>
            </div>
            <div className="text-left mt-2">
              <h2 className="text-xl font-bold text-timt-primary mb-1">
                Capacitación
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Capacitación continua a los reguladores del Centro de Control y
                a los conductores mediante un simulador de cabina de tren.
              </p>
            </div>
          </div>
        </section>
        <StatsRow
          stats={[
            {
              id: 1,
              value: 131,
              duration: 2000,
              unit: "personas",
              label: "Capacitadas",
            },
            {
              id: 2,
              value: 85,
              duration: 2500,
              prefix: "+",
              unit: "cursos",
              label: "Técnico Operativos",
            },
            {
              id: 3,
              value: 13000,
              duration: 2000,
              prefix: "+",
              unit: "hrs",
              label: "de Capacitación",
            },
          ]}
        />
      </div>
    </div>
  );
}
