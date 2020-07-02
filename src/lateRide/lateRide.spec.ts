import {lateRide} from './lateRide';

describe('', () => {
  it('Should return null', async () => {
    const late = lateRide();
    expect(late).toBeNull();
  });
});
