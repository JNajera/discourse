import RestrictedUserRoute from "discourse/routes/restricted-user";

export default RestrictedUserRoute.extend({
  model() {
    return this.modelFor('user');
  },

  renderTemplate() {
    return this.render({ into: 'user' });
  },

  // A bit odd, but if we leave to /preferences we need to re-render that outlet
  deactivate() {
    this._super();
    this.render('preferences', { into: 'user', controller: 'preferences' });
  },

  setupController(controller, model) {
    controller.setProperties({ model, newUsername: model.get('username') });
  }
});
