export function initialize(application) {
  application.inject('model:user', 'role-mapper', 'service:user-role-mapper');
  application.inject('component', 'role-mapper', 'service:user-role-mapper');
  application.inject('route', 'role-mapper', 'service:user-role-mapper');
}

export default {
  name: 'user-role-mapper-injector',
  initialize
};
