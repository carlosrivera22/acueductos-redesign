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
                            color: "white", // Button color
                            backgroundColor: "#4f7184",
                            '&:hover': {
                                backgroundColor: "#4f7184", // Optional hover effect
                            },
                        }}
                    >
                        <Edit />
                    </IconButton>

                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
                        Detalles de la Cuenta
                    </Typography>

                    {/* Account Information */}
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                        <Stack spacing={2}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                Número de cuenta: <Chip label="000230518144" sx={{ borderRadius: "4px", color: "#4f7184", fontWeight: "bold" }} />
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                Nombre de cliente: <Chip label="Carlos Geronimo Rivera Velazquez" sx={{ borderRadius: "4px", color: "#4f7184", fontWeight: "bold" }} />
                            </Typography>
                        </Stack>
                    </Stack>

                    <Typography variant="body2" mt={2}>
                        <b>Descripción de la Cuenta: Apartamento Hogar</b>
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    {/* Address Section */}
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="h6" fontWeight="bold">
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
                        <Typography variant="h6" fontWeight="bold">
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
                        position: "relative",  // Make sure the parent has relative positioning
                    }}
                >
                    {/* Move the button to the top right */}
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#4f7184",
                            "&:hover": { backgroundColor: "#3d5b69" },
                            padding: "8px 20px",
                            fontWeight: "bold",
                            textTransform: "none",
                            position: "absolute",
                            top: "24px",
                            right: "24px",  // Position it to the top-right of the box
                        }}
                    >
                        Ver historial de facturas
                    </Button>

                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                        Última Factura
                    </Typography>

                    <Stack direction="row" spacing={3} alignItems="center" justifyContent="space-between">
                        {/* Information Section */}
                        <Stack spacing={2} sx={{ flex: 1 }}>
                            <Typography variant="body1">
                                <strong>Fecha:</strong>
                                <Chip
                                    label="2025-01-21"
                                    sx={{
                                        borderRadius: "4px",
                                        backgroundColor: "#f0f3f7",
                                        color: "#4f7184",
                                        fontWeight: "bold",
                                        marginLeft: "8px",
                                        padding: "4px 12px",
                                    }}
                                />
                            </Typography>
                            <Typography variant="body1">
                                <strong>Fecha de Vencimiento:</strong>
                                <Chip
                                    label="2025-02-11"
                                    sx={{
                                        borderRadius: "4px",
                                        backgroundColor: "#f0f3f7",
                                        color: "#4f7184",
                                        fontWeight: "bold",
                                        marginLeft: "8px",
                                        padding: "4px 12px",
                                    }}
                                />
                            </Typography>
                            <Typography variant="body1">
                                <strong>Número de Factura:</strong>
                                <Chip
                                    label="204021278085"
                                    sx={{
                                        borderRadius: "4px",
                                        backgroundColor: "#f0f3f7",
                                        color: "#4f7184",
                                        fontWeight: "bold",
                                        marginLeft: "8px",
                                        padding: "4px 12px",
                                    }}
                                />
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>

                {/* Balance Information Section */}
                <Box
                    sx={{
                        backgroundColor: "white",
                        padding: "24px",
                        borderRadius: "12px",
                        boxShadow: 3,
                        width: "100%",
                    }}
                >
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                        Información de Balance
                    </Typography>
                    <Stack direction="row" spacing={3} justifyContent="space-between">
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="body1">Cargos vencidos: $0</Typography>
                            <Typography variant="body1">Cargos Corrientes: $0</Typography>
                            <Typography variant="body1">Cargos objetados: $0</Typography>
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="h5" fontWeight="bold" sx={{ color: "#388e3c" }}>
                                Balance: $0
                            </Typography>
                        </Box>
                    </Stack>

                    <Divider sx={{ my: 2 }} />

                    <Stack>
                        <Typography variant="h6" fontWeight="bold">
                            Información Adicional
                        </Typography>
                        <Typography variant="body1" mt={1}>
                            Plan de pago: $0
                        </Typography>
                    </Stack>

                    {/* Balance Verification Button */}
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#388e3c",
                            color: "white",
                            marginTop: "20px",
                            "&:hover": {
                                backgroundColor: "#2c6e29",
                            },
                            padding: "12px 24px",
                            fontSize: "16px",
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