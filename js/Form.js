class Form {

  constructor() {
    this.input = createInput("enter your name here ");
    this.input = createInput('Play');
    this.input = createInput('Question-what starts and ends with ');
    this.input = createInput('ends with');
    this.input = createInput('E but has only one letter');

    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.input.hide();
    this.input.hide();
    this.input.hide();
    this.input.hide();
    this.input.hide();

  }

  display(){
    var title = createElement('h2')
    title.html("My Quiz Game");
    title.position(130, 0);

    title.html("everyone");
    title.position(130, 20);

    title.html("envelope");
    title.position(130, 40);

    title.html("estimate");
    title.position(130, 60);

    title.html("example");
    title.position(130, 80);

    this.input.position(130, 160);
    this.input.position(250, 200);
    this.input.position(130, 250);
    this.input.position(135, 250);
    this.input.position(140, 250);

    this.input.mousePressed(()=>{
      this.input.hide();
      this.input.hide();
      contestant.name = this.input.value();
      contestantCount+=1;
      contestant.index = playerCount;
      contestant.update();
      contestant.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });

  }
}