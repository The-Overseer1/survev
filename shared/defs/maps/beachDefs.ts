import { util } from "../../utils/util";
import { v2 } from "../../utils/v2";
import type { MapDef } from "../mapDefs";
import { MapId } from "../types/misc";
import { Main, type PartialMapDef } from "./baseDefs";

const mapDef: PartialMapDef = {
    mapId: MapId.Beach,
    desc: {
        name: "Beach", // need name
        icon: "img/gui/birthday.svg", // need icon
        buttonCss: "btn-mode-birthday", // need button
    },
    assets: {
        audio: [],
        atlases: ["gradient", "loadout", "shared", "main", "beach"],
    },
    biome: {
        colors: {
            background: 0x20536e,
            water: 0x42b0ba, // 0x3282ab
            waterRipple: 0xb3f0ff,
            beach: 0xffe7ba, // 0xdc9e28
            riverbank: 0xa37119,
            grass: 0x7ba865, // 0x629522
            underground: 0x1b0d03,
            playerSubmerge: 0x2b8ca4,
            playerGhillie: 0x659825,
        },
    },
    gameMode: {
        maxPlayers: 80, // consider reducing to 70
        killLeaderEnabled: true,
    },
    /* STRIP_FROM_PROD_CLIENT:START */
    lootTable: {
        tier_chest: [
            { name: "famas", count: 1, weight: 1.15 },
            { name: "hk416", count: 1, weight: 4 },
            { name: "mk12", count: 1, weight: 0.55 },
            { name: "m249", count: 1, weight: 0.07 },
            { name: "ak47", count: 1, weight: 4 },
            { name: "scar", count: 1, weight: 0.27 },
            { name: "dp28", count: 1, weight: 0.55 },
            { name: "bar", count: 1, weight: 0.27 },
            { name: "mosin", count: 1, weight: 0.55 },
            { name: "m39", count: 1, weight: 0.55 },
            { name: "saiga", count: 1, weight: 0.26 },
            { name: "mp220", count: 1, weight: 1.5 },
            { name: "deagle", count: 1, weight: 0.15 },
            { name: "vector", count: 1, weight: 0.1 },
            { name: "sv98", count: 1, weight: 0.1 },
            { name: "spas12", count: 1, weight: 1 },
            { name: "groza", count: 1, weight: 1.15 },
            { name: "helmet02", count: 1, weight: 1 },
            { name: "helmet03", count: 1, weight: 0.25 },
            { name: "chest02", count: 1, weight: 1 },
            { name: "chest03", count: 1, weight: 0.25 },
            { name: "4xscope", count: 1, weight: 0.5 },
            { name: "8xscope", count: 1, weight: 0.25 },
        ],
    },
    mapGen: {
        map: {
            baseWidth: 512,
            baseHeight: 512,
            scale: { small: 1.1875, large: 1.28125 },
            extension: 112,
            shoreInset: 72,
            grassInset: 48,
            rivers: {
                lakes: [],
                weights: [ // TODO: consider adjusting to make smaller rivers in general
                    { weight: 0.25, widths: [20, 16] },
                    { weight: 0.25, widths: [16, 16, 10]},
                    // { weight: 0.15, widths: [8] },
                    // { weight: 0.25, widths: [8, 4] },
                    // { weight: 0.21, widths: [16] },
                    // { weight: 0.09, widths: [16, 8] },
                    // { weight: 0.2, widths: [16, 8, 4] },
                    {
                        weight: 1e-4,
                        widths: [16, 16, 8, 6, 4],
                    },
                ],
                smoothness: 0.45,
                spawnCabins: true,
                masks: [],
            },
        },
         bridgeTypes: {
            medium: "bridge_md_structure_01",
            large: "",
            xlarge: "",
        },
        densitySpawns: [
            {
                stone_01: 275, // originally 300
                barrel_01: 76,
                // silo_01: 8, // reduce drastically
                crate_01: 50,
                crate_02: 4,
                crate_03: 8,
                bush_01: 78,
                cache_06: 12,
                tree_08su: 75, // originally 320 total trees
                tree_14: 200,
                tree_14ch: 25,
                tree_14cn: 10,
                // hedgehog_01: 24, // omit
                container_01: 5,
                container_02: 5,
                container_03: 5,
                container_04: 5,
                shack_01: 7,
                outhouse_01: 5,
                loot_tier_1: 24,
                loot_tier_beach: 24, // originally 4
                barrel_05: 50, // TODO: remove
            },
        ],
        fixedSpawns: [
            {
                // small is spawn count for solos and duos, large is spawn count for squads
                warehouse_01: 1,
                house_red_01: { small: 1, large: 2 },
                house_red_02: { small: 1, large: 2 },
                barn_01: { small: 1, large: 2 },
                barn_02: 1,
                hut_01: { small : 5, large: 6},
                hut_02: 1, // spas hut
                hut_03: 1, // scout hut
                // hut_04: 1 // pirate hut
                shack_03a: 2,
                shack_03b: { small: 4, large: 6 }, 
                cache_01: 1,
                cache_02bh: 1, // palm cache
                cache_07: 1,
                bunker_structure_01: { odds: 0.25 }, // buff this in classic to 0.1
                bunker_structure_02: 1, // possibly omit hydra
                bunker_structure_03: 1,
                bunker_structure_04: 1, // conch
                // bunker_structure_05: 1, // crossing
                warehouse_complex_01: 1, // possibly omit docks
                chest_01: 3,
                chest_03: { odds: 0.2 },
                mil_crate_02: { odds: 0.25 },
                tree_02: 3,
                teahouse_complex_01su: { // ???
                    small: 1,
                    large: 2,
                },
                stone_04: 1, // hardstone
                club_complex_01: 1,
                mansion_structure_01: 1,
            },
        ],
        randomSpawns: [
            {
                spawns: [],
            },
        ],
        spawnReplacements: [{}],
        importantSpawns: ["club_complex_01", "warehouse_complex_01"],
    },
    /* STRIP_FROM_PROD_CLIENT:END */
    /* STRIP_FROM_PROD_CLIENT:END */
};

export const Beach = util.mergeDeep({}, Main, mapDef) as MapDef;
