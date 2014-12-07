/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['acme, sans-serif']='<script src=\"http://use.edgefonts.net/acme:n4:all.js\"></script>';


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
            id:'achtergrond',
            type:'rect',
            rect:['0px','0px','600px','480px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'daken2',
            display:'none',
            type:'rect',
            rect:['-2','275','auto','auto','auto','auto']
         },
         {
            id:'score',
            display:'none',
            type:'text',
            rect:['50px','71px','auto','auto','auto','auto'],
            text:"SCORE",
            font:['acme, sans-serif',35,"rgba(255,249,0,1.00)","normal","none",""]
         },
         {
            id:'dak',
            type:'image',
            rect:['75px','329px','649px','151px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"dak.png",'0px','0px']
         },
         {
            id:'sterretjes',
            type:'image',
            rect:['32px','0px','757px','298px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sterretjes.png",'0px','0px']
         },
         {
            id:'scorecijfer',
            display:'none',
            type:'rect',
            rect:['160','60','auto','auto','auto','auto']
         },
         {
            id:'tekstintro',
            type:'rect',
            rect:['1px','91px','800px','353px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Text',
            type:'text',
            rect:['149px','136px','503px','263px','auto','auto'],
            text:"Zwarte Piet is op weg naar de Sint <br>maar  komt op zijn weg allemaal slechte cadeautjes tegen. <br>Ontwijk de cadeautjes door op tijd weg te springen.<br><br>Succes ! ",
            align:"center",
            font:['acme, sans-serif',34,"rgba(255,255,0,1.00)","normal","none",""]
         },
         {
            id:'introbord',
            type:'image',
            rect:['160px','-296px','480px','296px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"introbord.png",'0px','0px']
         },
         {
            id:'piet1',
            type:'image',
            rect:['499px','264px','107px','133px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"piet1.png",'0px','0px']
         },
         {
            id:'cadeau',
            display:'none',
            type:'rect',
            rect:['387','329','auto','auto','auto','auto']
         },
         {
            id:'spritesheet',
            display:'none',
            type:'rect',
            rect:['299','288','auto','auto','auto','auto']
         },
         {
            id:'spring2',
            display:'none',
            type:'rect',
            rect:['690','329','auto','auto','auto','auto']
         },
         {
            id:'springtekst',
            display:'none',
            type:'text',
            rect:['697px','348px','auto','auto','auto','auto'],
            text:"spring",
            align:"left",
            font:['acme, sans-serif',13,"rgba(0,0,0,1.00)","bold","none","normal"]
         },
         {
            id:'speel',
            type:'rect',
            rect:['314px','315px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'daken2',
            symbolName:'daken'
         },
         {
            id:'speel',
            symbolName:'speel'
         },
         {
            id:'spring2',
            symbolName:'spring'
         },
         {
            id:'scorecijfer',
            symbolName:'scorecijfer'
         },
         {
            id:'spritesheet',
            symbolName:'spritesheet'
         },
         {
            id:'cadeau',
            symbolName:'cadeau'
         }
         ]
      },
   states: {
      "Base State": {
         "${_daken2}": [
            ["style", "display", 'none']
         ],
         "${_introbord}": [
            ["style", "top", '-296px'],
            ["style", "left", '160px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_cadeau}": [
            ["style", "top", '318px'],
            ["style", "left", '806px'],
            ["style", "display", 'none']
         ],
         "${_sterretjes}": [
            ["style", "left", '32px'],
            ["style", "top", '0px']
         ],
         "${_springtekst}": [
            ["style", "top", '348px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "left", '697px'],
            ["style", "font-size", '13px']
         ],
         "${_scorecijfer}": [
            ["style", "display", 'none']
         ],
         "${_achtergrond}": [
            ["style", "height", '480px'],
            ["gradient", "background-image", [278,[['rgba(77,65,131,1.00)',0],['rgba(7,5,37,1.00)',99]]]],
            ["style", "top", '0px'],
            ["style", "width", '800px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '480px'],
            ["style", "width", '800px']
         ],
         "${_speel}": [
            ["style", "top", '313px'],
            ["style", "opacity", '1'],
            ["style", "left", '314px']
         ],
         "${_dak}": [
            ["style", "top", '329px'],
            ["style", "left", '75px']
         ],
         "${_spritesheet}": [
            ["style", "top", '99px'],
            ["style", "left", '90px'],
            ["style", "display", 'none']
         ],
         "${_piet1}": [
            ["style", "top", '264px'],
            ["style", "left", '499px']
         ],
         "${_tekstintro}": [
            ["style", "top", '91px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '353px'],
            ["style", "opacity", '0'],
            ["style", "left", '1px'],
            ["style", "width", '800px']
         ],
         "${_score}": [
            ["style", "top", '71px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,249,0,1.00)'],
            ["style", "font-family", 'acme, sans-serif'],
            ["style", "left", '50px'],
            ["style", "font-size", '35px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '149px'],
            ["style", "font-size", '34px'],
            ["style", "top", '136px'],
            ["style", "text-align", 'center'],
            ["style", "height", '263px'],
            ["style", "font-family", 'acme, sans-serif'],
            ["style", "width", '503px']
         ],
         "${_spring2}": [
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 51000,
         autoPlay: true,
         labels: {
            "speelgame": 13000
         },
         timeline: [
            { id: "eid116", tween: [ "style", "${_daken2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid123", tween: [ "style", "${_daken2}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
            { id: "eid5", tween: [ "gradient", "${_achtergrond}", "background-image", [278,[['rgba(77,65,131,1.00)',0],['rgba(7,5,37,1.00)',99]]], { fromValue: [278,[['rgba(77,65,131,1.00)',0],['rgba(7,5,37,1.00)',99]]]}], position: 0, duration: 0 },
            { id: "eid113", tween: [ "style", "${_cadeau}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid120", tween: [ "style", "${_cadeau}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
            { id: "eid105", tween: [ "style", "${_cadeau}", "top", '318px', { fromValue: '318px'}], position: 0, duration: 0 },
            { id: "eid104", tween: [ "style", "${_cadeau}", "left", '806px', { fromValue: '806px'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "style", "${_dak}", "top", '480px', { fromValue: '329px'}], position: 13000, duration: 1000 },
            { id: "eid65", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 1000 },
            { id: "eid79", tween: [ "style", "${_tekstintro}", "top", '481px', { fromValue: '91px'}], position: 20000, duration: 1000 },
            { id: "eid77", tween: [ "style", "${_Text}", "top", '481px', { fromValue: '136px'}], position: 20000, duration: 1000 },
            { id: "eid111", tween: [ "style", "${_spring2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid118", tween: [ "style", "${_spring2}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
            { id: "eid114", tween: [ "style", "${_scorecijfer}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid121", tween: [ "style", "${_scorecijfer}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
            { id: "eid50", tween: [ "style", "${_piet1}", "top", '480px', { fromValue: '264px'}], position: 13000, duration: 1000 },
            { id: "eid85", tween: [ "style", "${_spritesheet}", "top", '99px', { fromValue: '99px'}], position: 51000, duration: 0 },
            { id: "eid112", tween: [ "style", "${_spritesheet}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid119", tween: [ "style", "${_spritesheet}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
            { id: "eid115", tween: [ "style", "${_score}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid122", tween: [ "style", "${_score}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
            { id: "eid110", tween: [ "style", "${_springtekst}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid117", tween: [ "style", "${_springtekst}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
            { id: "eid6", tween: [ "style", "${_achtergrond}", "width", '800px', { fromValue: '800px'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_introbord}", "top", '0px', { fromValue: '-296px'}], position: 0, duration: 1500, easing: "easeOutBounce" },
            { id: "eid20", tween: [ "style", "${_introbord}", "top", '0px', { fromValue: '0px'}], position: 1500, duration: 10500 },
            { id: "eid32", tween: [ "style", "${_introbord}", "top", '-296px', { fromValue: '0px'}], position: 13000, duration: 1000 },
            { id: "eid78", tween: [ "style", "${_tekstintro}", "left", '-2px', { fromValue: '1px'}], position: 20000, duration: 1000 },
            { id: "eid53", tween: [ "style", "${_speel}", "top", '480px', { fromValue: '313px'}], position: 13000, duration: 1000 },
            { id: "eid60", tween: [ "style", "${_dak}", "left", '74px', { fromValue: '75px'}], position: 13000, duration: 1000 },
            { id: "eid76", tween: [ "style", "${_Text}", "left", '147px', { fromValue: '149px'}], position: 20000, duration: 1000 },
            { id: "eid66", tween: [ "style", "${_tekstintro}", "opacity", '0.46', { fromValue: '0'}], position: 14000, duration: 1000 },
            { id: "eid84", tween: [ "style", "${_spritesheet}", "left", '90px', { fromValue: '90px'}], position: 51000, duration: 0 },
            { id: "eid26", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_speel}', [0] ], ""], position: 0 },
            { id: "eid82", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_daken2}', [0] ], ""], position: 21000 },
            { id: "eid124", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_cadeau}', [0] ], ""], position: 21000 }         ]
      }
   }
},
"speel": {
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
      id: 'speel',
      type: 'image',
      rect: ['0px','0px','170px','53px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/speel.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_speel}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '53px'],
            ["style", "width", '170px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: false,
         timeline: [
            { id: "eid21", tween: [ "style", "${_speel}", "left", '5px', { fromValue: '0px'}], position: 0, duration: 1000 },
            { id: "eid22", tween: [ "style", "${_speel}", "left", '-5px', { fromValue: '5px'}], position: 1000, duration: 1000 },
            { id: "eid23", tween: [ "style", "${_speel}", "left", '0px', { fromValue: '-5px'}], position: 2000, duration: 1000 }         ]
      }
   }
},
"daken": {
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
      id: 'daken',
      type: 'image',
      rect: ['0px','0px','1900px','200px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/daken.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_daken}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '1900px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 30000,
         autoPlay: false,
         timeline: [
            { id: "eid83", tween: [ "style", "${_daken}", "left", '-1094px', { fromValue: '0px'}], position: 0, duration: 30000 }         ]
      }
   }
},
"spritesheet": {
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
      rect: ['0px','0px','739px','328px','auto','auto'],
      id: 'spritesheet3',
      type: 'image',
      clip: ['rect(163px 260px 329px 130px)'],
      fill: ['rgba(0,0,0,0)','images/spritesheet.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_spritesheet3}": [
            ["style", "top", '0px'],
            ["style", "left", '13px'],
            ["style", "height", '328px'],
            ["style", "background-position", [130,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,260,329,130], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '739px']
         ],
         "${symbolSelector}": [
            ["style", "height", '328px'],
            ["style", "width", '739px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {
            "spring": 0,
            "start": 928
         },
         timeline: [
            { id: "eid100", tween: [ "style", "${_spritesheet3}", "background-position", [130,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [130,0]}], position: 0, duration: 0 },
            { id: "eid99", tween: [ "style", "${_spritesheet3}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [130,0]}], position: 928, duration: 0 },
            { id: "eid93", tween: [ "style", "${_spritesheet3}", "background-position", [-120,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1107, duration: 0 },
            { id: "eid94", tween: [ "style", "${_spritesheet3}", "background-position", [-240,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-120,0]}], position: 1300, duration: 0 },
            { id: "eid95", tween: [ "style", "${_spritesheet3}", "background-position", [-360,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-240,0]}], position: 1500, duration: 0 },
            { id: "eid101", tween: [ "style", "${_spritesheet3}", "left", '13px', { fromValue: '13px'}], position: 835, duration: 0 }         ]
      }
   }
},
"spring": {
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
      rect: ['0px','0px','54px','53px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'spring',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,235,0,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '53px'],
            ["style", "width", '54px']
         ],
         "${_spring}": [
            ["color", "background-color", 'rgba(255,235,0,1.00)'],
            ["style", "height", '53px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '54px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"cadeau": {
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
      id: 'cadeau',
      type: 'image',
      rect: ['0px','0px','97px','87px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cadeau.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cadeau}": [
            ["style", "height", '87px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '97px']
         ],
         "${symbolSelector}": [
            ["style", "height", '87px'],
            ["style", "width", '97px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: false,
         timeline: [
            { id: "eid106", tween: [ "style", "${_cadeau}", "left", '-904px', { fromValue: '0px'}], position: 0, duration: 4000 }         ]
      }
   }
},
"scorecijfer": {
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
      font: ['acme, sans-serif',47,'rgba(255,249,0,1)','700','none','normal'],
      type: 'text',
      id: 'scorecijfer',
      text: '0',
      align: 'left',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '59px'],
            ["style", "width", '19px']
         ],
         "${_scorecijfer}": [
            ["style", "top", '0px'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '47px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
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
})(jQuery, AdobeEdge, "EDGE-13303388");
