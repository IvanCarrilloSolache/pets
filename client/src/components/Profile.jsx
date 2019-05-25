import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Profile() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
      <Typography variant="h5" component="h3">
          Personal Info
        </Typography>

        <Typography variant="h5" component="h2">
        <TextField
        id="outlined-with-placeholder"
        label="Name"
        placeholder="Placeholder"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-with-placeholder"
        label="Breed"
        placeholder="Placeholder"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-with-placeholder"
        label="Age"
        placeholder="Placeholder"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-with-placeholder"
        label="Name"
        placeholder="Placeholder"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          ...
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">...</Button>
      </CardActions>
    </Card>
  );
}

export default Profile;
