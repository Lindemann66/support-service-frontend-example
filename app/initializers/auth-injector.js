export function initialize(application) {
  application.inject('controller', 'auth', 'service:auth');
  application.inject('route', 'auth', 'service:auth');
  application.inject('component', 'auth', 'service:auth');
}

export default {
  name: 'auth-injector',
  initialize
};
