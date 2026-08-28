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

export class BL4LifeDeath9 extends LearningHubSection {
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
        return "bl4-life-death-9";
    }
    static title(): string {
        return pgettext("Tutorial section name on learning capture group", "Capture group");
    }
    static subtext(): string {
        return pgettext("Tutorial section subtext on learning on capture group", "Capture group");
    }
}

class Page01 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "brbscqcpcodoeofogpgqgrir",
                white: "dscscrerfrdqdpfs",
            },
            move_tree: this.makePuzzleMoveTree(["eq"], [], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page02 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "brbpcpdqeqfrfqdobnhr",
                white: "aqbqcqcrdreres",
            },
            move_tree: this.makePuzzleMoveTree(["cs"], ["bscs"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page03 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "fsfreqdpcpbpbqfp",
                white: "arbrbscqdqdrer",
            },
            move_tree: this.makePuzzleMoveTree(["dscses"], ["csds", "esds"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page04 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "brbqbpcocneofogpgqgr",
                white: "crcqcpdpepfqfrer",
            },
            move_tree: this.makePuzzleMoveTree(
                ["fsdsdq"],
                [
                    "dscs",
                    "drds",
                    "dqfsdscsdrfp",
                    "dqfsdscsfpdr",
                    "dqfsdrds",
                    "dqfscsds",
                    "csdsfsdq",
                    "csdsdqfs",
                    "esdsdqfs",
                    "esdsfsdq",
                ],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}

class Page05 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "csbpcpdpepfqfrbn",
                white: "bsbraqbqcqdr",
            },
            move_tree: this.makePuzzleMoveTree(
                ["dseser"],
                ["dsesfser", "dqds", "crds", "esds"],
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
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "bqbpcpdpeqeresfo",
                white: "arbrbscqdrds",
            },
            move_tree: this.makePuzzleMoveTree(["crcsdq"], ["dqcr"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page07 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "brbqbpgrgqfpeococnfohoirdq",
                white: "crcqcpdpepfqfrerfs",
            },
            move_tree: this.makePuzzleMoveTree(["dscsdr"], ["drds", "csds"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page08 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "bsbqcqdpepfqgrgsbogp",
                white: "arbrcrdsesdqeqfr",
            },
            move_tree: this.makePuzzleMoveTree(["erdrfs"], ["drer", "fser", "cser"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page09 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "brbqfrdpepfpgphqhrhsio",
                white: "cscrdrereqfqgqgr",
            },
            move_tree: this.makePuzzleMoveTree(["fsgses"], ["gsfs", "esfs"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page10 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "crcqcpcodsepfpgphpiqiriokr",
                white: "csdrdqeqfqgqhrhsfs",
            },
            move_tree: this.makePuzzleMoveTree(
                ["grfres"],
                ["grfreres", "frgr", "esgr", "bsgr", "eres", "gsgr"],
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
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "bsbrbqbpcodoeofogpgqgreqdrhn",
                white: "cscrcqcpdpepfpfqer",
            },
            move_tree: this.makePuzzleMoveTree(
                ["dq"],
                [
                    "frdqesds",
                    "frdqdses",
                    "fsdqesds",
                    "fsdqdses",
                    "esdqdsfs",
                    "esdqfsds",
                    "esdqfrds",
                    "dses",
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
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "esereqdqdocobocreobm",
                white: "drdsbrcqaqbpcp",
            },
            move_tree: this.makePuzzleMoveTree(["bs"], ["csbs", "aocs", "dpcs"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page13 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "crbpcpdpeqeresbnfo",
                white: "bsbqcqdqdrds",
            },
            move_tree: this.makePuzzleMoveTree(["araqbr"], ["brar", "aqar"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page14 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "cpcoboereqepeobm",
                white: "arbqapbpcqdq",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bs"],
                ["drcr", "crbsdrbr", "crbsbrdr", "brcr", "csbs", "dscrcsbs", "dscrbscs"],
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
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "araqbpbodpdqdogpfqgr",
                white: "brbqcqcsdrer",
            },
            move_tree: this.makePuzzleMoveTree(["esfsfr"], ["bses", "fres", "fses"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page16 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "bqaobocpdpeqergreo",
                white: "brcqbpapdqdrds",
            },
            move_tree: this.makePuzzleMoveTree(["araqbq"], ["aqar", "bsar"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page17 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "bsdraqbqcpdpepfpbpgqgrgsho",
                white: "arbrcsdsesfsfrfqeqdqcq",
            },
            move_tree: this.makePuzzleMoveTree(["crercr"], [], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page18 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "csereqdpcpbpfogr",
                white: "bsbrcqdqdrds",
            },
            move_tree: this.makePuzzleMoveTree(["araqbq"], ["bqar", "esbq", "aqar"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page19 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "fsfreqdqcpbpapfp",
                white: "bsaqbqcqdrer",
            },
            move_tree: this.makePuzzleMoveTree(
                ["crbrdscses"],
                ["dscresar", "dscrcses", "dscrares", "dscrbres", "esds", "brcr", "cscr"],
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
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "apaobocodoepeqfrdrdsfn",
                white: "aqbqcpbpdpdqcr",
            },
            move_tree: this.makePuzzleMoveTree(["bscsbr"], ["csbs", "brbs"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page21 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "aobocodpdqdrcren",
                white: "bsbrarcqbpap",
            },
            move_tree: this.makePuzzleMoveTree(["bq"], ["cpbq"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page22 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "apaobocodpeqereo",
                white: "crdrdqbqbpcp",
            },
            move_tree: this.makePuzzleMoveTree(
                ["araqbr"],
                ["araqbscs", "brbs", "aqar", "bsbr", "dsaq", "csbs"],
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
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "arbqcqdsdpeofogpgqgrgsgoco",
                white: "bsbrcrdrdqepfpfqfrfs",
            },
            move_tree: this.makePuzzleMoveTree(["ereqes"], ["eqer", "eser"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page24 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Capture the white group.");
    }
    config(): GobanConfig {
        return {
            width: 19,
            height: 19,
            mode: "puzzle",
            initial_player: "black",
            bounds: { top: 10, left: 0, bottom: 18, right: 10 },
            /* cSpell:disable */
            initial_state: {
                black: "cqdpaobocoeqeresdofo",
                white: "bsardsdrdqcpbpap",
            },
            move_tree: this.makePuzzleMoveTree(
                ["braqcs", "braqcr"],
                [
                    "braqbqcr",
                    "bqaqcrcs",
                    "bqaqcscr",
                    "bqaqbrcr",
                    "crcsaqbq",
                    "crcsbqaq",
                    "crcsbrbq",
                    "cscr",
                    "aqbq",
                ],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}
