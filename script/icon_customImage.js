ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.4003,38.3669],
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    }),
 
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
 
 
    myPlacemarkWithContent = new ymaps.Placemark([55.40024867120708,38.36686134229331], {
        hintContent: 'местоположение',
        
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: '../img/location/myicon.svg',
        // Размеры метки.
        iconImageSize: [233, 92],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-50, -100],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [0, 0],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });
 
    myMap.geoObjects
        //.add(myPlacemark)
        .add(myPlacemarkWithContent);
  });