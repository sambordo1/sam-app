import { module, test } from 'qunit';
import { setupTest } from 'sam-app/tests/helpers';

module('Unit | Route | workout/injuries', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:workout/injuries');
    assert.ok(route);
  });
});
