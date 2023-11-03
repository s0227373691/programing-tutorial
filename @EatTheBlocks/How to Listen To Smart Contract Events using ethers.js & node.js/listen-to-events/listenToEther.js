const ethers = require("ethers");
const usdtABI = require("./abis/usdt.json");
require("dotenv").config();

const main = async () => {
  const usdtAddr = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  const provider = new ethers.WebSocketProvider(
    `wss://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_WEBSOCKET}`
  );

  const contract = new ethers.Contract(usdtAddr, usdtABI, provider);
  contract.on("Transfer", (from, to, value, event) => {
    let info = {
      from,
      to,
      value: ethers.formatEther(value, 6),
      data: event,
    };
    console.log(info);
  });
};

main();
