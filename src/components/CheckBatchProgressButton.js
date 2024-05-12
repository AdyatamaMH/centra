import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';

const CheckBatchProgressButton = () => {
  const navigate = useNavigate(); 

  const navigateToBatchProgress = () => {
    navigate('/batch-progress'); 
  };

  return (
    <Button variant="contained" color="primary" onClick={navigateToBatchProgress}>
      Check Batch Progress
    </Button>
  );
};

export default CheckBatchProgressButton;
