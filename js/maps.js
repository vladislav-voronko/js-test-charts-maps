ymaps.ready(map_creation);

var map;
var myCollection;
function map_creation () {
    
    map = new ymaps.Map("map", {
      center: [53.902284, 27.561831], 
      zoom: 10
    });
    myCollection = new ymaps.GeoObjectCollection();
    add_location('cats')
}

function change_location (coord1, coord2) {
    map.setCenter([coord1, coord2], 7);    
}

function add_location(animal) {         

if (animal == "cats" || animal == "all")
{
    if(myCollection.getLength() != 0 && animal != "all")
    {
        myCollection.removeAll();
    } 
    myCollection
    .add(new ymaps.Placemark([53.904053, 27.514028], {
       balloonContent: 'Бедный котик'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
    .add(new ymaps.Placemark([53.897886, 27.522620], {
       balloonContent: 'Бедный котик'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
    .add(new ymaps.Placemark([53.886361, 27.556253], {
       balloonContent: 'Бедный котик'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
    .add(new ymaps.Placemark([53.863699, 27.604995], {
       balloonContent: 'Бедный котик'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
    .add(new ymaps.Placemark([53.861156, 27.561005], {
       balloonContent: 'Бедный котик'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
    .add(new ymaps.Placemark([53.854268, 27.513008], {
       balloonContent: 'Бедный котик'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
    .add(new ymaps.Placemark([53.894745, 27.431593], {
       balloonContent: 'Бедный котик'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
    .add(new ymaps.Placemark([53.929966, 27.485223], {
       balloonContent: 'Бедный котик'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
    .add(new ymaps.Placemark([53.949232, 27.598231], {
       balloonContent: 'Бедный котик'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
    .add(new ymaps.Placemark([53.920396, 27.637101], {
       balloonContent: 'Бедный котик'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
    .add(new ymaps.Placemark([53.896803, 27.579932], {
       balloonContent: 'Бедный котик'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))

map.geoObjects.add(myCollection);
}
if (animal == "dogs" || animal == "all") {

    if(myCollection.getLength() != 0 && animal != "all")
    {
        myCollection.removeAll();
    }
    myCollection
    .add(new ymaps.Placemark([52.049019, 29.267301], {
       balloonContent: 'Бедный пёсель'
        }, {
            preset: 'islands#icon',
            iconColor: '#0090b6'
        }))
    .add(new ymaps.Placemark([52.208664, 24.354324], {
       balloonContent: 'Бедный пёсель'
        }, {
            preset: 'islands#icon',
            iconColor: '#0090b6'
        }))
    .add(new ymaps.Placemark([55.296800, 27.745411], {
       balloonContent: 'Бедный пёсель'
        }, {
            preset: 'islands#icon',
            iconColor: '#0090b6'
        }))
    .add(new ymaps.Placemark([53.930921, 25.770105], {
       balloonContent: 'Бедный пёсель'
        }, {
            preset: 'islands#icon',
            iconColor: '#0090b6'
        }))
    .add(new ymaps.Placemark([55.184217, 30.202878], {
       balloonContent: 'Бедный пёсель'
        }, {
            preset: 'islands#icon',
            iconColor: '#0090b6'
        }))
    

map.geoObjects.add(myCollection);
}

if (animal == "other" || animal == "all") {

    if(myCollection.getLength() != 0 && animal != "all")
    {
        myCollection.removeAll();
    }
    myCollection
    .add(new ymaps.Placemark([53.931276, 30.257145], {
       balloonContent: 'Бедный хорёк'
        }, {
            preset: 'islands#icon',
            iconColor: '#0099b6'
        }))
    .add(new ymaps.Placemark([52.424160, 31.014281], {
       balloonContent: 'Бедный хорёк'
        }, {
            preset: 'islands#icon',
            iconColor: '#0099b6'
        }))
    .add(new ymaps.Placemark([53.902496, 27.561481], {
       balloonContent: 'Бедные птички'
        }, {
            preset: 'islands#icon',
            iconColor: '#0099b6'
        }))

map.geoObjects.add(myCollection);
}

  };
  