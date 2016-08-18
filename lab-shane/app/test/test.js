'use strict';

describe('testing players and monster', function() {
  beforeEach(() => {
    angular.mock.module('gameApp');
    angular.mock.inject(($controller, $rootScope) => {
      this.scope = $rootScope.$new();
      new $controller('GameController', {$scope: this.scope});
    });
  });

  it('should start the game', () => {
    this.scope.gameCtrl.start();
    expect(this.scope.gameCtrl.player.name).toBe('Harry Potter');
  });

  it('should move Harry', () =>{
    this.scope.gameCtrl.move('east');
    expect(this.scope.gameCtrl.player.location).toBe('Chamber of Secrets');
  });

  it('should log a movement', () => {
    this.scope.gameCtrl.move('east');
    expect(this.scope.gameCtrl.history.length).toBe(3);
  });

  it('should update the headings', () =>{
    expect(this.scope.room).toBe('Great Lake');
  });

});
