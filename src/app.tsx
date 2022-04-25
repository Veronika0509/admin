import React from "react";
import {BlockchainService} from "./blockchain-service";
// import {Phase} from "./utils";
import {CheckSection} from "./page/admin";
import {RegisterSection} from "./page/admin";
import {VersionSection} from "./page/admin";
import {BulkSection} from "./page/admin";
import {NewVersionsSection} from "./page/admin";
import {TransferSection} from "./page/admin";

export const App: React.FC = () => {
    const [walletConnected, setWalletConnected] = React.useState(false)
    const [walletConnecting, setWalletConnecting] = React.useState(false)
    const [admin, setAdmin] = React.useState(true)

    const connectWallet = () => {
        setWalletConnecting(true)
        BlockchainService.connectWallet().then( address => {
            setWalletConnecting(false)
            setWalletConnected(true)

            setAdmin(BlockchainService.isAdmin(address))
        })
    }

    return (
        <div className={'container'}>
            <CheckSection />
            <RegisterSection />
            <VersionSection />
            <BulkSection />
            <NewVersionsSection />
            <TransferSection />
        </div>
    )
}