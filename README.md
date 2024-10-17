# Client Detection Web Project

This project provides a dynamic display of the system and browser details of the client. It detects and displays information like the operating system, browser, screen size, network status, battery level, system language, and geolocation data.

## Features

- **System Information**:

  - OS
  - Browser
  - Language
  - Network Status

- **Window Information**:

  - Width
  - Height
  - Orientation

- **Location**:

  - Latitude
  - Longitude
  - Accuracy

- **Battery**:
  - Battery Level
  - Charging Status

## Technologies Used

- **HTML5**: Provides the structure of the webpage.
- **CSS3**: Used for styling and layout.
- **JavaScript**: Handles client-side logic for detecting system information.

## How It Works

### 1. **System Info**

- The `navigator.userAgent` is used to detect the browser and OS.
- The `navigator.language` property is used to detect the system's language.
- `navigator.onLine` checks the network status.

### 2. **Window Info**

- Displays the current window's width, height, and orientation.
- Updates when the window is resized.

### 3. **Location**

- The browser's Geolocation API (`navigator.geolocation.getCurrentPosition`) retrieves the user's latitude, longitude, and accuracy.

### 4. **Battery**

- Uses `navigator.getBattery()` to check battery status.
- It updates in real-time when the charging status or level changes.

### 5. **Network Status**

- Changes the color of the network icon based on whether the user is online or offline.

## Built With:

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)  
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)  
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)
