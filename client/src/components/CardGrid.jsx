import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Matches from './MainCard.jsx';

/* import Member2 from '../about/team/member2.jsx';
import Member3 from '../about/team/member3.jsx';
import Member4 from '../about/team/member4.jsx';
import Member5 from '../about/team/member5.jsx';
import Member6 from '../about/team/member6.jsx'; */

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CardGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
      
        <br />
        <Grid container spacing={4}>
          <Grid item xs>
            <Matches />
          </Grid>
          <Grid item xs>
            <Matches />
          </Grid>
          <Grid item xs>
            <Matches />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs>
            <Matches />
          </Grid>
          <Grid item xs>
            <Matches />
          </Grid>
          <Grid item xs>
            <Matches />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

CardGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardGrid);