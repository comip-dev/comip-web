import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Swal from 'sweetalert2';
import AddImageNew from './AddImageNew';
import { useDispatch, useSelector } from 'react-redux';
import { addnew, cleanState } from '../../redux/reducer/newsReducer';
import Loading from '../Loading';
import { Box, CircularProgress } from '@mui/material';
import TextEditor from './TextEditor';

export default function AddNew() {
    const success = useSelector(state => state.news.successAction)
    const loading = useSelector(state => state.news.loading)
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [state,setState] = React.useState({
        title:"",
        html:"",
        img:"",
        videoLink:"",
        linkPdf:""
    })
    
    const setBody = (richText) =>{
        setState({
            ...state,
            html:richText
        })
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (e) =>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (event) => {
        dispatch(addnew({data:state}))
        // setOpen(false)
    };
    const handleImage = (img) =>{
        setState({
            ...state,
            img: img
        })
    }
    React.useEffect(()=>{
        if(success) {
            handleClose()
            Swal.fire({
                icon:'success',
                title:'Contenido agregado',
                timer:1500
        })
        dispatch(cleanState())
    }
    },[success])
  return (
    <div>
        <Button variant="outlined" onClick={handleClickOpen}>
            Agregar Contenido
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Agregar Contenido</DialogTitle>
            <DialogContent 
                sx={{
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }} >
                {
                    loading ? (
                        <Box  sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                    ) : (<>
                    <DialogContentText>
                        Los campos "titulo y cuerpo" son requeridos, y el resto opcionales 
                    </DialogContentText>
                    <AddImageNew handleImage={handleImage} />
                    <TextField
                        autoFocus
                        name='title'
                        // value={state.title}
                        onChange={handleChange}
                        margin="dense"
                        id="title"
                        label="Título"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    
                    <TextField
                        autoFocus
                        name='videoLink'
                        // value={state.title}
                        onChange={handleChange}
                        margin="dense"
                        id="videoLink"
                        label="Link Vídeo de Youtube"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        name='linkPdf'
                        // value={state.title}
                        onChange={handleChange}
                        margin="dense"
                        id="linkPdf"
                        label="Link a Pdf"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <DialogContentText sx={{m:2, fontSize:16}} >
                        Cuerpo del contenido
                    </DialogContentText>
                    <TextEditor setBody={setBody} />
                </>
                    )
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleSubmit}>Agregar</Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}