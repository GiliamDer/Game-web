/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'leckerli-one, cursive': '<script src=\"http://use.edgefonts.net/leckerli-one:n4:all.js\"></script>',
            'bubblegum-sans, sans-serif': '<script src=\"http://use.edgefonts.net/bubblegum-sans:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'background-grass',
                            type: 'image',
                            rect: ['0', '0', '800px', '480px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"background-grass-berg.png",'0px','0px']
                        },
                        {
                            id: 'score',
                            type: 'text',
                            rect: ['-1', '61', '801', '89px', 'auto', 'auto'],
                            text: "0",
                            align: "center",
                            font: ['bubblegum-sans, sans-serif', [60, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Symbol_bunnyhole',
                            symbolName: 'Symbol_bunnyhole',
                            type: 'rect',
                            rect: ['298', '177', '250', '270', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'Symbol_bunnyhole_1',
                            symbolName: 'Symbol_bunnyhole_1',
                            type: 'rect',
                            rect: ['56', '28', '250', '270', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'Symbol_bunnyhole_2',
                            symbolName: 'Symbol_bunnyhole_2',
                            type: 'rect',
                            rect: ['518', '28', '250', '270', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'gameoverscherm',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '800px', '480px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"gameoverscreen.png",'0px','0px']
                        },
                        {
                            id: 'scoregameover',
                            display: 'none',
                            type: 'text',
                            rect: ['0', '119', '800', '56px', 'auto', 'auto'],
                            text: "0",
                            align: "center",
                            font: ['bubblegum-sans, sans-serif', [75, "px"], "rgba(255,255,255,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'highscores',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '800px', '480px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"highscoresboard.png",'0px','0px']
                        },
                        {
                            id: 'scoreboard',
                            display: 'none',
                            type: 'group',
                            rect: ['132', '192', '49', '194', 'auto', 'auto'],
                            c: [
                            {
                                id: 'place1',
                                type: 'text',
                                rect: ['4', '20', '49px', '39px', 'auto', 'auto'],
                                text: "1.",
                                font: ['leckerli-one, cursive', [30, "px"], "rgba(240,240,240,1.00)", "normal", "none", "", "break-word", ""]
                            },
                            {
                                id: 'place2',
                                type: 'text',
                                rect: ['4', '59', '49px', '39px', 'auto', 'auto'],
                                text: "2.<br>",
                                font: ['leckerli-one, cursive', [30, "px"], "rgba(240,240,240,1.00)", "normal", "none", "", "break-word", ""]
                            },
                            {
                                id: 'place3',
                                type: 'text',
                                rect: ['4', '98', '49px', '39px', 'auto', 'auto'],
                                text: "3.",
                                font: ['leckerli-one, cursive', [30, "px"], "rgba(240,240,240,1.00)", "normal", "none", "", "break-word", ""]
                            },
                            {
                                id: 'place4',
                                type: 'text',
                                rect: ['4', '136', '49px', '39px', 'auto', 'auto'],
                                text: "4.",
                                font: ['leckerli-one, cursive', [30, "px"], "rgba(240,240,240,1.00)", "normal", "none", "", "break-word", ""]
                            },
                            {
                                id: 'place5',
                                type: 'text',
                                rect: ['4', '175', '49px', '39px', 'auto', 'auto'],
                                text: "5.",
                                font: ['leckerli-one, cursive', [30, "px"], "rgba(240,240,240,1.00)", "normal", "none", "", "break-word", ""]
                            },
                            {
                                id: 'name1',
                                type: 'text',
                                rect: ['53', '20', '332px', '39px', 'auto', 'auto'],
                                text: " ",
                                align: "left",
                                font: ['leckerli-one, cursive', [30, "px"], "rgba(240,240,240,1.00)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'name2',
                                type: 'text',
                                rect: ['53', '59', '332px', '39px', 'auto', 'auto'],
                                text: " ",
                                align: "left",
                                font: ['leckerli-one, cursive', [30, "px"], "rgba(240,240,240,1.00)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'name3',
                                type: 'text',
                                rect: ['53', '98', '332px', '39px', 'auto', 'auto'],
                                text: " ",
                                align: "left",
                                font: ['leckerli-one, cursive', [30, "px"], "rgba(240,240,240,1.00)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'name4',
                                type: 'text',
                                rect: ['53', '136', '332px', '39px', 'auto', 'auto'],
                                text: " ",
                                align: "left",
                                font: ['leckerli-one, cursive', [30, "px"], "rgba(240,240,240,1.00)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'name5',
                                type: 'text',
                                rect: ['53', '175', '332px', '39px', 'auto', 'auto'],
                                text: " ",
                                align: "left",
                                font: ['leckerli-one, cursive', [30, "px"], "rgba(240,240,240,1.00)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'score1',
                                type: 'text',
                                rect: ['385', '20', '123px', '39px', 'auto', 'auto'],
                                text: " ",
                                align: "left",
                                font: ['leckerli-one, cursive', [30, "px"], "rgba(240,240,240,1.00)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'score2',
                                type: 'text',
                                rect: ['385', '59', '123px', '39px', 'auto', 'auto'],
                                text: " ",
                                align: "left",
                                font: ['leckerli-one, cursive', [30, "px"], "rgba(240,240,240,1.00)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'score3',
                                type: 'text',
                                rect: ['385', '98', '123px', '39px', 'auto', 'auto'],
                                text: " ",
                                align: "left",
                                font: ['leckerli-one, cursive', [30, "px"], "rgba(240,240,240,1.00)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'score4',
                                type: 'text',
                                rect: ['385', '136', '123px', '39px', 'auto', 'auto'],
                                text: " ",
                                align: "left",
                                font: ['leckerli-one, cursive', [30, "px"], "rgba(240,240,240,1.00)", "normal", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'score5',
                                type: 'text',
                                rect: ['385', '175', '123px', '39px', 'auto', 'auto'],
                                text: " ",
                                align: "left",
                                font: ['leckerli-one, cursive', [30, "px"], "rgba(240,240,240,1.00)", "normal", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'replayknop',
                            type: 'rect',
                            rect: ['252', '221', '296', '89', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: 0,
                            fill: ["rgba(54,61,152,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'startscherm',
                            type: 'image',
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"startscreensmall2.png",'0px','0px']
                        },
                        {
                            id: 'leven1',
                            display: 'none',
                            type: 'image',
                            rect: ['15', '406', '67px', '59px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"leven.png",'0px','0px']
                        },
                        {
                            id: 'leven3',
                            display: 'none',
                            type: 'image',
                            rect: ['161', '406', '67px', '59px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"leven.png",'0px','0px']
                        },
                        {
                            id: 'leven2',
                            display: 'none',
                            type: 'image',
                            rect: ['87', '406', '67px', '59px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"leven.png",'0px','0px']
                        },
                        {
                            id: 'introkonijntjes',
                            type: 'group',
                            rect: ['74', '221', '658', '475', 'auto', 'auto'],
                            c: [
                            {
                                id: 'konijntje_stout1',
                                type: 'image',
                                rect: ['0', '229', '179', '233', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"konijntje_stout2.png",'0px','0px']
                            },
                            {
                                id: 'konijntje_stout2',
                                type: 'image',
                                rect: ['479', '237', '179', '233', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"konijntje_stout2.png",'0px','0px']
                            },
                            {
                                id: 'konijntje_goed2',
                                type: 'image',
                                rect: ['240', '259', '179', '233', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"konijntje_goed2.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'bunnyholehoop1',
                            type: 'image',
                            rect: ['40', '354', '248px', '152px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bunnyholehoop4.png",'0px','0px']
                        },
                        {
                            id: 'bunnyholehoop2',
                            type: 'image',
                            rect: ['519', '354', '248px', '152px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bunnyholehoop4.png",'0px','0px']
                        },
                        {
                            id: 'bunnyholehoop3',
                            type: 'image',
                            rect: ['276', '354', '248px', '152px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bunnyholehoop4.png",'0px','0px']
                        },
                        {
                            id: 'bunnyholeranden',
                            type: 'group',
                            rect: ['62', '356', '683', '94', 'auto', 'auto'],
                            c: [
                            {
                                id: 'bunnyholerand1',
                                type: 'image',
                                rect: ['0', '0', '204px', '94px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"bunnyholerand2.png",'0px','0px']
                            },
                            {
                                id: 'bunnyholerand2',
                                type: 'image',
                                rect: ['236', '0', '204px', '94px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"bunnyholerand2.png",'0px','0px']
                            },
                            {
                                id: 'bunnyholerand3',
                                type: 'image',
                                rect: ['479', '0', '204px', '94px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"bunnyholerand2.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'playknop',
                            type: 'rect',
                            rect: ['259', '239', '281', '89', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: 0,
                            fill: ["rgba(54,61,152,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'username',
                            type: 'text',
                            rect: ['252', '115', '281px', '71px', 'auto', 'auto'],
                            text: "<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [25, "px"], "rgba(255,255,255,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'instructionsknop',
                            type: 'ellipse',
                            rect: ['718', '20', '62px', '62px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 0,
                            fill: ["rgba(54,61,152,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'instructions',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '800px', '480px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"instructions.png",'0px','0px']
                        },
                        {
                            id: 'backinstructionsknop',
                            type: 'ellipse',
                            rect: ['22px', '20px', '62px', '62px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 0,
                            fill: ["rgba(54,61,152,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'backhighscoresknop',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['22px', '20px', '62px', '62px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 0,
                            fill: ["rgba(54,61,152,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'highscoreknop',
                            display: 'none',
                            type: 'rect',
                            rect: ['252px', '338px', '296px', '89px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: 0,
                            fill: ["rgba(54,61,152,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800', '480', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 25000,
                    autoPlay: true,
                    labels: {
                        "gameover": 25000
                    },
                    data: [
                        [
                            "eid110",
                            "top",
                            651,
                            499,
                            "linear",
                            "${konijntje_goed2}",
                            '259px',
                            '0px'
                        ],
                        [
                            "eid112",
                            "top",
                            1750,
                            1000,
                            "linear",
                            "${konijntje_goed2}",
                            '0px',
                            '242px'
                        ],
                        [
                            "eid107",
                            "display",
                            0,
                            0,
                            "linear",
                            "${leven3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid116",
                            "top",
                            0,
                            1050,
                            "linear",
                            "${konijntje_stout2}",
                            '237px',
                            '229px'
                        ],
                        [
                            "eid111",
                            "top",
                            1050,
                            500,
                            "linear",
                            "${konijntje_stout2}",
                            '229px',
                            '0px'
                        ],
                        [
                            "eid115",
                            "top",
                            2750,
                            250,
                            "linear",
                            "${konijntje_stout2}",
                            '0px',
                            '238px'
                        ],
                        [
                            "eid106",
                            "display",
                            0,
                            0,
                            "linear",
                            "${leven1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instructions}",
                            'none',
                            'none'
                        ],
                        [
                            "eid118",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscoreknop}",
                            'none',
                            'none'
                        ],
                        [
                            "eid109",
                            "top",
                            250,
                            500,
                            "linear",
                            "${konijntje_stout1}",
                            '229px',
                            '0px'
                        ],
                        [
                            "eid114",
                            "top",
                            2750,
                            250,
                            "linear",
                            "${konijntje_stout1}",
                            '0px',
                            '238px'
                        ],
                        [
                            "eid126",
                            "width",
                            0,
                            0,
                            "linear",
                            "${scoregameover}",
                            '800px',
                            '800px'
                        ],
                        [
                            "eid127",
                            "display",
                            0,
                            0,
                            "linear",
                            "${scoreboard}",
                            'none',
                            'none'
                        ],
                        [
                            "eid124",
                            "left",
                            0,
                            0,
                            "linear",
                            "${scoregameover}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid123",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${backhighscoresknop}",
                            '0',
                            '0'
                        ],
                        [
                            "eid128",
                            "display",
                            0,
                            0,
                            "linear",
                            "${highscores}",
                            'none',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            0,
                            0,
                            "linear",
                            "${scoregameover}",
                            'none',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            0,
                            0,
                            "linear",
                            "${gameoverscherm}",
                            'none',
                            'none'
                        ],
                        [
                            "eid105",
                            "display",
                            0,
                            0,
                            "linear",
                            "${leven2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid120",
                            "display",
                            0,
                            0,
                            "linear",
                            "${backhighscoresknop}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Symbol_bunnyhole": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [24, 147, '204px', '94px', 'auto', 'auto'],
                            id: 'bunnyhole',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bunnyhole.png', '0px', '0px']
                        },
                        {
                            rect: [24, 241, 204, 265, 'auto', 'auto'],
                            id: 'stoutkonijn',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/konijntje_stout.png', '0px', '0px']
                        },
                        {
                            rect: [24, 5, 201, 246, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['3', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'konijntje_stout_dood',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/konijntje_stout_dood.png', '0px', '0px']
                        },
                        {
                            rect: [18, 268, 208, 270, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'konijntje_goed',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/konijntje_goed.png', '0px', '0px']
                        },
                        {
                            rect: [17, -3, 204, 255, 'auto', 'auto'],
                            id: 'konijntje_goed_dood',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/konijntje_goed_dood.png', '0px', '0px']
                        },
                        {
                            rect: [24, 147, '204px', '94px', 'auto', 'auto'],
                            id: 'bunnyholerand2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bunnyholerand.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bunnyholehoop3',
                            opacity: '1',
                            rect: [2, 142, '248px', '152px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bunnyholehoop3.png', '0px', '0px']
                        },
                        {
                            rect: [24, 274, 188, 223, 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'hitbox',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: [24, 268, 188, 223, 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'hitboxgoed',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 250, 270]
                        }
                    }
                },
                timeline: {
                    duration: 17000,
                    autoPlay: false,
                    labels: {
                        "dood": 6000,
                        "play2": 10504,
                        "goed": 14000,
                        "goed_dood": 17000
                    },
                    data: [
                        [
                            "eid68",
                            "left",
                            6250,
                            0,
                            "linear",
                            "${konijntje_stout_dood}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid58",
                            "top",
                            14000,
                            500,
                            "linear",
                            "${konijntje_goed}",
                            '268px',
                            '11px'
                        ],
                        [
                            "eid59",
                            "top",
                            14680,
                            320,
                            "linear",
                            "${konijntje_goed}",
                            '11px',
                            '270px'
                        ],
                        [
                            "eid65",
                            "opacity",
                            13998,
                            0,
                            "linear",
                            "${hitboxgoed}",
                            '0',
                            '0'
                        ],
                        [
                            "eid71",
                            "opacity",
                            14350,
                            0,
                            "linear",
                            "${hitboxgoed}",
                            '0',
                            '0'
                        ],
                        [
                            "eid55",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${konijntje_goed}",
                            '0',
                            '0'
                        ],
                        [
                            "eid56",
                            "opacity",
                            14000,
                            0,
                            "linear",
                            "${konijntje_goed}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "top",
                            3126,
                            281,
                            "linear",
                            "${hitbox}",
                            '274px',
                            '0px'
                        ],
                        [
                            "eid26",
                            "top",
                            3750,
                            140,
                            "linear",
                            "${hitbox}",
                            '0px',
                            '268px'
                        ],
                        [
                            "eid48",
                            "top",
                            11795,
                            345,
                            "linear",
                            "${hitbox}",
                            '268px',
                            '8px'
                        ],
                        [
                            "eid53",
                            "top",
                            12525,
                            225,
                            "linear",
                            "${hitbox}",
                            '8px',
                            '279px'
                        ],
                        [
                            "eid77",
                            "height",
                            6250,
                            0,
                            "linear",
                            "${konijntje_stout_dood}",
                            '246px',
                            '246px'
                        ],
                        [
                            "eid16",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '250px',
                            '250px'
                        ],
                        [
                            "eid35",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${konijntje_stout_dood}",
                            '0',
                            '0'
                        ],
                        [
                            "eid37",
                            "opacity",
                            6000,
                            0,
                            "linear",
                            "${konijntje_stout_dood}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            3890,
                            0,
                            "linear",
                            "${hitbox}",
                            '0',
                            '0'
                        ],
                        [
                            "eid52",
                            "opacity",
                            10498,
                            0,
                            "linear",
                            "${hitbox}",
                            '0',
                            '0'
                        ],
                        [
                            "eid47",
                            "left",
                            10500,
                            0,
                            "linear",
                            "${hitbox}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid88",
                            "left",
                            12140,
                            0,
                            "linear",
                            "${hitbox}",
                            '24px',
                            '33px'
                        ],
                        [
                            "eid17",
                            "left",
                            3126,
                            0,
                            "linear",
                            "${stoutkonijn}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid49",
                            "left",
                            10498,
                            0,
                            "linear",
                            "${stoutkonijn}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid5",
                            "top",
                            3126,
                            281,
                            "linear",
                            "${stoutkonijn}",
                            '241px',
                            '0px'
                        ],
                        [
                            "eid6",
                            "top",
                            3750,
                            140,
                            "linear",
                            "${stoutkonijn}",
                            '0px',
                            '270px'
                        ],
                        [
                            "eid50",
                            "top",
                            11793,
                            347,
                            "linear",
                            "${stoutkonijn}",
                            '241px',
                            '0px'
                        ],
                        [
                            "eid54",
                            "top",
                            12525,
                            225,
                            "linear",
                            "${stoutkonijn}",
                            '0px',
                            '270px'
                        ],
                        [
                            "eid66",
                            "left",
                            14000,
                            0,
                            "linear",
                            "${hitboxgoed}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid72",
                            "left",
                            14500,
                            0,
                            "linear",
                            "${hitboxgoed}",
                            '24px',
                            '28px'
                        ],
                        [
                            "eid34",
                            "top",
                            6250,
                            1000,
                            "linear",
                            "${konijntje_stout_dood}",
                            '5px',
                            '269px'
                        ],
                        [
                            "eid62",
                            "top",
                            14000,
                            500,
                            "linear",
                            "${hitboxgoed}",
                            '268px',
                            '0px'
                        ],
                        [
                            "eid63",
                            "top",
                            14710,
                            290,
                            "linear",
                            "${hitboxgoed}",
                            '0px',
                            '279px'
                        ],
                        [
                            "eid69",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${konijntje_goed_dood}",
                            '0',
                            '0'
                        ],
                        [
                            "eid70",
                            "opacity",
                            17000,
                            0,
                            "linear",
                            "${konijntje_goed_dood}",
                            '0',
                            '1'
                        ],
                        [
                            "eid78",
                            "width",
                            6250,
                            0,
                            "linear",
                            "${konijntje_stout_dood}",
                            '201px',
                            '201px'
                        ],
                        [
                            "eid79",
                            "rotateZ",
                            6250,
                            0,
                            "linear",
                            "${konijntje_stout_dood}",
                            '3deg',
                            '3deg'
                        ],
                        [
                            "eid2",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '270px',
                            '270px'
                        ]
                    ]
                }
            },
            "Symbol_bunnyhole_1": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [24, 147, '204px', '94px', 'auto', 'auto'],
                            id: 'bunnyhole',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bunnyhole.png', '0px', '0px']
                        },
                        {
                            rect: [24, 241, 204, 265, 'auto', 'auto'],
                            id: 'stoutkonijn',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/konijntje_stout.png', '0px', '0px']
                        },
                        {
                            rect: [24, 5, 201, 246, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['3', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'konijntje_stout_dood',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/konijntje_stout_dood.png', '0px', '0px']
                        },
                        {
                            rect: [18, 268, 208, 270, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'konijntje_goed',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/konijntje_goed.png', '0px', '0px']
                        },
                        {
                            rect: [17, -3, 204, 255, 'auto', 'auto'],
                            id: 'konijntje_goed_dood',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/konijntje_goed_dood.png', '0px', '0px']
                        },
                        {
                            rect: [24, 147, '204px', '94px', 'auto', 'auto'],
                            id: 'bunnyholerand2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bunnyholerand.png', '0px', '0px']
                        },
                        {
                            rect: [2, 142, '248px', '152px', 'auto', 'auto'],
                            id: 'bunnyholehooplicht4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bunnyholehooplicht4.png', '0px', '0px']
                        },
                        {
                            rect: [24, 274, 188, 223, 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'hitbox',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: [24, 268, 188, 223, 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'hitboxgoed',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 250, 270]
                        }
                    }
                },
                timeline: {
                    duration: 17000,
                    autoPlay: false,
                    labels: {
                        "dood": 6000,
                        "play2": 10504,
                        "goed": 14000,
                        "goed_dood": 17000
                    },
                    data: [
                        [
                            "eid68",
                            "left",
                            6250,
                            0,
                            "linear",
                            "${konijntje_stout_dood}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid58",
                            "top",
                            14000,
                            500,
                            "linear",
                            "${konijntje_goed}",
                            '268px',
                            '11px'
                        ],
                        [
                            "eid59",
                            "top",
                            14680,
                            320,
                            "linear",
                            "${konijntje_goed}",
                            '11px',
                            '270px'
                        ],
                        [
                            "eid65",
                            "opacity",
                            13998,
                            0,
                            "linear",
                            "${hitboxgoed}",
                            '0',
                            '0'
                        ],
                        [
                            "eid71",
                            "opacity",
                            14350,
                            0,
                            "linear",
                            "${hitboxgoed}",
                            '0',
                            '0'
                        ],
                        [
                            "eid55",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${konijntje_goed}",
                            '0',
                            '0'
                        ],
                        [
                            "eid56",
                            "opacity",
                            14000,
                            0,
                            "linear",
                            "${konijntje_goed}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "top",
                            1845,
                            405,
                            "linear",
                            "${hitbox}",
                            '274px',
                            '0px'
                        ],
                        [
                            "eid26",
                            "top",
                            2500,
                            340,
                            "linear",
                            "${hitbox}",
                            '0px',
                            '268px'
                        ],
                        [
                            "eid48",
                            "top",
                            11252,
                            345,
                            "linear",
                            "${hitbox}",
                            '268px',
                            '0px'
                        ],
                        [
                            "eid53",
                            "top",
                            11962,
                            225,
                            "linear",
                            "${hitbox}",
                            '0px',
                            '279px'
                        ],
                        [
                            "eid77",
                            "height",
                            6250,
                            0,
                            "linear",
                            "${konijntje_stout_dood}",
                            '246px',
                            '246px'
                        ],
                        [
                            "eid16",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '250px',
                            '250px'
                        ],
                        [
                            "eid35",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${konijntje_stout_dood}",
                            '0',
                            '0'
                        ],
                        [
                            "eid37",
                            "opacity",
                            6000,
                            0,
                            "linear",
                            "${konijntje_stout_dood}",
                            '0',
                            '1'
                        ],
                        [
                            "eid80",
                            "opacity",
                            1845,
                            0,
                            "linear",
                            "${hitbox}",
                            '0',
                            '0'
                        ],
                        [
                            "eid27",
                            "opacity",
                            2840,
                            0,
                            "linear",
                            "${hitbox}",
                            '0',
                            '0'
                        ],
                        [
                            "eid52",
                            "opacity",
                            11250,
                            0,
                            "linear",
                            "${hitbox}",
                            '0',
                            '0'
                        ],
                        [
                            "eid47",
                            "left",
                            11252,
                            0,
                            "linear",
                            "${hitbox}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid81",
                            "left",
                            11597,
                            0,
                            "linear",
                            "${hitbox}",
                            '24px',
                            '34px'
                        ],
                        [
                            "eid17",
                            "left",
                            1845,
                            0,
                            "linear",
                            "${stoutkonijn}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid49",
                            "left",
                            11250,
                            0,
                            "linear",
                            "${stoutkonijn}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid5",
                            "top",
                            1845,
                            405,
                            "linear",
                            "${stoutkonijn}",
                            '241px',
                            '0px'
                        ],
                        [
                            "eid6",
                            "top",
                            2500,
                            340,
                            "linear",
                            "${stoutkonijn}",
                            '0px',
                            '270px'
                        ],
                        [
                            "eid50",
                            "top",
                            11250,
                            347,
                            "linear",
                            "${stoutkonijn}",
                            '241px',
                            '0px'
                        ],
                        [
                            "eid54",
                            "top",
                            11962,
                            225,
                            "linear",
                            "${stoutkonijn}",
                            '0px',
                            '270px'
                        ],
                        [
                            "eid66",
                            "left",
                            14000,
                            0,
                            "linear",
                            "${hitboxgoed}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid72",
                            "left",
                            14500,
                            0,
                            "linear",
                            "${hitboxgoed}",
                            '24px',
                            '28px'
                        ],
                        [
                            "eid34",
                            "top",
                            6250,
                            1000,
                            "linear",
                            "${konijntje_stout_dood}",
                            '5px',
                            '269px'
                        ],
                        [
                            "eid62",
                            "top",
                            14000,
                            500,
                            "linear",
                            "${hitboxgoed}",
                            '268px',
                            '0px'
                        ],
                        [
                            "eid63",
                            "top",
                            14710,
                            290,
                            "linear",
                            "${hitboxgoed}",
                            '0px',
                            '279px'
                        ],
                        [
                            "eid79",
                            "rotateZ",
                            6250,
                            0,
                            "linear",
                            "${konijntje_stout_dood}",
                            '3deg',
                            '3deg'
                        ],
                        [
                            "eid69",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${konijntje_goed_dood}",
                            '0',
                            '0'
                        ],
                        [
                            "eid70",
                            "opacity",
                            17000,
                            0,
                            "linear",
                            "${konijntje_goed_dood}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '270px',
                            '270px'
                        ],
                        [
                            "eid78",
                            "width",
                            6250,
                            0,
                            "linear",
                            "${konijntje_stout_dood}",
                            '201px',
                            '201px'
                        ]
                    ]
                }
            },
            "Symbol_bunnyhole_2": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [24, 147, '204px', '94px', 'auto', 'auto'],
                            id: 'bunnyhole',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bunnyhole.png', '0px', '0px']
                        },
                        {
                            rect: [24, 5, 201, 246, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['3', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'konijntje_stout_dood',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/konijntje_stout_dood.png', '0px', '0px']
                        },
                        {
                            rect: [18, 268, 208, 270, 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'konijntje_goed',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/konijntje_goed.png', '0px', '0px']
                        },
                        {
                            rect: [17, -3, 204, 255, 'auto', 'auto'],
                            id: 'konijntje_goed_dood',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/konijntje_goed_dood.png', '0px', '0px']
                        },
                        {
                            rect: [24, 241, 204, 265, 'auto', 'auto'],
                            id: 'stoutkonijn',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/konijntje_stout.png', '0px', '0px']
                        },
                        {
                            rect: [24, 147, '204px', '94px', 'auto', 'auto'],
                            id: 'bunnyholerand2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bunnyholerand.png', '0px', '0px']
                        },
                        {
                            rect: [2, 145, '248px', '152px', 'auto', 'auto'],
                            id: 'bunnyholehooplicht5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bunnyholehooplicht5.png', '0px', '0px']
                        },
                        {
                            rect: [24, 268, 188, 223, 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'hitboxgoed',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: [24, 274, 188, 223, 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'hitbox',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 250, 270]
                        }
                    }
                },
                timeline: {
                    duration: 17000,
                    autoPlay: false,
                    labels: {
                        "dood": 6000,
                        "play2": 10504,
                        "goed": 14000,
                        "goed_dood": 17000
                    },
                    data: [
                        [
                            "eid68",
                            "left",
                            6500,
                            0,
                            "linear",
                            "${konijntje_stout_dood}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid58",
                            "top",
                            14000,
                            500,
                            "linear",
                            "${konijntje_goed}",
                            '268px',
                            '11px'
                        ],
                        [
                            "eid59",
                            "top",
                            14680,
                            320,
                            "linear",
                            "${konijntje_goed}",
                            '11px',
                            '270px'
                        ],
                        [
                            "eid65",
                            "opacity",
                            13998,
                            0,
                            "linear",
                            "${hitboxgoed}",
                            '0',
                            '0'
                        ],
                        [
                            "eid71",
                            "opacity",
                            14350,
                            0,
                            "linear",
                            "${hitboxgoed}",
                            '0',
                            '0'
                        ],
                        [
                            "eid55",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${konijntje_goed}",
                            '0',
                            '0'
                        ],
                        [
                            "eid56",
                            "opacity",
                            14000,
                            0,
                            "linear",
                            "${konijntje_goed}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "top",
                            500,
                            500,
                            "linear",
                            "${hitbox}",
                            '274px',
                            '0px'
                        ],
                        [
                            "eid26",
                            "top",
                            1250,
                            340,
                            "linear",
                            "${hitbox}",
                            '0px',
                            '268px'
                        ],
                        [
                            "eid48",
                            "top",
                            12002,
                            345,
                            "linear",
                            "${hitbox}",
                            '268px',
                            '6px'
                        ],
                        [
                            "eid53",
                            "top",
                            12712,
                            225,
                            "linear",
                            "${hitbox}",
                            '6px',
                            '279px'
                        ],
                        [
                            "eid77",
                            "height",
                            6500,
                            0,
                            "linear",
                            "${konijntje_stout_dood}",
                            '246px',
                            '246px'
                        ],
                        [
                            "eid16",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '250px',
                            '250px'
                        ],
                        [
                            "eid35",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${konijntje_stout_dood}",
                            '0',
                            '0'
                        ],
                        [
                            "eid37",
                            "opacity",
                            6000,
                            0,
                            "linear",
                            "${konijntje_stout_dood}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            1590,
                            0,
                            "linear",
                            "${hitbox}",
                            '0',
                            '0'
                        ],
                        [
                            "eid52",
                            "opacity",
                            12000,
                            0,
                            "linear",
                            "${hitbox}",
                            '0',
                            '0'
                        ],
                        [
                            "eid47",
                            "left",
                            12002,
                            0,
                            "linear",
                            "${hitbox}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid82",
                            "left",
                            12347,
                            0,
                            "linear",
                            "${hitbox}",
                            '24px',
                            '34px'
                        ],
                        [
                            "eid17",
                            "left",
                            500,
                            0,
                            "linear",
                            "${stoutkonijn}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid49",
                            "left",
                            12000,
                            0,
                            "linear",
                            "${stoutkonijn}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid5",
                            "top",
                            500,
                            500,
                            "linear",
                            "${stoutkonijn}",
                            '241px',
                            '0px'
                        ],
                        [
                            "eid6",
                            "top",
                            1250,
                            340,
                            "linear",
                            "${stoutkonijn}",
                            '0px',
                            '270px'
                        ],
                        [
                            "eid50",
                            "top",
                            12000,
                            347,
                            "linear",
                            "${stoutkonijn}",
                            '241px',
                            '0px'
                        ],
                        [
                            "eid54",
                            "top",
                            12712,
                            225,
                            "linear",
                            "${stoutkonijn}",
                            '0px',
                            '270px'
                        ],
                        [
                            "eid66",
                            "left",
                            14000,
                            0,
                            "linear",
                            "${hitboxgoed}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid72",
                            "left",
                            14500,
                            0,
                            "linear",
                            "${hitboxgoed}",
                            '24px',
                            '28px'
                        ],
                        [
                            "eid34",
                            "top",
                            6500,
                            1000,
                            "linear",
                            "${konijntje_stout_dood}",
                            '5px',
                            '269px'
                        ],
                        [
                            "eid62",
                            "top",
                            14000,
                            500,
                            "linear",
                            "${hitboxgoed}",
                            '268px',
                            '0px'
                        ],
                        [
                            "eid63",
                            "top",
                            14710,
                            290,
                            "linear",
                            "${hitboxgoed}",
                            '0px',
                            '279px'
                        ],
                        [
                            "eid79",
                            "rotateZ",
                            6500,
                            0,
                            "linear",
                            "${konijntje_stout_dood}",
                            '3deg',
                            '3deg'
                        ],
                        [
                            "eid69",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${konijntje_goed_dood}",
                            '0',
                            '0'
                        ],
                        [
                            "eid70",
                            "opacity",
                            17000,
                            0,
                            "linear",
                            "${konijntje_goed_dood}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symbolSelector}",
                            '270px',
                            '270px'
                        ],
                        [
                            "eid78",
                            "width",
                            6500,
                            0,
                            "linear",
                            "${konijntje_stout_dood}",
                            '201px',
                            '201px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Bunny%20Smasher_edgeActions.js");
})("EDGE-111303541");
