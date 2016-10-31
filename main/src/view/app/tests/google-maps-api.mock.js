window.google = {
  maps: {
    DirectionsService: function() {
      return {
        route: function (a, b) {
          return true;
        }
      };
    }
  }
};