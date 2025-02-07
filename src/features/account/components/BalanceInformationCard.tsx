import { Stack, Box, Typography, Divider, Button } from "@mui/material";

const BalanceInformationCard = () => {
    return (
        <Box
            sx={{
                backgroundColor: "white",
                padding: "24px",
                borderRadius: "16px",
                boxShadow: 4,
                width: "100%",
                position: "relative",
                display: "flex",
                flexDirection: "column", // Stack elements vertically
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
                    top: 30,
                    right: 30,
                    color: "#388e3c",
                    fontSize: "1rem",
                    fontWeight: "700",
                }}
            >
                Balance: <span>$0</span>
            </Typography>

            {/* Balance Information */}
            <Stack direction="row" spacing={3} justifyContent="space-between" sx={{ mb: 3 }}>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ color: "#4f7184", fontWeight: "500", mb: 1 }}>
                        Cargos Vencidos: <span style={{ fontWeight: "bold" }}>$0</span>
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#4f7184", fontWeight: "500", mb: 1 }}>
                        Cargos Corrientes: <span style={{ fontWeight: "bold" }}>$0</span>
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#4f7184", fontWeight: "500" }}>
                        Cargos Objetados: <span style={{ fontWeight: "bold" }}>$0</span>
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
                }}
            >
                Verificar pagos pendientes
            </Button>
        </Box>
    );
};

export default BalanceInformationCard;