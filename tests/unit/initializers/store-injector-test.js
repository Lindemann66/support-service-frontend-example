import Ember from 'ember';
import StoreInjectorInitializer from 'support-frontend/initializers/store-injector';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | store injector', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  StoreInjectorInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
