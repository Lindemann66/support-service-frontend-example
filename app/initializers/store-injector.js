export function initialize(application) {
  application.inject('service:auth', 'store', 'service:store');
  application.inject('component', 'store', 'service:store');
}

export default {
  name: 'store-injector',
  initialize
};
