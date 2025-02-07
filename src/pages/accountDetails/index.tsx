import React from "react";
import { Stack } from "@mui/material";
import Navbar from "@/components/Navbar";
import AccountDetailsCard from "@/features/account/components/AccountDetailsCard";
import LastInvoiceCard from "@/features/account/components/LastInvoiceCard";
import BalanceInformationCard from "@/features/account/components/BalanceInformationCard";

const AccountDetails = () => {
    return (
        <Stack sx={{ backgroundColor: "#f4f6f8" }} spacing={5} pb={5}>
            <Navbar />
            <Stack direction="row" sx={{ paddingX: "40px", width: "100%" }}>
                <AccountDetailsCard />
            </Stack>
            <Stack direction={"row"} sx={{ paddingX: "40px" }} spacing={3} >
                <BalanceInformationCard />
                <LastInvoiceCard />
            </Stack>
        </Stack>
    );
};

export default AccountDetails;