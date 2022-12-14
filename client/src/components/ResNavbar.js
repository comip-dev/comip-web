import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../assets/images/logo-comip2.png'
import logoblanco from '../assets/images/logo-comip2blanco.png'
import { navOptions } from "../assets/data/navOptions";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
const drawerWidth = 240;


function DrawerAppBar(props) {
    let initialOpenState = {}
    navOptions.forEach(item=>{
        if(item.sections.length>0) {
            initialOpenState[item.id] = {}
            initialOpenState[item.id].open = false
            item.sections.forEach(section=>{
                if(section.subsections){
                    initialOpenState[item.id][section.id] = {}
                    initialOpenState[item.id][section.id].open = false

                }
            })
        }
    })
    const [state, setState] = React.useState(initialOpenState)
    const { window,goTo , white} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleClick = (id,subId) => {
        console.log(id,subId)
        if(subId){
            if(!state[id][subId]) {goTo(id,subId)
            handleDrawerToggle()}
            else setState({
                ...state,
                [id]: {
                    ...state[id],
                [subId]: {
                    ...state[id][subId],
                    open: !state[id][subId].open}
                }
            })
        }else {
            if(!state[id]) {
                handleDrawerToggle()
                goTo(id)}
            setState({
                    ...initialOpenState,
                    [id]: {
                        ...state[id],
                        open: !state[id].open
                    }
                })
            }
    };

    const drawer = (
        
        <Box  sx={{ textAlign: 'center' }}>
            {/* <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider /> */}

            <List>
                {navOptions.map((item) => (<>
                    <ListItemButton onClick={()=>handleClick(item.id)}>
                        <ListItemText primary={item.text} />
                        {item.sections.length>0 && (state[item.id].open ? <ExpandLess /> : <ExpandMore />)}
                    </ListItemButton>
                    {
                        item.sections && <Collapse in={state[item.id]?.open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {
                                    item.sections.map((section)=>(
                                    <>
                                        <ListItemButton onClick={()=>handleClick(item.id,section.id)} sx={{ pl: 4 }}>
                                            <ListItemText primary={section.text} />
                                        </ListItemButton>
                                        {
                                            section.subsections && <Collapse in={state[item.id][section.id].open} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding >
                                                {
                                                    section.subsections.map(sub=>(<>
                                                        <ListItemButton onClick={()=>handleClick(item.id,sub.id)} sx={{ pl: 6 }}>
                                                            <ListItemText primary={sub.text} />
                                                        </ListItemButton>
                                                    </>
                                                    ))
                                                }
                                            </List>
                                            </Collapse>
                                        }
                                    </>
                                    ))
                                }
                            </List>
                        </Collapse>
                    }
                </>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
    <Box sx={{ display: 'flex', width:'100%',justifyContent:'space-between'  }}>
        <AppBar sx={{bgcolor:white?'rgb(217, 217, 217)':'rgba(0, 0, 0, 0.2)'}} component="nav">
            <Toolbar sx={{ display: 'flex', width:'100%',justifyContent:'space-between'  }}>
                <div onClick={()=>goTo("home")} className="nav-logo">
                    <img className="comip-logo-container" src={white?logo:logoblanco} alt="logo-COMIP" ></img>
                </div>
                <IconButton
                    color={white?'#5C5C5C':"inherit"}
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, fontSize: '36px'}}
                >
                    <MenuIcon sx={{ mr: 2, fontSize: '24px'}} />
                </IconButton>            
            </Toolbar>
        </AppBar>
        
        <Box component="nav">
            <Drawer
            key='right'
            anchor='right'
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
        </Box>
        
        </Box>
        
    );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;