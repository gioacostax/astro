import { GET } from '../robots.txt';

test('robots.txt', () => {
  expect(GET({ site: 'https://localhost' } as never)).toBeInstanceOf(Response);
});
