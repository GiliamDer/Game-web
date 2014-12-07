/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['leckerli-one, cursive']='<script src=\"http://use.edgefonts.net/leckerli-one:n4:all.js\"></script>';
   fonts['bubblegum-sans, sans-serif']='<script src=\"http://use.edgefonts.net/bubblegum-sans:n4:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'background-grass',
            type:'image',
            rect:['0','0','800px','480px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"background-grass-berg.png",'0px','0px']
         },
         {
            id:'score',
            type:'text',
            rect:['-1px','61px','801px','89px','auto','auto'],
            text:"0",
            align:"center",
            font:['bubblegum-sans, sans-serif',60,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'Symbol_bunnyhole',
            type:'rect',
            rect:['298','324','auto','auto','auto','auto']
         },
         {
            id:'Symbol_bunnyhole_1',
            type:'rect',
            rect:['56px','28px','auto','auto','auto','auto']
         },
         {
            id:'Symbol_bunnyhole_2',
            type:'rect',
            rect:['518px','28px','auto','auto','auto','auto']
         },
         {
            id:'gameoverscherm',
            display:'none',
            type:'image',
            rect:['0','0','800px','480px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"gameoverscreen.png",'0px','0px']
         },
         {
            id:'scoregameover',
            display:'none',
            type:'text',
            rect:['380px','119px','36px','56px','auto','auto'],
            text:"0",
            align:"center",
            font:['bubblegum-sans, sans-serif',75,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'highscores',
            display:'none',
            type:'image',
            rect:['0','0','800px','480px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"highscoresboard.png",'0px','0px']
         },
         {
            id:'scoreboard',
            display:'none',
            type:'group',
            rect:['132','192','49','194','auto','auto'],
            c:[
            {
               id:'place1',
               type:'text',
               rect:['4px','20px','49px','39px','auto','auto'],
               text:"1.",
               font:['leckerli-one, cursive',30,"rgba(240,240,240,1.00)","normal","none",""]
            },
            {
               id:'place2',
               type:'text',
               rect:['4px','59px','49px','39px','auto','auto'],
               text:"2.<br>",
               font:['leckerli-one, cursive',30,"rgba(240,240,240,1.00)","normal","none",""]
            },
            {
               id:'place3',
               type:'text',
               rect:['4px','98px','49px','39px','auto','auto'],
               text:"3.",
               font:['leckerli-one, cursive',30,"rgba(240,240,240,1.00)","normal","none",""]
            },
            {
               id:'place4',
               type:'text',
               rect:['4px','136px','49px','39px','auto','auto'],
               text:"4.",
               font:['leckerli-one, cursive',30,"rgba(240,240,240,1.00)","normal","none",""]
            },
            {
               id:'place5',
               type:'text',
               rect:['4px','175px','49px','39px','auto','auto'],
               text:"5.",
               font:['leckerli-one, cursive',30,"rgba(240,240,240,1.00)","normal","none",""]
            },
            {
               id:'name1',
               type:'text',
               rect:['53px','20px','332px','39px','auto','auto'],
               text:" ",
               align:"left",
               font:['leckerli-one, cursive',30,"rgba(240,240,240,1.00)","normal","none","normal"]
            },
            {
               id:'name2',
               type:'text',
               rect:['53px','59px','332px','39px','auto','auto'],
               text:" ",
               align:"left",
               font:['leckerli-one, cursive',30,"rgba(240,240,240,1.00)","normal","none","normal"]
            },
            {
               id:'name3',
               type:'text',
               rect:['53px','98px','332px','39px','auto','auto'],
               text:" ",
               align:"left",
               font:['leckerli-one, cursive',30,"rgba(240,240,240,1.00)","normal","none","normal"]
            },
            {
               id:'name4',
               type:'text',
               rect:['53px','136px','332px','39px','auto','auto'],
               text:" ",
               align:"left",
               font:['leckerli-one, cursive',30,"rgba(240,240,240,1.00)","normal","none","normal"]
            },
            {
               id:'name5',
               type:'text',
               rect:['53px','175px','332px','39px','auto','auto'],
               text:" ",
               align:"left",
               font:['leckerli-one, cursive',30,"rgba(240,240,240,1.00)","normal","none","normal"]
            },
            {
               id:'score1',
               type:'text',
               rect:['385px','20px','123px','39px','auto','auto'],
               text:" ",
               align:"left",
               font:['leckerli-one, cursive',30,"rgba(240,240,240,1.00)","normal","none","normal"]
            },
            {
               id:'score2',
               type:'text',
               rect:['385px','59px','123px','39px','auto','auto'],
               text:" ",
               align:"left",
               font:['leckerli-one, cursive',30,"rgba(240,240,240,1.00)","normal","none","normal"]
            },
            {
               id:'score3',
               type:'text',
               rect:['385px','98px','123px','39px','auto','auto'],
               text:" ",
               align:"left",
               font:['leckerli-one, cursive',30,"rgba(240,240,240,1.00)","normal","none","normal"]
            },
            {
               id:'score4',
               type:'text',
               rect:['385px','136px','123px','39px','auto','auto'],
               text:" ",
               align:"left",
               font:['leckerli-one, cursive',30,"rgba(240,240,240,1.00)","normal","none","normal"]
            },
            {
               id:'score5',
               type:'text',
               rect:['385px','175px','123px','39px','auto','auto'],
               text:" ",
               align:"left",
               font:['leckerli-one, cursive',30,"rgba(240,240,240,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'replayknop',
            type:'rect',
            rect:['252px','221px','296px','89px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(54,61,152,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'startscherm',
            type:'image',
            rect:['0px','0px','800px','480px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"startscreensmall2.png",'0px','0px']
         },
         {
            id:'leven1',
            display:'none',
            type:'image',
            rect:['15px','406px','67px','59px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"leven.png",'0px','0px']
         },
         {
            id:'leven3',
            display:'none',
            type:'image',
            rect:['161px','406px','67px','59px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"leven.png",'0px','0px']
         },
         {
            id:'leven2',
            display:'none',
            type:'image',
            rect:['87px','406px','67px','59px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"leven.png",'0px','0px']
         },
         {
            id:'introkonijntjes',
            type:'group',
            rect:['74','221','658','475','auto','auto'],
            c:[
            {
               id:'konijntje_stout1',
               type:'image',
               rect:['0px','0px','179px','233px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"konijntje_stout2.png",'0px','0px']
            },
            {
               id:'konijntje_stout2',
               type:'image',
               rect:['479px','0px','179px','233px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"konijntje_stout2.png",'0px','0px']
            },
            {
               id:'konijntje_goed2',
               type:'image',
               rect:['240px','242px','179px','233px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"konijntje_goed2.png",'0px','0px']
            }]
         },
         {
            id:'bunnyholehoop1',
            type:'image',
            rect:['40px','354px','248px','152px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bunnyholehoop4.png",'0px','0px']
         },
         {
            id:'bunnyholehoop2',
            type:'image',
            rect:['519px','354px','248px','152px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bunnyholehoop4.png",'0px','0px']
         },
         {
            id:'bunnyholehoop3',
            type:'image',
            rect:['276px','354px','248px','152px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bunnyholehoop4.png",'0px','0px']
         },
         {
            id:'bunnyholeranden',
            type:'group',
            rect:['62','356','683','94','auto','auto'],
            c:[
            {
               id:'bunnyholerand1',
               type:'image',
               rect:['0px','0px','204px','94px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"bunnyholerand2.png",'0px','0px']
            },
            {
               id:'bunnyholerand2',
               type:'image',
               rect:['236px','0px','204px','94px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"bunnyholerand2.png",'0px','0px']
            },
            {
               id:'bunnyholerand3',
               type:'image',
               rect:['479px','0px','204px','94px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"bunnyholerand2.png",'0px','0px']
            }]
         },
         {
            id:'playknop',
            type:'rect',
            rect:['259px','239px','281px','89px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(54,61,152,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'username',
            type:'text',
            rect:['252px','115px','281px','71px','auto','auto'],
            text:"<br>",
            align:"center",
            font:['Arial, Helvetica, sans-serif',25,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'instructionsknop',
            type:'ellipse',
            rect:['718px','20px','62px','62px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(54,61,152,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'instructions',
            display:'none',
            type:'image',
            rect:['0','0','800px','480px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"instructions.png",'0px','0px']
         },
         {
            id:'backinstructionsknop',
            type:'ellipse',
            rect:['22px','20px','62px','62px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(54,61,152,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'backhighscoresknop',
            display:'none',
            type:'ellipse',
            rect:['22px','20px','62px','62px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(54,61,152,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'highscoreknop',
            display:'none',
            type:'rect',
            rect:['252px','338px','296px','89px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(54,61,152,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [
         {
            id:'Symbol_bunnyhole_2',
            symbolName:'Symbol_bunnyhole_2'
         },
         {
            id:'Symbol_bunnyhole_1',
            symbolName:'Symbol_bunnyhole_1'
         },
         {
            id:'Symbol_bunnyhole',
            symbolName:'Symbol_bunnyhole'
         }
         ]
      },
   states: {
      "Base State": {
         "${_highscores}": [
            ["style", "display", 'none']
         ],
         "${_name4}": [
            ["style", "top", '136px'],
            ["color", "color", 'rgba(240,240,240,1.00)'],
            ["style", "font-family", 'leckerli-one, cursive'],
            ["style", "left", '53px'],
            ["style", "font-size", '30px']
         ],
         "${_scoregameover}": [
            ["style", "top", '119px'],
            ["style", "font-size", '75px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'bubblegum-sans, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '800px']
         ],
         "${_konijntje_goed2}": [
            ["style", "top", '259px'],
            ["style", "height", '233px'],
            ["style", "left", '240px'],
            ["style", "width", '179px']
         ],
         "${_place1}": [
            ["style", "top", '20px'],
            ["color", "color", 'rgba(240,240,240,1.00)'],
            ["style", "font-family", 'leckerli-one, cursive'],
            ["style", "left", '4px'],
            ["style", "font-size", '30px']
         ],
         "${_bunnyholerand2}": [
            ["style", "left", '236px'],
            ["style", "top", '0px']
         ],
         "${_place2}": [
            ["style", "top", '59px'],
            ["color", "color", 'rgba(240,240,240,1.00)'],
            ["style", "font-family", 'leckerli-one, cursive'],
            ["style", "left", '4px'],
            ["style", "font-size", '30px']
         ],
         "${_Symbol_bunnyhole}": [
            ["style", "top", '177px']
         ],
         "${_score}": [
            ["style", "top", '61px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '60px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'bubblegum-sans, sans-serif'],
            ["style", "left", '-1px'],
            ["style", "width", '801px']
         ],
         "${_bunnyholehoop2}": [
            ["style", "top", '354px'],
            ["style", "left", '519px']
         ],
         "${_playknop}": [
            ["color", "background-color", 'rgba(54,61,152,1.00)'],
            ["style", "top", '239px'],
            ["style", "height", '89px'],
            ["style", "opacity", '0'],
            ["style", "left", '259px'],
            ["style", "width", '281px']
         ],
         "${_leven2}": [
            ["style", "top", '406px'],
            ["style", "left", '87px'],
            ["style", "display", 'none']
         ],
         "${_backinstructionsknop}": [
            ["style", "opacity", '0']
         ],
         "${_place4}": [
            ["style", "top", '136px'],
            ["color", "color", 'rgba(240,240,240,1.00)'],
            ["style", "font-family", 'leckerli-one, cursive'],
            ["style", "left", '4px'],
            ["style", "font-size", '30px']
         ],
         "${_leven3}": [
            ["style", "top", '406px'],
            ["style", "left", '161px'],
            ["style", "display", 'none']
         ],
         "${_bunnyholehoop3}": [
            ["style", "top", '354px'],
            ["style", "left", '276px']
         ],
         "${_replayknop}": [
            ["color", "background-color", 'rgba(54,61,152,1.00)'],
            ["style", "top", '221px'],
            ["style", "height", '89px'],
            ["style", "opacity", '0'],
            ["style", "left", '252px'],
            ["style", "width", '296px']
         ],
         "${_score3}": [
            ["style", "top", '98px'],
            ["color", "color", 'rgba(240,240,240,1.00)'],
            ["style", "font-family", 'leckerli-one, cursive'],
            ["style", "left", '385px'],
            ["style", "font-size", '30px']
         ],
         "${_gameoverscherm}": [
            ["style", "display", 'none']
         ],
         "${_scoreboard}": [
            ["style", "display", 'none']
         ],
         "${_leven1}": [
            ["style", "top", '406px'],
            ["style", "left", '15px'],
            ["style", "display", 'none']
         ],
         "${_instructions}": [
            ["style", "display", 'none']
         ],
         "${_Symbol_bunnyhole_2}": [
            ["style", "top", '28px'],
            ["style", "left", '518px']
         ],
         "${_backhighscoresknop}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_score4}": [
            ["style", "top", '136px'],
            ["color", "color", 'rgba(240,240,240,1.00)'],
            ["style", "font-family", 'leckerli-one, cursive'],
            ["style", "left", '385px'],
            ["style", "font-size", '30px']
         ],
         "${_name5}": [
            ["style", "top", '175px'],
            ["color", "color", 'rgba(240,240,240,1.00)'],
            ["style", "font-family", 'leckerli-one, cursive'],
            ["style", "left", '53px'],
            ["style", "font-size", '30px']
         ],
         "${_name3}": [
            ["style", "top", '98px'],
            ["color", "color", 'rgba(240,240,240,1.00)'],
            ["style", "font-family", 'leckerli-one, cursive'],
            ["style", "left", '53px'],
            ["style", "font-size", '30px']
         ],
         "${_highscoreknop}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_konijntje_stout1}": [
            ["style", "top", '229px'],
            ["style", "height", '233px'],
            ["style", "left", '0px'],
            ["style", "width", '179px']
         ],
         "${_place3}": [
            ["style", "top", '98px'],
            ["color", "color", 'rgba(240,240,240,1.00)'],
            ["style", "font-family", 'leckerli-one, cursive'],
            ["style", "left", '4px'],
            ["style", "font-size", '30px']
         ],
         "${_name1}": [
            ["style", "top", '20px'],
            ["color", "color", 'rgba(240,240,240,1.00)'],
            ["style", "font-family", 'leckerli-one, cursive'],
            ["style", "left", '53px'],
            ["style", "font-size", '30px']
         ],
         "${_konijntje_stout2}": [
            ["style", "height", '233px'],
            ["style", "top", '237px'],
            ["style", "left", '479px'],
            ["style", "width", '179px']
         ],
         "${_score1}": [
            ["style", "top", '20px'],
            ["color", "color", 'rgba(240,240,240,1.00)'],
            ["style", "font-family", 'leckerli-one, cursive'],
            ["style", "left", '385px'],
            ["style", "font-size", '30px']
         ],
         "${_name2}": [
            ["style", "top", '59px'],
            ["color", "color", 'rgba(240,240,240,1.00)'],
            ["style", "font-family", 'leckerli-one, cursive'],
            ["style", "left", '53px'],
            ["style", "font-size", '30px']
         ],
         "${_score5}": [
            ["style", "top", '175px'],
            ["color", "color", 'rgba(240,240,240,1.00)'],
            ["style", "font-family", 'leckerli-one, cursive'],
            ["style", "left", '385px'],
            ["style", "font-size", '30px']
         ],
         "${_score2}": [
            ["style", "top", '59px'],
            ["color", "color", 'rgba(240,240,240,1.00)'],
            ["style", "font-family", 'leckerli-one, cursive'],
            ["style", "left", '385px'],
            ["style", "font-size", '30px']
         ],
         "${_bunnyholehoop1}": [
            ["style", "top", '354px'],
            ["style", "left", '40px']
         ],
         "${_username}": [
            ["style", "top", '115px'],
            ["style", "left", '252px'],
            ["style", "font-size", '25px']
         ],
         "${_place5}": [
            ["style", "top", '175px'],
            ["color", "color", 'rgba(240,240,240,1.00)'],
            ["style", "font-family", 'leckerli-one, cursive'],
            ["style", "left", '4px'],
            ["style", "font-size", '30px']
         ],
         "${_Symbol_bunnyhole_1}": [
            ["style", "top", '28px'],
            ["style", "left", '56px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '480px'],
            ["style", "width", '800px']
         ],
         "${_bunnyholerand1}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_instructionsknop}": [
            ["style", "top", '20px'],
            ["style", "opacity", '0'],
            ["style", "left", '718px']
         ],
         "${_bunnyholerand3}": [
            ["style", "left", '479px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 25000,
         autoPlay: true,
         labels: {
            "gameover": 25000
         },
         timeline: [
            { id: "eid126", tween: [ "style", "${_scoregameover}", "width", '800px', { fromValue: '800px'}], position: 0, duration: 0 },
            { id: "eid120", tween: [ "style", "${_backhighscoresknop}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid124", tween: [ "style", "${_scoregameover}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid107", tween: [ "style", "${_leven3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid105", tween: [ "style", "${_leven2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid104", tween: [ "style", "${_gameoverscherm}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid118", tween: [ "style", "${_highscoreknop}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid106", tween: [ "style", "${_leven1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid108", tween: [ "style", "${_scoregameover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid110", tween: [ "style", "${_konijntje_goed2}", "top", '0px', { fromValue: '259px'}], position: 651, duration: 499 },
            { id: "eid112", tween: [ "style", "${_konijntje_goed2}", "top", '242px', { fromValue: '0px'}], position: 1750, duration: 1000 },
            { id: "eid123", tween: [ "style", "${_backhighscoresknop}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid117", tween: [ "style", "${_instructions}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid109", tween: [ "style", "${_konijntje_stout1}", "top", '0px', { fromValue: '229px'}], position: 250, duration: 500 },
            { id: "eid114", tween: [ "style", "${_konijntje_stout1}", "top", '238px', { fromValue: '0px'}], position: 2750, duration: 250 },
            { id: "eid127", tween: [ "style", "${_scoreboard}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid116", tween: [ "style", "${_konijntje_stout2}", "top", '229px', { fromValue: '237px'}], position: 0, duration: 1050 },
            { id: "eid111", tween: [ "style", "${_konijntje_stout2}", "top", '0px', { fromValue: '229px'}], position: 1050, duration: 500 },
            { id: "eid115", tween: [ "style", "${_konijntje_stout2}", "top", '238px', { fromValue: '0px'}], position: 2750, duration: 250 },
            { id: "eid128", tween: [ "style", "${_highscores}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"Symbol_bunnyhole": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'bunnyhole',
      type: 'image',
      rect: ['24px','147px','204px','94px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bunnyhole.png','0px','0px']
   },
   {
      id: 'stoutkonijn',
      type: 'image',
      rect: ['0px','0px','204px','265px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/konijntje_stout.png','0px','0px']
   },
   {
      id: 'konijntje_stout_dood',
      type: 'image',
      rect: ['5px','-11px','214px','262px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/konijntje_stout_dood.png','0px','0px']
   },
   {
      id: 'konijntje_goed',
      type: 'image',
      rect: ['18px','11px','208px','270px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/konijntje_goed.png','0px','0px']
   },
   {
      id: 'konijntje_goed_dood',
      type: 'image',
      rect: ['17px','-3px','204px','255px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/konijntje_goed_dood.png','0px','0px']
   },
   {
      id: 'bunnyholerand2',
      type: 'image',
      rect: ['24px','147px','204px','94px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bunnyholerand.png','0px','0px']
   },
   {
      rect: ['2px','142px','248px','152px','auto','auto'],
      id: 'bunnyholehoop3',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bunnyholehoop3.png','0px','0px']
   },
   {
      rect: ['34px','0px','188px','223px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      stroke: [0,'rgba(0,0,0,1)','none'],
      id: 'hitbox',
      opacity: 0.5,
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['34px','0px','188px','223px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      stroke: [0,'rgba(0,0,0,1)','none'],
      id: 'hitboxgoed',
      opacity: 0.5,
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hitbox}": [
            ["style", "top", '274px'],
            ["style", "height", '223px'],
            ["style", "opacity", '0'],
            ["style", "left", '24px'],
            ["style", "width", '188px']
         ],
         "${_bunnyholehoop3}": [
            ["style", "top", '142px'],
            ["style", "opacity", '1'],
            ["style", "left", '2px']
         ],
         "${_bunnyhole}": [
            ["style", "top", '147px'],
            ["style", "left", '24px']
         ],
         "${_konijntje_goed}": [
            ["style", "top", '268px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '270px'],
            ["style", "opacity", '0'],
            ["style", "left", '18px'],
            ["style", "width", '208px']
         ],
         "${_hitboxgoed}": [
            ["style", "top", '268px'],
            ["style", "height", '223px'],
            ["style", "opacity", '0'],
            ["style", "left", '24px'],
            ["style", "width", '188px']
         ],
         "${_konijntje_goed_dood}": [
            ["style", "top", '-3px'],
            ["style", "height", '255px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '204px']
         ],
         "${symbolSelector}": [
            ["style", "height", '270px'],
            ["style", "width", '250px'],
            ["style", "overflow", 'hidden']
         ],
         "${_bunnyholerand2}": [
            ["style", "top", '147px'],
            ["style", "left", '24px']
         ],
         "${_konijntje_stout_dood}": [
            ["style", "top", '5px'],
            ["transform", "rotateZ", '3deg'],
            ["style", "height", '246px'],
            ["style", "opacity", '0'],
            ["style", "left", '24px'],
            ["style", "width", '201px']
         ],
         "${_stoutkonijn}": [
            ["style", "height", '265px'],
            ["style", "top", '241px'],
            ["style", "left", '24px'],
            ["style", "width", '204px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 17000,
         autoPlay: false,
         labels: {
            "dood": 6000,
            "play2": 10504,
            "goed": 14000,
            "goed_dood": 17000
         },
         timeline: [
            { id: "eid55", tween: [ "style", "${_konijntje_goed}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_konijntje_goed}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 0 },
            { id: "eid34", tween: [ "style", "${_konijntje_stout_dood}", "top", '269px', { fromValue: '5px'}], position: 6250, duration: 1000 },
            { id: "eid17", tween: [ "style", "${_stoutkonijn}", "left", '24px', { fromValue: '24px'}], position: 3126, duration: 0 },
            { id: "eid49", tween: [ "style", "${_stoutkonijn}", "left", '24px', { fromValue: '24px'}], position: 10498, duration: 0 },
            { id: "eid47", tween: [ "style", "${_hitbox}", "left", '24px', { fromValue: '24px'}], position: 10500, duration: 0 },
            { id: "eid88", tween: [ "style", "${_hitbox}", "left", '33px', { fromValue: '24px'}], position: 12140, duration: 0 },
            { id: "eid62", tween: [ "style", "${_hitboxgoed}", "top", '0px', { fromValue: '268px'}], position: 14000, duration: 500 },
            { id: "eid63", tween: [ "style", "${_hitboxgoed}", "top", '279px', { fromValue: '0px'}], position: 14710, duration: 290 },
            { id: "eid16", tween: [ "style", "${symbolSelector}", "width", '250px', { fromValue: '250px'}], position: 0, duration: 0 },
            { id: "eid27", tween: [ "style", "${_hitbox}", "opacity", '0', { fromValue: '0'}], position: 3890, duration: 0 },
            { id: "eid52", tween: [ "style", "${_hitbox}", "opacity", '0', { fromValue: '0'}], position: 10498, duration: 0 },
            { id: "eid79", tween: [ "transform", "${_konijntje_stout_dood}", "rotateZ", '3deg', { fromValue: '3deg'}], position: 6250, duration: 0 },
            { id: "eid66", tween: [ "style", "${_hitboxgoed}", "left", '24px', { fromValue: '24px'}], position: 14000, duration: 0 },
            { id: "eid72", tween: [ "style", "${_hitboxgoed}", "left", '28px', { fromValue: '24px'}], position: 14500, duration: 0 },
            { id: "eid77", tween: [ "style", "${_konijntje_stout_dood}", "height", '246px', { fromValue: '246px'}], position: 6250, duration: 0 },
            { id: "eid65", tween: [ "style", "${_hitboxgoed}", "opacity", '0', { fromValue: '0'}], position: 13998, duration: 0 },
            { id: "eid71", tween: [ "style", "${_hitboxgoed}", "opacity", '0', { fromValue: '0'}], position: 14350, duration: 0 },
            { id: "eid58", tween: [ "style", "${_konijntje_goed}", "top", '11px', { fromValue: '268px'}], position: 14000, duration: 500 },
            { id: "eid59", tween: [ "style", "${_konijntje_goed}", "top", '270px', { fromValue: '11px'}], position: 14680, duration: 320 },
            { id: "eid78", tween: [ "style", "${_konijntje_stout_dood}", "width", '201px', { fromValue: '201px'}], position: 6250, duration: 0 },
            { id: "eid5", tween: [ "style", "${_stoutkonijn}", "top", '0px', { fromValue: '241px'}], position: 3126, duration: 281 },
            { id: "eid6", tween: [ "style", "${_stoutkonijn}", "top", '270px', { fromValue: '0px'}], position: 3750, duration: 140 },
            { id: "eid50", tween: [ "style", "${_stoutkonijn}", "top", '0px', { fromValue: '241px'}], position: 11793, duration: 347 },
            { id: "eid54", tween: [ "style", "${_stoutkonijn}", "top", '270px', { fromValue: '0px'}], position: 12525, duration: 225 },
            { id: "eid25", tween: [ "style", "${_hitbox}", "top", '0px', { fromValue: '274px'}], position: 3126, duration: 281 },
            { id: "eid26", tween: [ "style", "${_hitbox}", "top", '268px', { fromValue: '0px'}], position: 3750, duration: 140 },
            { id: "eid48", tween: [ "style", "${_hitbox}", "top", '8px', { fromValue: '268px'}], position: 11795, duration: 345 },
            { id: "eid53", tween: [ "style", "${_hitbox}", "top", '279px', { fromValue: '8px'}], position: 12525, duration: 225 },
            { id: "eid68", tween: [ "style", "${_konijntje_stout_dood}", "left", '24px', { fromValue: '24px'}], position: 6250, duration: 0 },
            { id: "eid35", tween: [ "style", "${_konijntje_stout_dood}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_konijntje_stout_dood}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 0 },
            { id: "eid2", tween: [ "style", "${symbolSelector}", "height", '270px', { fromValue: '270px'}], position: 0, duration: 0 },
            { id: "eid69", tween: [ "style", "${_konijntje_goed_dood}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_konijntje_goed_dood}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 0 }         ]
      }
   }
},
"Symbol_bunnyhole_1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'bunnyhole',
      type: 'image',
      rect: ['24px','147px','204px','94px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bunnyhole.png','0px','0px']
   },
   {
      id: 'stoutkonijn',
      type: 'image',
      rect: ['0px','0px','204px','265px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/konijntje_stout.png','0px','0px']
   },
   {
      id: 'konijntje_stout_dood',
      type: 'image',
      rect: ['5px','-11px','214px','262px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/konijntje_stout_dood.png','0px','0px']
   },
   {
      id: 'konijntje_goed',
      type: 'image',
      rect: ['18px','11px','208px','270px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/konijntje_goed.png','0px','0px']
   },
   {
      id: 'konijntje_goed_dood',
      type: 'image',
      rect: ['17px','-3px','204px','255px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/konijntje_goed_dood.png','0px','0px']
   },
   {
      id: 'bunnyholerand2',
      type: 'image',
      rect: ['24px','147px','204px','94px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bunnyholerand.png','0px','0px']
   },
   {
      id: 'bunnyholehooplicht4',
      type: 'image',
      rect: ['2px','142px','248px','152px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bunnyholehooplicht4.png','0px','0px']
   },
   {
      rect: ['34px','0px','188px','223px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      opacity: 0.5,
      id: 'hitbox',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['34px','0px','188px','223px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      opacity: 0.5,
      id: 'hitboxgoed',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hitbox}": [
            ["style", "top", '274px'],
            ["style", "height", '223px'],
            ["style", "opacity", '0'],
            ["style", "left", '24px'],
            ["style", "width", '188px']
         ],
         "${_bunnyhole}": [
            ["style", "top", '147px'],
            ["style", "left", '24px']
         ],
         "${_bunnyholehooplicht4}": [
            ["style", "left", '2px'],
            ["style", "top", '142px']
         ],
         "${_konijntje_stout_dood}": [
            ["style", "top", '5px'],
            ["transform", "rotateZ", '3deg'],
            ["style", "height", '246px'],
            ["style", "opacity", '0'],
            ["style", "left", '24px'],
            ["style", "width", '201px']
         ],
         "${_hitboxgoed}": [
            ["style", "top", '268px'],
            ["style", "height", '223px'],
            ["style", "opacity", '0'],
            ["style", "left", '24px'],
            ["style", "width", '188px']
         ],
         "${_konijntje_goed_dood}": [
            ["style", "top", '-3px'],
            ["style", "height", '255px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '204px']
         ],
         "${symbolSelector}": [
            ["style", "height", '270px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '250px']
         ],
         "${_bunnyholerand2}": [
            ["style", "top", '147px'],
            ["style", "left", '24px']
         ],
         "${_konijntje_goed}": [
            ["style", "top", '268px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '270px'],
            ["style", "opacity", '0'],
            ["style", "left", '18px'],
            ["style", "width", '208px']
         ],
         "${_stoutkonijn}": [
            ["style", "top", '241px'],
            ["style", "height", '265px'],
            ["style", "left", '24px'],
            ["style", "width", '204px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 17000,
         autoPlay: false,
         labels: {
            "dood": 6000,
            "play2": 10504,
            "goed": 14000,
            "goed_dood": 17000
         },
         timeline: [
            { id: "eid55", tween: [ "style", "${_konijntje_goed}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_konijntje_goed}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 0 },
            { id: "eid34", tween: [ "style", "${_konijntje_stout_dood}", "top", '269px', { fromValue: '5px'}], position: 6250, duration: 1000 },
            { id: "eid17", tween: [ "style", "${_stoutkonijn}", "left", '24px', { fromValue: '24px'}], position: 1845, duration: 0 },
            { id: "eid49", tween: [ "style", "${_stoutkonijn}", "left", '24px', { fromValue: '24px'}], position: 11250, duration: 0 },
            { id: "eid47", tween: [ "style", "${_hitbox}", "left", '24px', { fromValue: '24px'}], position: 11252, duration: 0 },
            { id: "eid81", tween: [ "style", "${_hitbox}", "left", '34px', { fromValue: '24px'}], position: 11597, duration: 0 },
            { id: "eid5", tween: [ "style", "${_stoutkonijn}", "top", '0px', { fromValue: '241px'}], position: 1845, duration: 405 },
            { id: "eid6", tween: [ "style", "${_stoutkonijn}", "top", '270px', { fromValue: '0px'}], position: 2500, duration: 340 },
            { id: "eid50", tween: [ "style", "${_stoutkonijn}", "top", '0px', { fromValue: '241px'}], position: 11250, duration: 347 },
            { id: "eid54", tween: [ "style", "${_stoutkonijn}", "top", '270px', { fromValue: '0px'}], position: 11962, duration: 225 },
            { id: "eid16", tween: [ "style", "${symbolSelector}", "width", '250px', { fromValue: '250px'}], position: 0, duration: 0 },
            { id: "eid80", tween: [ "style", "${_hitbox}", "opacity", '0', { fromValue: '0'}], position: 1845, duration: 0 },
            { id: "eid27", tween: [ "style", "${_hitbox}", "opacity", '0', { fromValue: '0'}], position: 2840, duration: 0 },
            { id: "eid52", tween: [ "style", "${_hitbox}", "opacity", '0', { fromValue: '0'}], position: 11250, duration: 0 },
            { id: "eid58", tween: [ "style", "${_konijntje_goed}", "top", '11px', { fromValue: '268px'}], position: 14000, duration: 500 },
            { id: "eid59", tween: [ "style", "${_konijntje_goed}", "top", '270px', { fromValue: '11px'}], position: 14680, duration: 320 },
            { id: "eid66", tween: [ "style", "${_hitboxgoed}", "left", '24px', { fromValue: '24px'}], position: 14000, duration: 0 },
            { id: "eid72", tween: [ "style", "${_hitboxgoed}", "left", '28px', { fromValue: '24px'}], position: 14500, duration: 0 },
            { id: "eid25", tween: [ "style", "${_hitbox}", "top", '0px', { fromValue: '274px'}], position: 1845, duration: 405 },
            { id: "eid26", tween: [ "style", "${_hitbox}", "top", '268px', { fromValue: '0px'}], position: 2500, duration: 340 },
            { id: "eid48", tween: [ "style", "${_hitbox}", "top", '0px', { fromValue: '268px'}], position: 11252, duration: 345 },
            { id: "eid53", tween: [ "style", "${_hitbox}", "top", '279px', { fromValue: '0px'}], position: 11962, duration: 225 },
            { id: "eid65", tween: [ "style", "${_hitboxgoed}", "opacity", '0', { fromValue: '0'}], position: 13998, duration: 0 },
            { id: "eid71", tween: [ "style", "${_hitboxgoed}", "opacity", '0', { fromValue: '0'}], position: 14350, duration: 0 },
            { id: "eid69", tween: [ "style", "${_konijntje_goed_dood}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_konijntje_goed_dood}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 0 },
            { id: "eid2", tween: [ "style", "${symbolSelector}", "height", '270px', { fromValue: '270px'}], position: 0, duration: 0 },
            { id: "eid35", tween: [ "style", "${_konijntje_stout_dood}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_konijntje_stout_dood}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 0 },
            { id: "eid68", tween: [ "style", "${_konijntje_stout_dood}", "left", '24px', { fromValue: '24px'}], position: 6250, duration: 0 },
            { id: "eid77", tween: [ "style", "${_konijntje_stout_dood}", "height", '246px', { fromValue: '246px'}], position: 6250, duration: 0 },
            { id: "eid62", tween: [ "style", "${_hitboxgoed}", "top", '0px', { fromValue: '268px'}], position: 14000, duration: 500 },
            { id: "eid63", tween: [ "style", "${_hitboxgoed}", "top", '279px', { fromValue: '0px'}], position: 14710, duration: 290 },
            { id: "eid78", tween: [ "style", "${_konijntje_stout_dood}", "width", '201px', { fromValue: '201px'}], position: 6250, duration: 0 },
            { id: "eid79", tween: [ "transform", "${_konijntje_stout_dood}", "rotateZ", '3deg', { fromValue: '3deg'}], position: 6250, duration: 0 }         ]
      }
   }
},
"Symbol_bunnyhole_2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'bunnyhole',
      type: 'image',
      rect: ['24px','147px','204px','94px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bunnyhole.png','0px','0px']
   },
   {
      id: 'konijntje_stout_dood',
      type: 'image',
      rect: ['5px','-11px','214px','262px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/konijntje_stout_dood.png','0px','0px']
   },
   {
      id: 'konijntje_goed',
      type: 'image',
      rect: ['18px','11px','208px','270px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/konijntje_goed.png','0px','0px']
   },
   {
      id: 'konijntje_goed_dood',
      type: 'image',
      rect: ['17px','-3px','204px','255px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/konijntje_goed_dood.png','0px','0px']
   },
   {
      id: 'stoutkonijn',
      type: 'image',
      rect: ['0px','0px','204px','265px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/konijntje_stout.png','0px','0px']
   },
   {
      id: 'bunnyholerand2',
      type: 'image',
      rect: ['24px','147px','204px','94px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bunnyholerand.png','0px','0px']
   },
   {
      id: 'bunnyholehooplicht5',
      type: 'image',
      rect: ['2px','145px','248px','152px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bunnyholehooplicht5.png','0px','0px']
   },
   {
      rect: ['34px','0px','188px','223px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      stroke: [0,'rgba(0,0,0,1)','none'],
      id: 'hitboxgoed',
      opacity: 0.5,
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['34px','0px','188px','223px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      stroke: [0,'rgba(0,0,0,1)','none'],
      id: 'hitbox',
      opacity: 0.5,
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hitbox}": [
            ["style", "top", '274px'],
            ["style", "height", '223px'],
            ["style", "opacity", '0'],
            ["style", "left", '24px'],
            ["style", "width", '188px']
         ],
         "${_konijntje_stout_dood}": [
            ["style", "top", '5px'],
            ["transform", "rotateZ", '3deg'],
            ["style", "height", '246px'],
            ["style", "opacity", '0'],
            ["style", "left", '24px'],
            ["style", "width", '201px']
         ],
         "${_konijntje_goed}": [
            ["style", "top", '268px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '270px'],
            ["style", "opacity", '0'],
            ["style", "left", '18px'],
            ["style", "width", '208px']
         ],
         "${_bunnyholehooplicht5}": [
            ["style", "left", '2px'],
            ["style", "top", '145px']
         ],
         "${_hitboxgoed}": [
            ["style", "top", '268px'],
            ["style", "height", '223px'],
            ["style", "opacity", '0'],
            ["style", "left", '24px'],
            ["style", "width", '188px']
         ],
         "${_konijntje_goed_dood}": [
            ["style", "top", '-3px'],
            ["style", "height", '255px'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "width", '204px']
         ],
         "${_bunnyhole}": [
            ["style", "top", '147px'],
            ["style", "left", '24px']
         ],
         "${_bunnyholerand2}": [
            ["style", "top", '147px'],
            ["style", "left", '24px']
         ],
         "${symbolSelector}": [
            ["style", "height", '270px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '250px']
         ],
         "${_stoutkonijn}": [
            ["style", "top", '241px'],
            ["style", "height", '265px'],
            ["style", "left", '24px'],
            ["style", "width", '204px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 17000,
         autoPlay: false,
         labels: {
            "dood": 6000,
            "play2": 10504,
            "goed": 14000,
            "goed_dood": 17000
         },
         timeline: [
            { id: "eid55", tween: [ "style", "${_konijntje_goed}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_konijntje_goed}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 0 },
            { id: "eid34", tween: [ "style", "${_konijntje_stout_dood}", "top", '269px', { fromValue: '5px'}], position: 6500, duration: 1000 },
            { id: "eid17", tween: [ "style", "${_stoutkonijn}", "left", '24px', { fromValue: '24px'}], position: 500, duration: 0 },
            { id: "eid49", tween: [ "style", "${_stoutkonijn}", "left", '24px', { fromValue: '24px'}], position: 12000, duration: 0 },
            { id: "eid47", tween: [ "style", "${_hitbox}", "left", '24px', { fromValue: '24px'}], position: 12002, duration: 0 },
            { id: "eid82", tween: [ "style", "${_hitbox}", "left", '34px', { fromValue: '24px'}], position: 12347, duration: 0 },
            { id: "eid5", tween: [ "style", "${_stoutkonijn}", "top", '0px', { fromValue: '241px'}], position: 500, duration: 500 },
            { id: "eid6", tween: [ "style", "${_stoutkonijn}", "top", '270px', { fromValue: '0px'}], position: 1250, duration: 340 },
            { id: "eid50", tween: [ "style", "${_stoutkonijn}", "top", '0px', { fromValue: '241px'}], position: 12000, duration: 347 },
            { id: "eid54", tween: [ "style", "${_stoutkonijn}", "top", '270px', { fromValue: '0px'}], position: 12712, duration: 225 },
            { id: "eid16", tween: [ "style", "${symbolSelector}", "width", '250px', { fromValue: '250px'}], position: 0, duration: 0 },
            { id: "eid27", tween: [ "style", "${_hitbox}", "opacity", '0', { fromValue: '0'}], position: 1590, duration: 0 },
            { id: "eid52", tween: [ "style", "${_hitbox}", "opacity", '0', { fromValue: '0'}], position: 12000, duration: 0 },
            { id: "eid58", tween: [ "style", "${_konijntje_goed}", "top", '11px', { fromValue: '268px'}], position: 14000, duration: 500 },
            { id: "eid59", tween: [ "style", "${_konijntje_goed}", "top", '270px', { fromValue: '11px'}], position: 14680, duration: 320 },
            { id: "eid66", tween: [ "style", "${_hitboxgoed}", "left", '24px', { fromValue: '24px'}], position: 14000, duration: 0 },
            { id: "eid72", tween: [ "style", "${_hitboxgoed}", "left", '28px', { fromValue: '24px'}], position: 14500, duration: 0 },
            { id: "eid25", tween: [ "style", "${_hitbox}", "top", '0px', { fromValue: '274px'}], position: 500, duration: 500 },
            { id: "eid26", tween: [ "style", "${_hitbox}", "top", '268px', { fromValue: '0px'}], position: 1250, duration: 340 },
            { id: "eid48", tween: [ "style", "${_hitbox}", "top", '6px', { fromValue: '268px'}], position: 12002, duration: 345 },
            { id: "eid53", tween: [ "style", "${_hitbox}", "top", '279px', { fromValue: '6px'}], position: 12712, duration: 225 },
            { id: "eid65", tween: [ "style", "${_hitboxgoed}", "opacity", '0', { fromValue: '0'}], position: 13998, duration: 0 },
            { id: "eid71", tween: [ "style", "${_hitboxgoed}", "opacity", '0', { fromValue: '0'}], position: 14350, duration: 0 },
            { id: "eid69", tween: [ "style", "${_konijntje_goed_dood}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_konijntje_goed_dood}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 0 },
            { id: "eid2", tween: [ "style", "${symbolSelector}", "height", '270px', { fromValue: '270px'}], position: 0, duration: 0 },
            { id: "eid35", tween: [ "style", "${_konijntje_stout_dood}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_konijntje_stout_dood}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 0 },
            { id: "eid68", tween: [ "style", "${_konijntje_stout_dood}", "left", '24px', { fromValue: '24px'}], position: 6500, duration: 0 },
            { id: "eid77", tween: [ "style", "${_konijntje_stout_dood}", "height", '246px', { fromValue: '246px'}], position: 6500, duration: 0 },
            { id: "eid62", tween: [ "style", "${_hitboxgoed}", "top", '0px', { fromValue: '268px'}], position: 14000, duration: 500 },
            { id: "eid63", tween: [ "style", "${_hitboxgoed}", "top", '279px', { fromValue: '0px'}], position: 14710, duration: 290 },
            { id: "eid78", tween: [ "style", "${_konijntje_stout_dood}", "width", '201px', { fromValue: '201px'}], position: 6500, duration: 0 },
            { id: "eid79", tween: [ "transform", "${_konijntje_stout_dood}", "rotateZ", '3deg', { fromValue: '3deg'}], position: 6500, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-111303541");
