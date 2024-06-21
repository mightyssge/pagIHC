import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';

import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';
import { FormControl } from '@mui/material';



const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [language, setLanguage] = React.useState('ES');

    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
    };


    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const menuId = 'primary-search-account-menu';


    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        border: '1px solid #D5D5D5',
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.45),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'white', borderBottom: 1, color: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <img
                            src="/logoIHC.svg"
                            alt="Logo de SneakerVibe"
                            style={{ height: '50px', padding: '15px 24px' }}
                        />
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Familjen Grotesk, monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        SneakerVibe
                    </Typography>

                    <Box sx={{ flexGrow: 3 }} />

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button sx={{ color: 'black', fontWeight: 700 }}>
                            EXPLORA
                        </Button>
                    </Box>


                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Buscar Productos…"
                            inputProps={{ 'aria-label': 'search' }}
                        />

                        <IconButton size="small">
                            <KeyboardVoiceIcon sx={{ padding: '5px' }} />
                        </IconButton>
                    </Search>






                    {/* PAGES MAPPIN */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge color="error">
                                <FavoriteBorderIcon />
                            </Badge>
                        </IconButton>

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>

                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={2} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>

                    <FormControl sx={{ display: { xs: 'none', md: 'flex' }, width: 120, m: 1, marginLeft: 3 , border:1}}>
                        <Select
                            defaultValue="ES"
                            value={language}
                            onChange={handleChangeLanguage}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="ES">
                               <b>Español</b>
                            </MenuItem>
                            <MenuItem value="EN"> <b>English</b></MenuItem>
                        </Select>
                    </FormControl>


                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
