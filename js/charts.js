google.charts.load('current', {packages: ['corechart', 'line']});

google.charts.setOnLoadCallback(function(){drawLineChart()});  


var all_dates = ["II'2019", "I'2020", "II'2020", "I'2021"];
var myData = [
        ["dog", "Gomel", "II'2019"],
        ["cat", "Minsk", "II'2019"],
        ["dog", "Brest", "I'2021"],
        ["cat", "Minsk", "I'2021"],
        ["cat", "Minsk", "I'2021"],
        ["cat", "Minsk", "I'2021"],
        ["cat", "Minsk", "I'2021"],
        ["cat", "Minsk", "I'2021"],
        ["cat", "Minsk", "I'2021"],
        ["cat", "Minsk", "I'2021"],
        ["cat", "Minsk", "I'2021"],
        ["cat", "Minsk", "I'2021"],
        ["cat", "Minsk", "I'2021"],
        ["dog", "Vitebsk", "II'2019"],
        ["dog", "Grodno", "II'2020"],
        ["other", "Mogilev", "II'2020"],
        ["dog", "Vitebsk", "I'2021"],
        ["other", "Minsk", "I'2021"],
        ["other", "Gomel", "I'2020"]
    ];


function drawLineChart(animal_type, city) {

var data = new google.visualization.DataTable();
data.addColumn('string', 'X');
data.addColumn('number', animal_type);


var mas_animal = 0; /*интовый счётчик*/;
for (date in all_dates) {
/*mas_animal++;*/
  for (let animal = 0; animal < myData.length; animal++) {
    if(myData[animal][2] == all_dates[date] && myData[animal][1] == city && myData[animal][0] == animal_type) {
      mas_animal++;
     };
    if(myData[animal][2] == all_dates[date] && myData[animal][1] == city && animal_type == "all") {
      mas_animal++;
     };
  }
  data.addRows([
    [all_dates[date], mas_animal]
  ]);
    mas_animal = 0
}


  var options = {
    hAxis: {
      title: 'Time'
    },
    vAxis: {
      title: 'Popularity'
    },
    backgroundColor: 'transparent'
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

  chart.draw(data, options);
    }

function button() {
let callCity;
let callAnimal;
  if(document.getElementById('Minsk').checked) {
  callCity = "Minsk";
} else if (
  document.getElementById('Vitebsk').checked) {
  callCity = "Vitebsk";
}
  else if (
  document.getElementById('Grodno').checked) {
  callCity = "Grodno";
}
  else if (
  document.getElementById('Mogilev').checked) {
  callCity = "Mogilev";
}
  else if (
  document.getElementById('Gomel').checked) {
  callCity = "Gomel";
}
  else if (
  document.getElementById('Brest').checked) {
  callCity = "Brest";
}
  if(document.getElementById('cat').checked) {
  callAnimal = "cat";
}
else if (
  document.getElementById('dog').checked) {
  callAnimal = "dog";
}
else if (
  document.getElementById('other').checked) {
  callAnimal = "other";
}
else if (
  document.getElementById('all').checked) {
  callAnimal = "all";
}
drawLineChart(callAnimal, callCity);
}