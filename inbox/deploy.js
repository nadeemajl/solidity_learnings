const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'oppose wait artefact resemble govern eternal expose mango gift execute symptom assume',
    'https://rinkeby.infura.io/v3/194285a0d2c54171bdd33b3cea38d475'
);

const web3 = new Web3(provider);


const deploy = async () => {

    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: ('0x'+ bytecode), arguments: ['Hi There!']})
    .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to ', result.options.address);
};

deploy();

