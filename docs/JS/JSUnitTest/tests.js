describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      chai.assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
  describe('Failed test', function(){
    it('Should failed', function() {
      chai.assert.fail(1, 2, undefined, ">");
    })
  })
});