import React from 'react';
import 'typeface-roboto';
import './App.scss';

import { Grid, Card } from '@material-ui/core';
import { LeftContainer } from './components/left-container';
import { RightContainer } from './components/right-container';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="background" />
      <Grid className="root">
        <Grid item xs={12}>
          <Card className="card">
            <Grid container>
              <LeftContainer />
              <RightContainer />
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
