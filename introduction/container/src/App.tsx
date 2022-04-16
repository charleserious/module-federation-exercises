import {Box, Center, Flex, Heading, Spinner, Link, Text} from '@chakra-ui/react';
import React, {Fragment, Suspense, lazy} from 'react';

const CounterAppOne = lazy(() => import('app1/CounterAppOne'));
const CounterAppTwo = lazy(() => import('app2/CounterAppTwo'));
const version = process.env.BUILD_DATE;

const App = () => (
  <Fragment>
    <Center 
      height="100vh"
      width="100%"
      backgroundColor="#1B1A29"
      margin="0"
      p="0"
      flexDirection="column">
        <Box color="#FFF" position="fixed" right="0" top="0" mr="2rem" mt="2rem">
          Latest Build Date: <Text fontWeight="bold">{version}</Text>
        </Box>
        <Flex
          border="1px solid #151421"
          borderRadius="1rem"
          height="50vh"
          justifyContent="space-around"
          alignItems="center"
          flexDirection="column"
          padding="5rem"
          backgroundColor="#6F60EA">
            <Heading color="#FFF">CONTAINER</Heading>
            <Flex direction="row" justifyContent="space-around">
              <Suspense fallback={<Spinner size="xl" />}>
                <Box 
                  p="2rem"
                  mr="2rem"
                  border="1px solid #AEAEAE"
                  borderRadius="1rem"
                  backgroundColor="#FFF">
                    <Heading color="#6F60EA" mb="1rem">
                      App 1
                    </Heading>
                    <CounterAppOne />
                </Box>
              </Suspense>
              <Suspense fallback={<Spinner size="xl" />}>
                <Box 
                  p="2rem"
                  mr="2rem"
                  border="1px solid #AEAEAE"
                  borderRadius="1rem"
                  backgroundColor="#FFF">
                    <Heading color="#6F60EA" mb="1rem">
                      App 2
                    </Heading>
                    <CounterAppTwo />
                </Box>
              </Suspense>
            </Flex>
        </Flex>
        <Link
          marginTop="5rem"
          href="https://github.com/charleserious/module-federation-exercises/introduction"
          target="_blank">
            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </Link>
    </Center>
  </Fragment>
);

export default App;