    var diam1=5;

    function setup() {
  // put setup code here
   createCanvas(700,700);

}

     function draw() {
  // put 10 code here
 


     { background("#423f41");
     ellipse(350,350,diam1,diam1);
     fill ('#fc6603')
     
     }

    
     push();

     translate(width/2, height/2);
     translate(p5.Vector.fromAngle(millis() /900, 150));
     fill('#b57945')
     ellipse(0 ,0, 45, 45)
     textSize(20,20);
     textFont ("Arial")
     text("Jupiter",17, 17,45, 45);
 
     
     translate(p5.Vector.fromAngle(millis() / 900, 90));
     fill('#ab5c16')
     ellipse(1,3, 39, 40)
     textSize(20,20);
     textFont ("Arial")
     text("Saturn",18, 20,45, 45);
     
     
     translate(p5.Vector.fromAngle(millis() / 900, 90));
     fill('#abe0f5')
     ellipse(7,7 , 25, 25)
     textSize(20,20);
     textFont ("Arial")
     text("Uranus",17, 17,45, 45);
        
        
     translate(p5.Vector.fromAngle(millis() / 900, 90));
     fill('#0d9fd9')
     ellipse(7,7 , 25, 25)
     textSize(20,20);
     textFont ("Arial")
     text("Neptune",17, 17,45, 45);
    
     pop();
     
  
  
    textSize(29,29);
    textFont ("Cosmic Sans MS")
    text("Move the mouse inside the Canvas,click on it.",4,650);
 
    textSize(60,60);
    textFont("Georgia");
    textStyle(ITALIC);
    noStroke();
    translate(p5.Vector.fromAngle(millis() / 900, 90));
    text("Hello Jovian Planets",mouseX-20,mouseY,25,450);
    fill('yellow')
    }

    function mousePressed(){ 
    if(diam1 >10) {
        diam1=0;
    }else{
        diam1 =diam1+0;
    }
 
    }
                       
     
    function mousePressed(){
    diam1 = diam1-75;
}