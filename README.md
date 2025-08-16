# Sample App Using Korean Weather OpenAPI

## Project Overview
This project is a JavaScript-based web application designed to demonstrate various methods for fetching and displaying weather information using the Korean Weather OpenAPI. It showcases four different approaches to integrate weather data into a web application.

## Author
*   **Name:** Jaehong Park
*   **Email:** jeahong1972@gmail.com

## Project Structure and File Descriptions

```
/home/jhp/PRJ/opensupport-ceo/web-weather-api/
├───.gitignore
├───geolocation.js
├───LccDfs.js
├───LICENSE
├───location.js
├───README.md
├───weather.html
├───weather1st.js
├───weather2nd.js
├───weather3rd.js
├───weather4th.js
├───.git/
├───OpenAPI-User-Guide(기상청_신규-동네예보정보조회서비스)_v2.5_/
│   ├───동네예보조회서비스_격자_위경도_20190107.xlsx
│   └───OpenAPI 사용자 활용가이드(기상청_신규 동네예보정보조회서비스)_v2.5.hwp
└───response_sample/
    ├───동네예보조회.json
    └───동네예보조회.xml
```

### File Descriptions:

*   `.gitignore`: Specifies intentionally untracked files that Git should ignore.
*   `geolocation.js`: Likely handles obtaining the user's geographical coordinates (latitude and longitude) using browser-based geolocation APIs.
*   `LccDfs.js`: Contains the algorithm for converting latitude and longitude coordinates, essential for interacting with the weather API which might use a specific grid system.
*   `LICENSE`: The license file for this project, detailing terms of use and distribution.
*   `location.js`: Manages location-related data, possibly including storing, retrieving, or processing geographical information.
*   `README.md`: This document, providing an overview, setup instructions, and file descriptions for the project.
*   `weather.html`: The main HTML file that serves as the user interface for the weather application. It integrates the JavaScript files to display weather data.
*   `weather1st.js`: One of the four JavaScript files demonstrating a method to fetch weather data from the Korean Weather OpenAPI.
*   `weather2nd.js`: The second JavaScript file showcasing an alternative method for retrieving weather information.
*   `weather3rd.js`: The third JavaScript file, providing another distinct approach to integrate weather data.
*   `weather4th.js`: The fourth and final JavaScript file, illustrating yet another method for fetching and processing weather data.
*   `OpenAPI-User-Guide(기상청_신규-동네예보정보조회서비스)_v2.5_/`: This directory contains the official user guide and related documentation for the Korea Meteorological Administration's (KMA) new local weather forecast information inquiry service OpenAPI.
    *   `동네예보조회서비스_격자_위경도_20190107.xlsx`: An Excel file containing grid coordinates (latitude and longitude) used by the local weather forecast inquiry service.
    *   `OpenAPI 사용자 활용가이드(기상청_신규 동네예보정보조회서비스)_v2.5.hwp`: The HWP (Hangul Word Processor) document of the OpenAPI user guide.
*   `response_sample/`: This directory holds sample responses from the weather API, useful for testing and understanding the API's output format.
    *   `동네예보조회.json`: A sample JSON response for local weather forecast inquiries.
    *   `동네예보조회.xml`: A sample XML response for local weather forecast inquiries.

## CORS Information
You may need a plug-in for your Chrome browser due to Cross-Origin Resource Sharing (CORS) issues when accessing the API directly from the browser.
You may refer to the link: https://brunch.co.kr/@adrenalinee31/1
and have to install the plug-in from the link: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?utm_source=chrome-ntp-icon.