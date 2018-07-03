// File for local storage
// we're going to set a default city and state in case there's nothing in local storage
// we're going to check to see if the city and state in the location data are null, or the local storage is null, if it is - we're going to set it to the default city and state, if not - then we obviously want to use whatever it's in there

class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = "San Francisco";
    this.defaultState = "CA";
  }

  getLocationData() {
    if(localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }

    if(localStorage.getItem("state") === null) {
      this.state = this.defaultState;
    } else {
      this.state = localStorage.getItem("state");
    }

    return {
      city: this.city,
      state: this.state
    }
  }

  setLocationData(city, state) {
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
  }
}