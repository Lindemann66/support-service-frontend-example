import Ember from 'ember';
import RouterInjectorInitializer from 'support-frontend/initializers/router-injector';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | router injector', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  RouterInjectorInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
