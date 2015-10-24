let Button = function(obj) {
  obj = obj || {};

  this.health = 100;
  this.text = obj.text;
  this.color = obj.color;


  this.hit = function(num) {
    let hitPoints = num || 10;
    return this.health = this.health - hitPoints;
  };

};


export default Button;