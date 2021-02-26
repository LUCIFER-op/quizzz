class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = cotnestantCountRef.val();
        conteestant.getCount();
      }
      form = new Form()
      form.display();
    }
  } 






  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Contestant.getContestantInfo();

    if(allContestant !== undefined){
      var display_position = 130;
      for(var con in allContestants){
        if (con === "" + contestant.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allContestants[con].name + ": " + allContestants[con].distance, 120,display_position)
      }
    }

    if(keyIsDown(UP_ARROW) && contestant.index !== null){
      contestant.distance +=50
      contestant.update();
    }
  }
}