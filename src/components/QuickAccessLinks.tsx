import { Button, Stack, Typography } from "@mui/material";
import FmdBadIcon from '@mui/icons-material/FmdBad';
import FeedbackIcon from '@mui/icons-material/Feedback';
import HomeIcon from '@mui/icons-material/Home';
const QuickAccessLinks = () => {
    return (
        <Stack mb={5}>
            {/* Section 1 */}
            <Stack p={4} spacing={2} sx={{ color: 'white' }}>
                <Typography variant="h5" fontWeight="bold" sx={{ color: "#fff", textAlign: "center" }}>
                    Enlaces de rápido acceso
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                    Reporte salidero en línea e interrupción del servicio de agua en un sector.
                </Typography>
                <Button
                    startIcon={<FmdBadIcon />}
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: "#4f7184",
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "50px", // Rounded corners
                        padding: "12px 24px", // Adjusting button padding
                        textTransform: "none", // Keeping text normal case
                        '&:hover': {
                            backgroundColor: "#3d5b69", // Darker shade on hover
                        },
                    }}
                >
                    <b>Reportar avería</b>
                </Button>
            </Stack>

            {/* Section 2 */}
            <Stack p={5} spacing={3} sx={{ color: 'white' }}>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                    Conozca el estatus de su solicitud ingresando el número de orden.
                </Typography>
                <Button
                    startIcon={<FeedbackIcon />}
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: "#4f7184",
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "50px",
                        padding: "12px 24px",
                        textTransform: "none",
                        '&:hover': {
                            backgroundColor: "#3d5b69",
                        },
                    }}
                >
                    <b>Consultar Estatus</b>
                </Button>
                <Button
                    startIcon={<HomeIcon />}
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: "#4f7184",
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "50px",
                        padding: "12px 24px",
                        textTransform: "none",
                        '&:hover': {
                            backgroundColor: "#3d5b69",
                        },
                    }}
                >
                    <b>Ir a Página Principal</b>
                </Button>
            </Stack>
        </Stack>
    );
};

export default QuickAccessLinks;