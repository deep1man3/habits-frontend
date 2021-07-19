import React from 'react';
import { Grid, Paper, Box, Typography } from '@material-ui/core';
import { ColorLabels } from '../AchievementTable.helpers';
import { useStyles } from './ColorLabels.styles';

const ColorsLabels = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container justify="center" alignItems="center">
        {Object.entries(ColorLabels).map(([key, value]) => (
          <Grid
            item
            container
            md={3}
            justify="center"
            key={key}
            className={classes.labelItem}
          >
            <Box
              className={classes.colorBox}
              style={{ backgroundColor: value.color }}
            />
            <Typography variant="body2" className={classes.label}>
              –
            </Typography>
            <Typography variant="body2" className={classes.label}>
              {value.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default ColorsLabels;
