import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

import GoodGuy from './goodguy';
import BadGuy from './badguy';


// Good Guy Instance
let msu = new GoodGuy();

// Bad Guy Instance
let stu = new BadGuy();


// DOM Nodes Selected
let ggHealth = $('.ggHealth');
let bgHealth = $('.bgHealth');

let ggAttack = $('.ggAttack');

// Show current (default) health
ggHealth.text(msu.health);
bgHealth.text(stu.health);


// Setting up ON Events
ggAttack.on('click', function () {

  // Generate a random amount of hit points
  // Then attack!!!
  let num = _.random(0, 25);
  bowser.hit(num);

  if (bowser.health <= 0) {
    bgHealth.text('Defeated');
    alert('Mario Wins!!');
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


