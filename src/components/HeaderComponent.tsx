import React, { useEffect, useState } from 'react';
import GoogleKeep from "../assets/google keep.png";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import img from "../assets/signupimg.png"
import { Outlet, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Menu } from '@mui/material';


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  
  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );


function HeaderComponent() {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(null);
    const openProfile = Boolean(anchorElProfile);
    const handleClickProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElProfile(event.currentTarget);
    };
    const handleCloseProfile = () => {
        setAnchorElProfile(null);
    };

    const [profile, setProfile] = useState(false);
    const {fullName, email} =  JSON.parse(localStorage.getItem("details") || "");
    const navigate = useNavigate();

    const userLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("details");
    }

    return (<>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{backgroundColor:"white"}}>
                <Toolbar>
                    <IconButton
                        color="default"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className='w-full xl:w-full flex jutify-between gap-[150px] xl:gap-[150px]'>
                        <div className='xl:w-full w-[100px] ml-[-40px] xl:ml-0 flex gap-10 xl:gap-[150px] items-center'>
                            <div className='w-4/6 xl:w-3/6 flex gap-1 xl:gap-5 items-center'>
                                <img src={GoogleKeep} alt="img" className='h-20 w-20' />
                                <h1 className='text-2xl text-slate-600'>Keep</h1>
                            </div>
                            <div className='group/item w-[150px] xl:w-3/4 bg-white h-20 flex xl:ml-[-400px] ml-10 items-center relative'>
                                <h1 className='absolute left-[10px]'><SearchOutlinedIcon /></h1>
                                <TextField id="filled-search" placeholder="Search" type="search" variant="filled" className='w-[700px]' />
                            </div>
                        </div>

                        <div className='w-[250px] xl:w-2/8 ml-8 xl:ml-0 flex gap-[10px] xl:gap-10 h-20 items-center'>
                            <div className='flex w-[80px] ml-[20px] xl:w-1/2 xl:justify-between'>
                                <IconButton><RefreshOutlinedIcon /></IconButton>
                                <IconButton><ViewAgendaOutlinedIcon /></IconButton>
                                <IconButton><SettingsOutlinedIcon /></IconButton>
                            </div>
                            <div className='flex w-[50px] xl:w-2/6 ml-[20px] xl:mr-5'>
                                <IconButton ><AppsOutlinedIcon /></IconButton>
                                <IconButton id="basic-button" title="profile" onClick={handleClickProfile}><AccountCircleOutlinedIcon /></IconButton>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorElProfile}
                                        open={openProfile}
                                        onClose={handleCloseProfile}
                                        MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                        }}
                                >
                                            <section className='bg-white flex w-[450px] h-[300px]'>
                                                <div className='w-full h-full flex flex-col items-center justify-evenly'>
                                                    <h3 className='text-3xl font-bold'>{email}</h3>
                                                    <div className='flex items-center gap-10'>
                                                        <div className='bg-orange-400 w-[60px] h-[60px] rounded-full'>
                                                            <img src={img} alt="img" className='w-full h-full rounded-full' />
                                                        </div>
                                                        <h1 className='text-2xl'>Hi, {fullName}</h1>
                                                    </div>
                                                    <div className='flex gap-10 w-4/6'>
                                                        <Button variant="outlined" className='w-4/6 h-[60px]' onClick={ () => { navigate("/login"); userLogout(); } }>Sign In</Button>
                                                        <Button variant="outlined" className='w-4/6 h-[60px]' onClick={ () => { navigate("/login"); userLogout(); } }>Logout</Button>
                                                    </div>
                                                </div>
                                                <div className='mr-3' onClick={handleCloseProfile}>
                                                    <CloseIcon />
                                                </div>
                                            </section>
                                    </Menu>
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Notes', 'Archive', 'Trash'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }} onClick={ () => {
                            if (index===0) {
                                navigate("");
                            }
                            if (index==1) {
                                navigate("archive");
                            }
                            if (index==2) {
                                navigate("trash");
                            }
                        } }>
                            <ListItemButton
                                sx={{
                                minHeight: 80,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                }}
                                
                            >
                                <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                                >
                                {index === 0 ? <IconButton title='Notes'><LightbulbOutlinedIcon /></IconButton> : ""}
                                {index === 1 ? <IconButton title='Archive'><ArchiveOutlinedIcon /></IconButton> : ""}
                                {index === 2 ? <IconButton title='Trash'><DeleteOutlinedIcon /></IconButton> : ""}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Outlet />
            </Box>
        </Box>



    </>)
}

export default HeaderComponent;