# Plantillas YolosCuido

Cada semana usa **3 formatos distintos** (uno por carrusel) y nunca repite el mismo formato de portada dos semanas seguidas.

## Formatos disponibles (ejemplos reales en semana-02/src)
| Formato | Archivos de ejemplo | Para qué sirve | Mecánica de interacción |
|---|---|---|---|
| **Chat** (chat.css) | semana-02/src/A*.html | Historias reconocibles, problemas que YolosCuido resuelve | "Comenta YO si te ha pasado" |
| **Notas** (notas.css) | semana-02/src/B*.html | Listas de identidad ("cosas que solo…"), checklists | "Pon tu total /N", "mándaselo a tu amiga" |
| **Editorial temporada** (papel-picado.svg, etc.) | semana-02/src/C*.html | Fechas, temporadas, urgencia honesta | Pregunta en el pie de foto |
| **Este o este** (esteoeste.css) | semana-03/src/A*.html | Dos perfiles/opciones A vs B, votación | "Comenta A o B" |
| **Mito vs Realidad** (mito.css) | semana-03/src/B*.html | Romper objeciones con hechos | "Comenta el número 1-4" |
| **Checklist / Kit** (checklist.css) | semana-03/src/C*.html | Listas útiles para guardar (tabla con clip) | "Guárdalo y mándaselo" |

Formatos nuevos a crear cuando toque (mantener la misma calidad): **Antes / Después**, **Pregunta abierta** (tipografía gigante + "responde en comentarios"), **Tweet/captura de opinión**.

## Reglas visuales
- 1080×1350. Todo pasa por base.css (fuentes locales en /fonts, colores en :root).
- La modelo va **recortada** (modelo-recorte/*.png), interactuando con el diseño: encima de un teléfono, apuntando al botón, saliendo del borde. Nunca dentro de un recuadro blanco.
- Portada: gancho de 4–9 palabras, enorme (100–150px), con una palabra en color de acento. Un elemento de intriga (sticker, nota, burbuja).
- La lámina 2 debe abrir un "loop" ("Dos semanas después…", "van 4… y faltan").
- Cierre: CTA concreta + mecánica de interacción + yoloscuido.com.
- Paleta por formato: Chat = teal profundo/cream/ámbar · Notas = amarillo sol/papel · Este o este = durazno/coral/azul marino · Mito = rojo apagado/teal/cream · Checklist = kraft/verde bosque/tomate · Editorial = según la temporada (Día de Muertos: ciruela/cempasúchil/magenta).
- Nada de texto debajo de la modelo; revisar cada imagen con Read antes de publicar.
- Sin emojis dentro de las láminas (la fuente no los dibuja); sí en el pie de foto.

## Renderizar
```
npm i playwright@1.56.1     # una vez, en cualquier carpeta; usa NODE_PATH si no está en el repo
node plantillas/render.js semana-NN          # todas las láminas de semana-NN/src
node plantillas/render.js semana-NN A1 A2    # solo algunas
```
Genera semana-NN/X.jpg (para publicar) y X.png.

- Truco: 13-mostrando-celular tiene la pantalla vacía (en la imagen original de 505×873: x196-286, y372-562); en semana-03/src/C1.html hay un script que pone una pantalla encima.
- La modelo viste blusa teal: evita fondos teal detrás de su torso.
