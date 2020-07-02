import {pokemonBattle} from './pokemonBattle';

describe('', () => {
  it('Should return null', async () => {
    const pokemon = pokemonBattle();
    expect(pokemon).toBeNull();
  });
});
