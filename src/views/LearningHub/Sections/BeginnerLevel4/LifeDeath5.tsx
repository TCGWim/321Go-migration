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

export class BL4LifeDeath5 extends LearningHubSection {
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
        return "bl4-life-death-5";
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
                black: "amblclcmcncpdpeqerenfp",
                white: "arbqcqdqbpbobnbm",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bsdrds"],
                ["csbs", "drcr", "crbs", "andr"],
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
                black: "dscrapbpcpdpepfqfrhrfo",
                white: "arbrbqcqdqeqeres",
            },
            move_tree: this.makePuzzleMoveTree(["bsdrcs"], ["drcs", "csbs"], 19, 19),
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
                black: "bmcndnenfofpfqerdrcrbrclfn",
                white: "bqcqdqeqepeodocobobn",
            },
            move_tree: this.makePuzzleMoveTree(
                ["anaoaqapcp", "anaocp"],
                [
                    "anaoaqaparcp",
                    "anaoamaq",
                    "cpanaqap",
                    "cpanapaq",
                    "cpanbpap",
                    "aqap",
                    "bpap",
                    "apaq",
                    "aoap",
                ],
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
                black: "brbqbpcodoeofpgqgrgsgobm",
                white: "cpcqcrdreqepfqfrfs",
            },
            move_tree: this.makePuzzleMoveTree(["dp"], ["csdp", "dsdp", "esdp"], 19, 19),
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
                black: "bncodpdqdrdocnbl",
                white: "braqcqcpbo",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bpaocrbqbs"],
                [
                    "aobp",
                    "crbpaobs",
                    "crbpbsaoasar",
                    "crbpbsaoaras",
                    "apao",
                    "csbs",
                    "bsbpcraoaras",
                    "bsbpaocs",
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
                black: "hriqfrfqepdpbqaqcpgpds",
                white: "bsbrarcrdqeqerfsgs",
            },
            move_tree: this.makePuzzleMoveTree(
                ["es"],
                ["dres", "hses", "gres", "cses", "cqes"],
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
                black: "arbpbocodoepeqergreobm",
                white: "apbqcrdsdrdqdpcp",
            },
            move_tree: this.makePuzzleMoveTree(["br"], ["aqbs", "aobr", "bsbr"], 19, 19),
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
                black: "isjrjqipcsbsbrbqcqdqeqfpgphpdojs",
                white: "ercrdrfsgsgrgqfqiqirhq",
            },
            move_tree: this.makePuzzleMoveTree(["ds"], ["esds", "hsds"], 19, 19),
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
                black: "esereqdpepcoboaodncq",
                white: "bsarapbpcpdqdrds",
            },
            move_tree: this.makePuzzleMoveTree(["br"], ["bqaq", "crcs", "aqbq", "cscr"], 19, 19),
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
                black: "erdrdsbsbrbqbpcoepfpgqhrhpiren",
                white: "cscrcqdqeqfqgrgs",
            },
            move_tree: this.makePuzzleMoveTree(
                ["es"],
                ["fres", "fsfr", "dpes", "cpes", "hses"],
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
                black: "bsapbpcpdpepfqgqfpfsgshr",
                white: "araqbqcqdqeqfresdscs",
            },
            move_tree: this.makePuzzleMoveTree(["erdrbr"], ["brer", "crbr"], 19, 19),
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
                black: "hriqgqfqeqdqcpbpdobn",
                white: "bqcqdrerfrgr",
            },
            move_tree: this.makePuzzleMoveTree(
                ["brcraq"],
                [
                    "brcrbsgsaqarascs",
                    "brcrbsgsaqarapcs",
                    "brcrbsgsaraq",
                    "brcrbsgscsaq",
                    "brcraraq",
                    "brcrgsar",
                    "csarbsds",
                    "csarcrds",
                    "csargsbs",
                    "csardsbs",
                    "csarbrcr",
                    "aqbr",
                    "bsar",
                    "gsbs",
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
                black: "fsfreqdpcpbpfpbq",
                white: "arbrcscqdrer",
            },
            move_tree: this.makePuzzleMoveTree(["es"], ["dses", "dqes"], 19, 19),
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
                black: "araqbpcpdpephrirhqgqfqcr",
                white: "bsbrbqcqdqeqerfrgrhs",
            },
            move_tree: this.makePuzzleMoveTree(
                ["gsfsds"],
                ["dsgsdres", "dsgsescs", "esds"],
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
                black: "brdrdqcqcocnbnaoeofr",
                white: "arbqbpbocrcs",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bsasap"],
                ["dsbs", "apbs", "aqap", "asbs"],
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
                black: "drerfrbrbqbpcpcodoeogohphqhrhshnem",
                white: "dscscrcqdpepeqfpgpgqgrgsfs",
            },
            move_tree: this.makePuzzleMoveTree(["es"], ["bses", "dqes", "fqes"], 19, 19),
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
                black: "araqbpcpepfpgpgrhrgqcn",
                white: "bsbrbqcqdqeqfqfrgs",
            },
            move_tree: this.makePuzzleMoveTree(
                ["fsesdr"],
                [
                    "drdsfscr",
                    "drdsercr",
                    "drdsescr",
                    "drdscrfs",
                    "dsdrescs",
                    "dsdrfses",
                    "dsdrcses",
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
                black: "aobncncodpepeqeresdsen",
                white: "crdrdqbqbpcpbo",
            },
            move_tree: this.makePuzzleMoveTree(
                ["bscsbr"],
                ["bscsarbr", "bscsapbr", "brbs", "arbr", "apbs", "csbs"],
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
                black: "bsbrbqcpdpeofohohphqhrhsgnbofsfrfqcs",
                white: "dscrcqdqeqepfpgpgqgrgs",
            },
            move_tree: this.makePuzzleMoveTree(["er"], ["eser", "drer", "goer"], 19, 19),
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
                black: "bsbrbqcpdpeofocngphpipiqhrirds",
                white: "cscrcqdqepfqgqhqeresgs",
            },
            move_tree: this.makePuzzleMoveTree(
                ["grfrfp"],
                ["fpgreqdr", "frgr", "fsgr", "hsgr"],
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
                black: "apbocodpdqdrbmfren",
                white: "arcrcqcpbpao",
            },
            move_tree: this.makePuzzleMoveTree(["bs"], ["csbs", "aqbs", "brbs", "anbs"], 19, 19),
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
                black: "apbpanbncndndpdqdrcrerfp",
                white: "csdsbrbqcqcpcoboao",
            },
            move_tree: this.makePuzzleMoveTree(["bsasaq"], ["aqbs", "araq"], 19, 19),
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
                black: "grhrhsgqfqgpgognendncncocpbqbrgl",
                white: "gsbscrcqdqeqfpfoeododpfresfs",
            },
            move_tree: this.makePuzzleMoveTree(
                ["dsercsdrcs"],
                ["dserdrcs", "csds", "drcs"],
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
                black: "anambmcmcncododpdrerfrfp",
                white: "esdscrcqbqcpapbobn",
            },
            move_tree: this.makePuzzleMoveTree(["ar"], ["aoar", "bsar", "csar"], 19, 19),
            /* cSpell:enable */
        };
    }
}
