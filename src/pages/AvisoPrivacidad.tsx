import { SEO } from "../components/SEO";

export function AvisoPrivacidad() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEO title="Aviso de Privacidad" description="Aviso de privacidad y protección de datos personales del Tren El Insurgente." />
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 border-b pb-6">
          Aviso de Privacidad
        </h1>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              RESPONSABLE
            </h2>
            <p>
              Banco Nacional de Obras y Servicios Públicos, Sociedad Nacional de
              Crédito, Institución de Banca de Desarrollo como Institución
              Fiduciaria del Fideicomiso Público número 1936 denominado Fondo
              Nacional de Infraestructura, en su carácter de Asignatario del Tren
              Interurbano México-Toluca “El Insurgente” (en lo sucesivo “Tren El
              Insurgente"), con domicilio en Av. Javier Barros Sierra 515, Santa Fe,
              Álvaro Obregón, 01219 Ciudad de México, es responsable de sus Datos
              Personales, de conformidad con lo establecido por la Ley Federal de
              Protección de Datos Personales en Posesión de Particulares y demás
              normatividad aplicable, y al respecto hace de su conocimiento el
              presente Aviso de Privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              DATOS PERSONALES
            </h2>
            <p className="mb-3">
              Para las finalidades que se mencionan más adelante le solicitamos los
              siguientes Datos Personales:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-gray-600">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número telefónico móvil</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              FINALIDADES
            </h2>
            <p className="mb-3">
              Le informamos que los Datos Personales recabados por el personal de
              operación del Tren El Insurgente serán utilizados para las siguientes
              finalidades:
            </p>
            <ul className="list-disc list-outside space-y-2 ml-8 text-gray-600 mb-4">
              <li>Identificación y contacto.</li>
              <li>Resolución de dudas sobre el servicio de transporte de pasajeros (costo, horarios, quejas, étc.).</li>
              <li>Facilitar la comunicación con el usuario.</li>
              <li>Comunicarle información sobre novedades y eventos relacionados con el Tren El Insurgente.</li>
            </ul>
            <p className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm">
              <strong className="font-semibold text-gray-800">Nota:</strong> Por favor considere que, para hacer cualquier consulta a través del
              Portal, deberá de aceptar previamente el Aviso de Privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              COOKIES Y WEB BEACONS
            </h2>
            <p className="mb-3">
              Nuestro sitio de internet <a href="https://trenelinsurgente.mx/" className="text-timt-primary hover:underline font-medium">https://trenelinsurgente.mx/</a> en lo sucesivo
              el Sitio, utiliza cookies, las cuales permiten navegar con más
              facilidad y desarrollar ciertas funciones, así como conseguir
              información sobre los hábitos de navegación del usuario del Sitio.
            </p>
            <p className="mb-3">
              Si usted desea restringir o eliminar las cookies de nuestro Sitio, por
              favor elija la opción adecuada en la configuración de su navegador de
              internet. La función de Ayuda debe indicarle cómo hacerlo. Por favor
              considere que no permitir o eliminar el uso de las cookies puede
              impedir que utilice nuestro Sitio con todas sus funciones.
            </p>
            <p>
              Nuestro Sitio utiliza Google Analytics, un servicio de análisis de la red
              proporcionado por Google, Inc., que utiliza cookies (_utma,
              _utmb, _utmc, _utmz) con la finalidad de conocer la actividad del
              usuario.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              DERECHOS ARCO Y REVOCACIÓN
            </h2>
            <p>
              Usted tiene derecho de solicitar la revocación de su consentimiento
              para el tratamiento de sus Datos Personales. Lo podrá solicitar a
              través del Sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              LÍMITES A LA DIVULGACIÓN
            </h2>
            <p>
              Si usted no desea seguir recibiendo comunicados o promociones por
              parte del Tren puede enviar un correo electrónico a través del Sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              CONTACTO
            </h2>
            <p>
              Para conocer más sobre cómo puede ejercer los derechos descritos o si
              tiene alguna duda sobre el procedimiento para ejercer dichos derechos
              o sobre cómo limitar el uso o divulgación de sus datos personales, por
              favor envíe un mensaje a través del Sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              MODIFICACIÓN DEL AVISO
            </h2>
            <p>
              El responsable puede modificar el presente Aviso de Privacidad. Dicha
              modificación aparecerá publicada en{' '}
              <a href="https://trenelinsurgente.mx/aviso-de-privacidad" className="text-timt-primary hover:underline font-medium break-all">
                https://trenelinsurgente.mx/aviso-de-privacidad
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 font-medium">
            Última actualización: 11 de Octubre de 2023
          </p>
        </div>
      </div>
    </div>
  );
}
