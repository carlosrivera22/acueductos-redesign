import Navbar from "@/components/Navbar";
import { Box, Stack, Typography, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Divider } from "@mui/material";

const InvoiceHistory = () => {
    const invoices = [
        { invoiceNumber: '204021278085', invoiceDate: '2025-01-21', dueDate: '2025-02-11', currentCharges: 29.29, totalAmount: 29.29 },
        { invoiceNumber: '203491277779', invoiceDate: '2024-12-18', dueDate: '2025-01-08', currentCharges: 29.29, totalAmount: 29.29 },
        { invoiceNumber: '203491727726', invoiceDate: '2024-11-18', dueDate: '2024-12-09', currentCharges: 29.29, totalAmount: 29.29 },
        { invoiceNumber: '203511996666', invoiceDate: '2024-10-18', dueDate: '2024-11-08', currentCharges: 29.29, totalAmount: 29.29 },
        { invoiceNumber: '204021278085', invoiceDate: '2025-01-21', dueDate: '2025-02-11', currentCharges: 29.29, totalAmount: 29.29 },
        { invoiceNumber: '203491277779', invoiceDate: '2024-12-18', dueDate: '2025-01-08', currentCharges: 29.29, totalAmount: 29.29 },
        { invoiceNumber: '203491727726', invoiceDate: '2024-11-18', dueDate: '2024-12-09', currentCharges: 29.29, totalAmount: 29.29 },
        { invoiceNumber: '203511996666', invoiceDate: '2024-10-18', dueDate: '2024-11-08', currentCharges: 29.29, totalAmount: 29.29 },
        { invoiceNumber: '203491727726', invoiceDate: '2024-11-18', dueDate: '2024-12-09', currentCharges: 29.29, totalAmount: 29.29 },
        { invoiceNumber: '203511996666', invoiceDate: '2024-10-18', dueDate: '2024-11-08', currentCharges: 29.29, totalAmount: 29.29 },
        // Add more invoice data here
    ];

    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: 4, backgroundColor: '#f4f6f8', width: '100%' }}>
                {/* Header */}
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
                    <Typography variant="h4" fontWeight="bold" color="text.primary">
                        Historial de Facturas
                    </Typography>
                    <Button variant="outlined" color="primary" sx={{ borderRadius: '8px' }}>Mis Cuentas</Button>
                </Stack>

                <Stack direction="row" spacing={4} justifyContent="space-between" width="100%">
                    {/* Invoice Table */}
                    <Box sx={{ flexGrow: 1 }}>
                        <TableContainer component={Paper} sx={{ borderRadius: '8px', boxShadow: 0 }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 'bold', backgroundColor: "#4f7184", color: "white" }}>Numero de Factura</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold', backgroundColor: "#4f7184", color: "white" }}>Fecha de Factura</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold', backgroundColor: "#4f7184", color: "white" }}>Fecha de Vencimiento</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold', backgroundColor: "#4f7184", color: "white" }}>Cargos Corrientes</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold', backgroundColor: "#4f7184", color: "white" }}>Total de Factura</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold', backgroundColor: "#4f7184", color: "white" }}>Acciones</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {invoices.map((invoice) => (
                                        <TableRow key={invoice.invoiceNumber} sx={{ '&:hover': { backgroundColor: '#f1f8e9' } }}>
                                            <TableCell>{invoice.invoiceNumber}</TableCell>
                                            <TableCell>{invoice.invoiceDate}</TableCell>
                                            <TableCell>{invoice.dueDate}</TableCell>
                                            <TableCell>{invoice.currentCharges}</TableCell>
                                            <TableCell>{invoice.totalAmount}</TableCell>
                                            <TableCell>
                                                <Button variant="outlined" color="primary" sx={{ borderRadius: '8px' }}>Ver</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

                    {/* Sidebar with Subscription Information */}
                    <Box sx={{ width: '30%' }}>
                        <Box sx={{ backgroundColor: '#ffffff', padding: 3, borderRadius: '16px' }}>
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                                Cambiate a Factura Electrónica
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                Suscríbete a la facturación electrónica y ahorra tiempo y recursos.
                            </Typography>
                            <Button variant="contained" sx={{ backgroundColor: '#4f7184', '&:hover': { backgroundColor: '#34555e' }, borderRadius: '8px' }}>
                                Cambiar a Factura Electrónica
                            </Button>
                        </Box>
                    </Box>
                </Stack>
            </Box>
            <Box
                sx={{
                    backgroundColor: '#4f7184', // Nice muted teal background color
                    padding: 4,
                    borderTop: '1px solid #ddd', // Subtle border to separate content
                    color: 'white', // White text for contrast
                    boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)', // Light shadow for depth
                    marginTop: 'auto', // This ensures the footer stays at the bottom
                    position: 'sticky', // Make the footer sticky
                    bottom: 0, // Ensure it sticks to the bottom
                    left: 0, // Full width
                    width: '100%', // Full width of the screen
                }}
            >
                <Typography
                    variant="body2"
                    align="center"
                    sx={{
                        color: 'white',
                        opacity: 0.8, // Slight opacity for a softer look
                        '&:hover': {
                            opacity: 1, // Full opacity on hover for interactivity
                            transition: 'opacity 0.3s ease', // Smooth transition
                        },
                    }}
                >
                    Dirección Física: 604 Avenida Barbosa, Edif. Sergio Cuevas Bustamante, Hato Rey, San Juan
                    <br />
                    Dirección Postal: PO Box 7066, San Juan, PR 00916-7066
                </Typography>
            </Box>
        </>
    );
}

export default InvoiceHistory;