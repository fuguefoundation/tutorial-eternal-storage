// Config
const config = require('../truffle.js');

// Contracts
const Proxy = artifacts.require('./Proxy.sol');
const EternalStorage = artifacts.require('./EternalStorage.sol');
const EternalStorageProxy = artifacts.require('./EternalStorageProxy.sol');
const OwnedUpgradeabilityProxy = artifacts.require('./OwnedUpgradeabilityProxy.sol');
const UpgradeabilityOwnerStorage = artifacts.require('./UpgradeabilityOwnerStorage.sol');
const UpgradeabilityProxy = artifacts.require('./UpgradeabilityProxy.sol');
const UpgradeabilityStorage = artifacts.require('./UpgradeabilityStorage.sol');
const Ownable = artifacts.require('./test/Ownable.sol');
const Token_V0 = artifacts.require('./test/Token_V0.sol');
const Token_V1 = artifacts.require('./test/Token_V1.sol');
//const Token_V2 = artifacts.require('./test/Token_V2.sol');
//const Token_V3 = artifacts.require('./test/Token_V3.sol');

module.exports = async (deployer, network) => {

    console.log(`${"-".repeat(30)}
    DEPLOYING ETERNAL STORAGE CONTRACTS...\n
    Using ` + network + ` network\n`);

  deployer.deploy([
    EternalStorageProxy,
    Token_V0,
    Token_V1
  ]);

};
