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
                        borderRadius: "16px",
                        boxShadow: 3,
                        width: "100%",
                        position: "relative",
                    }}
                >
                    {/* Edit Button */}
                    <IconButton
                        sx={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            color: "#ffffff",
                            backgroundColor: "#4f7184",
                            '&:hover': {
                                backgroundColor: "#3d5b69",
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
                            borderBottom: "2px solid #4f7184",
                            paddingBottom: "16px",
                            color: "#4f7184",
                        }}
                    >
                        Detalles de la Cuenta
                    </Typography>

                    {/* Account Information */}
                    <Stack spacing={2}>
                        <Typography component="div" sx={{ fontWeight: 500, color: "#333" }}>
                            <strong>Número de cuenta:</strong> 000230518144
                        </Typography>
                        <Typography component="div" sx={{ fontWeight: 500, color: "#333" }}>
                            <strong>Nombre de cliente:</strong> Carlos Geronimo Rivera Velazquez
                        </Typography>
                    </Stack>

                    <Typography mt={2} component="div" sx={{ fontWeight: 500, color: "#333" }}>
                        <strong>Descripción de la Cuenta:</strong> Apartamento Hogar
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    {/* Address Section */}
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: "#4f7184" }}>
                            Dirección física del servicio
                        </Typography>
                        <Typography variant="body2" mt={1} sx={{ color: "#555" }}>
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
                        <Typography variant="body2" mt={1} sx={{ color: "#555" }}>
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
                        borderRadius: "16px",
                        boxShadow: 3,
                        width: "100%",
                        position: "relative",
                    }}
                >
                    {/* Edit Title */}
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                            mb: 2,
                            borderBottom: "2px solid #4f7184",
                            paddingBottom: "8px",
                            color: "#4f7184",
                        }}
                    >
                        Última Factura
                    </Typography>

                    {/* Invoice Number */}
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
                                borderRadius: "8px",
                                color: "#4f7184",
                                fontWeight: "bold",
                                marginLeft: "8px",
                            }}
                        />
                    </Typography>

                    {/* Information Section */}
                    <Stack spacing={2} sx={{ flex: 1 }}>
                        {/* Date Information */}
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Typography variant="body1" sx={{ fontWeight: 500, color: "#333" }}>
                                <strong>Fecha:</strong> 2025-01-21
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Typography variant="body1" sx={{ fontWeight: 500, color: "#333" }}>
                                <strong>Fecha de Vencimiento:</strong> 2025-02-11
                            </Typography>
                        </Box>

                        {/* Small Button */}
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#4f7184",
                                "&:hover": { backgroundColor: "#3d5b69" },
                                padding: "10px 20px",
                                fontWeight: "bold",
                                textTransform: "none",
                                borderRadius: "30px",
                                alignSelf: "flex-start",
                                boxShadow: 3,
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
                        borderRadius: "16px",
                        boxShadow: 4,
                        width: "100%",
                        position: "relative",
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
                            fontSize: "1.2rem",
                        }}
                    >
                        Información de Balance
                    </Typography>

                    {/* Balance Positioned Top Right */}
                    <Typography
                        fontWeight="bold"
                        sx={{
                            position: "absolute",
                            top: 20,
                            right: 30,
                            color: "#388e3c",
                            fontSize: "1.4rem",
                            fontWeight: "700",
                        }}
                    >
                        Balance: <span>$0</span>
                    </Typography>

                    {/* Balance Information */}
                    <Stack direction="row" spacing={3} justifyContent="space-between" sx={{ mb: 3 }}>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="body1" sx={{ color: "#4f7184", fontWeight: "500", mb: 1 }}>
                                Cargos vencidos: <span style={{ fontWeight: "bold" }}>$0</span>
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#4f7184", fontWeight: "500", mb: 1 }}>
                                Cargos Corrientes: <span style={{ fontWeight: "bold" }}>$0</span>
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#4f7184", fontWeight: "500" }}>
                                Cargos objetados: <span style={{ fontWeight: "bold" }}>$0</span>
                            </Typography>
                        </Box>
                    </Stack>

                    <Divider sx={{ my: 2, backgroundColor: "#dcdcdc" }} />

                    {/* Additional Information */}
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
                            "&:hover": { backgroundColor: "#3d5b69" },
                            padding: "10px 20px",
                            fontWeight: "bold",
                            textTransform: "none",
                            borderRadius: "30px",
                            alignSelf: "flex-start",
                            boxShadow: 3,
                        }}
                    >
                        Verificar pagos pendientes
                    </Button>
                </Box>
            </Stack>
        </>
    );
};

export default AccountDetails;