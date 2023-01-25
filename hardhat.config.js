require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require('hardhat-contract-sizer');
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: process.env.ALCHEMY_URL,
      accounts:[process.env.WALLET_PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.17",
  
}
}

