# Mira Studio · Integració PWA

El manifest lliurat pren com a base l’actual de Mira Studio i conserva el nom, l’identificador, les rutes relatives, la descripció, l’orientació i el fons/tema ivori (UTAC, s. d.). Només amplia els recursos d’icona i separa els normals dels adaptables.

1. Copieu el contingut de pwa/icons/ a la carpeta icons/ de l’arrel de l’app, és a dir, a /mirastudio/icons/.
2. Reviseu i substituïu el manifest de l’app amb pwa/manifest.webmanifest. No copieu la carpeta pwa/ com a subdirectori sense ajustar les rutes.
3. Integreu les etiquetes de head-snippet.html al <head> i eviteu duplicar les que ja existeixin. Els enllaços han de resoldre des de /mirastudio/.
4. Utilitzeu el logo horitzontal de logos/ en l’interfície i la icona MS als fitxers d’instal·lació.
5. Si el service worker precacheja el manifest o les icones, reviseu-ne la llista i la versió de memòria cau en publicar.
6. Després de publicar, proveu la instal·lació i l’arrencada en ordinadors i tauletes. Les instal·lacions existents poden necessitar una actualització o una reinstal·lació per mostrar les noves icones.

Els PNG normals es lliuren en 44, 150, 192, 512 i 1024 px. Els adaptables, en 192, 512 i 1024 px, tenen fons opac i més marge; s’han comprovat respecte del cercle central de diàmetre 80% indicat per MDN (MDN contributors, 2025). Les Apple Touch Icons són de 152, 167 i 180 px, tal com exemplifica la documentació d’Apple (Apple, s. d.).

La verificació inclosa és estàtica: dimensions, canal alfa, marges i rutes. No s’ha executat una prova d’instal·lació en dispositius físics ni s’han publicat canvis a l’app.

## Referències

Apple. (s. d.). *Configuring web applications*. Safari Web Content Guide. https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html

MDN contributors. (2025, 30 de juny). *Define your app icons*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Define_app_icons

UTAC. (s. d.). *Mira Studio: manifest.webmanifest* [Codi font]. GitHub. https://github.com/utacub/mirastudio/blob/main/manifest.webmanifest
