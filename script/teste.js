function success(position) {
    console.log(position);
  }
  
  navigator.geolocation.getCurrentPosition(success);