import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
<<<<<<< HEAD
=======

>>>>>>> origin/main
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';

<<<<<<< HEAD
interface AppbarProps {
  alumnoName: string; // Propiedad para el nombre del alumno
}

function Appbar({ alumnoName }: AppbarProps) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
     <AppBar position="fixed" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="src\assets\logo_black_utem.png" alt="logo" style={{ width: 250, marginRight: 64 }} />
          <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={10}>
            <Badge badgeContent={4} color="primary">
              <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={4} color="primary">
              <PersonIcon color="action" />
            </Badge>
            <Item>{alumnoName} Perfil estudiante</Item> {/* Mostrar el nombre del alumno */}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>

    </>
   
  )
}

export default Appbar;
=======


function Appbar() {

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));


    return (
        <AppBar position="fixed" color="transparent">
          <Container maxWidth="xl">
            <Toolbar disableGutters >
            <img src="src\assets\logo_black_utem.png" alt="logo" style={{ width: 250, marginRight: 64}} /> {/* Cambiar la ruta de la imagen a la de tu logo */}
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={10}
            >
              <Badge badgeContent={4} color="primary">
                <MailIcon color="action" />
              </Badge>
              <Badge badgeContent={4} color="primary">
                <PersonIcon color="action" />
              </Badge>
            </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      )
}

export default Appbar
>>>>>>> origin/main
