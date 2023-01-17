import React from 'react';
import ReactDOM from 'react-dom/client';

import '~/index.css';
import { ChakraProvider } from '@chakra-ui/react';

import { App } from '~/App';
import { initFirebase } from '~/firebase/firebase';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);

initFirebase();
