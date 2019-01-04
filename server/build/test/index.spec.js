

const _chai = require('chai');

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      _chai.assert.equal([1, 2, 3].indexOf(1), 0);
    });
  });
});
