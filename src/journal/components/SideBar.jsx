import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import {
  styled,
  useTheme,
} from '@mui/material/styles';

const drawerWidth = 250;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
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

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
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
    })
);


const journals = [
    {
        id: 1,
        title: "Journal 1",
        content: "Hoy comencé el desarrollo de mi aplicación en React. Estuve configurando el entorno y haciendo algunos componentes básicos. Me siento emocionado por el progreso.",
        date: "2024-11-05",
        tags: ["desarrollo", "react", "comienzo"]
    },
    {
        id: 2,
        title: "Journal 2",
        content: "Tuve algunos problemas al conectarme con la API. No estaba manejando correctamente las promesas, lo cual causaba errores en el fetch. Después de algunos ajustes, finalmente logré obtener los datos.",
        date: "2024-11-06",
        tags: ["API", "errores", "fetch"]
    },
    {
        id: 3,
        title: "Journal 3",
        content: "Hoy trabajé en la interfaz de usuario. Añadí un diseño responsivo y mejoré los estilos utilizando CSS Modules. Ahora la aplicación se ve mucho mejor en diferentes dispositivos.",
        date: "2024-11-07",
        tags: ["UI", "CSS", "responsivo"]
    },
    {
        id: 4,
        title: "Journal 4",
        content: "Logré integrar Firebase para el almacenamiento de datos. Fue un desafío configurar la autenticación, pero ahora los usuarios pueden registrarse e iniciar sesión.",
        date: "2024-11-08",
        tags: ["Firebase", "autenticación", "integración"]
    },
    {
        id: 5,
        title: "Optimización de rendimiento",
        content: "Hoy me enfoqué en optimizar el rendimiento de la aplicación. Añadí lazy loading para las imágenes y ajusté el renderizado de algunos componentes. La aplicación ahora es más rápida.",
        date: "2024-11-09",
        tags: ["rendimiento", "optimización", "lazy loading"]
    }
];


export const Sidebar = ({ open, handleDrawerClose }) => {
    const theme = useTheme();

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <Typography variant='h6'>Santiago Sosa</Typography>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {journals.map(journal => (
                    <ListItem key={journal.id} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                            <BookmarksIcon sx={{...(open && {mr: 2})}}/>
                            <ListItemText primary={journal.title} secondary={journal.content} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};
