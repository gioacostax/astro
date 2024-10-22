import React, { useState } from 'react';

import Arrow from 'remixicon/icons/Communication/message-2-line.svg?react';

import { GET_NORRIS_FACT } from '@/services/get_norrisFact';
import Button from '@shared/react/components/ui/button';

const Norris = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      disabled={loading}
      onClick={() => {
        setLoading(true);
        GET_NORRIS_FACT.fetch()
          .then(({ data: { value } }) => {
            window.alert(value);
          })
          .catch((err: Error) => {
            window.alert(err.message);
          })
          .finally(() => {
            setLoading(false);
          });
      }}
      variant="secondary"
    >
      Get Norris Fact
      <Arrow width="1rem" />
    </Button>
  );
};

export default Norris;
