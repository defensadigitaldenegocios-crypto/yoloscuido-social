# Plantillas YolosCuido

Cada semana usa **3 formatos distintos** (uno por carrusel) y nunca repite el mismo formato de portada dos semanas seguidas.

## Formatos disponibles (ejemplos reales en semana-02/src)
| Formato | Archivos de ejemplo | Para qué sirve | Mecánica de interacción |
|---|---|---|---|
| **Chat** (chat.css) | semana-02/src/A*.html | Historias reconocibles, problemas que YolosCuido resuelve | "Comenta YO si te ha pasado" |
| **Notas** (notas.css) | semana-02/src/B*.html | Listas de identidad ("cosas que solo…"), checklists | "Pon tu total /N", "mándaselo a tu amiga" |
| **Editorial temporada** (papel-picado.svg, etc.) | semana-02/src/C*.html | Fechas, temporadas, urgencia honesta | Pregunta en el pie de foto |

Formatos nuevos a crear cuando toque (mantener la misma calidad): **Mito vs. Realidad** (pantalla dividida, rojo apagado vs. teal), **Antes / Después**, **Encuesta / Este o este** (dos opciones grandes), **Pregunta abierta** (tipografía gigante + "responde en comentarios"), **Tweet/captura de opinión**.

## Reglas visuales
- 1080×1350. Todo pasa por base.css (fuentes locales en /fonts, colores en :root).
- La modelo va **recortada** (modelo-recorte/*.png), interactuando con el diseño: encima de un teléfono, apuntando al botón, saliendo del borde. Nunca dentro de un recuadro blanco.
- Portada: gancho de 4–9 palabras, enorme (100–150px), con una palabra en color de acento. Un elemento de intriga (sticker, nota, burbuja).
- La lámina 2 debe abrir un "loop" ("Dos semanas después…", "van 4… y faltan").
- Cierre: CTA concreta + mecánica de interacción + yoloscuido.com.
- Paleta por formato: Chat = teal profundo/cream/ámbar · Notas = amarillo sol/papel · Editorial = según la temporada (Día de Muertos: ciruela/cempasúchil/magenta).
- Nada de texto debajo de la modelo; revisar cada imagen con Read antes de publicar.
- Sin emojis dentro de las láminas (la fuente no los dibuja); sí en el pie de foto.

## Renderizar
```
npm i playwright@1.56.1     # una vez, en cualquier carpeta; usa NODE_PATH si no está en el repo
node plantillas/render.js semana-NN          # todas las láminas de semana-NN/src
node plantillas/render.js semana-NN A1 A2    # solo algunas
```
Genera semana-NN/X.jpg (para publicar) y X.png.
