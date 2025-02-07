import { Typography, Box, Button, Stack } from "@mui/material";
import { YouTube, Instagram, Facebook, Description, Receipt, Sms, History, Payment, Assessment, DeleteOutline } from "@mui/icons-material"; // Material UI icons
import Navbar from "@/components/Navbar";

const Account = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar />
            {/* Content */}
            <Stack spacing={4} sx={{ padding: "40px", backgroundColor: "#f4f6f8" }}>
                {/* Account Details Section */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        justifyContent: "space-between",
                    }}
                >
                    {/* Card 1 - Full width */}
                    <Box
                        sx={{
                            backgroundColor: "white",
                            padding: "24px",
                            borderRadius: "12px",
                            width: "100%", // Full width
                            position: "relative", // For positioning the delete button
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold">
                            Detalles de la Cuenta
                        </Typography>
                        <Stack direction="row" justifyContent="space-between" mt={2}>
                            <Typography variant="body1" sx={{ fontWeight: "500" }}>
                                Cuenta: #000230518144
                            </Typography>

                            {/* Balance with styling improvements */}
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#388e3c", // Green color for balance
                                    fontSize: "1rem", // Larger font size
                                }}
                            >
                                Balance: $0.00
                            </Typography>
                        </Stack>
                        <Typography variant="body2" mt={1}>
                            Descripción de la Cuenta: Apartamento Hogar
                        </Typography>

                        {/* Actions Section with options */}
                        <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: "20px" }}>
                            Opciones de Cuenta:
                        </Typography>

                        {/* Button rows */}
                        <Stack direction="row" spacing={2} mt={2}>
                            <Button
                                variant="outlined"
                                sx={{
                                    textTransform: "none",
                                    borderColor: "#4f7184",
                                    '&:hover': {
                                        borderColor: "#3d5b69",
                                    },
                                    color: "#4f7184"
                                }}
                                startIcon={<Description />}
                            >
                                Detalle de la cuenta
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    textTransform: "none",
                                    borderColor: "#4f7184",
                                    '&:hover': {
                                        borderColor: "#3d5b69",
                                    },
                                    color: "#4f7184"
                                }}
                                startIcon={<Receipt />}
                            >
                                Certificación de servicio
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    textTransform: "none",
                                    borderColor: "#4f7184",
                                    '&:hover': {
                                        borderColor: "#3d5b69",
                                    },
                                    color: "#4f7184"
                                }}
                                startIcon={<Sms />}
                            >
                                Factura electrónica y envío de SMS
                            </Button>
                        </Stack>
                        <Stack direction="row" spacing={2} mt={2}>
                            <Button
                                variant="outlined"
                                sx={{
                                    textTransform: "none",
                                    borderColor: "#4f7184",
                                    '&:hover': {
                                        borderColor: "#3d5b69",
                                    },
                                    color: "#4f7184"
                                }}
                                startIcon={<History />}
                            >
                                Historial de facturas
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    textTransform: "none",
                                    borderColor: "#4f7184",
                                    '&:hover': {
                                        borderColor: "#3d5b69",
                                    },
                                    color: "#4f7184"
                                }}
                                startIcon={<Payment />}
                            >
                                Plan de pago
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    textTransform: "none",
                                    borderColor: "#4f7184",
                                    '&:hover': {
                                        borderColor: "#3d5b69",
                                    },
                                    color: "#4f7184"
                                }}
                                startIcon={<Assessment />}
                            >
                                Informe CCR
                            </Button>
                        </Stack>

                        {/* Delete Button on Right */}
                        <Button
                            startIcon={<DeleteOutline />}
                            size="medium"
                            sx={{
                                fontSize: 11,
                                position: "absolute",
                                top: "20px",
                                right: "20px",
                                backgroundColor: "#d32f2f",
                                color: "white",
                                '&:hover': {
                                    backgroundColor: "#d32f2f",
                                },
                            }}
                        >
                            Eliminar cuenta
                        </Button>
                    </Box>
                </Box>

                {/* Address Section (Card 2) and Redes Sociales & Cuadro Telefónico (Card 3) */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 3,
                        justifyContent: "space-between",
                    }}
                >
                    {/* Card 2 */}
                    <Box
                        sx={{
                            backgroundColor: "white",
                            padding: "24px",
                            borderRadius: "12px",
                            width: { xs: "100%", sm: "48%" }, // 2 cards per row on medium screens
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold">
                            Dirección Física
                        </Typography>
                        <Typography variant="body2" mt={1}>
                            604 Avenida Barbosa
                            <br />
                            Edif. Sergio Cuevas Bustamante
                            <br />
                            Hato Rey, San Juan
                        </Typography>
                        <Typography variant="h6" fontWeight="bold" mt={2}>
                            Dirección Postal
                        </Typography>
                        <Typography variant="body2" mt={1}>
                            PO Box 7066
                            <br />
                            San Juan, PR 00916-7066
                        </Typography>
                    </Box>

                    {/* Redes Sociales & Cuadro Telefónico Section (Card 3) */}
                    <Box
                        sx={{
                            backgroundColor: "white",
                            padding: "24px",
                            borderRadius: "12px",
                            width: { xs: "100%", sm: "48%" }, // 2 cards per row on medium screens
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold">
                            Redes Sociales
                        </Typography>
                        <Stack direction="row" spacing={2} mt={1}>
                            <Button
                                variant="outlined"
                                sx={{
                                    width: "100%",
                                    padding: "10px 20px",
                                    textTransform: "none",
                                    borderColor: "#4f7184",
                                    '&:hover': {
                                        borderColor: "#3d5b69",
                                    },
                                    color: "#4f7184"
                                }}
                                startIcon={<YouTube />}
                            >
                                YouTube
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    width: "100%",
                                    padding: "10px 20px",
                                    textTransform: "none",
                                    borderColor: "#4f7184",
                                    '&:hover': {
                                        borderColor: "#3d5b69",
                                    },
                                    color: "#4f7184"
                                }}
                                startIcon={<Instagram />}
                            >
                                Instagram
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    width: "100%",
                                    padding: "10px 20px",
                                    textTransform: "none",
                                    borderColor: "#4f7184",
                                    '&:hover': {
                                        borderColor: "#3d5b69",
                                    },
                                    color: "#4f7184"
                                }}
                                startIcon={<Facebook />}
                            >
                                Facebook
                            </Button>
                        </Stack>

                        <Typography variant="h6" fontWeight="bold" mt={2}>
                            Cuadro Telefónico
                        </Typography>
                        <Typography variant="body2" mt={1}>
                            Servicio al cliente: (787) 620-2482
                            <br />
                            Audio impedidos: (787) 679-7322
                            <br />
                            Cuadro General: (787) 620-2777
                        </Typography>
                    </Box>
                </Box>

                {/* External Links Section */}
                <Box
                    sx={{
                        backgroundColor: "white",
                        padding: "24px",
                        borderRadius: "12px",
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        PR.GOV
                    </Typography>
                    <Stack direction="row" spacing={2} mt={1}>
                        <Button variant="outlined" size="small" sx={{ color: "#4f7184", borderColor: "#4f7184" }}>
                            Accesibilidad PRITS 2023
                        </Button>
                        <Button variant="outlined" size="small" sx={{ color: "#4f7184", borderColor: "#4f7184" }}>
                            Oficina del Inspector General (OIG)
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </>
    );
};

export default Account;