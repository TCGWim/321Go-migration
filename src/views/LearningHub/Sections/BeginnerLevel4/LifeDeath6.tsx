/*
 * Copyright (C)  Online-Go.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { GobanConfig } from "goban";
import { LearningPage, LearningPageProperties } from "../../LearningPage";
import { _, pgettext } from "@/lib/translate";
import { LearningHubSection } from "../../LearningHubSection";

export class BL4LifeDeath6 extends LearningHubSection {
    static pages(): Array<typeof LearningPage> {
        return [
            Page01,
            Page02,
            Page03,
            Page04,
            Page05,
            Page06,
            Page07,
            Page08,
            Page09,
            Page10,
            Page11,
            Page12,
            Page13,
            Page14,
        ];
    }
    static section(): string {
        return "bl4-life-death-6";
    }
    static title(): string {
        return pgettext("Tutorial section name on learning alive with ko", "Alive with ko");
    }
    static subtext(): string {
        return pgettext("Tutorial section subtext on learning on alive with ko", "Alive with ko");
    }
}

class Page01 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Make the white group alive using ko.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "white",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "apbocpdpeqfqfogr",
                white: "brbpcqdq",
            },
            move_tree: this.makePuzzleMoveTree(
                ["aq"],
                ["bqdr", "erar", "drar", "ardr", "csdr"],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}

class Page02 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Make the white group alive using ko.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "white",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "dsesereqdqcpbpapdo",
                white: "drcqbqaqbrcs",
            },
            move_tree: this.makePuzzleMoveTree(["as"], ["cras"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page03 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Make the white group alive using ko.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "white",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "bscrdraobnbmcodpeqfrfqeocn",
                white: "braqbpcqcpbodqaner",
            },
            move_tree: this.makePuzzleMoveTree(
                ["escsas", "as", "csdsas"],
                ["escsarfs", "apes", "ares", "dses", "csdsesfs"],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}

class Page04 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Make the white group alive using ko.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "white",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "bpbqcrdsdrdqdpdodncmbmbk",
                white: "csbraqcqcpcobnao",
            },
            move_tree: this.makePuzzleMoveTree(["as"], ["bsar", "bobs", "arbs", "apbs"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page05 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Make the white group alive using ko.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "white",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "bncncocpcqdqdrfrbl",
                white: "crbqbpbo",
            },
            move_tree: this.makePuzzleMoveTree(
                ["arcsbs"],
                ["arcsbrbs", "bsar", "aobr", "csar"],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}

class Page06 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Make the white group alive using ko.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "white",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "aobncododpeqepdrcrbscm",
                white: "braqcqbpbocpdq",
            },
            move_tree: this.makePuzzleMoveTree(["as", "csdsas"], [], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page07 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Make the white group alive using ko.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "white",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "ambncododpdqdrdscsarcm",
                white: "bscrcqcpbqboan",
            },
            move_tree: this.makePuzzleMoveTree(["ap"], ["aqap", "brap"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page08 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Make the white group alive using ko.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "white",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "aqapbpcqdqeqfrfqcoes",
                white: "bsarcrbqdrer",
            },
            move_tree: this.makePuzzleMoveTree(["ds"], ["brds"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page09 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Make the white group alive using ko.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "white",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "aoanambmcmdmeneoepeqdrcrbs",
                white: "arbrcqdqdpdodncnbnbo",
            },
            move_tree: this.makePuzzleMoveTree(
                ["apbpbq"],
                ["apbpaqcp", "apbpcpaq", "bpap", "cpap", "bqap"],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}

class Page10 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Make the white group alive using ko.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "white",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "aqapbpcpdpepfpgqfr",
                white: "bqcqdqeqer",
            },
            move_tree: this.makePuzzleMoveTree(
                ["arbrbs"],
                ["arbrcras", "brar", "dsbr", "crbr", "bsar", "csbr"],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}

class Page11 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Make the white group alive using ko.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "white",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "bscrdqdpdodncmblbocleler",
                white: "bmamcncocpbqbr",
            },
            move_tree: this.makePuzzleMoveTree(
                ["aoapbn"],
                [
                    "aoapanbp",
                    "aoapbpan",
                    "aoapaqan",
                    "apar",
                    "bnao",
                    "bpao",
                    "cqap",
                    "arap",
                    "aqao",
                ],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}

class Page12 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Make the white group alive using ko.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "white",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "brbqbpaobncndndoeqfqfrfo",
                white: "bsapcocpcqcrdqeres",
            },
            move_tree: this.makePuzzleMoveTree(
                ["boaqar"],
                ["boaqdsan", "boaqcsan", "arbo", "dsbo", "csbo", "aqar"],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}

class Page13 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Make the white group alive using ko.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "white",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "bobnfpfqfresdrcrbrcseodm",
                white: "arbqbpcqdqeqer",
            },
            move_tree: this.makePuzzleMoveTree(["bs"], ["apds"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page14 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Make the white group alive using ko.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "white",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "bscrdrdqdpcpdndmclbleleo",
                white: "cmcncobpcqbraq",
            },
            move_tree: this.makePuzzleMoveTree(["ao"], ["bnao", "bmao", "bqao", "asbn"], 19, 19),
            /* cSpell:enable */
        };
    }
}
