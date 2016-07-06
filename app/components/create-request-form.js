import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createRequest() {
      var requestText = this.get('requestText');

      var request = this.get('store').createRecord('request', {text: requestText});
      request.save();

      this.get('requestAdded')();
    }
  }
});