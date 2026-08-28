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

export class BL4LifeDeath10 extends LearningHubSection {
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
            Page15,
            Page16,
            Page17,
            Page18,
            Page19,
            Page20,
            Page21,
            Page22,
            Page23,
            Page24,
        ];
    }
    static section(): string {
        return "bl4-life-death-10";
    }
    static title(): string {
        return pgettext("Tutorial section name on learning save group", "Save group");
    }
    static subtext(): string {
        return pgettext("Tutorial section subtext on learning on save group", "Save group");
    }
}

class Page01 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "bqbpcpdpeqfrfsfp",
                white: "bsbrarcqdqer",
            },
            move_tree: this.makePuzzleMoveTree(["ds"], ["drds", "esdr", "crds"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page02 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "apbpcpdpeqeresfo",
                white: "brbqdsdrdq",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bs"],
                [
                    "aqcqcrbs",
                    "cqbscsar",
                    "cqbsaqcs",
                    "cqbsasaraqcs",
                    "cqbsarcs",
                    "arbs",
                    "craq",
                    "cscq",
                ],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}

class Page03 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "eserdqcqcpbpapfp",
                white: "aqbqbrcrdr",
            },
            move_tree: this.makePuzzleMoveTree(["as"], ["dsbs", "bsds", "csas"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page04 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "argrfqepdpcpbqbpgphr",
                white: "brcrcqdqeqfrfs",
            },
            move_tree: this.makePuzzleMoveTree(["dserbs"], ["erds", "bsds"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page05 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "dsesfsfreqdpcpbpfp",
                white: "aqbqcqdrercs",
            },
            move_tree: this.makePuzzleMoveTree(
                ["brdqas"],
                ["brdqcras", "dqbr", "bsdq", "ardq"],
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
        return _("White to play. Save your group.");
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
                black: "aqaobocodoepeqerdscscrfn",
                white: "bsbrdrdqdpcpbpap",
            },
            move_tree: this.makePuzzleMoveTree(["ar"], ["cqbq", "bqar"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page07 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "brfsfreqdpcpbpbnfp",
                white: "apbqcqdqdreres",
            },
            move_tree: this.makePuzzleMoveTree(["cs"], ["bscs", "aqcs", "arcs"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page08 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "brapbocpdqerescoep",
                white: "bsdsdrcqbqbp",
            },
            move_tree: this.makePuzzleMoveTree(["ar"], ["aqar", "crar", "csaq"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page09 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "aobocodpeqereseo",
                white: "drdqcqcpbp",
            },
            move_tree: this.makePuzzleMoveTree(
                ["br"],
                [
                    "dsbr",
                    "apbr",
                    "arbrbscs",
                    "arbrdsbs",
                    "arbrapbs",
                    "bsbraraq",
                    "bsbrapar",
                    "bsbrdsar",
                ],
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
        return _("White to play. Save your group.");
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
                black: "esfrgreqdqcpbpapfp",
                white: "aqbqcqdrerfs",
            },
            move_tree: this.makePuzzleMoveTree(
                ["brcsbs"],
                ["brcsdsbs", "bscrdsbr", "crbs", "csbr", "dsbr"],
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
        return _("White to play. Save your group.");
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
                black: "bsbrbqcqdqepfpgphqhrhsdo",
                white: "crdreqfqgrfs",
            },
            move_tree: this.makePuzzleMoveTree(
                ["ergqgs"],
                [
                    "escs",
                    "csgqergs",
                    "csgqgses",
                    "csgqfres",
                    "csgqesfr",
                    "gqerescs",
                    "gqercses",
                    "dser",
                    "frds",
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
        return _("White to play. Save your group.");
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
                black: "bqcrdrdqdpdncnbnanfpfm",
                white: "bsbrcqcpcobo",
            },
            move_tree: this.makePuzzleMoveTree(["ap"], ["aoaq", "aqap", "arapaodo"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page13 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "aobocodpdqdrbren",
                white: "bscrcpbp",
            },
            move_tree: this.makePuzzleMoveTree(["ar"], ["apcq", "cqar", "bqar", "aqcq"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page14 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "bqbpcpdpeqfrfsfp",
                white: "arbrcrcqdqer",
            },
            move_tree: this.makePuzzleMoveTree(
                ["esdsdr"],
                ["esdscsdr", "dses", "bsds", "csds", "dres"],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}

class Page15 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "bococpcqdpeperfrbm",
                white: "crdrdqbqbp",
            },
            move_tree: this.makePuzzleMoveTree(
                ["arbsap"],
                ["bsardsap", "bsaraqds", "bsarapds", "aparbsds", "dsbsarap", "csar", "aqbs"],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}

class Page16 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "braobocodpeqerdseo",
                white: "drcrdqbqbpcp",
            },
            move_tree: this.makePuzzleMoveTree(["bs"], ["arbs", "csaq", "apbs", "aqcs"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page17 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "bocodpdqdrdnbm",
                white: "brcqcpbp",
            },
            move_tree: this.makePuzzleMoveTree(
                ["aq"],
                [
                    "apaqarbscscr",
                    "apaqbsar",
                    "apaqcrar",
                    "arbscscr",
                    "craqapcsbsar",
                    "bsaqapar",
                    "csaqapcrbsar",
                    "csaqapcrarbs",
                ],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}

class Page18 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "apbpcpdpeqeresfo",
                white: "aqbqcqdqdr",
            },
            move_tree: this.makePuzzleMoveTree(["bs"], ["dsbrbsar", "csbr", "brcsdsbs"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page19 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "apbpcpdpeqeresfo",
                white: "bsbqcqdq",
            },
            move_tree: this.makePuzzleMoveTree(
                ["ar"],
                ["draraqbr", "aqdrcrar", "aqdrarcr", "crar", "brdr"],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}

class Page20 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "bocodpdqdrdsdnbm",
                white: "bscqaobpcp",
            },
            move_tree: this.makePuzzleMoveTree(
                ["araqcr", "araqbr"],
                ["araqapbrcras", "crar", "apar", "braq", "aqbrcrar", "aqbrarcr"],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}

class Page21 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "arbqcqdpcpfpgogqgr",
                white: "bsbrcrdqeqfq",
            },
            move_tree: this.makePuzzleMoveTree(["ds"], ["frds", "esfr", "erds"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page22 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "aobocododpdqdrds",
                white: "cscrcpbpap",
            },
            move_tree: this.makePuzzleMoveTree(
                ["ar"],
                ["cqbrarbs", "bsar", "brcqbqar", "bqar"],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}

class Page23 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "bsaobocodpepeqeresds",
                white: "cscrdrdqbqaqbp",
            },
            move_tree: this.makePuzzleMoveTree(["brcpas"], ["cpbr"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page24 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("White to play. Save your group.");
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
                black: "breserdqcpbocoeo",
                white: "aqbpcqcrds",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bsardr"],
                ["bsarapao", "bsarbqdr", "drbq", "arbs", "apar", "bqbs"],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}
