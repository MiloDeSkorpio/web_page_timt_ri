# Tren Interurbano México-Toluca "El Insurgente" 🚆

Este es el repositorio oficial del Frontend para la plataforma web del Tren Interurbano "El Insurgente". El proyecto provee información a los usuarios sobre estaciones, costos, beneficios y rutas, con un diseño moderno, responsivo y optimizado.

## 🛠️ Tecnologías Utilizadas

- **React 19** + **TypeScript**
- **Vite** (Empaquetador y entorno de desarrollo rápido)
- **Tailwind CSS v4** (Estilos y diseño responsivo)
- **Docker** + **Nginx** (Para empaquetado y servicio en producción)

## 🚀 Cómo ejecutar el proyecto localmente

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🛡️ Pruebas de Seguridad y Calidad (SAST & DAST)

El proyecto cuenta con un pipeline de seguridad integrado en **GitHub Actions** que bloquea el despliegue si no se cumplen los estándares de calidad de SonarQube o si OWASP ZAP encuentra vulnerabilidades críticas.

Para ejecutar estas pruebas localmente antes de hacer push, puedes usar los scripts proporcionados en la carpeta `scripts/`.

### 1. Pruebas Estáticas (SAST) - SonarQube
Analiza el código fuente en busca de bugs, vulnerabilidades y code smells.
- **Requisito:** Crear un archivo `.env` en la raíz del proyecto y agregar tu token: `SONAR_TOKEN=tu_token_aqui`.
- **Ejecución:**
  ```bash
  ./scripts/run-sast-local.sh
  ```

### 2. Pruebas Dinámicas (DAST) - OWASP ZAP
Levanta la aplicación en un contenedor Docker local y lanza ataques simulados para buscar vulnerabilidades en tiempo de ejecución.
- **Requisito:** Tener Docker instalado y corriendo.
- **Ejecución:**
  ```bash
  ./scripts/run-dast-local.sh
  ```
- *Nota: Al finalizar, el script generará un archivo `zap-report.html` en la raíz del proyecto con los resultados.*

## 📦 Construcción para Producción

Para construir los archivos estáticos listos para producción:
```bash
npm run build
```
O para construir la imagen completa de Docker con Nginx:
```bash
docker build -t timt-web:latest .
```
