import {Phase} from "./utils";

export const BlockchainService = {
    connectWallet: () => {
        return new Promise<string>(resolve => setTimeout(() => resolve("0xE06101a6e01FEcf8aA816c6A87f82c4b21f3d9CD"), 3000))
    },

    isAdmin(address: string) {
        return true;
    },

    registerPurchase(phase: Phase, beneficiaryAddress: string, amount: number) {

    }
}
