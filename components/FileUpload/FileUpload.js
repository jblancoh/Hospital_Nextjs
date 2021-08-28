import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
}));

export default function FileUpload() {
  const classes = useStyles();

  return (
    <div>
      <input
        accept="application/pdf"
        className={classes.input}
        id="contained-button-file"
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="default"
          startIcon={<PictureAsPdfIcon />}
          size="large"
        >
          Cargar PDF
        </Button>
      </label>
    </div>
  );
}
