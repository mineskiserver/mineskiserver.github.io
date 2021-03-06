var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "icons/marker_home.png",
            "spawnMarker2x": "icons/marker_home_2x.png",
            "queryMarker": "icons/marker_location.png",
            "queryMarker2x": "icons/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "mineski - overworld",
        "mineski - nether"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1612209255",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Day",
            "zoomLevels": 9,
            "defaultZoom": 6,
            "maxZoom": 9,
            "path": "mineskiday",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "mineski - overworld",
            "last_rendertime": 1612203549,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": false,
            "center": [
                112,
                80,
                -128
            ],
            "minZoom": 0,
            "spawn": [
                112,
                80,
                -128
            ],
            "north_direction": 0
        },
        {
            "name": "Night",
            "zoomLevels": 9,
            "defaultZoom": 6,
            "maxZoom": 9,
            "path": "mineskinight",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "mineski - overworld",
            "last_rendertime": 1612203549,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": false,
            "center": [
                112,
                80,
                -128
            ],
            "minZoom": 0,
            "spawn": [
                112,
                80,
                -128
            ],
            "north_direction": 0
        },
        {
            "name": "Nether",
            "zoomLevels": 9,
            "defaultZoom": 6,
            "maxZoom": 9,
            "path": "mineskinether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "mineski - nether",
            "last_rendertime": 1612199182,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": false,
            "center": [
                112,
                80,
                -128
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
