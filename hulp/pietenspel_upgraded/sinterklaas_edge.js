/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'acme, sans-serif': '<script src=\"http://use.edgefonts.net/acme:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.7.1.min.js"
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
                            type: 'rect',
                            rect: ['0px', '0', '800', '480', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)",[278,[['rgba(77,65,131,1.00)',0],['rgba(7,5,37,1.00)',99]]]],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'daken2',
                            symbolName: 'daken',
                            display: 'none',
                            type: 'rect',
                            rect: ['-2', '275', '1900', '200', 'auto', 'auto']
                        },
                        {
                            id: 'score',
                            display: 'none',
                            type: 'text',
                            rect: ['50', '71', 'auto', 'auto', 'auto', 'auto'],
                            text: "SCORE",
                            font: ['acme, sans-serif', [35, "px"], "rgba(255,249,0,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'dak',
                            type: 'image',
                            rect: ['75', '329', '649px', '151px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dak.png",'0px','0px']
                        },
                        {
                            id: 'sterretjes',
                            type: 'image',
                            rect: ['32', '0', '757px', '298px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sterretjes.png",'0px','0px']
                        },
                        {
                            id: 'scorecijfer',
                            symbolName: 'scorecijfer',
                            display: 'none',
                            type: 'rect',
                            rect: ['160', '60', '19', '59', 'auto', 'auto']
                        },
                        {
                            id: 'tekstintro',
                            type: 'rect',
                            rect: ['1', '91', '800', '353', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['149', '136', '503', '263', 'auto', 'auto'],
                            opacity: 0,
                            text: "Zwarte Piet is op weg naar de Sint <br>maar  komt op zijn weg allemaal slechte cadeautjes tegen. <br>Ontwijk de cadeautjes door op tijd weg te springen.<br><br>Succes ! ",
                            align: "center",
                            font: ['acme, sans-serif', [34, "px"], "rgba(255,255,0,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'introbord',
                            type: 'image',
                            rect: ['160', '-296', '480px', '296px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"introbord.png",'0px','0px']
                        },
                        {
                            id: 'piet1',
                            type: 'image',
                            rect: ['499', '264', '107px', '133px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"piet1.png",'0px','0px']
                        },
                        {
                            id: 'cadeau',
                            symbolName: 'cadeau',
                            display: 'none',
                            type: 'rect',
                            rect: ['806', '318', '97', '87', 'auto', 'auto']
                        },
                        {
                            id: 'spritesheet',
                            symbolName: 'spritesheet',
                            display: 'none',
                            type: 'rect',
                            rect: ['90', '99', '739', '328', 'auto', 'auto']
                        },
                        {
                            id: 'spring2',
                            symbolName: 'spring',
                            display: 'none',
                            type: 'rect',
                            rect: ['690', '329', '54', '53', 'auto', 'auto']
                        },
                        {
                            id: 'springtekst',
                            display: 'none',
                            type: 'text',
                            rect: ['697', '348', 'auto', 'auto', 'auto', 'auto'],
                            text: "spring",
                            align: "left",
                            font: ['acme, sans-serif', [13, "px"], "rgba(0,0,0,1.00)", "bold", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'speel',
                            symbolName: 'speel',
                            type: 'rect',
                            rect: ['314', '313', '170', '53', 'auto', 'auto'],
                            opacity: 1
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
                    duration: 51000,
                    autoPlay: true,
                    labels: {
                        "speelgame": 13000
                    },
                    data: [
                        [
                            "eid112",
                            "display",
                            0,
                            0,
                            "linear",
                            "${spritesheet}",
                            'none',
                            'none'
                        ],
                        [
                            "eid119",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${spritesheet}",
                            'none',
                            'block'
                        ],
                        [
                            "eid60",
                            "left",
                            13000,
                            1000,
                            "linear",
                            "${dak}",
                            '75px',
                            '74px'
                        ],
                        [
                            "eid59",
                            "top",
                            13000,
                            1000,
                            "linear",
                            "${dak}",
                            '329px',
                            '480px'
                        ],
                        [
                            "eid110",
                            "display",
                            0,
                            0,
                            "linear",
                            "${springtekst}",
                            'none',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${springtekst}",
                            'none',
                            'block'
                        ],
                        [
                            "eid78",
                            "left",
                            20000,
                            1000,
                            "linear",
                            "${tekstintro}",
                            '1px',
                            '-2px'
                        ],
                        [
                            "eid79",
                            "top",
                            20000,
                            1000,
                            "linear",
                            "${tekstintro}",
                            '91px',
                            '481px'
                        ],
                        [
                            "eid50",
                            "top",
                            13000,
                            1000,
                            "linear",
                            "${piet1}",
                            '264px',
                            '480px'
                        ],
                        [
                            "eid65",
                            "opacity",
                            14000,
                            1000,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid84",
                            "left",
                            51000,
                            0,
                            "linear",
                            "${spritesheet}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid66",
                            "opacity",
                            14000,
                            1000,
                            "linear",
                            "${tekstintro}",
                            '0',
                            '0.46'
                        ],
                        [
                            "eid115",
                            "display",
                            0,
                            0,
                            "linear",
                            "${score}",
                            'none',
                            'none'
                        ],
                        [
                            "eid122",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${score}",
                            'none',
                            'block'
                        ],
                        [
                            "eid5",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${achtergrond}",
                            [278,[['rgba(77,65,131,1.00)',0],['rgba(7,5,37,1.00)',99]]],
                            [278,[['rgba(77,65,131,1.00)',0],['rgba(7,5,37,1.00)',99]]]
                        ],
                        [
                            "eid76",
                            "left",
                            20000,
                            1000,
                            "linear",
                            "${Text}",
                            '149px',
                            '147px'
                        ],
                        [
                            "eid77",
                            "top",
                            20000,
                            1000,
                            "linear",
                            "${Text}",
                            '136px',
                            '481px'
                        ],
                        [
                            "eid113",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cadeau}",
                            'none',
                            'none'
                        ],
                        [
                            "eid120",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${cadeau}",
                            'none',
                            'block'
                        ],
                        [
                            "eid53",
                            "top",
                            13000,
                            1000,
                            "linear",
                            "${speel}",
                            '313px',
                            '480px'
                        ],
                        [
                            "eid116",
                            "display",
                            0,
                            0,
                            "linear",
                            "${daken2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid123",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${daken2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid111",
                            "display",
                            0,
                            0,
                            "linear",
                            "${spring2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid118",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${spring2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12",
                            "top",
                            0,
                            1500,
                            "easeOutBounce",
                            "${introbord}",
                            '-296px',
                            '0px'
                        ],
                        [
                            "eid20",
                            "top",
                            1500,
                            10500,
                            "linear",
                            "${introbord}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid32",
                            "top",
                            13000,
                            1000,
                            "linear",
                            "${introbord}",
                            '0px',
                            '-296px'
                        ],
                        [
                            "eid85",
                            "top",
                            51000,
                            0,
                            "linear",
                            "${spritesheet}",
                            '99px',
                            '99px'
                        ],
                        [
                            "eid6",
                            "width",
                            0,
                            0,
                            "linear",
                            "${achtergrond}",
                            '800px',
                            '800px'
                        ],
                        [
                            "eid104",
                            "left",
                            0,
                            0,
                            "linear",
                            "${cadeau}",
                            '806px',
                            '806px'
                        ],
                        [
                            "eid105",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cadeau}",
                            '318px',
                            '318px'
                        ],
                        [
                            "eid114",
                            "display",
                            0,
                            0,
                            "linear",
                            "${scorecijfer}",
                            'none',
                            'none'
                        ],
                        [
                            "eid121",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${scorecijfer}",
                            'none',
                            'block'
                        ],
                            [ "eid26", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${speel}', [0] ] ],
                            [ "eid82", "trigger", 21000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${daken2}', [0] ] ],
                            [ "eid124", "trigger", 21000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${cadeau}', [0] ] ]
                    ]
                }
            },
            "speel": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '170px', '53px', 'auto', 'auto'],
                            id: 'speel',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/speel.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 170, 53]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid21",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${speel}",
                            '0px',
                            '5px'
                        ],
                        [
                            "eid22",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${speel}",
                            '5px',
                            '-5px'
                        ],
                        [
                            "eid23",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${speel}",
                            '-5px',
                            '0px'
                        ]
                    ]
                }
            },
            "daken": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '1900px', '200px', 'auto', 'auto'],
                            id: 'daken',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/daken.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1900, 200]
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: false,
                    data: [
                        [
                            "eid83",
                            "left",
                            0,
                            30000,
                            "linear",
                            "${daken}",
                            '0px',
                            '-1094px'
                        ]
                    ]
                }
            },
            "spritesheet": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'spritesheet3',
                            rect: [13, 0, 739, 328, 'auto', 'auto'],
                            clip: 'rect(0px 260px 329px 130px)',
                            fill: ['rgba(0,0,0,0)', 'images/spritesheet.png', '130px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 739, 328]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    labels: {
                        "spring": 0,
                        "start": 928
                    },
                    data: [
                        [
                            "eid100",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${spritesheet3}",
                            [130,0],
                            [130,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid99",
                            "background-position",
                            928,
                            0,
                            "linear",
                            "${spritesheet3}",
                            [130,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid93",
                            "background-position",
                            1107,
                            0,
                            "linear",
                            "${spritesheet3}",
                            [0,0],
                            [-120,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid94",
                            "background-position",
                            1300,
                            0,
                            "linear",
                            "${spritesheet3}",
                            [-120,0],
                            [-240,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid95",
                            "background-position",
                            1500,
                            0,
                            "linear",
                            "${spritesheet3}",
                            [-240,0],
                            [-360,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid101",
                            "left",
                            835,
                            0,
                            "linear",
                            "${spritesheet3}",
                            '13px',
                            '13px'
                        ]
                    ]
                }
            },
            "spring": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 54, 53, 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'spring',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,235,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 54, 53]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "cadeau": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 97, 87, 'auto', 'auto'],
                            id: 'cadeau',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cadeau.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 97, 87]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: false,
                    data: [
                        [
                            "eid106",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${cadeau}",
                            '0px',
                            '-904px'
                        ]
                    ]
                }
            },
            "scorecijfer": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: [0, 0, 'auto', 'auto', 'auto', 'auto'],
                            id: 'scorecijfer',
                            text: '0',
                            align: 'left',
                            font: ['acme, sans-serif', [47, 'px'], 'rgba(255,249,0,1)', '700', 'none', 'normal', '', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 19, 59]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("sinterklaas_edgeActions.js");
})("EDGE-13303388");
