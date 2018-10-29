// Contracts
const EternalStorageProxy = artifacts.require('./EternalStorageProxy.sol');
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
