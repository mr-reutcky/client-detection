'use strict';

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function listen(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

const pageWidth = select('.width');
const pageHeight = select('.height');
const orient = select('.orient');
const os = select('.os');
const latitude = select('.latitude');
const longitude = select('.longitude');
const accuracy = select('.accuracy');
const cpu = select('.cpu');
const language = select('.language');
const engine = select('.browser');
const level =  select('.level');
const charging = select('.status');

// Did a buch of reasearh and this is the only way I found to get the OS of a
// user. I know that using switch(true) is a bad practice but I was rushed for
// time and it works

function getOS() {
  const userAgent = navigator.userAgent.toLowerCase();
  let userOs = 'Unknown OS';

  switch (true) {
    case /android/.test(userAgent):
      userOs = 'Android';
      break;
    case /iphone|ipad/.test(userAgent):
      userOs = 'iOS';
      break;
    case /windows nt/.test(userAgent):
      userOs = 'Windows';
      break;
    case /mac os/.test(userAgent):
      userOs = 'MacOS';
      break;
    case /linux/.test(userAgent):
      userOs = 'Linux';
      break;
    default:
      userOs = 'Unknown OS';
  }
  os.innerText = userOs;
}

function getBrowser() {
  const userAgent = navigator.userAgent.toLowerCase();
  let browser = 'Unknown Browser';

  if (userAgent.includes('opr')) {
    browser = 'Opera';
  } else if (userAgent.includes('chrome') && !userAgent.includes('edge')) {
    browser = 'Google Chrome';
  } else if (userAgent.includes('edge')) {
    browser = 'Microsoft Edge';
  } else if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
    browser = 'Safari';
  } else if (userAgent.includes('firefox')) {
    browser = 'Mozilla Firefox';
  } else if (userAgent.includes('msie') || userAgent.includes('trident')) {
    browser = 'Internet Explorer';
  }
  engine.innerText = browser;
}

function windowInfo() {
  pageWidth.innerText = `${window.innerWidth}px`;
  pageHeight.innerText = `${window.innerHeight}px`;

  orient.innerText =
    window.innerWidth >= window.innerHeight ? 'landscape' : 'portrait';
}

// Used MDN to learrn about the geolocation API and how to use it
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      latitude.innerText = `${lat}°`;
      longitude.innerText = `${long}°`;
      const acc = position.coords.accuracy.toFixed(0);
      accuracy.innerText = `${acc}m`;
    });
  } else {
    latitude.innerText = 'N/A';
    longitude.innerText = 'N/A';
  }
}


function getBatteryStatus() {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            let level = battery.level * 100;
            let isCharging = battery.charging ? "Charging" : "Not Charging";
            level.innerText = `${level}%`;
            charging.innerText = isCharging;
        });
    } else {
      level.innerText = 'Battery info not avalible';
      charging.innerText = 'Battery info not avalible';
    }
}


function getSystemLanguage() {
  const systemLanguage = navigator.language || 'Unknown';

  let formattedLanguage;
  // Used chatGBT for the switch cash as i didnt want to look up all the
  // different variations
  switch (systemLanguage) {
    case 'en':
    case 'en-US':
    case 'en-GB':
      formattedLanguage = 'English';
      break;
    case 'fr':
    case 'fr-FR':
    case 'fr-CA':
      formattedLanguage = 'French';
      break;
    case 'es':
    case 'es-ES':
    case 'es-MX':
      formattedLanguage = 'Spanish';
      break;
    case 'de':
    case 'de-DE':
      formattedLanguage = 'German';
      break;
    case 'zh':
    case 'zh-CN':
    case 'zh-TW':
      formattedLanguage = 'Chinese';
      break;
    case 'ja':
    case 'ja-JP':
      formattedLanguage = 'Japanese';
      break;
    case 'it':
    case 'it-IT':
      formattedLanguage = 'Italian';
      break;
    case 'pt':
    case 'pt-PT':
    case 'pt-BR':
      formattedLanguage = 'Portuguese';
      break;
    default:
      formattedLanguage = 'Unknown Language';
  }
  language.innerText = formattedLanguage;
}

listen('load', window, () => {
  windowInfo();
  getOS();
  getUserLocation();
  getSystemLanguage();
  getBrowser();
  getBatteryStatus();
});
listen('resize', window, () => {
  windowInfo();
});
