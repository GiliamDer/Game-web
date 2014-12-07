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

//zelf getypt

//einde zelf getypt



   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         //set the value of a Symbol variable
         sym.setVariable("score", 0);
         //get the value of a Symbol variable
         var score = sym.getVariable("score");
         
         sym.$("score").html(score);
         
         console.log("ingeladen");
         
         HitSound = new Audio();
         
         ClickSound = new Audio();
         
         GameOverSound = new Audio();
         
         LifeSound = new Audio();
         
         function PlayHitSound(){						
         HitSound.src = "sounds/hit1.mp3";
         HitSound.preload;
         HitSound.play();
   		}	
   
   		function PlayClickSound(){						
         ClickSound.src = "sounds/click.mp3";
         ClickSound.preload;
         ClickSound.play();
   		}	
   
   		function PlayGameOverSound(){						
         GameOverSound.src = "sounds/gameover1.wav";
         GameOverSound.preload;
         GameOverSound.play();
   		}	
   
   		function PlayLifeSound(){						
         LifeSound.src = "sounds/life.mp3";
         LifeSound.preload;
         LifeSound.play();
   		}
   
         sym.$("replayknop").hide();
   
         //set the value of a Symbol variable
         sym.setVariable("HuidigLeven", 4);
   
         var username = sym.$("username");    
			usernameinvoer = $("<input />").attr({'type':'text', 'value':'', 'id':'locatieInvoer', 'placeholder':'username'});
			usernameinvoer.appendTo(username);
			usernameinvoer.css("width", 280);
			usernameinvoer.css("height", 70);
			usernameinvoer.css("border-color", "black");
			usernameinvoer.css("border-thickness", 3);
			usernameinvoer.css("borderRadius", 40);
			usernameinvoer.css("background-color", "#dfdfdf");
			usernameinvoer.css("color", "black");
			usernameinvoer.css("font-size", 30);
			usernameinvoer.css("padding-left", 20);
			usernameinvoer.css("outline", "none");

         function toonGameOver()
         {
         	PlayGameOverSound();
         	sym.getSymbol("Symbol_bunnyhole").stop();
         	sym.getSymbol("Symbol_bunnyhole_1").stop();
         	sym.getSymbol("Symbol_bunnyhole_2").stop();

         	var oldText = sym.$("score").text();
         	sym.$("scoregameover").text(oldText);
         	sym.$("leven1").hide();
         	sym.$("leven2").hide();
         	sym.$("leven3").hide();
         	sym.$("scoregameover").show();
         	sym.$("gameoverscherm").show();
         	sym.$("replayknop").show();
         	sym.$("highscoreknop").show();

				//omzetten naar json	
				var usernamevalue = usernameinvoer.attr('value');					
				var highscore = sym.$("score").text();

				var scoreOBJhighscore = {Score:highscore, Username:usernamevalue};	

				console.log("de score is " + highscore);
				console.log("de naam is " + usernamevalue);

				var jsonDataHighscore = JSON.stringify(scoreOBJhighscore);

				console.log(scoreOBJhighscore);
				console.log(jsonDataHighscore);

				//Score insert			
						$.ajax({
						 type: "POST",
						 url: "Database.php",
						 dataType: "json",
						 data: { json: jsonDataHighscore }
					});


				//Score ophalen
			$.ajax({
                url: "Database.php",
                type: "POST",
                dataType: "json",
                success: function (obj) {
                	console.log(obj);
                  sym.$("name1").html(obj[0].name);
                  sym.$("name2").html(obj[1].name);
                  sym.$("name3").html(obj[2].name);
                  sym.$("name4").html(obj[3].name);
                  sym.$("name5").html(obj[4].name);

                  sym.$("score1").html(obj[0].score);
                  sym.$("score2").html(obj[1].score);
                  sym.$("score3").html(obj[2].score);
                  sym.$("score4").html(obj[3].score);
                  sym.$("score5").html(obj[4].score);

                }                  
           });
         }

         sym.VerminderLeven = function(HuidigLeven)
         {
         	console.log("functie verminder leven wordt uitgevoerd");
         	if(HuidigLeven == 3)
         	{
         		PlayLifeSound();
         		sym.$("leven3").hide();	
         		//set the value of a Symbol variable
         		sym.setVariable("HuidigLeven", HuidigLeven);

         	}
         	if(HuidigLeven == 2)
         	{
         		PlayLifeSound();
         		sym.$("leven3").hide();	
         		sym.$("leven2").hide();
         		sym.setVariable("HuidigLeven", HuidigLeven);
         	}
         	if(HuidigLeven == 1)
         	{
         		PlayLifeSound();
         		sym.$("leven3").hide();	
         		sym.$("leven2").hide();
         		sym.$("leven1").hide();
         		sym.getSymbol("Symbol_bunnyhole").stop();
         		sym.getSymbol("Symbol_bunnyhole_1").stop();
         		sym.getSymbol("Symbol_bunnyhole_2").stop();
         		setTimeout(function() { toonGameOver() },500);
         	}
         	if(HuidigLeven == 4)
         	{
         		console.log("geen leven weg");
         	}
         }


         function StartBunny1()
         {
         	sym.getSymbol("Symbol_bunnyhole").play(0);
         }
         function StartBunny2()
         {
         	sym.getSymbol("Symbol_bunnyhole_1").play(0);
         }
         function StartBunny3()
         {
         	sym.getSymbol("Symbol_bunnyhole_2").play(0);
         }


         // klik functies --------------------------------------------------------------

			sym.$("instructionsknop").click(function(){
				PlayClickSound();
				sym.$("instructions").show();
			});
			sym.$("highscoreknop").click(function(){
				//Score ophalen
				PlayClickSound();
				$.ajax({
						 url: "Database.php",
						 type: "POST",
						 dataType: "json",
						 success: function (obj) {
							console.log(obj);
							sym.$("name1").html(obj[0].name);
							sym.$("name2").html(obj[1].name);
							sym.$("name3").html(obj[2].name);
							sym.$("name4").html(obj[3].name);
							sym.$("name5").html(obj[4].name);

							sym.$("score1").html(obj[0].score);
							sym.$("score2").html(obj[1].score);
							sym.$("score3").html(obj[2].score);
							sym.$("score4").html(obj[3].score);
							sym.$("score5").html(obj[4].score);

						 }                  
				  });

				sym.$("highscores").show();
				sym.$("backhighscoresknop").show();
				sym.$("scoreboard").show();
				sym.$("replayknop").hide();
				sym.$("scoregameover").hide();
				sym.$("highscoreknop").hide();

			});
			sym.$("backinstructionsknop").click(function(){
				PlayClickSound();
				sym.$("instructions").hide();
			});
			sym.$("backhighscoresknop").click(function(){
				PlayClickSound();
				sym.$("highscores").hide();
				sym.$("backhighscoresknop").hide();
				sym.$("scoreboard").hide();
				sym.$("gameoverscherm").show();
				sym.$("replayknop").show();
				sym.$("scoregameover").show();
				sym.$("highscoreknop").show();
			});

			sym.$("playknop").click(function(){
			PlayClickSound();
			var usernamevalue = usernameinvoer.attr('value');
			if( usernamevalue != "")
			{
				console.log("playknop geklikt");

				// Hide an Element.
				//  (sym.$("name") resolves an Edge Animate element name to a DOM
				//  element that can be used with jQuery)
				sym.$("playknop").hide();
				sym.$("replayknop").hide();

			// Hide an Element.
			//  (sym.$("name") resolves an Edge Animate element name to a DOM
			//  element that can be used with jQuery)
			sym.$("startscherm").hide();

			// Hide an Element.
			//  (sym.$("name") resolves an Edge Animate element name to a DOM
			//  element that can be used with jQuery)
			sym.$("gameoverscherm").hide();

			sym.$("instructionsknop").hide();
			sym.$("backinstructionsknop").hide();

			// Hide an Element.
			//  (sym.$("name") resolves an Edge Animate element name to a DOM
			//  element that can be used with jQuery)
			sym.$("bunnyholehoop1").hide();
			sym.$("bunnyholehoop2").hide();
			sym.$("bunnyholehoop3").hide();
			sym.$("bunnyholeranden").hide();
			sym.$("introkonijntjes").hide();
			sym.$("username").hide();



			sym.$("leven1").show();
			sym.$("leven2").show();
			sym.$("leven3").show();

			var Rand1 = Math.floor(Math.random() * 3000) + 1000;
			var Rand2 = Math.floor(Math.random() * 3000) + 1000;
			var Rand3 = Math.floor(Math.random() * 3000) + 1000;

			setTimeout(function() { StartBunny1() },Rand1); 
			setTimeout(function() { StartBunny2() },Rand2);
			setTimeout(function() { StartBunny3() },Rand3);   
			}
			}
			);



         sym.$("replayknop").click(function()
         {
         	PlayClickSound();
         	sym.$("scoregameover").hide();
         	sym.$("gameoverscherm").hide();
         	sym.$("replayknop").hide();
         	sym.$("highscoreknop").hide();

         	sym.setVariable("score", 0);
         	var score = sym.getVariable("score");
         	sym.setVariable("score", score + 0);
         	sym.$("score").html(score + 0);
         	sym.setVariable("HuidigLeven", 4);


         	sym.$("leven1").show();
         	sym.$("leven2").show();
         	sym.$("leven3").show();



         	sym.getSymbol("Symbol_bunnyhole").play(0);
         	sym.getSymbol("Symbol_bunnyhole_1").play(0);
         	sym.getSymbol("Symbol_bunnyhole_2").play(0);
         });





         sym.getSymbol("Symbol_bunnyhole").$("hitbox").click(function()
         {
         	PlayHitSound();
         	console.log("ER is op geklikt");
         	var score = sym.getVariable("score");
         	sym.setVariable("score", score + 10);
         	sym.$("score").html(score + 10);
         	sym.getSymbol("Symbol_bunnyhole").play("dood");
         });

         sym.getSymbol("Symbol_bunnyhole").$("hitboxgoed").click(function()
         {
         	PlayHitSound();
         	console.log("ER is op geklikt");
         	var score = sym.getVariable("score");
         	sym.setVariable("score", score + 0);
         	sym.$("score").html(score + 0);
         	sym.getSymbol("Symbol_bunnyhole").play("goed_dood");
         	setTimeout(function() { toonGameOver() },1500);
         });





         sym.getSymbol("Symbol_bunnyhole_1").$("hitbox").click(function()
         {
         	PlayHitSound();
         	console.log("ER is op geklikt");
         	var score = sym.getVariable("score");
         	sym.setVariable("score", score + 10);
         	sym.$("score").html(score + 10);
         	sym.getSymbol("Symbol_bunnyhole_1").play("dood");
         });

         sym.getSymbol("Symbol_bunnyhole_1").$("hitboxgoed").click(function()
         {
         	PlayHitSound();
         	console.log("ER is op geklikt");
         	var score = sym.getVariable("score");
         	sym.setVariable("score", score + 0);
         	sym.$("score").html(score + 0);
         	sym.getSymbol("Symbol_bunnyhole_1").play("goed_dood");
         	setTimeout(function() { toonGameOver() },1500);
         });



         sym.getSymbol("Symbol_bunnyhole_2").$("hitbox").click(function()
         {
         	PlayHitSound();
         	console.log("ER is op geklikt");
         	var score = sym.getVariable("score");
         	sym.setVariable("score", score + 10);
         	sym.$("score").html(score + 10);
         	sym.getSymbol("Symbol_bunnyhole_2").play("dood");
         });

         sym.getSymbol("Symbol_bunnyhole_2").$("hitboxgoed").click(function()
         {
         	PlayHitSound();
         	console.log("ER is op geklikt");
         	var score = sym.getVariable("score");
         	sym.setVariable("score", score + 0);
         	sym.$("score").html(score + 0);
         	sym.getSymbol("Symbol_bunnyhole_2").play("goed_dood");
         	setTimeout(function() { toonGameOver() },1500);
         });


      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_bunnyhole'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         	
         	var randGetal = Math.floor(Math.random() * 2) + 1;
         	
         	if(randGetal == 1)
         	{
         	sym.play("play2");
         	}
         	else
         	{
         	sym.play(0);
         	}
         	

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         
         	var randGetal = Math.floor(Math.random() * 5) + 1;
         	console.log(randGetal);
         	if(randGetal == 1)
         	{
         		sym.play("goed");
         	}
         	else if(randGetal == 2)
         	{
         		sym.play("play2")
         	}
         	else if(randGetal == 3)
         	{
         		sym.play("play2")
         	}
         	else
         	{
         		sym.play(0);
         	}

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12795, function(sym, e) {
         var currHuidigLeven = sym.getComposition().getStage().getVariable("HuidigLeven");
         var currLeven = currHuidigLeven - 1;
         sym.getComposition().getStage().VerminderLeven(currLeven);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3976, function(sym, e) {
         var currHuidigLeven = sym.getComposition().getStage().getVariable("HuidigLeven");
         var currLeven = currHuidigLeven - 1;
         sym.getComposition().getStage().VerminderLeven(currLeven);

      });
      //Edge binding end

   })("Symbol_bunnyhole");
   //Edge symbol end:'Symbol_bunnyhole'

   //=========================================================
   
   //Edge symbol: 'Symbol_bunnyhole_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         
         	var randGetal = Math.floor(Math.random() * 2) + 1;
         
         	if(randGetal == 1)
         	{
         	sym.play("play2");
         	}
         	else
         	{
         	sym.play(0);
         	}

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         var randGetal = Math.floor(Math.random() * 5) + 1;
         console.log(randGetal);
         if(randGetal == 1)
         {
         	sym.play("goed");
         }
         else if(randGetal == 2)
         {
         	sym.play("play2")
         }
         else if(randGetal == 3)
         {
         	sym.play("play2")
         }
         else
         {
         	sym.play(0);
         }

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.play(0);

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         sym.play(0);

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2901, function(sym, e) {
         var currHuidigLeven = sym.getComposition().getStage().getVariable("HuidigLeven");
         var currLeven = currHuidigLeven - 1;
         sym.getComposition().getStage().VerminderLeven(currLeven);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12250, function(sym, e) {
         var currHuidigLeven = sym.getComposition().getStage().getVariable("HuidigLeven");
         var currLeven = currHuidigLeven - 1;
         sym.getComposition().getStage().VerminderLeven(currLeven);

      });
      //Edge binding end

      })("Symbol_bunnyhole_1");
   //Edge symbol end:'Symbol_bunnyhole_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_bunnyhole_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         
         	var randGetal = Math.floor(Math.random() * 2) + 1;
         
         	if(randGetal == 1)
         	{
         	sym.play("play2");
         	}
         	else
         	{
         	sym.play(0);
         	}

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         var randGetal = Math.floor(Math.random() * 5) + 1;
         console.log(randGetal);
         if(randGetal == 1)
         {
         	sym.play("goed");
         }
         else if(randGetal == 2)
         {
         	sym.play("play2")
         }
         else if(randGetal == 3)
         {
         	sym.play("play2")
         }
         else
         {
         	sym.play(0);
         }
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.play(0);

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         sym.play(0);

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1616, function(sym, e) {
         var currHuidigLeven = sym.getComposition().getStage().getVariable("HuidigLeven");
         var currLeven = currHuidigLeven - 1;
         sym.getComposition().getStage().VerminderLeven(currLeven);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12966, function(sym, e) {
         var currHuidigLeven = sym.getComposition().getStage().getVariable("HuidigLeven");
         var currLeven = currHuidigLeven - 1;
         sym.getComposition().getStage().VerminderLeven(currLeven);

      });
      //Edge binding end

      })("Symbol_bunnyhole_2");
   //Edge symbol end:'Symbol_bunnyhole_2'

})(jQuery, AdobeEdge, "EDGE-111303541");