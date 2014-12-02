define(['./module', 'angular-route'], function(landing) {
  'use strict';

  landing.service('countdown', [ function() {
    var arrivalDate = new Date("2014-12-12T17:00");

    return {
      getTimeInChicago: function() {
        var chicagoOffset = -6;
        return new Date(getUtcTime() + (3600000 * chicagoOffset)).toLocaleString();
      },
      getArrivalDate: function() {
        return new Date(arrivalDate.getTime() + new Date().getTimezoneOffset() * 60000).toLocaleString();
      },
      getClock: function() {
        return countdown(arrivalDate);
      }
    }
  }]);

  function getUtcTime() {
    var d = new Date();
    return d.getTime() + (d.getTimezoneOffset() * 60000);
  }

  function countdown(arrivalDate) {
    var days, hours, minutes, sec, timer, end;

    end = arrivalDate.getTime();
    if (isNaN(end)) {
      console.log('feito!');
      return;
    }

    var current = getUtcTime();
    var remaining = parseInt((end - current) / 1000); //remaining seconds,

    if (remaining <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      sec = 0;
      return display(days, hours, minutes, sec);
    } else {

      days = parseInt(remaining / 86400);
      remaining = (remaining % 86400);
      hours = parseInt(remaining / 3600);
      remaining = (remaining % 3600);
      minutes = parseInt(remaining / 60);
      remaining = (remaining % 60);
      sec = parseInt(remaining) + 1;
      return display(days, hours, minutes, sec);
    }
  }

  function display(days, hours, minutes, sec) {
    var dl = days.toString().length;
    var sl;
    if (dl == "1") {
      sl = 2;
    } else {
      if (isNaN(dl)) {
        sl = 3;
      }
      sl = dl;
    }
    return {
      "days": ("00" + days).slice(-sl),
      "hours": ("0" + hours).slice(-2),
      "minutes": ("0" + minutes).slice(-2),
      "seconds": ("0" + sec).slice(-2)
    }
  }

});
