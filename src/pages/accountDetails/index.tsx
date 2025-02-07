import React from "react";
import { Box, Typography, Stack, Button, Divider, Chip, IconButton } from "@mui/material";
import Navbar from "@/components/Navbar";
import { Edit } from "@mui/icons-material";

const AccountDetails = () => {
    return (
        <>
            <Navbar />
            <Stack spacing={4} sx={{ padding: "40px", backgroundColor: "#f4f6f8" }}>
                {/* Account Details Card */}
                <Box
                    sx={{
                        backgroundColor: "white",
                        padding: "24px",
                        borderRadius: "12px",
                        boxShadow: 3,
                        width: "100%",
                        position: "relative", // For absolute positioning of the edit button
                    }}
                >
                    {/* Edit Button */}
                    <IconButton
                        sx={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            color: "#ffffff", // White for the button icon
                            backgroundColor: "#4f7184",
                            '&:hover': {
                                backgroundColor: "#3d5b69", // Optional hover effect
                            },
                        }}
                    >
                        <Edit />
                    </IconButton>

                    {/* Account Title */}
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{
                            mb: 3,
                            borderBottom: "0.5px solid #4f7184", // Bottom border for emphasis
                            paddingBottom: "20px",
                            color: "#4f7184", // Color for the title
                        }}
                    >
                        Detalles de la Cuenta
                    </Typography>

                    {/* Account Information */}
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                        <Stack spacing={2}>
                            <Typography component={"div"} sx={{ fontWeight: 500 }}>
                                Número de cuenta:{" "}
                                <Chip label="000230518144" sx={{ borderRadius: "4px", color: "#4f7184", fontWeight: "bold" }} />
                            </Typography>
                            <Typography component={"div"} sx={{ fontWeight: 500 }}>
                                Nombre de cliente:{" "}
                                <Chip label="Carlos Geronimo Rivera Velazquez" sx={{ borderRadius: "4px", color: "#4f7184", fontWeight: "bold" }} />
                            </Typography>
                        </Stack>
                    </Stack>

                    <Typography mt={2} component={"div"}>
                        Descripción de la Cuenta: <Chip label="Apartamento Hogar" sx={{
                            borderRadius: "4px",
                            color: "#4f7184",
                            fontWeight: "bold",
                        }} />
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    {/* Address Section */}
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: "#4f7184" }}>
                            Dirección física del servicio
                        </Typography>
                        <Typography variant="body2" mt={1}>
                            Cond Atrium Plaza
                            <br />
                            230 Ave Arterial Hostos Apt 406 E
                            <br />
                            San Juan PR 00918
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ mt: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: "#4f7184" }}>
                            Dirección postal
                        </Typography>
                        <Typography variant="body2" mt={1}>
                            PO Box 8130
                            <br />
                            Humacao PR 00792
                        </Typography>
                    </Box>
                </Box>

                {/* Last Invoice Section */}
                <Box
                    sx={{
                        backgroundColor: "white",
                        padding: "24px",
                        borderRadius: "12px",
                        boxShadow: 3,
                        width: "100%",
                        position: "relative",  // Needed for absolute positioning
                    }}
                >
                    {/* Edit Title */}
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                            mb: 2,
                            borderBottom: "0.5px solid #4f7184",
                            paddingBottom: "8px",
                            color: "#4f7184",
                        }}
                    >
                        Última Factura
                    </Typography>

                    {/* Invoice Number at the top-right */}
                    <Typography
                        variant="body1"
                        sx={{
                            position: "absolute",
                            top: "24px",
                            right: "24px",
                            fontWeight: "bold",
                            color: "#4f7184",
                        }}
                        component={"div"}
                    >
                        <strong>Número de Factura:</strong>
                        <Chip
                            label="204021278085"
                            sx={{
                                borderRadius: "4px",
                                color: "#4f7184",
                                fontWeight: "bold",
                                marginLeft: "8px",
                            }}
                        />
                    </Typography>

                    <Stack direction="row" spacing={3} alignItems="center" justifyContent="space-between">
                        {/* Information Section */}
                        <Stack spacing={2} sx={{ flex: 1 }}>
                            <Typography variant="body1" component={"div"}>
                                Fecha:
                                <Chip
                                    label="2025-01-21"
                                    sx={{
                                        borderRadius: "4px",
                                        color: "#4f7184",
                                        fontWeight: "bold",
                                        marginLeft: "5px",
                                    }}
                                />
                            </Typography>
                            <Typography variant="body1" component={"div"}>
                                Fecha de Vencimiento:
                                <Chip
                                    label="2025-02-11"
                                    sx={{
                                        borderRadius: "4px",
                                        color: "#4f7184",
                                        fontWeight: "bold",
                                        marginLeft: "5px",
                                    }}
                                />
                            </Typography>
                        </Stack>

                        {/* Small Button */}
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#4f7184",
                                "&:hover": { backgroundColor: "#3d5b69" },
                                padding: "6px 12px",  // Reduced padding for a smaller button
                                fontWeight: "bold",
                                textTransform: "none",
                                alignSelf: "flex-start", // Align the button to the top
                            }}
                        >
                            Ver historial de facturas
                        </Button>
                    </Stack>
                </Box>

                {/* Balance Information Section */}
                <Box
                    sx={{
                        backgroundColor: "white",
                        padding: "24px",
                        borderRadius: "16px",  // Slightly rounded corners for a modern look
                        boxShadow: 4,  // Stronger shadow for a more elevated look
                        width: "100%",
                        transition: "all 0.3s ease", // Smooth transition for hover effect
                        position: "relative", // For positioning the balance
                        '&:hover': {
                            boxShadow: 8,  // Deep shadow on hover for a more interactive feel
                        },
                    }}
                >
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                            mb: 3,
                            borderBottom: "2px solid #4f7184",
                            paddingBottom: "10px",
                            color: "#4f7184",
                            letterSpacing: "0.5px",  // Slightly spaced out text for elegance
                        }}
                    >
                        Información de Balance
                    </Typography>

                    {/* Balance Positioned Top Right */}
                    <Typography fontWeight="bold" sx={{
                        position: "absolute",
                        top: 20,
                        right: 30,
                        color: "#388e3c",
                        fontSize: "1.2rem",
                        fontWeight: "700"
                    }}>
                        Balance: <span>$0</span>
                    </Typography>

                    <Stack direction="row" spacing={3} justifyContent="space-between" sx={{ mb: 3 }}>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="body1" sx={{ color: "#4f7184", fontWeight: "500", marginBottom: "8px" }}>
                                Cargos vencidos: <span style={{ fontWeight: "bold" }}>$0</span>
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#4f7184", fontWeight: "500", marginBottom: "8px" }}>
                                Cargos Corrientes: <span style={{ fontWeight: "bold" }}>$0</span>
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#4f7184", fontWeight: "500" }}>
                                Cargos objetados: <span style={{ fontWeight: "bold" }}>$0</span>
                            </Typography>
                        </Box>
                    </Stack>

                    <Divider sx={{ my: 2, backgroundColor: "#dcdcdc" }} />

                    <Stack sx={{ mb: 3 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: "#4f7184" }}>
                            Información Adicional
                        </Typography>
                        <Typography variant="body1" mt={1} sx={{ fontWeight: "500" }}>
                            Plan de pago: <span style={{ fontWeight: "bold" }}>$0</span>
                        </Typography>
                    </Stack>

                    {/* Balance Verification Button */}
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#4f7184",
                            color: "white",
                            marginTop: "20px",
                            padding: "12px 24px",
                            fontSize: "12px",
                            borderRadius: "30px",  // Rounded button for modern style
                            '&:hover': {
                                backgroundColor: "#2c6e29",
                                transform: "scale(1.05)",  // Slight scale effect on hover
                            },
                            transition: "transform 0.3s ease", // Smooth hover transition
                            fontWeight: "bold"
                        }}
                    >
                        Verificar Balance
                    </Button>
                </Box>
            </Stack>
        </>
    );
};

export default AccountDetails;