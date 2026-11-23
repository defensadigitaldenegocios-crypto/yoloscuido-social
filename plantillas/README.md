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
| **Etiqueta / Oferta** (oferta.css) | semana-04/src/A*.html | Editorial de fechas comerciales (Buen Fin, rebajas): etiquetas de precio con fechas | "Mándaselo a tu amiga" |
| **Antes / Después** (antesdespues.css) | semana-04/src/B*.html | Dolor reconocible (gris) vs. hechos de YolosCuido (coral) | "Comenta el número que te pasó" |
| **Cuenta regresiva** (cuenta.css) | semana-04/src/C*.html | Número gigante + plan con fechas reales (posadas, regreso a clases) | "Comenta en qué semana vas" + guardar |
| **Captura de opinión** (opinion.css) | semana-05/src/A*.html | Post de la marca con opinión fuerte + hilo (horario real) + hechos | "Comenta SÍ o NO" |
| **Test / Quiz** (quiz.css) | semana-06/src/A*.html | 3 preguntas A/B/C + resultados por mayoría (identidad) | "Comenta tu letra" + comparar con una amiga |
| **Perfil anotado** (perfil.css) | semana-06/src/B*.html | Variante de Checklist: tarjeta de perfil revisada con pluma roja | "Total __/5" + guardar |
| **Pregunta abierta** (pregunta.css) | semana-06/src/C*.html | Tipografía gigante + barra de comentario; ejemplos posibles (no testimonios) | "Cuéntanos la tuya" / "yo también" |

Variantes ya probadas: Este o este desde la mirada de la niñera eligiendo familia (semana-05/src/B*), Notas con gancho grande fuera de la nota + calendario de fechas (semana-05/src/C*).

## Reglas visuales
- 1080×1350. Todo pasa por base.css (fuentes locales en /fonts, colores en :root).
- La modelo va **recortada** (modelo-recorte/*.png), interactuando con el diseño: encima de un teléfono, apuntando al botón, saliendo del borde. Nunca dentro de un recuadro blanco.
- Portada: gancho de 4–9 palabras, enorme (100–150px), con una palabra en color de acento. Un elemento de intriga (sticker, nota, burbuja).
- La lámina 2 debe abrir un "loop" ("Dos semanas después…", "van 4… y faltan").
- Cierre: CTA concreta + mecánica de interacción + yoloscuido.com.
- Paleta por formato: Chat = teal profundo/cream/ámbar · Notas = amarillo sol/papel · Este o este = durazno/coral/azul marino · Mito = rojo apagado/teal/cream · Checklist = kraft/verde bosque/tomate · Oferta = amarillo sol/tomate/negro · Antes/Después = pizarra gris → coral/marino · Cuenta regresiva = azul noche/oro/rosa piñata · Opinión = lavanda/violeta/lima · Test = vino/chicle/limón · Perfil anotado = cielo/marino/pluma roja · Pregunta abierta = papel/negro/naranja fuego · Editorial = según la temporada (Día de Muertos: ciruela/cempasúchil/magenta).
- Nada de texto debajo de la modelo; revisar cada imagen con Read antes de publicar.
- Sin emojis dentro de las láminas (la fuente no los dibuja); sí en el pie de foto.

## Renderizar
```
npm i playwright@1.56.1     # una vez, en cualquier carpeta; usa NODE_PATH si no está en el repo
node plantillas/render.js semana-NN          # todas las láminas de semana-NN/src
node plantillas/render.js semana-NN A1 A2    # solo algunas
```
Genera semana-NN/X.jpg (para publicar) y X.png.

- La opinión siempre es de la cuenta @yoloscuidoapp (nunca inventar tuits o testimonios de personas).
- Truco: 13-mostrando-celular tiene la pantalla vacía (en la imagen original de 505×873: x196-286, y372-562); en semana-03/src/C1.html hay un script que pone una pantalla encima.
- La modelo viste blusa teal: evita fondos teal detrás de su torso.
