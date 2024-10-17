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
const os =  select('.os');
const latitude = select('.latitude')
const longitude = select('.longitude')
const accuracy = select('.accuracy')

// Did a buch of reasearh and this is the only way I found to get the OS of a 
// user. I know that using switch(true) is a bad practice but I was rushed for 
// time and it works

function getOS() {
  const userAgent = navigator.userAgent.toLowerCase();
  let userOs = "Unknown OS";

  switch (true) {
    case /windows nt/.test(userAgent):
      userOs = 'Windows';
      break;
    case /mac os/.test(userAgent):
      userOs = 'MacOS';
      break;
    case /linux/.test(userAgent):
      userOs = 'Linux';
      break;
    case /android/.test(userAgent):
      userOs = 'Android';
      break;
    case /iphone|ipad/.test(userAgent):
      userOs = 'iOS';
      break;
    default:
      userOs = 'Unknown OS';
  }
  os.innerText = userOs;
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
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        latitude.innerText = lat;
        longitude.innerText = long;
        const acc = position.coords.accuracy.toFixed(0);
        accuracy.innerText = `${acc}m`;
      },
    );
  } else {
    latitude.innerText = 'Location not supported';
    longitude.innerText = 'Location not supported';
  }
}

listen('load', window, () => {
  windowInfo();
  getOS();
  getUserLocation();
});
listen('resize', window, () => {
  windowInfo();
});



