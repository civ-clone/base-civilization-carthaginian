import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Carthaginian from '../Carthaginian';

export class HannibalBarca extends Leader {
  static civilization(): typeof Civilization {
    return Carthaginian;
  }

  name(): string {
    return 'Hannibal Barca';
  }
}

export default HannibalBarca;
