/*
  Vendor prefix checker for animation events
  Based on http://goo.gl/XPuW0w
*/

var checkPrefixer = (function() {
  'use strict';

  var ANIMATION_END_EVENT_NAMES = {
    'animation': 'animationend',
    '-o-animation': 'oAnimationEnd',
    '-moz-animation': 'animationend',
    '-webkit-animation': 'webkitAnimationEnd',
    '-ms-animation': 'MSAnimationEnd'
  };

  var ANIMATION_DURATION_NAMES = {
    'animation': 'animationDuration',
    '-o-animation': 'oAnimationDuration',
    '-moz-animation': 'animationDuration',
    '-webkit-animation': 'webkitAnimationDuration',
    '-ms-animation': 'MSAnimationDuration'
  };

  return {
    getAnimationEndEventName: function() {
      var eventName,
          fakeEl = document.createElement('fakeelement');

      for (eventName in ANIMATION_END_EVENT_NAMES) {
        if (typeof(fakeEl.style[eventName]) !== 'undefined') {
          return ANIMATION_END_EVENT_NAMES[eventName];
        }
      }
      return null;
    },
    getAnimationDurationName: function() {
      var eventName,
          fakeEl = document.createElement('fakeelement');

      for (eventName in ANIMATION_DURATION_NAMES) {
        if (typeof(fakeEl.style[eventName]) !== 'undefined') {
          return ANIMATION_DURATION_NAMES[eventName];
        }
      }
      return null;
    }
  };
})();
