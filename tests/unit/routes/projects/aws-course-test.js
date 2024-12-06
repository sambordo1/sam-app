import { module, test } from 'qunit';
import { setupTest } from 'sam-app/tests/helpers';

module('Unit | Route | projects/aws-course', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:projects/aws-course');
    assert.ok(route);
  });
});
