// First Work
let elDistanceForm = document.querySelector('.distance-form');
let elDistanceInput = elDistanceForm.querySelector('.distance-input');


var elPedestrianOutput = document.querySelector('.out-pedestrian');
var elCyclistOutput = document.querySelector('.out-cyclist');
var elCarOutput = document.querySelector('.out-car');
var elTrainOutput = document.querySelector('.out-train');


elDistanceForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  let inputValue = elDistanceInput.value;

  const scorePedestrian = 5; // Piyodaning tezligi 5 km/h
  const scoreCyclist = 15; // Velosipedning tezligi 5 km/h
  const scoreCar = 70; // Moshinaning tezligi 5 km/h
  const scoreTrain = 170; // Poyezdning tezligi 5 km/h

  var pedestrianOutput = elPedestrianOutput;
  var cyclistOutput = elCyclistOutput;
  var carOutput = elCarOutput;
  var trainOutput = elTrainOutput;

  function timePiyoda() {
    let soat = Math.floor(inputValue / scorePedestrian);
    let daqiqa = Math.round(((inputValue / scorePedestrian) - soat) * 60);
    
    pedestrianOutput.textContent = `Piyoda ${soat} soat ${daqiqa} daqiqada masofani bosib o'tadi`;
  }
  timePiyoda();

  function timeVelo() {
    let soat = Math.floor(inputValue / scoreCyclist);
    let daqiqa = Math.round(((inputValue / scoreCyclist) - soat) * 60);
    
    cyclistOutput.textContent = `Velosipedchi ${soat} soat ${daqiqa} daqiqada masofani bosib o'tadi`;
  }
  timeVelo();

  function timeAuto() {
    let soat = Math.floor(inputValue / scoreCar);
    let daqiqa = Math.round(((inputValue / scoreCar) - soat) * 60);
    
    carOutput.textContent = `Mashina ${soat} soat ${daqiqa} daqiqada masofani bosib o'tadi`;
  }
  timeAuto();


  function timePoyezd() {
    let soat = Math.floor(inputValue / scoreTrain);
    let daqiqa = Math.round(((inputValue / scoreTrain) - soat) * 60);
    
    trainOutput.textContent = `Poyezd ${soat} soat ${daqiqa} daqiqada masofani bosib o'tadi`;
  }
  timePoyezd();
  
  inputValue = "";
})


// Second Work

let elMarketForm = document.querySelector('.market-form');
let elMarketInput = elMarketForm.querySelector('.market-input');

let elMarketList = document.querySelector('.market-list');


let array = [];

elMarketForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  if (isNaN(elMarketInput.value)) {
    if (array.includes(elMarketInput.value)) {
      alert("Siz bu mahsulotni allaqchon kiritib bo'ldingiz!");
    } else {
      array.push(elMarketInput.value);
      
      for (item of array) {
        var elItem = document.createElement("li");
        elItem.textContent = item;
      }
    
      elMarketList.appendChild(elItem);
    }
  } else {
    alert("Iltimos Mahsulot nomini to'g'ri kiriting!");
  }

  elMarketInput.value = "";
})

// Third work

let elTemperatureForm = document.querySelector('.temperature-form');
let elTemperatureSelect = elTemperatureForm.querySelector('.temperature-select');
let elTemperatureInput = elTemperatureForm.querySelector('.temperature-input');

let = elTemperatureOutputCelciy = document.querySelector('.temperature-list-celciy');
let = elTemperatureOutputKelvin = document.querySelector('.temperature-list-kelvin');
let = elTemperatureOutputFarangeyt = document.querySelector('.temperature-list-farangeyt');

elTemperatureForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var temperatureSelect = elTemperatureSelect.value;
  var temperatureInput = Number(elTemperatureInput.value);

  var outputCelciy = elTemperatureOutputCelciy;
  var outputKelvin = elTemperatureOutputKelvin;
  var outputFarangeyt = elTemperatureOutputFarangeyt;

  var celciyToFarangeyt = ((temperatureInput) * (9 / 5) + 32).toFixed(2);
  var celciyToKelvin = ((temperatureInput) + 273.15).toFixed(2) ;
  var kelvinToCelciy = (temperatureInput - 273.15).toFixed(2);
  var kelvinToFarangeyt = (9 * (kelvinToCelciy) / 5 + 32).toFixed(2);
  var farangetyToCelciy = (5 * (temperatureInput - 32) / 9).toFixed(2);
  var farangetyToKelvin = (5 * (temperatureInput - 32) / 9 + 273.15).toFixed(2);

  if(temperatureSelect == 'celciy') {
    outputCelciy.textContent = `${temperatureInput} Celciy ${temperatureInput} Celciyga teng!`;
    outputKelvin.textContent = `${temperatureInput} Celciy ${celciyToKelvin} Kelvinga teng!`;
    outputFarangeyt.textContent = `${temperatureInput} Celciy ${celciyToFarangeyt} Farangeytga teng!`;
  } else if (temperatureSelect == 'kelvin') {
    outputCelciy.textContent = `${temperatureInput} Kelvin ${kelvinToCelciy} Celciyga teng!`;
    outputKelvin.textContent = `${temperatureInput} Kelvin ${temperatureInput} Kelvinga teng!`;
    outputFarangeyt.textContent = `${temperatureInput} Kelvin ${kelvinToFarangeyt} Farangeytga teng!`;
  } else if(temperatureSelect == 'farangety') {
    outputCelciy.textContent = `${temperatureInput} Farangeyt ${farangetyToCelciy} Celciyga teng!`;
    outputKelvin.textContent = `${temperatureInput} Farangeyt ${farangetyToKelvin} Kelvinga teng!`;
    outputFarangeyt.textContent = `${temperatureInput} Farangeyt ${temperatureInput} Farangeytga teng!`;
  } else {
    alert("Siz temperatura o'lchovini tanlamadingiz!");
  }

  elTemperatureInput.value = "";
})

// Fourty work

let elRunForm = document.querySelector('.run-form');
let elRunInput = elRunForm.querySelector('.run-input');
let elRunRainCheck = elRunForm.querySelector('.form-run-input');
let elRunHallCheck = elRunForm.querySelector('.form-hall-input');

var elRunOut = document.querySelector('.run-out');

elRunForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  let runInput = elRunInput.value;
  let runRainCheck = elRunRainCheck.checked;
  let runHallCheck = elRunHallCheck.checked;

  const runMinTemperature = 5;
  const runMaxTemperature = 40;
  const MIN_TEMPERATURE = -273.15;
  const MAX_TEMPERATURE = 100;

  let runOut = elRunOut;

  if (runHallCheck == true) {
    runOut.textContent = "Siz bemalol shug'ullanishingiz mumkin. Chunki zall ochiq.";
    var alertInfo = "alert-success";
  } else {
    if (runRainCheck == true) {
      runOut.textContent = "Siz bugun shug'ullana olmaysiz. Chunki yomg'ir yog'yabdi.";
      var alertInfo = "alert-danger";
    } else {
      if (runInput >= runMinTemperature && runInput <= 40) {
        runOut.textContent = "Siz bemalol shug'ullanishingiz mumkin. Chunki ko'chada ob havo yaxshi.";
        var alertInfo = "alert-success";
      } else {
        if (runInput >= MAX_TEMPERATURE) {
          alert("Bunaqa issiq havo bo'lmaydiku. Iltimos haroratni to'g'ri kiriting!");
          runOut.textContent = "";
        } else {
          if (runInput <= MIN_TEMPERATURE) {
            alert("Bunaqa sovuq havo bo'lmaydiku. Iltimos haroratni to'g'ri kiriting!");
            runOut.textContent = "";
          } else {
            runOut.textContent = "Siz bugun shug'ullana olmaysiz. Chunki ob havo sog'lik uchun zararli.";
            var alertInfo = "alert-danger";
          }
        }
      } 
    }
  }

  elRunOut.classList.remove("alert-dark", "alert-success", "alert-primary", "alert-warning", "alert-danger", "alert-secondary"); 
  elRunOut.classList.add(alertInfo);

  elRunInput.value = "";
  elRunRainCheck.checked = 0;
  elRunHallCheck.checked = 0;
})