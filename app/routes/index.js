import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').queryRecord('user', {});
  },
  redirect(model, transition) {
    transition.send('redirectToBasePath');
  },
  actions: {
    redirectToBasePath: function() {
      var currentUser = this.get('auth').modelFromCache();

      if (currentUser !== null) {
        this.transitionTo('dashboard');
      }
    }
  }
});