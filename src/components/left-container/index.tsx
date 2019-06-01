import React from 'react';

import './style.scss';

import {
  Grid,
  CardHeader,
  Avatar,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

import { MdImage, MdWork, MdBeachAccess } from 'react-icons/md';

export class LeftContainer extends React.Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    this.setState({
      contacts: [
        { id: 1, name: 'Marco', text: 'Lorem ipsum', image: <MdImage /> },
        { id: 2, name: 'Jose', text: 'Lorem ipsum', image: <MdWork /> },
        { id: 3, name: 'Pedro', text: 'Lorem ipsum', image: <MdBeachAccess /> }
      ]
    });
  }

  render() {
    const { contacts } = this.state;
    return (
      <Grid item xs={3} className="right-border">
        <CardHeader avatar={<Avatar aria-label="Recipe">M</Avatar>} />

        <Paper className="paper" elevation={0}>
          <Typography className="information" variant="subtitle2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Paper>

        <List>
          {contacts.map((item: any) => (
            <ListItem key={item.id} className="list-item">
              <Avatar>{item.image}</Avatar>
              <ListItemText
                primary={item.name}
                secondary={item.text}
                className="list-item-text"
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    );
  }
}
