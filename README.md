# Weather

TODO:
+ Встроить панель закладок. Каждый новый поиск позволяет оставить данные в закладке.
+ Сделать русификацию (мультияз) - переключение
+ Кнопка "обновить", можно автоматическое обновление
+ Добавить индикатор загрузки погоды
- Отрисовать иконки облачности/солнце, figma (от солнца до облаков - несколько стадий)
  Фоном будет картинка облачности, можно взять аналогичные с рамблер погоды
- Переделать вкладки. Кнопка "вкладка" должна создавать вкладку, с именем города, которое введено в поле поиска,
  она же - должна загружать данные о погоде.
  для этого нужно создать компонент данных, которые помещаются в эту вкладку.
  Проброс параметров между компонентами - возможно потребуется
- Проконтролировать сборку проекта в webpack - сжатие
- Визуализация температуры, влажности. давления - подумать, нарисовать figma

- Сделать автокомплит поиск, используя доступные онлайн базы городов/поселений.
  http://htmlweb.ru/geo/city_api_example.php
  https://www.geonames.org/
  https://www.maxmind.com/en/free-world-cities-database
  https://habr.com/post/316976/
  (вот прям надо брать geonames!!!!!)
  Вот Вам пакет для РНР: http://pear.php.net/manual/en/package.webservices.services-geonames.examples.php
  Там Вы найдете примеры и с языком, и с городами.
  Вот пример инфы по городу: http://api.geonames.org/search?q=london&maxRows=10&username=demo
  Вот то же самое, но на русском: http://api.geonames.org/search?q=london&maxRows=10&username=demo&lang=ru
  https://toster.ru/q/436515
  https://developers.google.com/maps/documentation/javascript/places-autocomplete


  
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
