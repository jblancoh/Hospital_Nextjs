import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { FaLessThanEqual } from 'react-icons/fa'
import FileUpload from '@components/FileUpload/FileUpload'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MaterialUIPickers from '@components/DatePicker/DatePicker'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { isReferenced } from '@babel/types';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import BackspaceIcon from '@material-ui/icons/Backspace';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const FormDocument = ({ formState = {} }) => {
  const classes = useStyles()
  const [showPassword, setShowPassword] = useState(false)
  const [initialState, setInitialState] = useState(formState)
  const [instituteProvince, setInstituteProvince] = useState(0);
  const [unity, setUnity] = useState(0);
  const [area, setArea] = useState(0);
  const [areaRequest, setAreaRequest] = useState(10);
  const [unityRequest, setUnityRequest] = useState(10);
  const [reference, setReference] = useState(10);
  const [status, setStatus] = useState(0);

  const handleShowClick = () => setShowPassword(!showPassword)
  const _updateFilesCb = (file) => console.log('_updateFilesCb', file);
  return (
    <form className={classes.form}>
      <Grid container spacing={3}>
        <Grid container>
          <Grid item xs={12} lg={4}>
            <FormControl>
              <MaterialUIPickers required label="Fecha de oficio" onChange={(value) => { console.log('date oficio', value) }} />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={4}>
            <FormControl>
              <MaterialUIPickers required label="Fecha de acuse" onChange={(value) => { console.log('date acuse', value) }} />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={4}>
            <FormControl>
              <InputLabel htmlFor="folio_number">Numero de oficio</InputLabel>
              <Input disabled id="folio_number" aria-describedby="folio_number_helper" />
              <FormHelperText id="folio_number_helper">Este numero se crea automaticamente.</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container style={{ paddingTop: 50 }}>
          <Grid item xs={12} lg={4}>
            <FormControl>
              <InputLabel required>Municipio o Instituto</InputLabel>
              <Select
                labelId="institute_label"
                id="institute_select"
                value={instituteProvince}
                onChange={(event) => setInstituteProvince(event.target.value)}
              >
                <MenuItem value={0}>Selecciona un municipio o instituo</MenuItem>
                <MenuItem value={10}>Secretaria de salud</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={4}>
            <FormControl>
              <InputLabel required>Unidad o Dirección</InputLabel>
              <Select
                labelId="unity_label"
                id="unity_select"
                value={unity}
                onChange={(event) => setUnity(event.target.value)}
              >
                <MenuItem value={0}>Selecciona una unidad o dirección</MenuItem>
                <MenuItem value={10}>Dirección</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={4} >
            <FormControl>
              <InputLabel>Área o Depto</InputLabel>
              <Select
                labelId="area_label"
                id="area_select"
                value={area}
                onChange={(event) => setArea(event.target.value)}
              >
                <MenuItem value={0}>Selecciona un área o depto.</MenuItem>
                <MenuItem value={10}>Archivo</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={5} style={{ paddingTop: 50 }}>
          <FormControl fullWidth id="name_dirigido">
            <InputLabel fontSize={11} required>Dirigido a</InputLabel>
            <Input fullWidth required type="text" />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={5} style={{ paddingTop: 50 }}>
          <FormControl fullWidth id="name_dirigido">
            <InputLabel fontSize={11} required>Asunto</InputLabel>
            <Input fullWidth required type="text" />
          </FormControl>
        </Grid>
        <Grid container style={{ paddingTop: 50 }}>
          <Grid item xs={12} lg={3} style={{ paddingRight: 20 }}>
            <FormControl fullWidth>
              <InputLabel>Unidad o Dirección Solicitante</InputLabel>
              <Select
                labelId="institute_label"
                id="institute_select"
                value={unityRequest}
                disabled
                onChange={(event) => setUnityRequest(event.target.value)}
              >
                <MenuItem value={0}>Selecciona un municipio o instituo</MenuItem>
                <MenuItem value={10}>Secretaria de salud</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={3} style={{ paddingRight: 20 }}>
            <FormControl fullWidth>
              <InputLabel>Área o Depto Solicitante</InputLabel>
              <Select
                labelId="unity_label"
                id="unity_select"
                value={areaRequest}
                disabled
                onChange={(event) => setAreaRequest(event.target.value)}
              >
                <MenuItem value={0}>Selecciona una unidad o dirección</MenuItem>
                <MenuItem value={10}>Dirección</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={4} >
            <FormControl fullWidth id="request_user">
              <InputLabel disabled focused fontSize={11}>Solicitante</InputLabel>
              <Input disabled type="text" value="Jonathan Blanco Hernandezadasdasd " />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container style={{ paddingTop: 50 }}>
          <Grid item xs={12} lg={3} style={{ paddingRight: 20 }}>
            <FormControl fullWidth>
              <InputLabel required>Tipo de Referencia</InputLabel>
              <Select
                labelId="reference_label"
                id="reference_select"
                value={reference}
                onChange={(event) => setReference(event.target.value)}
              >
                <MenuItem value={0}>Selecciona un tipo de referencia</MenuItem>
                <MenuItem value={10}>...</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={5}>
            <FormControl fullWidth id="reference_oficio">
              <InputLabel disabled focused fontSize={11}>Oficio de Referencia</InputLabel>
              <Input type="text" />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container style={{ paddingTop: 50 }}>
          <FormControl fullWidth id="reference_oficio">
            <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Observaciones" />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={12}>
          <FormControl>
            <InputLabel required>Estado</InputLabel>
            <Select
              labelId="status_label"
              id="status_select"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <MenuItem value={0}>Selecciona un estado</MenuItem>
              <MenuItem value={10}>...</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={3} style={{ paddingTop: 50 }}>
          <FormControl>
            <FileUpload
              updateFilesCb={_updateFilesCb}
              accept=".pdf"
              label={'Oficio Digital'}
            />
          </FormControl>
        </Grid>
        <Grid container spacing={6} style={{ paddingTop: 50 }}>
          <Grid item xs={12} lg={3}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.button}
              startIcon={<BackspaceIcon />}
            >
              Limipiar
            </Button>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Guardar
            </Button>
          </Grid>
        </Grid>

      </Grid>
    </form>
  )
}

export default FormDocument
