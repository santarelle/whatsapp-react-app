import React from 'react';
import './style.scss';
import { Grid, CardHeader, Avatar, CardContent } from '@material-ui/core';
import { MdImage } from 'react-icons/md';

export class RightContainer extends React.Component {
  render() {
    return (
      <Grid className="heightAdjust" item xs={9}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className="avatar">
              <MdImage />
            </Avatar>
          }
          title="Marco"
        />
        <CardContent className="rightContainer content" />
      </Grid>
    );
  }
}
