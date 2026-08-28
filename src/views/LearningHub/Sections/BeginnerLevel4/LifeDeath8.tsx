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

export class BL4LifeDeath8 extends LearningHubSection {
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
        return "bl4-life-death-8";
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
                black: "crcqdpeofogogphpiqircoio",
                white: "drdqepfpfqhqhr",
            },
            move_tree: this.makePuzzleMoveTree(
                [
                    "ergrgqhsfsgsfrisds",
                    "ergrgqhsfsgsfrdsis",
                    "ergrgqhsfsgsdsisfr",
                    "ergrgqhsfrfses",
                    "ergrgqhsfrfsgs",
                ],
                [
                    "ergrgqhsgsfs",
                    "ergrgqhsdsfs",
                    "ergrgsgq",
                    "ergrfrgq",
                    "ergrdsgq",
                    "ergrfsgq",
                    "ergresgq",
                    "gqerdsfr",
                    "gqeresfr",
                    "gqereqds",
                    "gqerfrds",
                    "frhsgsgq",
                    "frhsgqgs",
                    "dsfrergrgqhs",
                    "dsfrergrhsgq",
                    "dsfrgqer",
                    "fsgqgrerhsds",
                    "fsgqgrerdshs",
                ],
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
                black: "eqdqcqcpcrdoeofocngohphqiqirkr",
                white: "dsdrerdpepfpgqgrhrhs",
            },
            move_tree: this.makePuzzleMoveTree(
                ["fsfqfr"],
                ["fsfqgpfr", "fqfs", "gpfs", "frfs"],
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
                black: "arbqbpcpdpepfpgqhqhrhsgsgo",
                white: "cqdqeqfqerfsgrbrbs",
            },
            move_tree: this.makePuzzleMoveTree(["dsfrcr"], ["frds", "crds"], 19, 19),
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
                black: "draqapbpcpdpeqfpfrfs",
                white: "arbqcqdqerescs",
            },
            move_tree: this.makePuzzleMoveTree(
                ["crdsbs"],
                ["dsbrcras", "dsbrbscr", "bscr", "brds"],
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
                black: "cscrcqcpdoenfncngogpgqesirhqipgl",
                white: "dsdrdqeqfqfpfoeodp",
            },
            move_tree: this.makePuzzleMoveTree(
                ["frfsgrgshs"],
                [
                    "frfsgrgshrhs",
                    "frfsgsgr",
                    "grfrgshr",
                    "grfrhshrgsis",
                    "grfrhrgs",
                    "grfrerep",
                    "grfrfsgs",
                    "fsfrgrgs",
                    "gsfrgrhr",
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
                black: "apbpcpdpeqereogr",
                white: "bsbrbqcqdq",
            },
            move_tree: this.makePuzzleMoveTree(["dr"], ["aqdr", "dsdr", "ardr"], 19, 19),
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
                black: "crbrbqbpcodoeofogogpgqhqhrhser",
                white: "fpfqfrgrgsdrdqcq",
            },
            move_tree: this.makePuzzleMoveTree(
                ["eseqep"],
                ["dses", "eqes", "epes", "dpes"],
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
                black: "brcqdpepcpgqgpgohrhsipdrds",
                white: "crdqeqfqeresgr",
            },
            move_tree: this.makePuzzleMoveTree(["bsargs"], ["bsarcsgs", "gscs", "csgs"], 19, 19),
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
                black: "aobocpdqeqeresdsdo",
                white: "csdrcqbqbpap",
            },
            move_tree: this.makePuzzleMoveTree(
                ["arcrbs"],
                ["arcrbrbs", "crar", "bsar", "brar"],
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
                black: "bsarapbpcpdpeqfrfqeohrdr",
                white: "erescrdqcqbqaq",
            },
            move_tree: this.makePuzzleMoveTree(["csfsds"], ["dscs"], 19, 19),
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
                black: "bqbpcpeoepeqfrgqcm",
                white: "aqbrcqdqer",
            },
            move_tree: this.makePuzzleMoveTree(
                ["csdres"],
                ["drcs", "dsarascscrfs", "dsarascsescr", "dsarcrbs", "cres", "bsar"],
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
                black: "bqbpbocodpdqfqgqgrirengo",
                white: "aqbrcqcpdrerfr",
            },
            move_tree: this.makePuzzleMoveTree(
                ["cscrcq"],
                ["cscrfscq", "crfsesarascs", "fscr", "arcr"],
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
                black: "crcsasaobocodpeqereseo",
                white: "apcpcqdqdrds",
            },
            move_tree: this.makePuzzleMoveTree(
                ["brbpbs", "brbpbqaqbs"],
                ["brbparbq", "brbpaqbq", "bpbr", "arbq", "bqbr"],
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
                black: "csesfsfrfqepdpcpbpgo",
                white: "aqbqcqdqeqerds",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bsdrcr"],
                ["bsdrbrds", "drbr", "crbs", "arcr", "brdr"],
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
                black: "cpcofogohoipiqirhrinemdnfmgqfqerdscrcqeq",
                white: "drdqdpepfpgphphqgrcs",
            },
            move_tree: this.makePuzzleMoveTree(
                ["frbses"],
                ["esfrfsfq", "gsbs", "fsfresfq", "fsfrgsbsesfq"],
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
                black: "hshrhqhphogofoepdqcqbrcsdsbpdo",
                white: "crdreqfrgrgsgqgpfp",
            },
            move_tree: this.makePuzzleMoveTree(["eserdr"], ["eres"], 19, 19),
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
                black: "bsbrcqdpbpepfpgqhphrhser",
                white: "grfqeqdqdrcrcs",
            },
            move_tree: this.makePuzzleMoveTree(["esgsfr"], ["gsfr", "fses", "fres"], 19, 19),
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
                black: "arbocpcqdrdofr",
                white: "cscrbrbqbp",
            },
            move_tree: this.makePuzzleMoveTree(["asbsaq"], ["asbsapas", "apas", "aqas"], 19, 19),
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
                black: "dpcodnenfohohphqhrjrcmgmeqcscrcqcp",
                white: "dsdrdqdoeoepfsgrgqgp",
            },
            move_tree: this.makePuzzleMoveTree(["erfpfq"], ["fper", "fqer", "frfp"], 19, 19),
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
                black: "craqbpbocpdpfqfrfsfo",
                white: "brbqcqaperes",
            },
            move_tree: this.makePuzzleMoveTree(
                ["cs"],
                ["dqcs", "drcs", "ardr", "bsdr", "asdr"],
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
                black: "brbqcpdoeofpgqgrfsdrgoirco",
                white: "cscrcqdpepfqfrer",
            },
            move_tree: this.makePuzzleMoveTree(["dq"], ["esdq", "dsdq", "eqes"], 19, 19),
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
                black: "braqbpcpdpepfqgqhrgshpir",
                white: "bqcqcrdqeqfrgres",
            },
            move_tree: this.makePuzzleMoveTree(
                ["arascs", "csdrarasbs"],
                ["arasdrcs", "arasbscs", "bsar", "csdrbsar", "drcs"],
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
                black: "brbqcqdqeqfpgphqhrhshoends",
                white: "cscrdrergsgrgq",
            },
            move_tree: this.makePuzzleMoveTree(
                ["fqfsfr"],
                ["fqfsesfr", "fres", "esfr", "fsfq"],
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
                black: "crbqapbpcpdpepfpgqgrgsgodq",
                white: "braraqdsdreqfqfrfs",
            },
            move_tree: this.makePuzzleMoveTree(["bscqcs"], ["csbs"], 19, 19),
            /* cSpell:enable */
        };
    }
}
