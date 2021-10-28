import Web3 from "web3"
import { Web3Ethereum } from "@rarible/web3-ethereum"
import { toAddress } from "@rarible/types"
import { createRaribleSdk } from "./index"

test("fill", async () => {
	const provider = new Web3.providers.HttpProvider("https://node-mainnet.rarible.com")
	const web3 = new Web3(provider)
	const from = toAddress("0x58432314d6b937c2d19f11fdfef27f4bafb6910b")
	const sdk = createRaribleSdk(new Web3Ethereum({ web3, from }), "mainnet")
	const order = await sdk.apis.order.getOrderByHash({ hash: "0xc8f18cc7ae293d3c98b9adbd16f7e6f4fd0fcbe38b345de2ccd90a4a334c8bb5" })
	if (order.type === "RARIBLE_V2") {
		sdk.order.fill({
			order,
			amount: 1,
		})
	}
})
