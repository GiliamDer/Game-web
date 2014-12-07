/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/



(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
     		
     		var stageRef
         var pietspring = false;
			stageRef = sym;
         var levens = 3;
         var speed = 2000;
         var score = 0;





      	function initGame(sym)
      	{
      	console.log("init game")
      		setTimeout(function(){randomKado(sym)},2000);
      		setScore(sym);
      	}

function setScore(sym){
		sym.getComposition().getStage().$("score").html("Score: " + score);

		console.log(score + " punten - levens" + levens);
		if(levens>0){
				var rand = Math.floor(Math.random()*5000)+speed;
				speed = speed-10;
				setTimeout(function(){randomKado(stageRef)},rand);
			}
			else{
			console.log("GAME OVER");
			sym.getComposition().getStage().$("txtNu").html("Verbeter je score: " + score);		
			var naam = window.prompt("Voeg je naam in en versla zo de highscores","Sint Niklaas"
			if(naam!=null){
				url = "http:/www.jolenefouquaert.com/game/SendScore1.php?name=" + naam + "&score=" + score;
					var frame = document.createElement("iframe");
					frame.src = url;
					frame.style.position = "relative";
					frame.style.left = "-9999px";
					document.body.appendChild(frame);
				//window.location = url;
			}

			sym.getComposition().getStage().play("score");
			}
	}

		function pietSpring(sym){
		console.log("piet springt");
		sym.getSymbol("spring2").play(0);
		yetiUp = true;
	}


       function randomKado(sym)
      	{

      		console.log("kadoootje");

      		if(gameStatus == GAME_STARTED) 
      		{
      			stageRef.$("cadeau").play(0);

      			var rand = Math.floor(Math.random()*5000)+5000;
      			setTimeout(function(){randomKado(sym)},rand);
      		}
      	}



      	    

      	function checkPiet(sym) 
      	{
      		console.log("checking");
      		if(pietspring == true)
      		{
      			console.log("goe bezig");
      			score++;
      			setScore(sym);
      			pietspring = false;


      		}
      		else
      		{ 
      			console.log("oeps")
      			levens --;
      			setScore(sym);
      		}
      	}

function randomKado(sym)
      	{
      		stageRef = sym;

      		console.log("kadoootje");
      		sym.getSymbol("cadeau").play(10)
      	}

      });
      
      
      
     //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$("speel").hide();
         sym.$("cadeau").hide();
         sym.$("tekstintro").hide();
         sym.$("Text").hide();
         sym.$("daken2").hide();
         sym.$("scorecijfer").hide();
         sym.$("score").hide();
         sym.$("spritesheet").hide();
         sym.$("spring2").hide();
         sym.$("springtekst").hide();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.$("speel").show();
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${speel}", "click", function(sym, e) {
         
         console.log("het spel wordt geladen");
         // play the timeline from the given position (ms or label)
         sym.play(0);
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         initGame(sym);

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35000, function(sym, e) {
         

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${spring2}", "click", function(sym, e) {
         
         console.log("er wordt geklikt");
         sym.getSymbol("spritesheet").play('spring');
         PietSpringt = true;
         CheckPiet(sym);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         stageRef = sym;
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "click", function(sym, e) {
         if(!pietspring){
         	console.log("stage.click - yetiUp =" + pietspring);
         	pietSpring(sym);
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'speel'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${speel}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(startgame);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("speel");
   //Edge symbol end:'speel'

   //=========================================================
   
   //Edge symbol: 'daken'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         sym.play(0);
         // insert code here

      });
      //Edge binding end

   })("daken");
   //Edge symbol end:'daken'

   //=========================================================
   
   //Edge symbol: 'spritesheet'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 928, function(sym, e) {
         pietspring = false;

      });
      //Edge binding end

   })("spritesheet");
   //Edge symbol end:'spritesheet'

   //=========================================================
   
   //Edge symbol: 'spring'
   (function(symbolName) {   
   
   console.log("er wordt geklikt");
   sym.getSymbol("spritesheet").play('spring');
   pietspring = true;
   CheckPiet(sym);

   })("spring");
   //Edge symbol end:'spring'

   //=========================================================
   
   //Edge symbol: 'cadeau'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         checkPiet(sym);

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(0);
         
         // insert code here

      });
      //Edge binding end

   })("cadeau");
   //Edge symbol end:'cadeau'

   //=========================================================
   
   //Edge symbol: 'scorecijfer'
   (function(symbolName) {   
   
   })("scorecijfer");
   //Edge symbol end:'scorecijfer'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-13303388");