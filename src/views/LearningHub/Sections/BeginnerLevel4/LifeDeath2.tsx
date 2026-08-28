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

export class BL4LifeDeath2 extends LearningHubSection {
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
        return "bl4-life-death-2";
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
        return _("Black to play. Save your group.");
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
                black: "cscrcqbqbpbo",
                white: "aobncncocpdqdrepfr",
            },
            move_tree: this.makePuzzleMoveTree(["arapbs"], ["apar", "bsar"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page02 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Save your group.");
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
                black: "bqcrdr",
                white: "erdqcqcpcnfq",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bsards"],
                [
                    "bsarbpboapds",
                    "bsarbpbodsap",
                    "bsaraqds",
                    "arbsbpbodsap",
                    "arbsbpboapdscsbr",
                    "bpbobsdsarap",
                    "bpbobsdsapar",
                    "bpboarapbsds",
                    "bpboarapdsbs",
                    "aqdscsbr",
                    "aqdsbsar",
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
        return _("Black to play. Save your group.");
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
                black: "brcrdrfrgr",
                white: "hrhqfqfpdqcqbqbodnjr",
            },
            move_tree: this.makePuzzleMoveTree(
                ["esargs"],
                ["erardsbs", "eraresgs", "erarbsgs", "arer", "gser", "bser"],
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
        return _("Black to play. Save your group.");
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
                black: "cscrcpbpap",
                white: "aobocodpdqdrdsdn",
            },
            move_tree: this.makePuzzleMoveTree(
                ["arcqbq"],
                ["arcqbrbq", "cqbrarbs", "cqbrbsar", "brcqbqar", "bqar", "bsar"],
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
        return _("Black to play. Save your group.");
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
                black: "arbrbscqcpco",
                white: "anbncndodpdqdrcrcsen",
            },
            move_tree: this.makePuzzleMoveTree(
                ["apbpbo"],
                ["apbpbqbo", "bpap", "boapaobq", "boapbqao", "aoapbobq", "aoapbpbo"],
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
        return _("Black to play. Save your group.");
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
                black: "bobperbsbrcqdqdpdoco",
                white: "fsgpcrbqaqarapaobncndneneoepeqfr",
            },
            move_tree: this.makePuzzleMoveTree(
                ["dsesdr"],
                ["drdsescp", "drdscses", "esdr", "csesdrds", "csesdsdr"],
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
        return _("Black to play. Save your group.");
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
                black: "arbqcqdrapbocododp",
                white: "brcrerdqeqepeodndmfnblcl",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bmbncn", "bsdsbmbncn", "csdsbmbncn"],
                [
                    "bmbnancn",
                    "bsdsbmbnancn",
                    "cmbmbnan",
                    "cmbmanbn",
                    "csdsbmbnancn",
                    "bnanambm",
                    "bnanbmam",
                    "anbnbmcn",
                    "anbncnbm",
                ],
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
        return _("Black to play. Save your group.");
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
                black: "bqcqdqcreres",
                white: "brapbpcpdpeqfrfsfp",
            },
            move_tree: this.makePuzzleMoveTree(
                ["arbscs"],
                ["arbsdsaq", "aqcsarbs", "aqcsbsas", "bsaraqds", "csaq", "dsaq"],
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
        return _("Black to play. Save your group.");
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
                black: "cscrcqbqbo",
                white: "anbncncocpdqdrdseo",
            },
            move_tree: this.makePuzzleMoveTree(
                ["arbsbp"],
                ["arbsaobp", "arbsapbp", "bparaqao", "bparaoaq", "aobp"],
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
        return _("Black to play. Save your group.");
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
                black: "arbqbpcrdrer",
                white: "dsesfsfreqdqcqcpbocngq",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bscsapbrcr"],
                ["bscsbrap", "csbsbrap", "csbsapbr", "apbs"],
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
        return _("Black to play. Save your group.");
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
                black: "bpcscrcqdqeqfqesgrhs",
                white: "bsbrbqcpdpepfpgqhrisirhpdsbndn",
            },
            move_tree: this.makePuzzleMoveTree(
                ["frgsdr", "frdrgs"],
                ["fsgs", "gsfrerfs", "gsfrfser", "gsfrdrfs", "drfr", "ergs"],
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
        return _("Black to play. Save your group.");
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
                black: "arcrcpbp",
                white: "aobocodpdqdrdn",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bscqbq"],
                [
                    "bscqapbq",
                    "cscqbqapbsaq",
                    "cscqbqapaqbs",
                    "cscqbrbq",
                    "cscqapbq",
                    "cscqbsbq",
                    "cqbscsbrapds",
                    "cqbscsbrbqap",
                    "cqbsbrcs",
                    "cqbsapcs",
                    "apbqcqbscsbr",
                    "apbqcqbsbrcs",
                    "apbqbrcq",
                    "apbqbscq",
                    "bqbscsap",
                    "bqbsapcs",
                ],
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
        return _("Black to play. Save your group.");
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
                black: "cscrdreqfqgqhp",
                white: "hqhrjqgpfpepdpcqbrbp",
            },
            move_tree: this.makePuzzleMoveTree(
                ["esgrfr"],
                ["gres", "fsgrfres", "fsgresfr", "fres", "gses"],
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
        return _("Black to play. Save your group.");
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
                black: "crdqdpcpbp",
                white: "bocodoepeqerdrfndsbm",
            },
            move_tree: this.makePuzzleMoveTree(
                ["brapaq"],
                [
                    "csbqapbrcqar",
                    "csbqapbrbscq",
                    "csbqapbrarcq",
                    "csbqbrap",
                    "csbqarapbrcq",
                    "csbqarapaqcq",
                    "csbqarapcqaq",
                    "csbqaqbr",
                    "apcs",
                    "bqbscsbr",
                    "bqbsbrcs",
                    "arbscsbr",
                    "arbsbrcs",
                    "arbsapbr",
                    "arbsbqbr",
                    "bsbqaparaqbr",
                    "bsbqaparbraq",
                    "bsbqaqarapbr",
                    "bsbqaqarbrap",
                    "bsbqbrap",
                    "aqbscsbr",
                    "aqbsbrcs",
                ],
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
        return _("Black to play. Save your group.");
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
                black: "bscrcqcpbp",
                white: "csdsdrdqdpcobobmdn",
            },
            move_tree: this.makePuzzleMoveTree(
                ["ar"],
                ["aqbr", "braqarap", "braqapar", "apbr"],
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
        return _("Black to play. Save your group.");
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
                black: "brbqcqdrer",
                white: "csfreqdqcpbpapfpgr",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bsescr"],
                [
                    "bsesdscr",
                    "bsesaqds",
                    "aqes",
                    "ares",
                    "esaqarbs",
                    "esaqbsar",
                    "esaqcrar",
                    "dsaqbsar",
                    "dsaqarbs",
                    "craqbsar",
                    "craqarbs",
                ],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}

class Page17 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Save your group.");
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
                black: "cscrcqeqfqfrgrgs",
                white: "hrhqjrgqgpfpepdpcpbqbr",
            },
            move_tree: this.makePuzzleMoveTree(["es"], ["dqes", "dres"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page18 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Save your group.");
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
                black: "aqbqcrdqeq",
                white: "frfqepdpcpcqbpbngpiq",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bsdrar"],
                [
                    "drbs",
                    "brdr",
                    "eresbsar",
                    "eresarbs",
                    "eresdrbs",
                    "eresdsdr",
                    "csdr",
                    "dsesbsdrcsar",
                    "dsesbsdrarcs",
                    "dsesdrbs",
                    "arbs",
                ],
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
        return _("Black to play. Save your group.");
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
                black: "crcqdqeqfqgrgshses",
                white: "csbrbqcpdpepfpgqhrisiqgocn",
            },
            move_tree: this.makePuzzleMoveTree(
                ["frdrds"],
                ["dsfrfser", "dsfrerfs", "erds"],
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
        return _("Black to play. Save your group.");
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
                black: "epfpgqdqdrerfr",
                white: "cqcrcsdpeofogphqirjqhpcohn",
            },
            move_tree: this.makePuzzleMoveTree(
                ["gshrgr"],
                [
                    "gshrdsgr",
                    "gshrfsds",
                    "gshresgr",
                    "hrhsgrgs",
                    "hrhsgsgr",
                    "hrhsdsgr",
                    "dsgr",
                    "fqgr",
                    "grgs",
                    "fsgr",
                ],
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
        return _("Black to play. Save your group.");
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
                black: "arbrcrcqbpbo",
                white: "anbncocpdqdrcsdn",
            },
            move_tree: this.makePuzzleMoveTree(
                ["aoaqbs"],
                ["aoaqbqbs", "bsapaqao", "bsapaobq", "aqaoapbs", "aqaobsap", "apbs"],
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
        return _("Black to play. Save your group.");
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
                black: "aqbqbrcrdsereqdq",
                white: "bpcpcqdpepfqfrfsesgobn",
            },
            move_tree: this.makePuzzleMoveTree(["asdrcs"], ["drbs", "csas", "bsdr"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page23 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Save your group.");
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
                black: "arbrcrbpboao",
                white: "apbncocpcmdqdrcseo",
            },
            move_tree: this.makePuzzleMoveTree(
                ["cqbsaq"],
                ["aqcqbsbq", "aqcqbqbs", "bsbqaqcq", "bqbs"],
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
        return _("Black to play. Save your group.");
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
                black: "cscrdqfqfrgrhr",
                white: "brbqcqdpeofpgqhqiriqkrcoho",
            },
            move_tree: this.makePuzzleMoveTree(
                ["eseqdr"],
                [
                    "eseqerdr",
                    "eseqhsdr",
                    "erhsdsgsfseq",
                    "erhsdsgseqfs",
                    "erhsgsesdseq",
                    "erhsgseseqds",
                    "erhseqgsfsds",
                    "hseqerdr",
                    "hseqdrer",
                    "hseqesdr",
                    "eqeshsfs",
                    "eqesdser",
                    "eqeserds",
                    "eqesfshs",
                    "dreshsfs",
                    "dreseqhs",
                    "fshs",
                ],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}
