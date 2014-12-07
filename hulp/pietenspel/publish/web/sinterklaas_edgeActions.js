
var stageRef
var pietspring=false;(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){stageRef=sym;var lives=3
var score=0
const GAME_INIT=0;const GAME_STARTED=1;const GAME_OVER=2;var gameStatus=GAME_INIT;function initGame(sym)
{setTimeout(function(){randomKado(sym)},2000);setScore(sym);}
function randomKado(sym)
{console.log("kadoootje");if(gameStatus==GAME_STARTED)
{stageRef.$("cadeau").play(0);var rand=Math.floor(Math.random()*5000)+5000;setTimeout(function(){randomKado(sym)},rand);}}
function setScore(sym)
{var tientallen=Math.floor(score/10);var eenheden=score%10;console.log(tientallen+" "+eenheden);console.log(Symbol);stageRef.getSymbol("scorecijfer").getSymbol("eenheden").stop(eenheden.toString());stageRef.getSymbol("scorecijfer").getSymbol("tientallen").stop(tientallen.toString());}
function setLives()
{stageRef.getSymbol("cadeautje").getSymbol("cadeautje"+lives).play(0);console.log("lives: "+lives);if(lives>1)
{lives--;}
else
{console.log("game over");gameStatus=GAME_OVER;}}
function checkPiet(sym)
{console.log("checking");if(PietSpringt)
{console.log("goe bezig");score++;}
else
{setLives();}}});function randomKado(sym)
{console.log("kadoootje");if(gameStatus==GAME_STARTED)
{stageRef.$("cadeau").play(0);var rand=Math.floor(Math.random()*5000)+5000;setTimeout(function(){randomKado(sym)},rand);}}

//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("speel").hide();sym.$("tekstintro").hide();sym.$("Text").hide();sym.$("daken2").hide();sym.$("scorecijfer").hide();sym.$("score").hide();sym.$("spritesheet").hide();sym.$("spring2").hide();sym.$("springtekst").hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.$("speel").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_speel}","click",function(sym,e){console.log("het spel wordt geladen");stageRef.play("speelgame");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13000,function(sym,e){console.log("start van het spel");sym.$("Text").show();sym.$("tekstintro").show();gameStatus=GAME_STARTED;randomKado(sym);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",21000,function(sym,e){sym.$("spring2").show();sym.$("springtekst").show();sym.$("daken2").show();sym.$("score").show();sym.$("scorecijfer").show();sym.$("spritesheet").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_spring2}","click",function(sym,e){console.log("er wordt geklikt");sym.getSymbol("spritesheet").play('spring');pietspring=true;CheckPiet(sym);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'speel'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_speel}","click",function(sym,e){sym.play(startgame);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.play(0);});
//Edge binding end
})("speel");
//Edge symbol end:'speel'

//=========================================================

//Edge symbol: 'daken'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",30000,function(sym,e){sym.play(0);});
//Edge binding end
})("daken");
//Edge symbol end:'daken'

//=========================================================

//Edge symbol: 'spritesheet'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.play("start");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",928,function(sym,e){pietspring=false;});
//Edge binding end
})("spritesheet");
//Edge symbol end:'spritesheet'

//=========================================================

//Edge symbol: 'spring'
(function(symbolName){})("spring");
//Edge symbol end:'spring'

//=========================================================

//Edge symbol: 'cadeau'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){checkPiet(sym);});
//Edge binding end
})("cadeau");
//Edge symbol end:'cadeau'

//=========================================================

//Edge symbol: 'scorecijfer'
(function(symbolName){})("scorecijfer");
//Edge symbol end:'scorecijfer'
})(jQuery,AdobeEdge,"EDGE-13303388");