import { Box, Typography, Chip, Stack, Button } from "@mui/material";

const LastInvoiceCard = () => {
    return (
        <Box
            sx={{
                backgroundColor: "white",
                padding: "24px",
                borderRadius: "16px",
                position: "relative",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                borderTop: "3px solid #fab15a",
            }}
        >
            {/* Edit Title */}
            <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                    mb: 2,
                    borderBottom: "1px solid #dfdfdf",
                    paddingBottom: "8px",
                    color: "#4f7184",
                }}
            >
                Última Factura
            </Typography>

            {/* Invoice Number */}
            <Box
                sx={{
                    position: "absolute",
                    top: "24px",
                    right: "24px",
                }}
            >
                <Chip
                    label="204021278085"
                    sx={{
                        borderRadius: "8px",
                        color: "#4f7184",
                        fontWeight: "bold",
                        marginLeft: "8px",
                    }}
                />
            </Box>

            {/* Information Section */}
            <Stack spacing={2} sx={{ flex: 1 }}>
                {/* Date Information */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: "#333" }}>
                        <strong>Fecha:</strong> 2025-01-21
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: "#333" }}>
                        <strong>Fecha de Vencimiento:</strong> 2025-02-11
                    </Typography>
                </Box>
            </Stack>

            {/* Button at the bottom */}
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
                    marginTop: "auto", // This ensures the button is pushed to the bottom
                }}
            >
                Ver historial de facturas
            </Button>
        </Box>
    );
};

export default LastInvoiceCard;