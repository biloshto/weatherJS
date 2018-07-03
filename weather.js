// File used to make a request to the API
// https://www.wunderground.com/weather/api/d/docs has an example url for fetching
// if we look at the response from the example fetch on the website, everything that we want is inside the current observation object, that's where all the weather information is in, and the location info, so instead of just returning the responseData we want to return responseData.current_observation; that way we just have one single object with all the weather stuff inside of it
// just by adding async it means that the function is going to return a promise
// the Weather class fetches data from the weather underground API

class Weather {
  constructor(city, state) {
    this.apiKey = "f063bdb343b595d0";
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}