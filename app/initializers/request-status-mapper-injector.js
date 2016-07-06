export function initialize(application) {
  application.inject('model:request', 'status-mapper', 'service:request-status-mapper');
  application.inject('component', 'status-mapper', 'service:request-status-mapper');
}

export default {
  name: 'request-status-mapper-injector',
  initialize
};
