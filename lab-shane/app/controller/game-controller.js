'use strict';

const angular = require('angular');
const gameApp = angular.module('gameApp');

gameApp.controller('GameController', ['$log', GameController]);

function GameController($log) {

  this.map = require('../lib/map.js');
  this.directions = ['north', 'east', 'south', 'west'];
  this.instructions = require('../lib/instructions.js');
  this.adventures = require('../lib/adventures.js');
  this.allAdventures = Object.keys(this.adventures);
  this.beginning = true;
  this.adventureTime = false;
  this.ending = false;

  this.start = function() {
    this.player = {name: 'Harry Potter', location: 'Room of Requirement'};
    this.currentDescriptions();
    this.beginning = false;
    this.history = [{id: 0, text: this.player.name + ' begins in the ' + this.player.location}];
  };

  this.move = function(direction) {
    if (!this.map[this.player.location]) return this.logMove(this.player.name + '\'s location not found! Refresh page.');
    if (this.room === 'Hogwarts Castle') {
      this.ending = true;
    }
    if (this.map[this.player.location][direction] === 'wall') {
      $log.debug(this.player.name + ' hit a wall');
      return this.logMove(this.player.name + ' hit a wall');
    }
    if (this.map[this.player.location][direction] !== 'wall') {
      this.player.location = this.map[this.player.location][direction];
      $log.debug(this.player.name + ' moved to:', this.player.location);
      this.currentDescriptions();
      this.adventureAppear();
      return this.logMove(this.player.name + ' moved to the ' + this.player.location);
    }
  };

  this.logMove = function(story) {
    this.history.push({id: this.history.length, text: story});
  };

  this.currentDescriptions = function() {
    this.room = this.player.location;
    // $scope.room = this.player.location;
    // $scope.instruction = this.instructions[this.player.location];
    this.instruction = this.instructions[this.player.location];
  };

  this.adventureAppear = function() {
    let selection = this.allAdventures[Math.round(Math.random() * 5)];
    console.log(selection);
    console.log(this.adventures[selection]);
    if (!this.adventures[selection]) return;
    this.notice = this.adventures[selection].notice;
    this.adventureTime = true;
    this.adventure = selection;
    this.adventureChoice = this.adventures[selection];
    console.log(this.adventure);
  };

  this.doAdventure = function() {
    let num = Math.floor(Math.random() * this.adventureChoice.option.length);
    let choice = this.adventureChoice.option[num];
    this.adventureTime = false;
    return this.logMove(this.adventureChoice.response + choice);
  };

}
