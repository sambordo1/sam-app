import { module, test } from 'qunit';
import { setupTest } from 'sam-app/tests/helpers';

module('Unit | Route | workout', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:workout');
    assert.ok(route);
  });
});
