var player1, player2;
//Back-End Logic/
function Player(name, turnTotal, diceRoll, overallScore, active) {
    this.name = name;
    this.diceRoll = 0;
    this.turnTotal = 0;
    this.overallScore = 0;
    this.active = active;
}

};
Player.prototype.roll = function () {
    var randomNo = Math.floor((Math.random() * 6) + 1); //S
    if (randomNo === 1) {
        this.turnTotal = 0;
        this.diceRoll = 1;
        
