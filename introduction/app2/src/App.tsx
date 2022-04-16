import React from 'react';
import {Box} from '@chakra-ui/react';

import CounterAppTwo from './components/CounterAppTwo';

const App = () => (
  <Box margin="1.2rem">
    <Box>APP-1</Box>
    <Box>
      <CounterAppTwo />
    </Box>
  </Box>
);

export default App;
