import GoodGuy from './goodguy';

(function() {
  'use strict';

  describe('About My Good Guy', function() {

    beforeEach(function() {
      window.x = new GoodGuy();
    });

    describe('creating a good guy', function() {
      it('should create an instance of Good Guy', function() {
        expect(x instanceof GoodGuy).to.equal(true);
      });
    });

    describe('my player health', function() {
      it('should have full health upon creation', function() {
        expect(x.health).to.equal(100);
      });
    });

    describe('player taking damage', function() {
      it('should lower the score, after getting hit', function() {
        x.hit();
        expect(x.health).to.be.below(100);
      });
    });

  });

}());
