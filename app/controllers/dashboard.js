import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    requestAdded: function() {
      this.get('target.router').refresh();
    },
    userAdded: function() {
      this.get('target.router').refresh();
    }
  }
});
