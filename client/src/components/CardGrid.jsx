import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import MatchCard from './MatchCards/MatchCard.jsx';
import MatchCard1 from './MatchCards/MatchCard1.jsx';
import MatchCard2 from './MatchCards/MatchCard2.jsx';
import MatchCard3 from './MatchCards/MatchCard3.jsx';
import MatchCard4 from './MatchCards/MatchCard4.jsx';
import MatchCard5 from './MatchCards/MatchCard5.jsx';

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
            <MatchCard />
          </Grid>
          <Grid item xs>
            <MatchCard1 />
          </Grid>
          <Grid item xs>
            <MatchCard2 />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs>
            <MatchCard3 />
          </Grid>
          <Grid item xs>
            <MatchCard4 />
          </Grid>
          <Grid item xs>
            <MatchCard5 />
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