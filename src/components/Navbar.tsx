import { AppBar, Toolbar, Box, Typography, Stack, Button } from "@mui/material"
import Image from "next/image";
import logo from "../assets/aaa-logo.png"
import { useRouter } from "next/router";
const Navbar = () => {
    const router = useRouter();
    return (
        <AppBar position="sticky" sx={{ backgroundColor: "#4f7184", boxShadow: 0 }}>
            <Toolbar sx={{ justifyContent: "space-between", paddingX: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Image src={logo} alt="Logo" width={200} height={75} />
                    <Typography variant="h6" sx={{ marginLeft: 2 }}>
                        Mi Acueductos
                    </Typography>
                </Box>
                <Stack direction="row" spacing={3}>
                    <Button color="inherit" sx={{ textTransform: "none" }} onClick={() => router.push("/account")}>
                        Mis Cuentas
                    </Button>
                    <Button color="inherit" sx={{ textTransform: "none" }}>
                        Pagos
                    </Button>
                    <Button color="inherit" sx={{ textTransform: "none" }}>
                        Servicios
                    </Button>
                    <Button color="inherit" sx={{ textTransform: "none" }}>
                        Reportar Avería
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;