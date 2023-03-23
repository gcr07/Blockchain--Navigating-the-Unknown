# HTB Cyber Apocalypse CTF-2023 Blockchain -Navigating the Unknown Writeup



No tenia nodejs los comandos que use son:

```
sudo apt install nodejs
node -v
sudo apt install npm
npm install web3

```



## Solucion


```
const Web3 = require(‘web3’);
const web3 = new Web3(‘http://IP_nodo');

const contractABI = [se genera el abi…]

const account = web3.eth.accounts.privateKeyToAccount(‘0xa6a5c…’); contract = new web3.eth.Contract(contractABI, contractAddress);

const functionAbi = contractABI.find(element => element.name === ‘updateSensors’);
const functionArguments = [10];

const encodedFunction = contract.methods[functionAbi.name](…functionArguments).encodeABI();

const txObject = {
from: account.address,
to: contractAddress,
gas: 100000,
data: encodedFunction
};

web3.eth.accounts.signTransaction(txObject, account.privateKey)
.then(signedTx => {
web3.eth.sendSignedTransaction(signedTx.rawTransaction)
.on(‘receipt’, console.log);
})
.catch(console.error);

```
