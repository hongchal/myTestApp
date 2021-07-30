import React from 'react';
import {RootNavigation} from '@router/RootNavigation';
import {RecoilRoot} from 'recoil';

const App = () => {
  return (
    <React.Fragment>
      <RecoilRoot>
        <RootNavigation />
      </RecoilRoot>
    </React.Fragment>
  );
};

export default App;
