import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 900, 
  },
  step: {
    textAlign: 'center',
    position: 'relative',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: '#3f51b5',
    color: '#fff',
    lineHeight: '30px',
    margin: '0 auto',
    marginBottom: theme.spacing(1),
  },
  line: {
    position: 'absolute',
    height: 2,
    backgroundColor: '#3f51b5',
    top: 15,
    left: '50%', 
    right: '50%', 
    zIndex: -1,
  },
  text: {
    marginTop: theme.spacing(1),
  }
}));

const steps = ['Wet Leaves', 'Dry Leaves', 'Flour Leaves', 'Deliver'];

const BatchProgress = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" gutterBottom align="center">
        Centra [LOCATION]
      </Typography>
      <Grid container justify="space-between" alignItems="center">
        {steps.map((step, index) => (
          <Grid item key={index} style={{ flexBasis: index === 0 || index === steps.length - 1 ? '0%' : 'auto' }}>
            <div className={classes.step}>
              <div className={classes.circle}>{index + 1}</div>
              <Typography variant="caption" className={classes.text}>
                {step}
              </Typography>
            </div>
            {index < steps.length - 1 && (
              <div className={classes.line} style={{ left: 15, width: `calc(100% + ${steps.length > 3 ? 50 : 100}px)` }}></div> // Adjust width calculation based on your layout
            )}
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default BatchProgress;
