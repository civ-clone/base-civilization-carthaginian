/**
 * The Carthaginian civilization's attributes, as `base-civilization-*` packages have registered theirs: a game's rules
 *  register them (core-civilization's `AttributeRegistry`), as nothing here registers itself.
 *
 * - `people`: what one of them is called, and what is theirs.
 * - `nation`: what they are called together.
 * - `colors`: the first fills a unit's shield and a city's square; the second is the shield's edge and the city.
 */
export const attributes: {
  people: string;
  nation: string;
  colors: string[];
} = {
  people: 'Carthaginian',
  nation: 'Carthage',
  colors: ['#66023C', '#E0C9A6'],
};

export default attributes;
