import Web3 from "web3"
import { Web3Ethereum } from "@rarible/web3-ethereum"
import { toAddress } from "@rarible/types"
import { createRaribleSdk } from "./index"

test("fill", async () => {
	const provider = new Web3.providers.HttpProvider("https://node-mainnet.rarible.com")
	const web3 = new Web3(provider)
	const from = toAddress("0x207f86e2795666365747aaf1e86a4114bebd6fab")
	const sdk = createRaribleSdk(new Web3Ethereum({ web3, from }), "mainnet")
	const order = await sdk.apis.order.getOrderByHash({ hash: "0xf1a7384b0eeddc41dd503ccbfaa91d2e1fc2cb35b6abd048f50452e90d2da82e" })
	if (order.type === "RARIBLE_V2") {
		sdk.order.fill({
			order,
			amount: 1,
		})
	}
})
