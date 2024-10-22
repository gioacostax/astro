import { GET_NORRIS_FACT } from '@/services/get_norrisFact';
import { AxiosService } from '@shared/react/providers/services';

describe('services', () => {
  test('GET_NORRIS_FACT', () => {
    expect(GET_NORRIS_FACT).toBeInstanceOf(AxiosService);
  });
});
