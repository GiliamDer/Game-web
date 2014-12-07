/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'allan, sans-serif': '<script src=\"http://use.edgefonts.net/allan:n7:all.js\"></script>',
            'alice, serif': '<script src=\"http://use.edgefonts.net/alice:n4:all.js\"></script>'        },
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
                            id: 'achtergrond',
                            type: 'image',
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"achtergrond.png",'0px','0px']
                        },
                        {
                            id: 'SymPlaats1',
                            symbolName: 'SymPlaats1',
                            type: 'rect',
                            rect: ['182', '145', '49', '54', 'auto', 'auto']
                        },
                        {
                            id: 'SymPlaats2',
                            symbolName: 'SymPlaats2',
                            type: 'rect',
                            rect: ['557', '335', '65', '72', 'auto', 'auto']
                        },
                        {
                            id: 'symPlaats3',
                            symbolName: 'symPlaats3',
                            type: 'rect',
                            rect: ['207', '324', '65', '72', 'auto', 'auto']
                        },
                        {
                            id: 'haard',
                            type: 'image',
                            rect: ['22px', '0px', '283px', '434px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"haard.png",'0px','0px']
                        },
                        {
                            id: 'raam',
                            type: 'image',
                            rect: ['331px', '79px', '164px', '161px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"raam.png",'0px','0px']
                        },
                        {
                            id: 'kerstboom',
                            type: 'image',
                            rect: ['495px', '57px', '289px', '408px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"kerstboom.png",'0px','0px']
                        },
                        {
                            id: 'landschap_intro',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"landschap_intro.png",'0px','0px']
                        },
                        {
                            id: 'score',
                            display: 'none',
                            type: 'text',
                            rect: ['75', '443', 'auto', 'auto', 'auto', 'auto'],
                            text: "",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'grinch',
                            display: 'block',
                            type: 'image',
                            rect: ['60px', '250px', '194px', '233px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"grinch.png",'0px','0px']
                        },
                        {
                            id: 'tekstballon',
                            display: 'block',
                            type: 'rect',
                            rect: ['286px', '253px', '360px', '154px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: 0,
                            fill: ["rgba(255,255,255,0.75)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'lijn3',
                            display: 'block',
                            type: 'text',
                            rect: ['294px', '347px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0px 45px 0px)',
                            text: "the presents!",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [37, "px"], "rgba(0,0,0,1)", "600", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'lijn2',
                            display: 'block',
                            type: 'text',
                            rect: ['294px', '301px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0px 45px 0px)',
                            text: "I am going to steal",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [37, "px"], "rgba(0,0,0,1)", "600", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'lijn1',
                            display: 'block',
                            type: 'text',
                            rect: ['294px', '261px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0px 44px 0px)',
                            text: "I hate Christmas!",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [37, "px"], "rgba(0,0,0,1)", "600", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'SymPlay',
                            symbolName: 'Play',
                            display: 'block',
                            type: 'rect',
                            rect: ['631', '34', '81', '44', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Highscores',
                            display: 'none',
                            type: 'text',
                            rect: ['47px', '34px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 0,
                            text: "Highscores",
                            align: "left",
                            font: ['alice, serif', [40, "px"], "rgba(239,218,16,1.00)", "600", "none solid rgb(243, 230, 105)", "normal", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800px', '480px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 10340,
                    autoPlay: true,
                    labels: {
                        "Startgame": 2915
                    },
                    data: [
                        [
                            "eid163",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${tekstballon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid164",
                            "opacity",
                            615,
                            260,
                            "linear",
                            "${tekstballon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid162",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tekstballon}",
                            'block',
                            'block'
                        ],
                        [
                            "eid211",
                            "display",
                            0,
                            0,
                            "linear",
                            "${landschap_intro}",
                            'block',
                            'block'
                        ],
                        [
                            "eid213",
                            "display",
                            0,
                            0,
                            "linear",
                            "${grinch}",
                            'block',
                            'block'
                        ],
                        [
                            "eid215",
                            "display",
                            0,
                            0,
                            "linear",
                            "${lijn2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid168",
                            "clip",
                            985,
                            445,
                            "linear",
                            "${lijn1}",
                            [0,0,44,0],
                            [0,306,44,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid214",
                            "display",
                            0,
                            0,
                            "linear",
                            "${lijn3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid161",
                            "top",
                            0,
                            500,
                            "linear",
                            "${grinch}",
                            '498px',
                            '250px'
                        ],
                        [
                            "eid188",
                            "top",
                            500,
                            2290,
                            "linear",
                            "${grinch}",
                            '250px',
                            '254px'
                        ],
                        [
                            "eid212",
                            "display",
                            0,
                            0,
                            "linear",
                            "${score}",
                            'none',
                            'none'
                        ],
                        [
                            "eid185",
                            "opacity",
                            2450,
                            340,
                            "linear",
                            "${Highscores}",
                            '0',
                            '1'
                        ],
                        [
                            "eid191",
                            "height",
                            1500,
                            1290,
                            "linear",
                            "${tekstballon}",
                            '154px',
                            '153px'
                        ],
                        [
                            "eid173",
                            "clip",
                            2045,
                            280,
                            "linear",
                            "${lijn3}",
                            [0,0,45,0],
                            [0,233,45,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid180",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Highscores}",
                            'none',
                            'none'
                        ],
                        [
                            "eid181",
                            "display",
                            2450,
                            0,
                            "linear",
                            "${Highscores}",
                            'none',
                            'block'
                        ],
                        [
                            "eid216",
                            "display",
                            0,
                            0,
                            "linear",
                            "${lijn1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid172",
                            "clip",
                            1575,
                            470,
                            "linear",
                            "${lijn2}",
                            [0,0,45,0],
                            [0,335,45,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid167",
                            "width",
                            1500,
                            0,
                            "linear",
                            "${tekstballon}",
                            '360px',
                            '360px'
                        ],
                        [
                            "eid217",
                            "display",
                            0,
                            0,
                            "linear",
                            "${SymPlay}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "SymPlaats1": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cadeau_rood1',
                            type: 'image',
                            rect: ['69px', '0px', '49px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cadeau_rood.png', '0px', '0px']
                        },
                        {
                            id: 'cadeau_zwart1',
                            type: 'image',
                            rect: ['0px', '0px', '49px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cadeau_zwart.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '49px', '54px']
                        }
                    }
                },
                timeline: {
                    duration: 10310,
                    autoPlay: true,
                    labels: {
                        "rood1_gestart": 500,
                        "zwart1_gestart": 4500,
                        "rood gepakt": 8000,
                        "zwart gepakt": 9500
                    },
                    data: [
                        [
                            "eid82",
                            "scaleY",
                            8125,
                            210,
                            "linear",
                            "${cadeau_rood1}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid85",
                            "scaleY",
                            8335,
                            240,
                            "linear",
                            "${cadeau_rood1}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid81",
                            "scaleX",
                            8125,
                            210,
                            "linear",
                            "${cadeau_rood1}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid86",
                            "scaleX",
                            8335,
                            240,
                            "linear",
                            "${cadeau_rood1}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid77",
                            "left",
                            5000,
                            500,
                            "linear",
                            "${cadeau_zwart1}",
                            '0px',
                            '69px'
                        ],
                        [
                            "eid78",
                            "left",
                            6250,
                            500,
                            "linear",
                            "${cadeau_zwart1}",
                            '69px',
                            '0px'
                        ],
                        [
                            "eid89",
                            "scaleX",
                            9750,
                            210,
                            "linear",
                            "${cadeau_zwart1}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid90",
                            "scaleX",
                            9960,
                            240,
                            "linear",
                            "${cadeau_zwart1}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid74",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${cadeau_rood1}",
                            '0px',
                            '69px'
                        ],
                        [
                            "eid76",
                            "left",
                            2250,
                            500,
                            "linear",
                            "${cadeau_rood1}",
                            '69px',
                            '0px'
                        ],
                        [
                            "eid87",
                            "scaleY",
                            9750,
                            210,
                            "linear",
                            "${cadeau_zwart1}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid88",
                            "scaleY",
                            9960,
                            240,
                            "linear",
                            "${cadeau_zwart1}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            },
            "symPlaats3": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cadeau_rood3Copy',
                            type: 'image',
                            rect: ['0px', '0px', '65px', '72px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cadeau_rood.png', '0px', '0px']
                        },
                        {
                            id: 'cadeau_zwart3Copy',
                            type: 'image',
                            rect: ['0px', '0px', '65px', '72px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cadeau_zwart.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '65px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 10340,
                    autoPlay: true,
                    labels: {
                        "rood3_gestart": 750,
                        "zwart3_gestart": 4750,
                        "rood gepakt": 7750,
                        "zwart gepakt": 9500
                    },
                    data: [
                        [
                            "eid135",
                            "scaleY",
                            9750,
                            210,
                            "linear",
                            "${cadeau_zwart3Copy}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid136",
                            "scaleY",
                            9960,
                            240,
                            "linear",
                            "${cadeau_zwart3Copy}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid129",
                            "scaleY",
                            8125,
                            210,
                            "linear",
                            "${cadeau_rood3Copy}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid130",
                            "scaleY",
                            8335,
                            240,
                            "linear",
                            "${cadeau_rood3Copy}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid133",
                            "scaleX",
                            9750,
                            210,
                            "linear",
                            "${cadeau_zwart3Copy}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid134",
                            "scaleX",
                            9960,
                            240,
                            "linear",
                            "${cadeau_zwart3Copy}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid127",
                            "left",
                            1005,
                            500,
                            "linear",
                            "${cadeau_rood3Copy}",
                            '0px',
                            '93px'
                        ],
                        [
                            "eid128",
                            "left",
                            2255,
                            500,
                            "linear",
                            "${cadeau_rood3Copy}",
                            '93px',
                            '0px'
                        ],
                        [
                            "eid131",
                            "scaleX",
                            8125,
                            210,
                            "linear",
                            "${cadeau_rood3Copy}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid132",
                            "scaleX",
                            8335,
                            240,
                            "linear",
                            "${cadeau_rood3Copy}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid159",
                            "left",
                            5000,
                            500,
                            "linear",
                            "${cadeau_zwart3Copy}",
                            '0px',
                            '93px'
                        ],
                        [
                            "eid160",
                            "left",
                            6250,
                            500,
                            "linear",
                            "${cadeau_zwart3Copy}",
                            '93px',
                            '0px'
                        ]
                    ]
                }
            },
            "SymPlaats2": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cadeau_rood3',
                            type: 'image',
                            rect: ['-140px', '0px', '65px', '72px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cadeau_rood.png', '0px', '0px']
                        },
                        {
                            id: 'cadeau_zwart3',
                            type: 'image',
                            rect: ['0px', '0px', '65px', '72px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cadeau_zwart.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '65px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 9405,
                    autoPlay: true,
                    labels: {
                        "rood2_gestart": 750,
                        "zwart2_gestart": 3750,
                        "rood gepakt": 6750,
                        "zwart gepakt": 8500
                    },
                    data: [
                        [
                            "eid149",
                            "scaleY",
                            7000,
                            210,
                            "linear",
                            "${cadeau_rood3}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid150",
                            "scaleY",
                            7210,
                            240,
                            "linear",
                            "${cadeau_rood3}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid153",
                            "scaleY",
                            8750,
                            210,
                            "linear",
                            "${cadeau_zwart3}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid154",
                            "scaleY",
                            8960,
                            240,
                            "linear",
                            "${cadeau_zwart3}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid151",
                            "scaleX",
                            8750,
                            210,
                            "linear",
                            "${cadeau_zwart3}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid152",
                            "scaleX",
                            8960,
                            240,
                            "linear",
                            "${cadeau_zwart3}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid143",
                            "left",
                            1000,
                            350,
                            "linear",
                            "${cadeau_rood3}",
                            '0px',
                            '-140px'
                        ],
                        [
                            "eid144",
                            "left",
                            2150,
                            350,
                            "linear",
                            "${cadeau_rood3}",
                            '-140px',
                            '0px'
                        ],
                        [
                            "eid147",
                            "scaleX",
                            7000,
                            210,
                            "linear",
                            "${cadeau_rood3}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid148",
                            "scaleX",
                            7210,
                            240,
                            "linear",
                            "${cadeau_rood3}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid145",
                            "left",
                            4000,
                            350,
                            "linear",
                            "${cadeau_zwart3}",
                            '0px',
                            '-140px'
                        ],
                        [
                            "eid146",
                            "left",
                            5150,
                            350,
                            "linear",
                            "${cadeau_zwart3}",
                            '-140px',
                            '0px'
                        ]
                    ]
                }
            },
            "Play": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['alice, serif', [40, 'px'], 'rgba(245,225,31,1.00)', '600', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            text: 'Play',
                            id: 'Play',
                            opacity: 0,
                            display: 'none',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '81px', '44px']
                        }
                    }
                },
                timeline: {
                    duration: 2790,
                    autoPlay: true,
                    data: [
                        [
                            "eid187",
                            "opacity",
                            2450,
                            340,
                            "linear",
                            "${Play}",
                            '0',
                            '1'
                        ],
                        [
                            "eid179",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Play}",
                            'none',
                            'none'
                        ],
                        [
                            "eid182",
                            "display",
                            2450,
                            0,
                            "linear",
                            "${Play}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("steal_the_presents_edgeActions.js");
})("EDGE-333270303");
