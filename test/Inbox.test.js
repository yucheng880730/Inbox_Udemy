const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile')

let accounts;
let inbox;

beforeEach(async() => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts()

    // Use one of the accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface)).deploy({
         data: bytecode, 
         arguments: ['Hi there!'] 
    })
    .send({ from: accounts[0], gas: '1000000' })
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });
});

/*
class Car {
    park() {
        return 'stopped';
    }

    drive() {
        return 'vroom';
    }
}

let car;

beforeEach(() => {
    car = new Car();
});

describe('Car', () => {
    it('can park', () => {
        assert.strictEqual(car.park(), 'stopped');
    });

    it('can drive', () => {
        assert.strictEqual(car.drive(), 'vroom');
    });
});
*/