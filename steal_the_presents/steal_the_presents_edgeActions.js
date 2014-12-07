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
               //set the value of a Symbol variable
               sym.setVariable("score", 0);
               //get the value of a Symbol variable
               var score = sym.getVariable("score");
               
               sym.$("score").html(score);
               
               
               sym.$("symPlaats3").hide();
               sym.$("symPlaats2").hide();
               sym.$("symPlaats1").hide();
               sym.$("achtergrond").hide();
               sym.$("haard").hide();
               sym.$("kerstboom").hide();
               sym.$("raam").hide();
               
               
               sym.$("play").click(function()
               			{
               			PlayClickSound();
               			var usernamevalue = usernameinvoer.attr('value');
               			if( usernamevalue != "")
               			{
               				console.log("playknop geklikt");
               
               				// Hide an Element.
               				//  (sym.$("name") resolves an Edge Animate element name to a DOM
               				//  element that can be used with jQuery)
               				sym.$("Play").hide();
               				sym.$("Highscores").hide();
               				sym.$("lijn1").hide();
               				sym.$("liijn2").hide();
               				sym.$("lijn3").hide();
               				sym.$("tekstballon").hide();
               				sym.$("grinch").hide();
               				sym.$("landschap_intro").hide();
               
               
               
               			var Rand1 = Math.floor(Math.random() * 3000) + 1000;
               			var Rand2 = Math.floor(Math.random() * 3000) + 1000;
               			var Rand3 = Math.floor(Math.random() * 3000) + 1000;
               
               			setTimeout(function() { StartCadeau1() },Rand1); 
               			setTimeout(function() { StartCadeau2() },Rand2);
               			setTimeout(function() { StartCadeau3() },Rand3);   
               			}
               			}
               			);

      });
      //Edge binding end
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2790, function(sym, e) {
         sym.$("Play").click(function(){
         console.log("playknop geklikt");
         
         				// Hide an Element.
         				//  (sym.$("name") resolves an Edge Animate element name to a DOM
         				//  element that can be used with jQuery)
         				sym.$("Play").hide();
         				sym.$("Highscores").hide();
         				sym.$("lijn1").hide();
         				sym.$("lijn2").hide();
         				sym.$("lijn3").hide();
         				sym.$("grinch").hide();
         				sym.$("landschap_intro").hide();
         				sym.$("tekstballon").hide();
         			
         			
         			var Rand1 = Math.floor(Math.random() * 3000) + 1000;
         			var Rand2 = Math.floor(Math.random() * 3000) + 1000;
         			var Rand3 = Math.floor(Math.random() * 3000) + 1000;
         
         			setTimeout(function() { StartCadeau1() },Rand1); 
         			setTimeout(function() { StartCadeau2() },Rand2);
         			setTimeout(function() { StartCadeau3() },Rand3);   
         			}
         			
         );

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'SymPlaats1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2830, function(sym, e) {
         var randGetal = Math.floor(Math.random() * 2) + 1;
         
         if(randGetal == 1)
         {
         sym.play("rood gestart");
         }
         else
         {
         sym.play("zwart gestart");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6840, function(sym, e) {
         var randGetal = Math.floor(Math.random() * 2) + 1;
         
         if(randGetal == 1)
         {
         sym.play("rood gestart");
         }
         else
         {
         sym.play("zwart gestart");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8680, function(sym, e) {
         // insert code herevar randGetal = Math.floor(Math.random() * 2) + 1;
         
         if(randGetal == 1)
         {
         sym.play("rood gestart");
         }
         else
         {
         sym.play("zwart gestart");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10310, function(sym, e) {
         var randGetal = Math.floor(Math.random() * 2) + 1;
         
         if(randGetal == 1)
         {
         sym.play("rood gestart");
         }
         else
         {
         sym.play("zwart gestart");
         }

      });
      //Edge binding end

   })("SymPlaats1");
   //Edge symbol end:'SymPlaats1'

   //=========================================================
   
   //Edge symbol: 'symPlaats3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         var randGetal = Math.floor(Math.random() * 2) + 1;
         
         if(randGetal == 1)
         {
         sym.play("rood gestart");
         }
         else
         {
         sym.play("zwart gestart");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         var randGetal = Math.floor(Math.random() * 2) + 1;
         
         if(randGetal == 1)
         {
         sym.play("rood gestart");
         }
         else
         {
         sym.play("zwart gestart");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8860, function(sym, e) {
         var randGetal = Math.floor(Math.random() * 2) + 1;
         
         if(randGetal == 1)
         {
         sym.play("rood gestart");
         }
         else
         {
         sym.play("zwart gestart");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10340, function(sym, e) {
         var randGetal = Math.floor(Math.random() * 2) + 1;
         
         if(randGetal == 1)
         {
         sym.play("rood gestart");
         }
         else
         {
         sym.play("zwart gestart");
         }

      });
      //Edge binding end

   })("symPlaats3");
   //Edge symbol end:'symPlaats3'

   //=========================================================
   
   //Edge symbol: 'SymPlaats2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         // insert code here
         
         var randGetal = Math.floor(Math.random() * 2) + 1;
         
         if(randGetal == 1)
         {
         sym.play("rood gestart");
         }
         else
         {
         sym.play("zwart gestart");
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5690, function(sym, e) {
         var randGetal = Math.floor(Math.random() * 2) + 1;
         
         if(randGetal == 1)
         {
         sym.play("rood gestart");
         }
         else
         {
         sym.play("zwart gestart");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7705, function(sym, e) {
         var randGetal = Math.floor(Math.random() * 2) + 1;
         
         if(randGetal == 1)
         {
         sym.play("rood gestart");
         }
         else
         {
         sym.play("zwart gestart");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9405, function(sym, e) {
         var randGetal = Math.floor(Math.random() * 2) + 1;
         
         if(randGetal == 1)
         {
         sym.play("rood gestart");
         }
         else
         {
         sym.play("zwart gestart");
         }

      });
      //Edge binding end

   })("SymPlaats2");
   //Edge symbol end:'SymPlaats2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-333270303");