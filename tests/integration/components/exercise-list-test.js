import { module, test } from 'qunit';
import { setupRenderingTest } from 'sam-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | exercise-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ExerciseList />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ExerciseList>
        template block text
      </ExerciseList>
    `);

    assert.dom().hasText('template block text');
  });
});
