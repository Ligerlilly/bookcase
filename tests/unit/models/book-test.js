import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('book', 'Unit | Model | book', {
  // Specify the other units that are required for this test.
  needs: ['model:publisher', 'model:author', 'model:publisher']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('it has an attribute: title', function(assert) {
  var model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('title') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: isbn', function(assert) {
  var model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('isbn') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: cover', function(assert) {
  var model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('cover') > -1;
  assert.ok(hasAttr);
});

test('publisher relationship', function(assert) {
  var model = this.store().modelFor('book');
  var rel = Ember.get(model, 'relationshipsByName').get('publisher');

  assert.equal(rel.key, 'publisher');
  assert.equal(rel.kind, 'belongsTo');
});
