import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteUser: function(userId) {
      var user = this.get('store').peekRecord('user', userId);
      user.destroyRecord();
    }
  }
});
