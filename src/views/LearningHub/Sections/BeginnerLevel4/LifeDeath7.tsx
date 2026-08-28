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

export class BL4LifeDeath7 extends LearningHubSection {
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
        ];
    }
    static section(): string {
        return "bl4-life-death-7";
    }
    static title(): string {
        return pgettext("Tutorial section name on learning alive with seki", "Alive with seki");
    }
    static subtext(): string {
        return pgettext(
            "Tutorial section subtext on learning on alive with seki",
            "Alive with seki",
        );
    }
}

class Page01 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Save the black group with seki.");
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
                black: "dsdrdqfqeqgqhqhrhs",
                white: "crcqdpepfpgphpiqirjpfsgs",
            },
            move_tree: this.makePuzzleMoveTree(["fr"], ["esfr", "erfr", "grfr"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page02 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Save the black group with seki.");
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
                black: "arbrbqcqdqeqer",
                white: "crbsaqapbpcpdpepfqfrhrgo",
            },
            move_tree: this.makePuzzleMoveTree(["ds"], ["csds", "esds", "drcs"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page03 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Save the black group with seki.");
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
                black: "arcsbqcqdqeqer",
                white: "bpcpdpepfqfrgpbsbrcr",
            },
            move_tree: this.makePuzzleMoveTree(["ds"], ["esds", "aqds", "drds"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page04 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Save the black group with seki.");
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
                black: "arbrcrdrerfr",
                white: "bscsaqbqcqdqeqfqgqgrir",
            },
            move_tree: this.makePuzzleMoveTree(["fs"], ["dsfs", "esds"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page05 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Save the black group with seki.");
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
                black: "csdrdqcqbqbpap",
                white: "aobocodpeqereogrcrbrar",
            },
            move_tree: this.makePuzzleMoveTree(["bs"], ["dsbs", "aqbs"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page06 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Save the black group with seki.");
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
                black: "crdrereqfqgqhqhr",
                white: "brcqdqepfpgphpipiqirbpfs",
            },
            move_tree: this.makePuzzleMoveTree(
                ["gsfrcs"],
                [
                    "gsfrescs",
                    "gsfrdsgr",
                    "gsfrgrcs",
                    "escs",
                    "hscsgsfr",
                    "hscsfrgs",
                    "hscsdsbs",
                    "hscsesis",
                    "cshs",
                    "grcs",
                    "dshs",
                    "frgs",
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
        return _("Black to play. Save the black group with seki.");
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
                black: "arbrbqbpcpdqdrerfr",
                white: "bscrdsaqapaobocodpeqfqgrgqeoir",
            },
            move_tree: this.makePuzzleMoveTree(["fs"], ["cqfs", "escs"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page08 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Save the black group with seki.");
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
                black: "dsdrdqcqbpapbr",
                white: "bscsaraobococpdpepeqeres",
            },
            move_tree: this.makePuzzleMoveTree(["bq"], ["crbq", "aqbq"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page09 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Save the black group with seki.");
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
                black: "apbpbqbrcrdrer",
                white: "freqdqcqcpboaofqcnbsarhr",
            },
            move_tree: this.makePuzzleMoveTree(["es"], ["cses", "dsas", "aqes"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page10 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Save the black group with seki.");
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
                black: "araqbqcqdqdrerfr",
                white: "apbpcpdpeqfqgrgphrcscrbrbs",
            },
            move_tree: this.makePuzzleMoveTree(["fs"], ["dsfs", "esds"], 19, 19),
            /* cSpell:enable */
        };
    }
}

class Page11 extends LearningPage {
    constructor(props: LearningPageProperties) {
        super(props);
    }

    text() {
        return _("Black to play. Save the black group with seki.");
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
                black: "crdqeqfqgqgr",
                white: "bqbrcpdpepfpgphqhriojr",
            },
            move_tree: this.makePuzzleMoveTree(
                ["erdscsfsgsescq"],
                [
                    "erdscsfsgsesdrcq",
                    "erdscsfsesgs",
                    "erdscsfscqgs",
                    "erdsescs",
                    "erdsgscs",
                    "erdsfscs",
                    "erdscqcs",
                    "csgsfser",
                    "fscsdser",
                    "cqgsfser",
                    "dsgsfser",
                    "dres",
                    "esgsfscsdser",
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
        return _("Black to play. Save the black group with seki.");
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
                black: "gqgrgscscrcqcpdpepfpfq",
                white: "eqhrhshodrfrbsbrbqbpcodoeofogphq",
            },
            move_tree: this.makePuzzleMoveTree(
                ["eserdq"],
                ["eserfsdq", "eserdsdq", "fser", "dser", "dqes", "eres"],
                19,
                19,
            ),
            /* cSpell:enable */
        };
    }
}
