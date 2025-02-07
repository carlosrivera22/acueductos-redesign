import Head from "next/head";
import { TextField, Button, Box, Typography, Link, Stack, Divider, IconButton } from "@mui/material";
import QuickAccessLinks from "@/components/QuickAccessLinks";
import Image from "next/image";
import logo from "../assets/aaa-logo.png"; // Ensure the logo path is correct
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';

export default function Home() {
  const handleLogin = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log("Login submitted");
  };

  return (
    <>
      <Head>
        <title>Login - Mi Acueductos</title>
        <meta name="description" content="Login page created with Next.js and Material UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack
        sx={{
          backgroundColor: "#4f7184",
        }}
      >
        {/* Centering the logo */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "40px",
          }}
        >
          <Image src={logo} alt="Mi Acueductos Logo" width={400} height={150} />
        </Box>

        <Stack
          sx={{
            minHeight: "100vh",
            paddingTop: "40px",
            paddingBottom: "40px",
          }}
          direction="row"
          justifyContent="center"
        >
          {/* Main Content Section */}
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }} // Stack vertically on small screens
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "100%",
              maxWidth: "1200px",
              gap: { xs: "24px", sm: "40px" }, // Adjust gap between form and QuickAccessLinks
              paddingX: { xs: "20px", sm: "40px" },
            }}
          >
            {/* Login Form Box */}
            <Box
              component="form"
              onSubmit={handleLogin}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                padding: 4,
                boxShadow: 3,
                borderRadius: 3,
                backgroundColor: "white",
                width: "100%",
                maxWidth: "400px", // Ensure form doesn't grow too large
                textAlign: "center", // Center text inside form
              }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                ¡Bienvenido a <span style={{ color: "#4f7184" }}>Mi Acueductos!</span>
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "300" }}>
                <b>Para conectarse, ingrese su correo electrónico y la contraseña que utilizó para crear su perfil.</b>
              </Typography>
              <Divider sx={{ backgroundColor: "#f7931d", width: 1 }} />
              <TextField
                label="Correo electrónico"
                variant="outlined"
                fullWidth
                required
                type="email"
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Contraseña"
                variant="outlined"
                fullWidth
                required
                type="password"
                sx={{ marginBottom: 3 }}
              />
              <Button
                startIcon={<PersonIcon />}
                variant="outlined"
                fullWidth
                sx={{
                  borderColor: "#4f7184",
                  color: "#4f7184",
                  marginBottom: 2,
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Regístrate
              </Button>
              <Button
                startIcon={<LoginIcon />}
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                  backgroundColor: "#4f7184",
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Conéctate
              </Button>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: 2,
                }}
              >
                <Link href="#" variant="body2" sx={{ textDecoration: "none", color: "#4f7184" }}>
                  Olvidé mi contraseña
                </Link>
              </Box>
            </Box>

            {/* Quick Access Links */}
            <Box
              sx={{
                backgroundColor: "#212e3a",
                padding: "24px",
                borderRadius: 3,
                width: "100%",
                maxWidth: "400px",
              }}
            >
              <QuickAccessLinks />
            </Box>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}