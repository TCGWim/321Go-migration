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

export class BL4LifeDeath3 extends LearningHubSection {
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
        return "bl4-life-death-3";
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
                black: "brbocpcndqdrdpfr",
                white: "crcqbqbpapds",
            },
            move_tree: this.makePuzzleMoveTree(["ar"], ["bsar"], 19, 19),
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
                black: "crcsbpcpdpepeqeresbn",
                white: "aqbqcqdqdrds",
            },
            move_tree: this.makePuzzleMoveTree(
                ["brarbs"],
                ["brarapbs", "brarasbs", "bsbr", "arbr", "apbr"],
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
                black: "hsiriqisgqgpfpdpcpcqbqardnio",
                white: "brcrdrdqfqfrgrgshr",
            },
            move_tree: this.makePuzzleMoveTree(["es"], ["eqes", "eres", "bses", "dses"], 19, 19),
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
                black: "crcqcpcobnbmeren",
                white: "bsbrarbqbp",
            },
            move_tree: this.makePuzzleMoveTree(["apaobo"], ["aoap", "boap"], 19, 19),
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
                black: "csdsdrdqdpcobncm",
                white: "arbscrcq",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bqbpcpbrapaqao"],
                [
                    "bqbpcpbrapaqboao",
                    "bqbpcpbraqap",
                    "bqbpcpbrboap",
                    "bqbpaqap",
                    "bqbpapcpaoaq",
                    "bqbpapcpaqao",
                    "bqbpapcpbobr",
                    "bpbq",
                    "cpbq",
                    "brbq",
                    "apbpaoaq",
                    "apbpaqao",
                    "apbpcpao",
                    "apbpbqcp",
                    "apbpbobq",
                    "aqap",
                ],
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
                black: "freqdqbpbobngrhqhphognemdmcmgmhrbr",
                white: "enfogogpgqfqepcodn",
            },
            move_tree: this.makePuzzleMoveTree(
                ["dpdofn"],
                [
                    "dpdocpfn",
                    "dpdocnfn",
                    "cpdo",
                    "dodpcpcn",
                    "dodpcncp",
                    "dodpfncp",
                    "cndo",
                    "fndp",
                ],
                19,
                19,
            ),
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
                black: "hobojrjsisbrbqeqjqiqhqgpfpeodocp",
                white: "cqdqdrdpepfqgqgrhrir",
            },
            move_tree: this.makePuzzleMoveTree(
                ["er"],
                ["fser", "frer", "crer", "hser", "gser"],
                19,
                19,
            ),
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
                black: "fsfreqdqcpbodobngpcr",
                white: "bscsdrercqbqbp",
            },
            move_tree: this.makePuzzleMoveTree(
                ["ds"],
                ["arbr", "esds", "apbr", "brar", "aqbr"],
                19,
                19,
            ),
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
                black: "bmcmcncocpepdrcrfrbk",
                white: "bsbrcqbpbobn",
            },
            move_tree: this.makePuzzleMoveTree(
                ["anaoaqarbq"],
                [
                    "anaoaqardqbq",
                    "anaoaqarapbq",
                    "anaoaraq",
                    "anaodqbq",
                    "anaobqaq",
                    "aqarapbq",
                    "aqarbqapbqan",
                    "aqarbqapanbq",
                    "aqaranbq",
                    "araq",
                    "bqaq",
                    "dqbq",
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
                black: "endncoescrbqbpdsfogohohqhrhsbnbr",
                white: "fpeodocqdqcpfrgrergqgp",
            },
            move_tree: this.makePuzzleMoveTree(["epdpeq"], ["epdpdreq", "eqep", "dreq"], 19, 19),
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
                black: "bocodpdqdrenbmfr",
                white: "arcrcqcpbp",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bscsbr", "bscsap"],
                ["apbs", "csbs", "aqbs", "brbs"],
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
                black: "arapanbncndodpdqerdsem",
                white: "bsbrcrcqcpcoboao",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bqbpaq"],
                ["aqbq", "bpaq", "drbq", "csbq"],
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
                black: "arbqcpdpfpfqhqhrgqjrbpfncm",
                white: "bsbrcqdqeqfrgr",
            },
            move_tree: this.makePuzzleMoveTree(
                ["gsesdr", "gsesdsdrhs"],
                [
                    "gsescrdr",
                    "gsesdsdrcscr",
                    "drdsescr",
                    "drdsercr",
                    "drdscrer",
                    "erdresds",
                    "erdrdses",
                    "erdrfses",
                    "erdrgses",
                    "crdr",
                    "esdsdrcr",
                    "esdserdr",
                    "esdsfser",
                    "esdsgser",
                    "esdscrdr",
                    "fses",
                    "dsesdrgsercr",
                    "dsesgsdr",
                ],
                19,
                19,
            ),
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
                black: "anbncocpdqdrdsdn",
                white: "arbrbscrcqbpbo",
            },
            move_tree: this.makePuzzleMoveTree(["ap"], ["aoap", "aqao", "bqap"], 19, 19),
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
                black: "bocodpdqdrfrbmen",
                white: "bscrcqcpbp",
            },
            move_tree: this.makePuzzleMoveTree(
                ["araqbr"],
                ["aqar", "apar", "bqarapaq", "bqaraqap"],
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
                black: "hrgqfpeodobqaqarbocqcmhpfnfseshs",
                white: "bsbrcrdrdqdpfqfrgrgsep",
            },
            move_tree: this.makePuzzleMoveTree(["ereqds"], ["dser"], 19, 19),
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
                black: "aobocodoepeqerdsfn",
                white: "brdrdqcpbpap",
            },
            move_tree: this.makePuzzleMoveTree(["bs"], ["csbs", "crbs"], 19, 19),
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
                black: "aobsdrdperbnbmdodm",
                white: "arcscrbqbpboan",
            },
            move_tree: this.makePuzzleMoveTree(
                ["apaqao"],
                ["apaqcqao", "apaqbrao", "cqap", "brap", "asap", "aqap"],
                19,
                19,
            ),
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
                black: "cocncrdrdqdpdobmck",
                white: "bsbraqcqcpbo",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bpbqao"],
                ["bpbqapao", "bpbqbnao", "aobp", "apbp", "bnao", "bqbp"],
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
                black: "bqaqbnbmcodpdqdrdsdn",
                white: "bsbrcrcqcpbpbo",
            },
            move_tree: this.makePuzzleMoveTree(["ar"], ["asar", "apar", "aoar"], 19, 19),
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
                black: "bncncobleoepeqerdsemcq",
                white: "brdrdqdpcpbpbo",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bscrcs"],
                [
                    "bscrbqcs",
                    "bscrbqaq",
                    "bscraraq",
                    "crbscsbqesao",
                    "crbscsbqaoes",
                    "crbsbqaq",
                    "aocs",
                    "bqaq",
                    "csbqcrbsesao",
                    "aqbq",
                ],
                19,
                19,
            ),
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
                black: "bsbrbqbpbodnenfpgpgqgrgngscmdscs",
                white: "crdrcqcpdoeoepfqfrfses",
            },
            move_tree: this.makePuzzleMoveTree(["eqerdq"], ["dqeq", "coeq", "foeq"], 19, 19),
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
                black: "bsbpbocodoeoepeqeres",
                white: "cpdpdqdrdsbqcr",
            },
            move_tree: this.makePuzzleMoveTree(
                ["araqbr"],
                ["brar", "aqarbrap", "aqarapbr"],
                19,
                19,
            ),
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
                black: "drcsbsereqepeodocoboaqbm",
                white: "brcrbqbpapcpdpdq",
            },
            move_tree: this.makePuzzleMoveTree(["arasar"], ["arasdsar", "asar", "dsar"], 19, 19),
            /* cSpell:enable */
        };
    }
}
