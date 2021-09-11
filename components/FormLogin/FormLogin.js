import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

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
}));

const FormLogin = ({ data }) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleShowClick = () => setShowPassword(!showPassword)
  const router = useRouter()
  const _login = () => {
    // Login
    router.push('documentsSent')
  }
  const classes = useStyles()
  console.log('csrfToken', data)
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h6" color="inherit" noWrap >Iniciar sesión</Typography>
        <form method="post" action="/api/auth/callback/credentials" className={classes.form}>
          <input name="csrfToken" type="hidden" defaultValue={data?.csrfToken} />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nombre de Usuario"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            type="submit"
          // onClick={() => { console.log('clicked') }}
          >
            Sign In
          </Button>
          {/* <Box
        padding="4"
        minW={{ base: "90%", md: "468px" }}
      >
        <form>
          <Stack
            spacing={4}
            p="1rem"
            boxShadow="md"
          >
            <FormControl>
              <FormLabel>Usuario</FormLabel>
              <Input type="email" />
              <FormLabel>Contraseña</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement w="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handleShowClick}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText textAlign="right">
                <Link>Olvidaste tu contraseña?</Link>
              </FormHelperText>
            </FormControl>
            <Button
              type="submit"
              variant="solid"
              w="full"
              colorScheme="telegram"
              onClick={_login}
            >
              Iniciar
            </Button>
          </Stack>
        </form>
      </Box>
      <Box>
        <Link>
          Solicitar cuenta
        </Link>
      </Box> */}
        </form>
      </div>
    </Container>
  )
}

export default FormLogin
