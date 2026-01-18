/* global TrelloPowerUp */

var ESTIMATE_KEY = 'estimate';
var ICON_URL = 'https://cdn-icons-png.flaticon.com/512/2920/2920623.png';

// Helper function to get estimate from card
var getEstimate = function(t) {
  return t.get('card', 'shared', ESTIMATE_KEY);
};

// Helper function to set estimate on card
var setEstimate = function(t, value) {
  return t.set('card', 'shared', ESTIMATE_KEY, value);
};

// Helper function to calculate list total
var getListTotal = function(t) {
  return t.cards('all')
    .then(function(cards) {
      var total = 0;
      var promises = cards.map(function(card) {
        return t.get(card.id, 'shared', ESTIMATE_KEY)
          .then(function(estimate) {
            if (estimate && !isNaN(parseFloat(estimate))) {
              total += parseFloat(estimate);
            }
          });
      });
      
      return Promise.all(promises).then(function() {
        return total;
      });
    });
};

TrelloPowerUp.initialize({
  // Card badges - shows estimate on the card
  'card-badges': function(t, options) {
    return getEstimate(t)
      .then(function(estimate) {
        if (estimate) {
          return [{
            icon: ICON_URL,
            text: estimate,
            color: 'blue'
          }];
        }
        return [];
      });
  },

  // Card detail badges - allows editing the estimate
  'card-detail-badges': function(t, options) {
    return getEstimate(t)
      .then(function(estimate) {
        return [{
          title: 'Estimate',
          text: estimate || 'Not set',
          icon: ICON_URL,
          color: estimate ? 'blue' : 'gray',
          callback: function(t) {
            return t.popup({
              title: 'Set Estimate',
              url: './estimate-popup.html',
              height: 150
            });
          }
        }];
      });
  },

  // List actions - shows total estimates for the list
  'list-actions': function(t, options) {
    return [{
      text: 'Show Estimate Total',
      callback: function(t) {
        return t.popup({
          title: 'List Total Estimate',
          url: './list-total.html',
          height: 120
        });
      }
    }];
  },

  // Show authorization status
  'show-settings': function(t, options) {
    return t.popup({
      title: 'Card Estimates Settings',
      url: './settings.html',
      height: 184
    });
  }
});

console.log('Card Estimates Power-Up loaded');
