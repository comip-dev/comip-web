import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {login, cleanError} from '../../redux/reducer/authReducer'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import LogoComip from '../../assets/images/logo-comip2.png'
import './Login.css'
import Loading from '../../components/Loading';
const theme = createTheme();

export default function Login() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const error = useSelector(state => state.auth.error);
    const loading = useSelector(state => state.auth.loading);
    const [state,setState] = React.useState({
        email:'',
        contraseña:''
    })
    // React.useEffect(()=>{

    // })
    React.useEffect(()=>{
        if(isLoggedIn){
            dispatch(cleanError())
            navigate(`/noticias`);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isLoggedIn])
    React.useEffect(()=>{
        if(error?.message === "Request failed with status code 401"){
            Swal.fire({
                text: "Usuario o contraseña inválidos",
                toast: true,
            }).then((value)=>{
                value && dispatch(cleanError());
            })
        } else if(error?.message){
            Swal.fire({
                text: error.message,
                toast: true,
            }).then((value)=>{
                value && dispatch(cleanError());
            })
        }
    },[error])
    const handleChange = (e) =>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!state.email || !state.contraseña) return  Swal.fire({
            text: "Completar todos los campos",
            toast: true,
        })
        dispatch(login(state))
    };

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <img className='logo-login' src={LogoComip} alt="Logo Mejor Oberá" />
            
                
            <Typography component="h1" variant="h5">
                Ingresar
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="contraseña"
                    label="Contraseña"
                    type="contraseña"
                    id="contraseña"
                    autoComplete="current-contraseña"
                    onChange={handleChange}
                />
                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    
                >
                    Ingresar
                </Button>
                {loading? <Loading/> : null}
                <Grid container>
                {/* <Grid item xs>
                    <Link href="#" variant="body2">
                    Olvidé mi contraseña
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2">
                    Registrarme
                    </Link>
                </Grid> */}
                </Grid>
            </Box>
            </Box>
            
        </Container>
        </ThemeProvider>
    );
}