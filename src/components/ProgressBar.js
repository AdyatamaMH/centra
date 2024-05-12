import React, { useState } from 'react';
import {
  CircularProgressbar, buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  Paper, Button, Dialog, DialogTitle, DialogContent,
  TextField, DialogActions, FormControl, InputLabel, Select, MenuItem
} from '@material-ui/core';

const ProgressBar = ({ value }) => {
  const [open, setOpen] = useState(false);
  const [unit, setUnit] = useState('kg');  // Default unit

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  return (
    <Paper style={{
      padding: '20px',
      backgroundColor: '#4caf50',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '300px',
      height: '300px'
    }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          pathColor: '#FFFFFF',
          textColor: '#FFFFFF',
          trailColor: '#4caf50'
        })}
      />
      <Button variant="contained" color="inherit" style={{ marginTop: '20px', backgroundColor: 'white', color: '#4caf50' }} onClick={handleClickOpen}>
        Add Leaves
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Leaves Data Form</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="weight"
            label="Weight"
            type="number"
            fullWidth
            variant="outlined"
          />
          <FormControl variant="outlined" fullWidth style={{ marginTop: '20px' }}>
            <InputLabel id="unit-label">Unit</InputLabel>
            <Select
              labelId="unit-label"
              id="unit-select"
              value={unit}
              onChange={handleUnitChange}
              label="Unit"
            >
              <MenuItem value="kg">Kilograms</MenuItem>
              <MenuItem value="mg">Milligrams</MenuItem>
              <MenuItem value="g">Grams</MenuItem>
              <MenuItem value="lbs">Pounds</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'space-between' }}>
          <Button onClick={handleClose} color="primary" style={{ color: '#4caf50', borderColor: '#4caf50' }}>
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained" style={{ backgroundColor: '#4caf50', color: 'white' }}>
            Add Leaves
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default ProgressBar;
