QUnit.module( "Romanizer", function (assert) {

  QUnit.test( "when 1, returns I", function (assert) {
    assert.equal( Romanizer.convert(1), "I", "Test passed: converts 1" );
  });

  QUnit.test( "when 2, returns II", function (assert) {
    assert.equal( Romanizer.convert(2), "II", "Test passed: converts 2" );
  });

  QUnit.test( "when 3, returns III", function (assert) {
    assert.equal( Romanizer.convert(3), "III", "Test passed: converts 3" );
  });

  QUnit.test( "when 4, returns IV", function (assert) {
    assert.equal( Romanizer.convert(4), "IV", "Test passed: converts 4" );
  });

  QUnit.test( "when 5, returns V", function (assert) {
    assert.equal( Romanizer.convert(5), "V", "Test passed: converts 5" );
  });

  QUnit.test( "when 6, returns VI", function (assert) {
    assert.equal( Romanizer.convert(6), "VI", "Test passed: converts 6" );
  });

  QUnit.test( "when 9, returns IX", function (assert) {
    assert.equal( Romanizer.convert(9), "IX", "Test passed: converts 9" );
  });

  QUnit.test( "when 10, returns X", function (assert) {
    assert.equal( Romanizer.convert(10), "X", "Test passed: converts 10" );
  });

  QUnit.test( "when 11, returns XI", function (assert) {
    assert.equal( Romanizer.convert(11), "XI", "Test passed: converts 11" );
  });

  QUnit.test( "when 12, returns XII", function (assert) {
    assert.equal( Romanizer.convert(12), "XII", "Test passed: converts 12" );
  });

  QUnit.test( "when 15, returns XV", function (assert) {
    assert.equal( Romanizer.convert(15), "XV", "Test passed: converts 15" );
  });

  QUnit.test( "when 20, returns XX", function (assert) {
    assert.equal( Romanizer.convert(20), "XX", "Test passed: converts 20" );
  });

});
