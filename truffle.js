const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3');

var mnemonic = process.env.SEED;
var publicNode = 'https://public-node.testnet.rsk.co:443'

module.exports = {
  web3: Web3,
  networks: {
    ganache: {
      host: 'localhost',
      port: 7545,
      network_id: '*' // Match any network id
    },
    rsk: {
      provider: () =>
        new HDWalletProvider(mnemonic, publicNode),
      network_id: '*',
      gas: 2500000,
      gasPrice: 183000
    }
  }
}