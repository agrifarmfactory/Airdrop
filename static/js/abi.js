const abi = [ {
    "inputs": [], "stateMutability": "nonpayable", "type": "constructor"
}
,
{
    "anonymous":false, "inputs":[ {
        "indexed": true, "internalType": "address", "name": "beneficiary", "type": "address"
    }
    ,
    {
        "indexed": false, "internalType": "uint256", "name": "tokenAmount", "type": "uint256"
    }
    ],
    "name":"AirdropClaimed",
    "type":"event"
}
,
{
    "anonymous":false, "inputs":[ {
        "indexed": true, "internalType": "address", "name": "beneficiary", "type": "address"
    }
    ,
    {
        "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"
    }
    ],
    "name":"EtherTransfer",
    "type":"event"
}
,
{
    "anonymous":false, "inputs":[ {
        "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address"
    }
    ,
    {
        "indexed": true, "internalType": "address", "name": "newOwner", "type": "address"
    }
    ],
    "name":"OwnershipTransferred",
    "type":"event"
}
,
{
    "inputs":[], "name":"airdropAmount", "outputs":[ {
        "internalType": "uint256", "name": "", "type": "uint256"
    }
    ],
    "stateMutability":"view",
    "type":"function"
}
,
{
    "inputs":[], "name":"decimals", "outputs":[ {
        "internalType": "uint256", "name": "", "type": "uint256"
    }
    ],
    "stateMutability":"view",
    "type":"function"
}
,
{
    "inputs":[], "name":"dropTokens", "outputs":[ {
        "internalType": "bool", "name": "", "type": "bool"
    }
    ],
    "stateMutability":"payable",
    "type":"function"
}
,
{
    "inputs":[], "name":"fee", "outputs":[ {
        "internalType": "uint256", "name": "", "type": "uint256"
    }
    ],
    "stateMutability":"view",
    "type":"function"
}
,
{
    "inputs":[], "name":"getAirdropAmount", "outputs":[ {
        "internalType": "uint256", "name": "", "type": "uint256"
    }
    ],
    "stateMutability":"view",
    "type":"function"
}
,
{
    "inputs":[], "name":"getFee", "outputs":[ {
        "internalType": "uint256", "name": "", "type": "uint256"
    }
    ],
    "stateMutability":"view",
    "type":"function"
}
,
{
    "inputs":[], "name":"getOwner", "outputs":[ {
        "internalType": "address", "name": "", "type": "address"
    }
    ],
    "stateMutability":"view",
    "type":"function"
}
,
{
    "inputs":[], "name":"getSeller", "outputs":[ {
        "internalType": "address", "name": "", "type": "address"
    }
    ],
    "stateMutability":"view",
    "type":"function"
}
,
{
    "inputs":[ {
        "internalType": "address", "name": "_tokenAddr", "type": "address"
    }
    ],
    "name":"getTokenBalance",
    "outputs":[ {
        "internalType": "uint256", "name": "", "type": "uint256"
    }
    ],
    "stateMutability":"view",
    "type":"function"
}
,
{
    "inputs":[], "name":"getTokenContract", "outputs":[ {
        "internalType": "address", "name": "", "type": "address"
    }
    ],
    "stateMutability":"view",
    "type":"function"
}
,
{
    "inputs":[], "name":"owner", "outputs":[ {
        "internalType": "address", "name": "", "type": "address"
    }
    ],
    "stateMutability":"view",
    "type":"function"
}
,
{
    "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}
,
{
    "inputs":[], "name":"seller", "outputs":[ {
        "internalType": "address", "name": "", "type": "address"
    }
    ],
    "stateMutability":"view",
    "type":"function"
}
,
{
    "inputs":[ {
        "internalType": "uint256", "name": "_airdropAmount", "type": "uint256"
    }
    ],
    "name":"setAirdropAmount",
    "outputs":[],
    "stateMutability":"nonpayable",
    "type":"function"
}
,
{
    "inputs":[ {
        "internalType": "uint256", "name": "_fee", "type": "uint256"
    }
    ],
    "name":"setFee",
    "outputs":[],
    "stateMutability":"nonpayable",
    "type":"function"
}
,
{
    "inputs":[ {
        "internalType": "address", "name": "_tokenContract", "type": "address"
    }
    ],
    "name":"setTokenContract",
    "outputs":[],
    "stateMutability":"nonpayable",
    "type":"function"
}
,
{
    "inputs":[], "name":"tokenContract", "outputs":[ {
        "internalType": "address", "name": "", "type": "address"
    }
    ],
    "stateMutability":"view",
    "type":"function"
}
,
{
    "inputs":[ {
        "internalType": "address", "name": "newOwner", "type": "address"
    }
    ],
    "name":"transferOwnership",
    "outputs":[],
    "stateMutability":"nonpayable",
    "type":"function"
}
,
{
    "inputs":[ {
        "internalType": "address payable", "name": "beneficiary", "type": "address"
    }
    ],
    "name":"withdrawEther",
    "outputs":[],
    "stateMutability":"nonpayable",
    "type":"function"
}
,
{
    "inputs":[ {
        "internalType": "address", "name": "beneficiary", "type": "address"
    }
    ,
    {
        "internalType": "address", "name": "_tokenAddr", "type": "address"
    }
    ],
    "name":"withdrawTokens",
    "outputs":[],
    "stateMutability":"nonpayable",
    "type":"function"
}
];


export default abi;