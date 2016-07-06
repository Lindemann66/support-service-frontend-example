import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    find: function() {
      var requestText = this.get('requestText');

      this.get('store').unloadAll('request');
      this.get('store').query('request', {text: requestText});
    }
  }
});
