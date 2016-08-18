'use strict';

describe('testing Harry Potter adventure time', function() {
  beforeEach(() => {
    angular.mock.module('gameApp');
    angular.mock.inject(($controller) => {
      this.gameCtrl = $controller('GameController');
    });
  });

  it('should start the game', () => {
    this.gameCtrl.start();
    expect(this.gameCtrl.player.name).toBe('Harry Potter');
  });

  it('should move Harry', () => {
    this.gameCtrl.start();
    this.gameCtrl.move('east');
    expect(this.gameCtrl.player.location).toBe('Chamber of Secrets');
  });

  it('should log a movement', () => {
    this.gameCtrl.start();
    this.gameCtrl.move('east');
    expect(this.gameCtrl.history.length).toBe(2);
  });

  it('should update the headings', () => {
    this.gameCtrl.start();
    this.gameCtrl.move('east');
    expect(this.gameCtrl.room).toBe('Chamber of Secrets');
  });

});
