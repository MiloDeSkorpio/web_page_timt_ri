import icoTumi from "../assets/Asset-26.svg";
import icoTari from "../assets/ico_32.svg";
import icoHora from "../assets/ico_25.svg";
import icoUrie from "../assets/ico_30.svg";
import icoUcdi from "../assets/ico_31.svg";
import icoPrci from "../assets/Asset-27.svg";
import icoIseo from "../assets/Asset-24.svg";
import icoRegu from "../assets/ico_17.svg";
import icoDige from "../assets/Asset-33.svg";
import { SEO } from "../components/SEO";

interface ListItemsProps {
  num: string;
  text: string;
}

const ListItem = ({ num, text }: ListItemsProps) => (
  <div className="flex gap-4 items-start group">
    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-timt-primary/10 text-timt-primary font-bold text-sm shrink-0 transition-colors group-hover:bg-timt-primary/20">
      {num}
    </span>
    <p className="flex-1 mt-0.5">{text}</p>
  </div>
);

export function Reglamento() {
  return (
    <div className="w-full bg-white">
      <SEO title="Reglamento" description="Reglamento de uso del Tren El Insurgente. Normas y responsabilidades para un viaje seguro." />
      <section className="bg-linear-to-b from-timt-primary to-transparent py-24 md:py-30">
        <div className="w-full px-6">
          <h1 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight text-timt-text">
            Reglamento
          </h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 divide-y divide-gray-200">
        {/* Medios de acceso y uso */}
        <section className="flex flex-col md:flex-row py-12 gap-8 md:gap-12">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left gap-4 shrink-0">
            <div className="p-4 bg-gray-50 rounded-2xl shadow-xs border border-gray-100">
              <img
                src={icoTumi}
                alt="ico_tumi"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Medios de acceso y uso
            </h2>
          </div>
          <div className="w-full md:w-2/3 flex flex-col space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            <ListItem
              num="1"
              text="El acceso al servicio se realiza únicamente con la Tarjeta Única de Movilidad Integrada (TUMI) o con código QR, los cuales son personales, intransferibles y válidos para un solo viaje; no está permitido ingresar o pagar el acceso de más de una persona con una misma TUMI o código QR."
            />
            <ListItem
              num="2"
              text="Las personas usuarias deberán registrar su ingreso y salida pasando la TUMI o el código QR por los dispositivos de control en los torniquetes, lo que permitirá registrar el inicio y fin del trayecto y realizar el cobro correspondiente conforme a la estación de ingreso y salida."
            />
            <ListItem
              num="3"
              text="La TUMI y el código QR, así como el saldo o información contenida en ellos, son responsabilidad de la persona usuaria; en caso de robo o extravío, el TIMT no es responsable de este evento, por tanto, no es posible su restitución gratuita, devolución o reembolso."
            />
            <ListItem
              num="4"
              text="El código QR deberá ser conservado por la persona usuaria en buen estado y es válido únicamente para ingresar en la estación de origen y salir en la estación de destino indicada al momento de su compra."
            />
            <ListItem
              num="5"
              text="Para cualquier reclamación respecto a un saldo adquirido y no reflejado en la TUMI en las Máquinas de Venta y Recarga ubicadas al interior del TIMT, deberá entregar el recibo emitido por la máquina al momento del incidente, al personal del Área de Estaciones para las acciones conducentes."
            />
          </div>
        </section>

        {/* Tarifas */}
        <section className="flex flex-col md:flex-row py-12 gap-8 md:gap-12">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left gap-4 shrink-0">
            <div className="p-4 bg-gray-50 rounded-2xl shadow-xs border border-gray-100">
              <img
                src={icoTari}
                alt="ico_tari"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Tarifas</h2>
          </div>
          <div className="w-full md:w-2/3 flex flex-col space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            <ListItem
              num="1"
              text="Las tarifas máximas aplicables al servicio público de transporte ferroviario del TIMT, se cobrarán conforme a la distancia recorrida por las personas usuarias. Estas tarifas estarán publicadas en medios electrónicos y/o en las estaciones para consulta de las personas usuarias."
            />
            <ListItem
              num="2"
              text="No existen tarifas preferenciales, descuentos ni exenciones."
            />
            <ListItem
              num="3"
              text="Toda persona usuaria menor de edad que mida menos de 115 centímetros de estatura, no pagará pasaje."
            />
          </div>
        </section>

        {/* Horario */}
        <section className="flex flex-col md:flex-row py-12 gap-8 md:gap-12">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left gap-4 shrink-0">
            <div className="p-4 bg-gray-50 rounded-2xl shadow-xs border border-gray-100">
              <img
                src={icoHora}
                alt="ico_hora"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Horario</h2>
          </div>
          <div className="w-full md:w-2/3 flex flex-col space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            <ListItem
              num="1"
              text="El horario regular de operaciones del TIMT es de lunes a viernes de 05:00 a 00:00 horas; los sábados de 06:00 a 00:00 horas; y los domingos y días festivos de 07:00 a 00:00 horas."
            />
          </div>
        </section>

        {/* Uso responsable */}
        <section className="flex flex-col md:flex-row py-12 gap-8 md:gap-12">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left gap-4 shrink-0">
            <div className="p-4 bg-gray-50 rounded-2xl shadow-xs border border-gray-100">
              <img
                src={icoUrie}
                alt="ico_urie"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Uso responsable de las instalaciones, equipos y trenes
            </h2>
          </div>
          <div className="w-full md:w-2/3 flex flex-col space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            <ListItem
              num="1"
              text="Para garantizar su seguridad, las personas usuarias deberán transitar en las instalaciones, sus accesos y salidas, en el sentido que se encuentre señalado o el que sea indicado por el personal del TIMT; el uso de las instalaciones y trenes será dentro de los horarios de servicio y exclusivamente para fines de transportación."
            />
            <ListItem
              num="2"
              text="Las personas usuarias deberán caminar con precaución en todo momento, evitando correr o empujar, especialmente en escaleras, andenes, pasillos, trenes, escaleras fijas, eléctricas o cualquier otro lugar de las instalaciones."
            />
            <ListItem
              num="3"
              text="Si la persona usuaria es menor de 12 años, sólo podrá hacer uso del TIMT acompañada por una persona mayor de edad."
            />
            <ListItem
              num="4"
              text="Por motivos de seguridad, no deberá rebasar la línea de seguridad (de color amarillo) que se encuentra marcada en proximidad de los bordes de los andenes y sólo podrá hacerlo para entrar o salir del tren."
            />
            <ListItem
              num="5"
              text="El ascenso o descenso de los coches únicamente podrá realizarse cuando el botón de la puerta se encuentre iluminado en color verde."
            />
            <ListItem
              num="6"
              text="Antes de abordar el tren, permita bajar a las persona usuarias, siguiendo el principio de «Antes de entrar, dejar salir»."
            />
            <ListItem
              num="7"
              text="Los dispositivos de emergencia instalados en los andenes y trenes, los extintores de incendio, interfonos, entre otros, sólo podrán ser operados por las personas usuarias en situations de emergencia."
            />
            <ListItem
              num="8"
              text="Para agilizar los flujos, en las escaleras eléctricas deberá permanecer de pie del lado derecho, permitiendo el paso rápido por el lado izquierdo."
            />
            <ListItem
              num="9"
              text="La basura y desperdicios de toda naturaleza deberán ser resguardados para su disposición final fuera de las instalaciones del TIMT."
            />
          </div>
        </section>

        {/* Usuarios con discapacidad */}
        <section className="flex flex-col md:flex-row py-12 gap-8 md:gap-12">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left gap-4 shrink-0">
            <div className="p-4 bg-gray-50 rounded-2xl shadow-xs border border-gray-100">
              <img
                src={icoUcdi}
                alt="ico_ucdi"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Usuarios con discapacidad
            </h2>
          </div>
          <div className="w-full md:w-2/3 flex flex-col space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            <ListItem
              num="1"
              text="Las personas usuarias con discapacidad deberán hacer uso de los apoyos y espacios destinados para su accesibilidad y seguridad dentro de las instalaciones del TIMT."
            />
            <ListItem
              num="2"
              text="Los asientos reservados, los cuales están debidamente señalizados, deberán permanecer preferentemente desocupados mientras no sean requeridos por personas con discapacidad, movilidad reducida, mujeres embarazadas o personas de la tercera edad."
            />
            <ListItem
              num="3"
              text="Los elevadores estarán en funcionamiento de acuerdo con los horarios establecidos y su uso será preferentemente para personas con cualquier tipo de discapacidad, personas adultas mayores, personas embarazadas y un acompañante, respectivamente."
            />
          </div>
        </section>

        {/* Protección Civil */}
        <section className="flex flex-col md:flex-row py-12 gap-8 md:gap-12">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left gap-4 shrink-0">
            <div className="p-4 bg-gray-50 rounded-2xl shadow-xs border border-gray-100">
              <img
                src={icoPrci}
                alt="ico_prci"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Protección Civil
            </h2>
          </div>
          <div className="w-full md:w-2/3 flex flex-col space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            <ListItem
              num="1"
              text="Las personas usuarias con discapacidad deberán hacer uso de los apoyos y espacios destinados para su accesibilidad y seguridad dentro de las instalaciones del TIMT."
            />
            <ListItem
              num="2"
              text="Los asientos reservados, los cuales están debidamente señalizados, deberán permanecer preferentemente desocupados mientras no sean requeridos por personas con discapacidad, movilidad reducida, mujeres embarazadas o personas de la tercera edad."
            />
            <ListItem
              num="3"
              text="Los elevadores estarán en funcionamiento de acuerdo con los horarios establecidos y su uso será preferentemente para personas con cualquier tipo de discapacidad, personas adultas mayores, personas embarazadas y un acompañante, respectivamente."
            />
          </div>
        </section>

        {/* Interrupción del servicio y otros */}
        <section className="flex flex-col md:flex-row py-12 gap-8 md:gap-12">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left gap-4 shrink-0">
            <div className="p-4 bg-gray-50 rounded-2xl shadow-xs border border-gray-100">
              <img
                src={icoIseo}
                alt="ico_iseo"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Interrupción del servicio y otros
            </h2>
          </div>
          <div className="w-full md:w-2/3 flex flex-col space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            <ListItem
              num="1"
              text="En caso de que el servicio sea interrumpido y no haya llegado a su destino por causas imputables al TIMT, el cobro no será reembolsado, sin embargo, se otorgará un boleto de cortesía para su posterior uso por la persona usuaria. La vigencia del boleto de cortesía estará indicada en el mismo."
            />
            <ListItem
              num="2"
              text="En caso de que un objeto caiga en las vías, la persona usuaria deberá informar inmediatamente al personal del TIMT para gestionar la recuperación del mismo y estará sujeto a las condiciones operativas del servicio. El TIMT no es responsable del daño causado al objeto por la caída."
            />
            <ListItem
              num="3"
              text="Si extravía un objeto personal, debe informar de inmediato al personal del TIMT para iniciar las gestiones correspondientes."
            />
            <ListItem
              num="4"
              text="Si encuentra un objeto perdido, debe entregarlo al personal del TIMT, para su resguardo."
            />
          </div>
        </section>

        {/* Regularización (Sanciones) */}
        <section className="flex flex-col md:flex-row py-12 gap-8 md:gap-12">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left gap-4 shrink-0">
            <div className="p-4 bg-gray-50 rounded-2xl shadow-xs border border-gray-100">
              <img
                src={icoRegu}
                alt="ico_regu"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Regularización (Sanciones)
            </h2>
          </div>
          <div className="w-full md:w-2/3 flex flex-col space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            <ListItem
              num="1"
              text="Si no se registra la entrada se le cobrará la cantidad de $100.00."
            />
            <ListItem
              num="2"
              text="Si su última operación de registro fue de entrada y registra otra entrada en la misma estación, se considerará que no registró la salida anterior y se le cobrará la cantidad de $100.00."
            />
            <ListItem
              num="3"
              text="A quien haya adquirido un código QR y no descienda en la estación donde haya pagado, se cobrará como sanción, la cantidad de $100.00."
            />
            <ListItem
              num="4"
              text="El extravío del código QR, se cobrará como sanción, la cantidad de $100.00."
            />
            <ListItem
              num="5"
              text="Las sanciones no tienen fecha de caducidad y no se emitirán reembolsos por sanciones aplicadas."
            />
            <ListItem
              num="6"
              text="En caso de no cumplir con estas normas, se tomarán medidas legales."
            />
          </div>
        </section>

        {/* Disposiciones Generales */}
        <section className="flex flex-col md:flex-row py-12 gap-8 md:gap-12">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left gap-4 shrink-0">
            <div className="p-4 bg-gray-50 rounded-2xl shadow-xs border border-gray-100">
              <img
                src={icoDige}
                alt="ico_dige"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Disposiciones Generales
            </h2>
          </div>
          <div className="w-full md:w-2/3 flex flex-col space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            <ListItem
              num="1"
              text="Queda prohibido ingresar objetos como armas de fuego, materiales punzocortantes, inflamables, explosivos o cualquier otro elemento peligroso que pueda poner en riesgo la seguridad de las personas usuarias, trenes o instalaciones del TIMT. En caso de no atender esta normativa, se tomarán medidas legales."
            />
            <ListItem
              num="2"
              text="Queda prohibido dañar, hacer uso indebido o afectar de cualquier forma las instalaciones, trenes, equipos y mobiliario del TIMT; lo anterior es motivo de consignación ante la autoridad competente."
            />
            <ListItem
              num="3"
              text="No se debe obstaculizar de cualquier forma y con cualquier objeto, zonas de acceso, salidas, andenes, estaciones, túneles, corredores, escaleras y en general, todos aquellos puntos de circulación peatonal y del propio medio de transporte."
            />
            <ListItem
              num="4"
              text="No se permite escupir, utilizar cigarros electrónicos (incluyendo vapeadores), fumar (tabaco u otras sustancias), prender cerillos o encendedores o cualquier tipo de material inflamable dentro de las estaciones y trenes del TIMT."
            />
            <ListItem
              num="5"
              text="No se permite arrojar basura y objetos en las instalaciones, en los trenes y en las vías por donde circula el TIMT."
            />
            <ListItem
              num="6"
              text="No se permite hacer uso de aparatos de radio u otros objetos o dispositivos que emitan sonidos que perturben a las personas usuarias dentro de los trenes, andenes, estaciones o en cualquier otro sitio del TIMT."
            />
            <ListItem
              num="7"
              text="No se permite el ingreso y consumo de alimentos y bebidas de cualquier naturaleza, en las instalaciones y trenes del TIMT."
            />
            <ListItem
              num="8"
              text="Queda prohibido utilizar los trenes del TIMT para transportar cualquier tipo de carga o alimentos, perecederos o no perecederos, ya sean voluminosos o no. A discreción del TIMT, las personas usuarias únicamente podrán transportar objetos personales, bolsas, transportadoras de animales, portafolios o pequeñas maletas, bultos u objetos con las siguientes dimensiones máximas: 80 x 60 x 30 cm, debiendo ser colocadas, de manera preferente, en el portabultos o debajo del asiento, pero nunca sobre éstos."
            />
            <ListItem
              num="9"
              text="Sólo se podrá transportar animales si éstos están en una transportadora cerrada y rígida, respetando las dimensiones máximas: 80 x 60 x 30 cm, con excepción de los de servicio o de apoyo emocional, los cuales deberán portar el distintivo correspondiente (arnés, collar o etiquetas), así como contar con la prescripción médica expedida por un profesional de la salud con cédula profesional que justifique el acompañamiento con dichos animales."
            />
            <ListItem
              num="10"
              text="Se prohíbe el ingreso al TIMT con bicicletas (incluyendo plegables y eléctricas), triciclos, patinetas, patines, scooters (incluyendo plegables y eléctricos) y objetos para transporte o movimiento de carga, tales como diablitos, carretillas, etc., salvo que éstos se encuentren debidamente resguardados y no excedan las dimensiones de 80 x 60 x 30 cm. Asimismo, para evitar caídas, no se permite que las personas usuarias ingresen a las estaciones o trenes portando zapatos deportivos de tacos o tachones."
            />
            <ListItem
              num="11"
              text="No se permite ingresar o hacer uso de las estaciones o de los trenes del TIMT a personas que sensorialmente se aprecie que se encuentran en estado de ebriedad o bajo el influjo de sustancias psicotrópicas, enervantes o estupefacientes."
            />
            <ListItem
              num="12"
              text="Queda prohibido ejercer actos de comercio ambulante, en los trenes, andenes, Estaciones o en cualquier otro sitio del TIMT."
            />
            <ListItem
              num="13"
              text="Queda prohibido realizar cualquier actividad dentro de las Estaciones, estacionamientos, trenes y franja del derecho de vía, que tenga por objeto pedir apoyo u obtener una retribución económica."
            />
            <ListItem
              num="14"
              text="No se deberá emplear dispositivos de fotografía o videograbación sin contar con la autorización correspondiente por parte del área de Comunicación Social del TIMT."
            />
            <ListItem
              num="15"
              text="No se deberá permanecer en los trenes, andenes, pasillos, escaleras, ascensores, vestíbulos o en general, en cualquier espacio dentro de las estaciones una vez que haya finalizado su recorrido o fuera del horario establecido para el servicio de transportación. El servicio a la persona usuaria inicia en la Estación en la que aborde el tren y finaliza al descender del mismo; por lo que, una vez que haya finalizado dicho recorrido, la persona usuaria deberá abandonar las instalaciones."
            />
            <ListItem
              num="16"
              text="Queda prohibido distribuir, anunciar, fijar o adherir publicidad o propaganda de cualquier naturaleza, en las estaciones, trenes y demás espacios en las instalaciones del TIMT."
            />
            <ListItem
              num="17"
              text="Queda prohibido el ingreso a las cabinas de los trenes, intentar maniobrarlos o manipular sistemas del mismo; así como ingresar a áreas restringidas de las instalaciones."
            />
            <ListItem
              num="18"
              text="Y, en general, queda prohibido realizar cualquier acto distinto al estrictamente relacionado con su transportación."
            />
          </div>
        </section>
      </div>

      <section className="flex justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div>
          <a
            href="/ReglasdeAplicacionTIMT2026-1.pdf"
            className="inline-block bg-timt-primary text-white font-bold py-3 px-8 rounded-full hover:bg-timt-primary-hover border-2 border-transparent transition-all duration-300 shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Reglamento Completo
          </a>
        </div>
      </section>
    </div>
  );
}
