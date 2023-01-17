import React from 'react'
import { Avatar, Box, Button, Input } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { cleanSuccess, cleanSuccesUploaded, uploadImage } from '../../redux/reducer/newsReducer';

const AddImageNew = ({state,setState}) => {

    const success = useSelector(state=> state.news.successUploaded)
    const newImage = useSelector(state => state.news.newImage)
    const dispatch = useDispatch()
    const [addImage,setAddImage]=React.useState(false)
    
    function handleChange(e){
        console.log(e.target.files[0])
        let formdata = new FormData();      
        formdata.append("image", e.target.files[0]);
        dispatch(uploadImage({formdata}))
    }
    React.useEffect(()=>{
        if(success) {
            console.log(newImage)
            setTimeout(()=>{
                setState({
                    ...state,
                    img:newImage
                })

            },500)
            // dispatch(cleanSuccesUploaded())
        }
        setAddImage(false)
    },[success])
    return(

        <>
        <Avatar alt="Logo del Comercio" variant="rounded" src={newImage}  sx={{
                width: '100%', height: 150 ,fontSize:40
            }}>
                ...
            </Avatar>
        
        {
            !addImage ? (
                <Button sx={{mt:2}} variant="outlined" onClick={()=>{setAddImage(true)}} >
                    Agregar Portada
                </Button>
            ): (
                <Box
                    sx={{
                        display:"flex",
                        alignItems:"center",
                        mt:2
                    }}
                    >
                        <Input
                            className=".app_uploadInput"
                            type="file"
                            onChange={handleChange}
                            >
                        </Input>
                </Box>
            )
        }
        </>
    )
}
export default AddImageNew