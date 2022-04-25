import React from "react";
import {BlockchainService} from "./blockchain-service";
// import {Phase} from "./utils";
import {Admin} from "./page/admin";

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
        <div>
            <Admin />
        </div>
    )
}
