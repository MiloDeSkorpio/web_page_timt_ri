import React from "react";
import { Link } from "react-router-dom";
import logoTIMT from "../../assets/logo_elinsurgente.svg";
import logoGDMX from "../../assets/Gob-Mexico@4x.png";
import logoGDMXSet from "../../assets/Gob-Mexico@4x.png?w=200;400&format=webp&as=srcset";
import logoCOMU from "../../assets/Logos_Comunicaciones-1.png";
import logoCOMUSet from "../../assets/Logos_Comunicaciones-1.png?w=200;400&format=webp&as=srcset";
import logoBANO from "../../assets/logo_banobras.svg";
import logoFONA from "../../assets/logo_fonadin.svg";
import logoGEDO from "../../assets/EDOMEX_logo.svg";
import logoCDMX from "../../assets/Logos_Ciudad-de-Mexico-1.png";
import logoCDMXSet from "../../assets/Logos_Ciudad-de-Mexico-1.png?w=200;400&format=webp&as=srcset";
import logoATRA from "../../assets/Logo-ATTRAPI-1-scaled.png";
import logoATRASet from "../../assets/Logo-ATTRAPI-1-scaled.png?w=200;400&format=webp&as=srcset";
export const Footer: React.FC = () => {
  return (
    <footer className="bg-timt-bg mt-12 shadow-[0_-1px_3px_rgba(0,0,0,0.2)]">
      <h1 className="text-center text-4xl font-semibold m-5 text-gray-500">
        El insurgente, te lleva.
      </h1>
      <div className="grid p-9 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center mb-12 pb-12">
        <img
          src={logoGDMX}
          srcSet={logoGDMXSet}
          sizes="(max-width: 768px) 200px, 400px"
          alt="Logo GOBMX"
          className="max-h-12 w-auto object-contain"
        />
        <img
          src={logoCOMU}
          srcSet={logoCOMUSet}
          sizes="(max-width: 768px) 200px, 400px"
          alt="Logo COMU"
          className="max-h-12 w-auto object-contain"
        />
        <img
          src={logoBANO}
          alt="Logo BANO"
          className="max-h-12 w-auto object-contain"
        />
        <img
          src={logoFONA}
          alt="Logo FONA"
          className="max-h-12 w-auto object-contain"
        />
        <img
          src={logoGEDO}
          alt="Logo GEDO"
          className="max-h-12 w-auto object-contain"
        />
        <img
          src={logoCDMX}
          srcSet={logoCDMXSet}
          sizes="(max-width: 768px) 200px, 400px"
          alt="Logo CDMX"
          className="max-h-12 w-auto object-contain"
        />
        <img
          src={logoATRA}
          srcSet={logoATRASet}
          sizes="(max-width: 768px) 200px, 400px"
          alt="Logo ATRA"
          className="max-h-12 w-auto object-contain"
        />
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-1 min-[510px]:grid-cols-2 md:grid-cols-3 gap-8 items-start">
          {/* Logo & redes */}
          <div className="flex flex-col space-y-4 items-center md:items-start min-[510px]:col-span-2 md:col-span-1">
            <img
              src={logoTIMT}
              alt="Logo TIMT"
              className="w-auto max-w-60 object-contain"
            />
            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3">
              <a
                href="https://www.facebook.com/trenelinsurgente"
                className="text-timt-primary hover:-translate-y-1 transition-all duration-300 block"
                aria-label="Facebook"
              >
                <svg
                  className="w-9 h-9"
                  fill="currentColor"
                  viewBox="-143 145 512 512"
                >
                  <path
                    d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3
	v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2
	c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"
                  />
                </svg>
              </a>

              <a
                href="https://x.com/TrenInsurgente"
                className="text-timt-primary hover:-translate-y-1 transition-all duration-300 block"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-9 h-9"
                  fill="currentColor"
                  viewBox="-143 145 512 512"
                >
                  <path
                    d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2
	c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7
	c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9
	C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5
	c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6
	c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"
                  />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@trenelinsurgente"
                className="text-timt-primary hover:-translate-y-1 transition-all duration-300 block"
                aria-label="TikTok"
              >
                <svg
                  className="w-9 h-9"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="m12,0C5.373,0,0,5.373,0,12s5.373,12,12,12,12-5.373,12-12S18.627,0,12,0h0Zm7.439,10.483c-1.52,0-2.93-.486-4.081-1.312v5.961c0,2.977-2.422,5.399-5.399,5.399-1.151,0-2.217-.363-3.094-.978-1.393-.978-2.305-2.594-2.305-4.421,0-2.977,2.422-5.399,5.399-5.399.247,0,.489.02.727.053v2.994c-.23-.072-.474-.114-.727-.114-1.36,0-2.466,1.106-2.466,2.466,0,.947.537,1.769,1.322,2.183.342.18.731.283,1.144.283,1.329,0,2.412-1.057,2.461-2.373l.005-11.756h2.933c0,.254.025.503.069.744.207,1.117.87,2.077,1.789,2.676.64.418,1.403.661,2.222.661v2.933Zm0,0" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/trenelinsurgente/"
                className="text-timt-primary hover:-translate-y-1 transition-all duration-300 block"
                aria-label="Instagram"
              >
                <svg
                  className="w-9 h-9"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="m14.502,11.986c0,1.431-1.16,2.591-2.591,2.591s-2.59-1.16-2.59-2.591,1.16-2.591,2.59-2.591,2.591,1.16,2.591,2.591h0Zm0,0" />
                  <path d="m12,0h0C5.373,0,0,5.373,0,12h0c0,6.627,5.373,12,12,12h0c6.627,0,12-5.373,12-12h0C24,5.373,18.627,0,12,0Zm7.637,15.19c-.037.827-.169,1.392-.361,1.886-.199.511-.465.945-.897,1.377-.432.432-.866.698-1.376.896-.494.192-1.06.323-1.887.361-.829.038-1.094.047-3.205.047s-2.375-.009-3.204-.047c-.827-.038-1.392-.169-1.887-.361-.511-.198-.944-.465-1.377-.896-.432-.432-.698-.866-.897-1.377-.192-.494-.323-1.059-.361-1.886-.038-.829-.047-1.094-.047-3.205s.009-2.375.047-3.204c.038-.827.169-1.392.361-1.887.199-.511.465-.944.897-1.376s.866-.698,1.377-.897c.494-.192,1.06-.323,1.887-.361.829-.038,1.094-.047,3.204-.047s2.376.009,3.205.047c.827.037,1.392.169,1.887.361.511.198.944.465,1.376.897.432.432.698.866.897,1.376.192.494.323,1.06.361,1.887.038.829.047,1.093.047,3.204s-.009,2.375-.047,3.205h0Zm-1.666-7.788c-.141-.363-.309-.622-.582-.894-.272-.272-.531-.441-.894-.582-.274-.106-.685-.233-1.443-.267-.82-.038-1.066-.045-3.141-.045s-2.321.008-3.141.045c-.757.034-1.169.161-1.443.267-.363.141-.622.309-.894.582-.272.272-.441.531-.582.894-.106.274-.233.685-.267,1.443-.038.819-.045,1.065-.045,3.141s.008,2.321.045,3.141c.035.757.161,1.169.267,1.443.141.363.309.622.582.894.272.272.531.44.894.581.274.107.685.233,1.443.268.819.038,1.065.045,3.141.045s2.322-.008,3.141-.045c.758-.035,1.169-.161,1.443-.268.363-.141.622-.309.894-.581s.441-.531.582-.894c.106-.274.233-.685.267-1.443.038-.82.046-1.066.046-3.141s-.008-2.321-.046-3.141c-.035-.758-.161-1.169-.267-1.443h0Zm-6.059,8.574c-2.204,0-3.991-1.787-3.991-3.991s1.787-3.991,3.991-3.991,3.991,1.787,3.991,3.991-1.787,3.991-3.991,3.991h0Zm4.149-7.207c-.515,0-.933-.417-.933-.932s.417-.933.933-.933.933.418.933.933-.418.932-.933.932h0Zm0,0" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@trenelinsurgente"
                className="text-timt-primary hover:-translate-y-1 transition-all duration-300 block"
                aria-label="YouTube"
              >
                <svg
                  className="w-9 h-9"
                  fill="currentColor"
                  viewBox="-143 145 512 512"
                >
                  <g>
                    <polygon points="78.9,450.3 162.7,401.1 78.9,351.9 	" />
                    <path
                      d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,446.8L241,446.8
		c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1
		V446.8z"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
          {/* Información */}
          {/* Información */}
          <div className="flex flex-col items-center min-[510px]:items-start text-center min-[510px]:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Información
            </h3>
            <ul className="space-y-2 flex flex-col items-center min-[510px]:items-start">
              <li>
                <Link
                  to="/como-funciona"
                  className="text-gray-800 hover:text-timt-primary transition-colors text-sm"
                >
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link
                  to="/guia-usuario"
                  className="text-gray-800 hover:text-timt-primary transition-colors text-sm"
                >
                  Guía de Usuario
                </Link>
              </li>
              <li>
                <Link
                  to="/proyecto"
                  className="text-gray-800 hover:text-timt-primary transition-colors text-sm"
                >
                  El Proyecto
                </Link>
              </li>
              <li>
                <Link
                  to="/centro-ayuda"
                  className="text-gray-800 hover:text-timt-primary transition-colors text-sm"
                >
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link
                  to="/reglamento"
                  className="text-gray-800 hover:text-timt-primary transition-colors text-sm"
                >
                  Reglamento
                </Link>
              </li>
            </ul>
          </div>
          {/* Contacto */}
          <div className="flex flex-col items-center min-[510px]:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-center min-[510px]:text-left w-full">
              Contacto
            </h3>
            <ul className="space-y-4 w-full flex flex-col items-center min-[510px]:items-start">
              <li>
                <a
                  target="_blank"
                  href="https://www.google.com.mx/maps/place/Av.+Javier+Barros+Sierra+515,+Santa+Fe,+Zedec+Sta+F%C3%A9,+%C3%81lvaro+Obreg%C3%B3n,+01376+Ciudad+de+M%C3%A9xico,+CDMX/@19.366005,-99.2622162,17z/data=!3m1!4b1!4m6!3m5!1s0x85d200c304b1bd81:0x2fdc92d76adf04c0!8m2!3d19.366!4d-99.2596413!16s%2Fg%2F11bw413d2w?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
                  className="flex items-start text-gray-800 hover:text-timt-primary transition-colors text-base gap-3"
                >
                  <svg
                    className="w-[18px] h-[18px] shrink-0 mt-1 fill-gray-600"
                    viewBox="0 0 384 512"
                  >
                    <path d="M172.3 501.7C27 291 0 269.4 0 192 0 86 86 0 192 0s192 86 192 192c0 77.4-27 99-172.3 309.7-9.5 13.8-29.9 13.8-39.5 0zM192 272c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z" />
                  </svg>
                  <span>
                    Av. Javier Barros Sierra 515, Santa Fe, Álvaro
                    <br />
                    Obregón, 01219 Ciudad de México
                  </span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="mailto:contacto@trenelinsurgente.mx"
                  className="flex items-center text-gray-800 hover:text-timt-primary transition-colors text-base gap-3"
                >
                  <svg
                    className="w-[18px] h-[18px] shrink-0 fill-gray-600"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                  <span>contacto@trenelinsurgente.mx</span>
                </a>
              </li>
              <li>
                <a
                  href="/aviso-de-privacidad"
                  className="flex items-center text-gray-800 hover:text-timt-primary transition-colors text-base gap-3"
                >
                  <svg
                    className="w-[18px] h-[18px] shrink-0 fill-gray-600"
                    viewBox="0 0 576 512"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                  <span>Aviso de Privacidad</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-3 pt-3 flex flex-col md:flex-row justify-center items-center">
          <p className=" text-sm">
            &copy; {new Date().getFullYear()} Tren El Insurgente. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
