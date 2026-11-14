"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HannibalBarca = void 0;
const Leader_1 = require("@civ-clone/core-civilization/Leader");
const Carthaginian_1 = require("../Carthaginian");
class HannibalBarca extends Leader_1.default {
    static civilization() {
        return Carthaginian_1.default;
    }
    name() {
        return 'Hannibal Barca';
    }
}
exports.HannibalBarca = HannibalBarca;
exports.default = HannibalBarca;
//# sourceMappingURL=HannibalBarca.js.map