import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

import GoodGuy from './goodguy';
import BadGuy from './badguy';
import Button from './button';

console.log('h');

// Good Guy Instance
let mario = new GoodGuy();

// Bad Guy Instance
let bowser = new BadGuy();

//Button Instance
let start = new Button({
  text: 'Start',
});

// DOM Nodes Selected
let ggHealth = $('.ggHealth');
let bgHealth = $('.bgHealth');
let ggAttack = $('.ggAttack');
let startB = $('.startB');

// Show current (default) health
ggHealth.text(mario.health);
bgHealth.text(bowser.health);
startB.text(start.text);


// Setting up ON Events
  startB.on('click', function () {
    $("button").click(function(){
        $("p").removeClass("action");
    });
  ggAttack.on('click', function () {

  // Generate a random amount of hit points
  // Then attack!!!
  let num = _.random(0, 25);
  bowser.hit(num);

  if (bowser.health <= 0) {
    bgHealth.text('Defeated');
    alert('Mario Wins!!')
  } else {
    bgHealth.text(bowser.health);
    alert('Bowser Fights Back!!!');
    mario.hit(10);
    ggHealth.css('color', 'red');
    ggHealth.text(mario.health);
    setTimeout( function () {
      ggHealth.css('color', 'black');
    }, 1000);
  }

  console.log(bowser);
});