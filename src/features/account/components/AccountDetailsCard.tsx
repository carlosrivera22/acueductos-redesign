import { Edit } from "@mui/icons-material"
import { Stack, Box, IconButton, Typography, Divider, Chip, Button } from "@mui/material"

const AccountDetailsCard = () => {
    return (
        <Stack direction="row" spacing={4} sx={{ width: "100%" }}>
            {/* Account Details Card */}
            <Box
                sx={{
                    backgroundColor: "white",
                    padding: "24px",
                    borderRadius: "16px",
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
                    <Typography variant="body2" sx={{ fontWeight: 500, color: "#333" }}>
                        <strong>Nombre de cliente:</strong> Carlos Geronimo Rivera Velazquez
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: "#333" }}>
                        <strong>Descripción de la Cuenta:</strong> Apartamento Hogar
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: "#333" }}>
                        <strong>Número de cuenta:</strong> 000230518144
                    </Typography>

                </Stack>

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
        </Stack>

    )
}

export default AccountDetailsCard;