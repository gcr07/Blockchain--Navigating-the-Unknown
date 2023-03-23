const solc = require('solc');
const fs = require('fs');



function compileContract(fileName, contractName) {
  const contractCode = fs.readFileSync(fileName, 'utf8');

  const input = {
    language: 'Solidity',
    sources: {
      [fileName]: {
        content: contractCode,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['abi'],
        },
      },
    },
  };

  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  return output.contracts[fileName][contractName].abi;
}

const fileName = 'ShootingArea.sol';
const contractName = 'ShootingArea';

const contractABI = compileContract(fileName, contractName);

console.log(contractABI)
