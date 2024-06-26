interface Input {
    indexed?: boolean
    internalType: string
    name: string
    type: string
    components?: Input[]
}

interface Output {
    internalType: string
    name: string
    type: string
}

interface ABIEntry {
    inputs?: Input[]
    stateMutability?: string
    type: string
    name?: string
    outputs?: Output[]
    anonymous?: boolean
}

interface Version {
    simpleName: string
    ABI: ABIEntry[]
    bytecode: string
}

interface VersionData {
    [key: string]: Version
}

const versionData: VersionData = {
    v0j0: {
        simpleName: 'Version 0',
        ABI: [
            { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'sender',
                        type: 'address',
                    },
                    {
                        internalType: 'uint256',
                        name: 'balance',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'needed',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'tokenId',
                        type: 'uint256',
                    },
                ],
                name: 'ERC1155InsufficientBalance',
                type: 'error',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'approver',
                        type: 'address',
                    },
                ],
                name: 'ERC1155InvalidApprover',
                type: 'error',
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'idsLength',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'valuesLength',
                        type: 'uint256',
                    },
                ],
                name: 'ERC1155InvalidArrayLength',
                type: 'error',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'operator',
                        type: 'address',
                    },
                ],
                name: 'ERC1155InvalidOperator',
                type: 'error',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'receiver',
                        type: 'address',
                    },
                ],
                name: 'ERC1155InvalidReceiver',
                type: 'error',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'sender',
                        type: 'address',
                    },
                ],
                name: 'ERC1155InvalidSender',
                type: 'error',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'operator',
                        type: 'address',
                    },
                    { internalType: 'address', name: 'owner', type: 'address' },
                ],
                name: 'ERC1155MissingApprovalForAll',
                type: 'error',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'account',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'operator',
                        type: 'address',
                    },
                    {
                        indexed: false,
                        internalType: 'bool',
                        name: 'approved',
                        type: 'bool',
                    },
                ],
                name: 'ApprovalForAll',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [],
                name: 'CollectionUpdate',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'previousOwner',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'newOwner',
                        type: 'address',
                    },
                ],
                name: 'OwnershipTransferred',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'uint256',
                        name: 'tokenId',
                        type: 'uint256',
                    },
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'currencyAddress',
                                type: 'address',
                            },
                            {
                                internalType: 'bool',
                                name: 'isTokenSaleActive',
                                type: 'bool',
                            },
                            {
                                internalType: 'uint8',
                                name: 'decimals',
                                type: 'uint8',
                            },
                            {
                                internalType: 'uint256',
                                name: 'tokenCost',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'maxSupply',
                                type: 'uint256',
                            },
                            {
                                internalType: 'string',
                                name: 'tokenUri',
                                type: 'string',
                            },
                        ],
                        indexed: false,
                        internalType: 'struct RebelMint_v0j0.tokenData',
                        name: 'token',
                        type: 'tuple',
                    },
                ],
                name: 'TokenDeleted',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'currencyAddress',
                                type: 'address',
                            },
                            {
                                internalType: 'bool',
                                name: 'isTokenSaleActive',
                                type: 'bool',
                            },
                            {
                                internalType: 'uint8',
                                name: 'decimals',
                                type: 'uint8',
                            },
                            {
                                internalType: 'uint256',
                                name: 'tokenCost',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'maxSupply',
                                type: 'uint256',
                            },
                            {
                                internalType: 'string',
                                name: 'tokenUri',
                                type: 'string',
                            },
                        ],
                        indexed: false,
                        internalType: 'struct RebelMint_v0j0.tokenData',
                        name: 'token',
                        type: 'tuple',
                    },
                ],
                name: 'TokenUpdate',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'operator',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'from',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'to',
                        type: 'address',
                    },
                    {
                        indexed: false,
                        internalType: 'uint256[]',
                        name: 'ids',
                        type: 'uint256[]',
                    },
                    {
                        indexed: false,
                        internalType: 'uint256[]',
                        name: 'values',
                        type: 'uint256[]',
                    },
                ],
                name: 'TransferBatch',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'operator',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'from',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'to',
                        type: 'address',
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256',
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256',
                    },
                ],
                name: 'TransferSingle',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: false,
                        internalType: 'string',
                        name: 'value',
                        type: 'string',
                    },
                    {
                        indexed: true,
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256',
                    },
                ],
                name: 'URI',
                type: 'event',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                name: 'allTokenData',
                outputs: [
                    {
                        internalType: 'address',
                        name: 'currencyAddress',
                        type: 'address',
                    },
                    {
                        internalType: 'bool',
                        name: 'isTokenSaleActive',
                        type: 'bool',
                    },
                    { internalType: 'uint8', name: 'decimals', type: 'uint8' },
                    {
                        internalType: 'uint256',
                        name: 'tokenCost',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'maxSupply',
                        type: 'uint256',
                    },
                    {
                        internalType: 'string',
                        name: 'tokenUri',
                        type: 'string',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'artistName',
                outputs: [{ internalType: 'string', name: '', type: 'string' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'account',
                        type: 'address',
                    },
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                ],
                name: 'balanceOf',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'address[]',
                        name: 'accounts',
                        type: 'address[]',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'ids',
                        type: 'uint256[]',
                    },
                ],
                name: 'balanceOfBatch',
                outputs: [
                    { internalType: 'uint256[]', name: '', type: 'uint256[]' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'account',
                        type: 'address',
                    },
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    { internalType: 'uint256', name: 'value', type: 'uint256' },
                ],
                name: 'burn',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'account',
                        type: 'address',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'ids',
                        type: 'uint256[]',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'values',
                        type: 'uint256[]',
                    },
                ],
                name: 'burnBatch',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'collectionDescription',
                outputs: [{ internalType: 'string', name: '', type: 'string' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'collectionName',
                outputs: [{ internalType: 'string', name: '', type: 'string' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'contractCode',
                outputs: [{ internalType: 'string', name: '', type: 'string' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'tokenCost',
                        type: 'uint256',
                    },
                    {
                        internalType: 'address',
                        name: 'currencyAddress',
                        type: 'address',
                    },
                    {
                        internalType: 'uint256',
                        name: 'maxSupply',
                        type: 'uint256',
                    },
                    {
                        internalType: 'string',
                        name: 'tokenUri',
                        type: 'string',
                    },
                ],
                name: 'createToken',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'defaultFundsReceiver',
                outputs: [
                    { internalType: 'address', name: '', type: 'address' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'deleteLastUnmintedToken',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                ],
                name: 'exists',
                outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'getAllTokenDataJSON',
                outputs: [{ internalType: 'string', name: '', type: 'string' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'getCollectionAndTokenDataJSON',
                outputs: [{ internalType: 'string', name: '', type: 'string' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'getCollectionDataJSON',
                outputs: [{ internalType: 'string', name: '', type: 'string' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                ],
                name: 'getFundsReceiver',
                outputs: [
                    { internalType: 'address', name: '', type: 'address' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                ],
                name: 'getSingleTokenDataJSON',
                outputs: [{ internalType: 'string', name: '', type: 'string' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'getTokenCount',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'account',
                        type: 'address',
                    },
                    {
                        internalType: 'address',
                        name: 'operator',
                        type: 'address',
                    },
                ],
                name: 'isApprovedForAll',
                outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'address', name: 'to', type: 'address' },
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    {
                        internalType: 'uint256',
                        name: 'amount',
                        type: 'uint256',
                    },
                ],
                name: 'mint',
                outputs: [],
                stateMutability: 'payable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'owner',
                outputs: [
                    { internalType: 'address', name: '', type: 'address' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'renounceOwnership',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'royaltyBPS',
                outputs: [{ internalType: 'uint96', name: '', type: 'uint96' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    {
                        internalType: 'uint256',
                        name: 'salePrice',
                        type: 'uint256',
                    },
                ],
                name: 'royaltyInfo',
                outputs: [
                    { internalType: 'address', name: '', type: 'address' },
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'address', name: 'from', type: 'address' },
                    { internalType: 'address', name: 'to', type: 'address' },
                    {
                        internalType: 'uint256[]',
                        name: 'ids',
                        type: 'uint256[]',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'values',
                        type: 'uint256[]',
                    },
                    { internalType: 'bytes', name: 'data', type: 'bytes' },
                ],
                name: 'safeBatchTransferFrom',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'address', name: 'from', type: 'address' },
                    { internalType: 'address', name: 'to', type: 'address' },
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    { internalType: 'uint256', name: 'value', type: 'uint256' },
                    { internalType: 'bytes', name: 'data', type: 'bytes' },
                ],
                name: 'safeTransferFrom',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'operator',
                        type: 'address',
                    },
                    { internalType: 'bool', name: 'approved', type: 'bool' },
                ],
                name: 'setApprovalForAll',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'string',
                        name: '_collectionName',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: '_artistName',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: '_collectionDescription',
                        type: 'string',
                    },
                    {
                        internalType: 'address',
                        name: '_defaultFundsReceiver',
                        type: 'address',
                    },
                    {
                        internalType: 'uint96',
                        name: '_royaltyBPS',
                        type: 'uint96',
                    },
                ],
                name: 'setCollectionData',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    {
                        internalType: 'address',
                        name: '_fundsReceiverOverride',
                        type: 'address',
                    },
                ],
                name: 'setFundsReceiverOverride',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'bytes4',
                        name: 'interfaceId',
                        type: 'bytes4',
                    },
                ],
                name: 'supportsInterface',
                outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'totalSupply',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                ],
                name: 'totalSupply',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'newOwner',
                        type: 'address',
                    },
                ],
                name: 'transferOwnership',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: '_defaultFundsReceiver',
                        type: 'address',
                    },
                    {
                        internalType: 'uint96',
                        name: '_royaltyBPS',
                        type: 'uint96',
                    },
                ],
                name: 'updateDefaultFundsReceiverAndRoyaltyBPS',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    {
                        internalType: 'uint256',
                        name: 'tokenCost',
                        type: 'uint256',
                    },
                    {
                        internalType: 'address',
                        name: 'currencyAddress',
                        type: 'address',
                    },
                ],
                name: 'updateTokenCostAndCurrency',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    {
                        internalType: 'bool',
                        name: 'isTokenSaleActive',
                        type: 'bool',
                    },
                ],
                name: 'updateTokenSaleStatus',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    {
                        internalType: 'uint256',
                        name: 'newSupply',
                        type: 'uint256',
                    },
                ],
                name: 'updateTokenSupply',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    {
                        internalType: 'string',
                        name: 'tokenUri',
                        type: 'string',
                    },
                ],
                name: 'updateTokenUri',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                ],
                name: 'uri',
                outputs: [{ internalType: 'string', name: '', type: 'string' }],
                stateMutability: 'view',
                type: 'function',
            },
        ],
        bytecode:
            '0x60c06040526004608090815263076306a360e41b60a052600690610023908261014f565b5034801561002f575f80fd5b5060408051602081019091525f815261004781610056565b5061005133610066565b610209565b6002610062828261014f565b5050565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806100df57607f821691505b6020821081036100fd57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561014a57805f5260205f20601f840160051c810160208510156101285750805b601f840160051c820191505b81811015610147575f8155600101610134565b50505b505050565b81516001600160401b03811115610168576101686100b7565b61017c8161017684546100cb565b84610103565b6020601f8211600181146101ae575f83156101975750848201515b5f19600385901b1c1916600184901b178455610147565b5f84815260208120601f198516915b828110156101dd57878501518255602094850194600190920191016101bd565b50848210156101fa57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b61401e806102165f395ff3fe608060405260043610610232575f3560e01c806382478db111610129578063bd85b039116100a8578063e985e9c51161006d578063e985e9c51461069b578063f242432a146106ba578063f2fde38b146106d9578063f41b86c9146106f8578063f5298aca14610729575f80fd5b8063bd85b0391461060a578063ca41920214610635578063d31af48414610654578063e2c6875c14610673578063e5326ab114610687575f80fd5b80639a741157116100ee5780639a7411571461055b578063a22cb4651461056f578063a25355951461058e578063aa7cd1be146105ad578063b9c9d93a146105d3575f80fd5b806382478db1146104d85780638da5cb5b146104f757806391c038ef146105145780639833d3b6146105335780639a6a275214610547575f80fd5b8063431d585c116101b55780635b2f515b1161017a5780635b2f515b146104695780635c44bfcb1461047d5780636b20c45414610491578063715018a6146104b057806378a89567146104c4575f80fd5b8063431d585c146103a657806347c330cc146103ba5780634e1273f4146103f15780634f558e791461041d578063526175931461044a575f80fd5b80631b2340cb116101fb5780631b2340cb146102ec5780631e1dcceb1461030b5780632a55205a1461032a5780632eb2c2d6146103685780632f7892af14610387575f80fd5b8062fdd58e1461023657806301ffc9a7146102685780630e89341c14610297578063156e29f6146102c357806318160ddd146102d8575b5f80fd5b348015610241575f80fd5b50610255610250366004612fe7565b610748565b6040519081526020015b60405180910390f35b348015610273575f80fd5b50610287610282366004613024565b61076f565b604051901515815260200161025f565b3480156102a2575f80fd5b506102b66102b136600461303f565b610793565b60405161025f9190613084565b6102d66102d1366004613096565b610845565b005b3480156102e3575f80fd5b50600554610255565b3480156102f7575f80fd5b506102d6610306366004613191565b610dab565b348015610316575f80fd5b506102b661032536600461303f565b610ecf565b348015610335575f80fd5b5061034961034436600461323d565b611097565b604080516001600160a01b03909316835260208301919091520161025f565b348015610373575f80fd5b506102d66103823660046132e9565b6110d9565b348015610392575f80fd5b506102d66103a1366004613395565b611138565b3480156103b1575f80fd5b506102b6611207565b3480156103c5575f80fd5b506103d96103d436600461303f565b611238565b6040516001600160a01b03909116815260200161025f565b3480156103fc575f80fd5b5061041061040b3660046133bf565b6112ab565b60405161025f91906134ba565b348015610428575f80fd5b5061028761043736600461303f565b5f90815260046020526040902054151590565b348015610455575f80fd5b506102d66104643660046134cc565b611375565b348015610474575f80fd5b506102b661146f565b348015610488575f80fd5b506102b66114fb565b34801561049c575f80fd5b506102d66104ab3660046134f4565b611508565b3480156104bb575f80fd5b506102d661156c565b3480156104cf575f80fd5b50600b54610255565b3480156104e3575f80fd5b506102d66104f2366004613573565b61157f565b348015610502575f80fd5b506003546001600160a01b03166103d9565b34801561051f575f80fd5b506102d661052e3660046135a1565b6116a2565b34801561053e575f80fd5b506102b66117fa565b348015610552575f80fd5b506102d661181e565b348015610566575f80fd5b506102b6611a83565b34801561057a575f80fd5b506102d66105893660046135d3565b611a8e565b348015610599575f80fd5b506102d66105a83660046135fd565b611a9d565b3480156105b8575f80fd5b506007546103d990600160601b90046001600160a01b031681565b3480156105de575f80fd5b506007546105f2906001600160601b031681565b6040516001600160601b03909116815260200161025f565b348015610615575f80fd5b5061025561062436600461303f565b5f9081526004602052604090205490565b348015610640575f80fd5b506102d661064f36600461323d565b611c9f565b34801561065f575f80fd5b506102d661066e366004613659565b611e73565b34801561067e575f80fd5b506102b6611eed565b348015610692575f80fd5b506102b6611efa565b3480156106a6575f80fd5b506102876106b5366004613692565b611f07565b3480156106c5575f80fd5b506102d66106d43660046136ba565b611f34565b3480156106e4575f80fd5b506102d66106f336600461370d565b611f93565b348015610703575f80fd5b5061071761071236600461303f565b61200c565b60405161025f96959493929190613726565b348015610734575f80fd5b506102d6610743366004613096565b6120ea565b5f818152602081815260408083206001600160a01b03861684529091529020545b92915050565b5f6001600160e01b0319821663152a902d60e11b1480610769575061076982612120565b6060600b82815481106107a8576107a861376f565b905f5260205f20906004020160030180546107c290613783565b80601f01602080910402602001604051908101604052809291908181526020018280546107ee90613783565b80156108395780601f1061081057610100808354040283529160200191610839565b820191905f5260205f20905b81548152906001019060200180831161081c57829003601f168201915b50505050509050919050565b600b54821061086f5760405162461bcd60e51b8152600401610866906137bb565b60405180910390fd5b600b82815481106108825761088261376f565b5f918252602090912060049091020154600160a01b900460ff166108d95760405162461bcd60e51b815260206004820152600e60248201526d14d85b19481a5cc818db1bdcd95960921b6044820152606401610866565b600b82815481106108ec576108ec61376f565b905f5260205f2090600402016002015481610912845f9081526004602052604090205490565b61091c9190613806565b111561095f5760405162461bcd60e51b815260206004820152601260248201527145786365656473206d617820737570706c7960701b6044820152606401610866565b5f600b83815481106109735761097361376f565b5f9182526020822060049091020154600b80546001600160a01b0390921693508491869081106109a5576109a561376f565b905f5260205f209060040201600101546109bf9190613819565b90505f6109cb85611238565b90506109df6003546001600160a01b031690565b6001600160a01b0316336001600160a01b031614610d0e576001600160a01b038316610ae657813414610a4b5760405162461bcd60e51b8152602060048201526014602482015273125b98dbdc9c9958dd081d985b1d59481cd95b9d60621b6044820152606401610866565b5f816001600160a01b0316346040515f6040518083038185875af1925050503d805f8114610a94576040519150601f19603f3d011682016040523d82523d5f602084013e610a99565b606091505b5050905080610ae05760405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606401610866565b50610d0e565b604051636eb1769f60e11b8152336004820152306024820152839083906001600160a01b0383169063dd62ed3e90604401602060405180830381865afa158015610b32573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b569190613830565b1015610ba45760405162461bcd60e51b815260206004820152601760248201527f455243323020616c6c6f77616e636520746f6f206c6f770000000000000000006044820152606401610866565b6040516370a0823160e01b815233600482015283906001600160a01b038316906370a0823190602401602060405180830381865afa158015610be8573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c0c9190613830565b1015610c525760405162461bcd60e51b815260206004820152601560248201527445524332302062616c616e636520746f6f206c6f7760581b6044820152606401610866565b6040516323b872dd60e01b81523360048201526001600160a01b038381166024830152604482018590528216906323b872dd906064016020604051808303815f875af1158015610ca4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cc89190613847565b610d0c5760405162461bcd60e51b8152602060048201526015602482015274115490cc8c081d1c985b9cd9995c8819985a5b1959605a1b6044820152606401610866565b505b610d2886868660405180602001604052805f81525061216f565b600b8581548110610d3b57610d3b61376f565b905f5260205f20906004020160020154610d60865f9081526004602052604090205490565b03610da3575f600b8681548110610d7957610d7961376f565b5f91825260209091206004909102018054911515600160a01b0260ff60a01b199092169190911790555b505050505050565b610db36121ca565b6103e8816001600160601b03161115610e055760405162461bcd60e51b81526020600482015260146024820152730a4def2c2d8e8f24084a0a640e8dede40d0d2ced60631b6044820152606401610866565b6001600160a01b038216610e5b5760405162461bcd60e51b815260206004820152601c60248201527f46756e64732072656365697665722063616e6e6f7420626520307830000000006044820152606401610866565b6001600160a01b038216600160601b026001600160601b038216176007556008610e8586826138a6565b506009610e9285826138a6565b50600a610e9f84826138a6565b506040517f0563b49e0db45fc4d2081ffa14481cf6625855a9855e649ce091a4cda560c672905f90a15050505050565b600b546060908210610ef35760405162461bcd60e51b8152600401610866906137bb565b5f610efd83612224565b600b8481548110610f1057610f1061376f565b5f918252602090912060049091020154600160a01b900460ff16610f51576040518060400160405280600581526020016466616c736560d81b815250610f6f565b604051806040016040528060048152602001637472756560e01b8152505b610f9a600b8681548110610f8557610f8561376f565b905f5260205f20906004020160010154612224565b610fcf600b8781548110610fb057610fb061376f565b5f918252602090912060049091020154600160a81b900460ff16612224565b611005600b8881548110610fe557610fe561376f565b5f9182526020909120600490910201546001600160a01b031660146122b3565b5f8881526004602052604090205461101c90612224565b611047600b8a815481106110325761103261376f565b905f5260205f20906004020160020154612224565b600b8a8154811061105a5761105a61376f565b905f5260205f2090600402016003016040516020016110809897969594939291906139e5565b60408051601f198184030181529190529392505050565b6007545f9081908190612710906110b7906001600160601b031686613819565b6110c19190613b53565b90505f6110cd86611238565b96919550909350505050565b336001600160a01b03861681148015906110fa57506110f88682611f07565b155b1561112b5760405163711bec9160e11b81526001600160a01b03808316600483015287166024820152604401610866565b610da3868686868661244f565b600b5482106111595760405162461bcd60e51b8152600401610866906137bb565b5f61116383611238565b90506111776003546001600160a01b031690565b6001600160a01b0316336001600160a01b0316148061119e5750336001600160a01b038216145b6111d95760405162461bcd60e51b815260206004820152600c60248201526b155b985d5d1a1bdc9a5e995960a21b6044820152606401610866565b505f918252600c602052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b60605f6112126124b4565b6040516020016112229190613b72565b60408051601f1981840301815291905292915050565b600b545f90821061125b5760405162461bcd60e51b8152600401610866906137bb565b5f828152600c60205260409020546001600160a01b031615611293575f828152600c60205260409020546001600160a01b0316610769565b5050600754600160601b90046001600160a01b031690565b606081518351146112dc5781518351604051635b05999160e01b815260048101929092526024820152604401610866565b5f83516001600160401b038111156112f6576112f66130c6565b60405190808252806020026020018201604052801561131f578160200160208202803683370190505b5090505f5b845181101561136d5760208082028601015161134890602080840287010151610748565b82828151811061135a5761135a61376f565b6020908102919091010152600101611324565b509392505050565b61137d6121ca565b6103e8816001600160601b031611156113cf5760405162461bcd60e51b81526020600482015260146024820152730a4def2c2d8e8f24084a0a640e8dede40d0d2ced60631b6044820152606401610866565b6001600160a01b0382166114255760405162461bcd60e51b815260206004820152601c60248201527f46756e64732072656365697665722063616e6e6f7420626520307830000000006044820152606401610866565b6001600160a01b038216600160601b026001600160601b038216176007556040517f0563b49e0db45fc4d2081ffa14481cf6625855a9855e649ce091a4cda560c672905f90a15050565b6009805461147c90613783565b80601f01602080910402602001604051908101604052809291908181526020018280546114a890613783565b80156114f35780601f106114ca576101008083540402835291602001916114f3565b820191905f5260205f20905b8154815290600101906020018083116114d657829003601f168201915b505050505081565b6006805461147c90613783565b6001600160a01b038316331480159061152857506115268333611f07565b155b1561155c57335b60405163711bec9160e11b81526001600160a01b0391821660048201529084166024820152604401610866565b61156783838361254b565b505050565b6115746121ca565b61157d5f61258e565b565b6115876121ca565b600b5482106115a85760405162461bcd60e51b8152600401610866906137bb565b600b82815481106115bb576115bb61376f565b905f5260205f209060040201600201546115e0835f9081526004602052604090205490565b106116235760405162461bcd60e51b81526020600482015260136024820152724d696e74696e6720697320636f6d706c65746560681b6044820152606401610866565b80600b83815481106116375761163761376f565b905f5260205f2090600402015f0160146101000a81548160ff0219169083151502179055505f80516020613fc9833981519152600b838154811061167d5761167d61376f565b905f5260205f2090600402016040516116969190613b98565b60405180910390a15050565b6116aa6121ca565b600b5483106116cb5760405162461bcd60e51b8152600401610866906137bb565b5f600b84815481106116df576116df61376f565b905f5260205f2090600402015f0160146101000a81548160ff02191690831515021790555081600b84815481106117185761171861376f565b905f5260205f2090600402016001018190555080600b848154811061173f5761173f61376f565b5f918252602082206004919091020180546001600160a01b0319166001600160a01b039390931692909217909155611776826125df565b905080600b858154811061178c5761178c61376f565b905f5260205f2090600402015f0160156101000a81548160ff021916908360ff1602179055505f80516020613fc9833981519152600b85815481106117d3576117d361376f565b905f5260205f2090600402016040516117ec9190613b98565b60405180910390a150505050565b60605f6118056124b4565b61180d6126b4565b604051602001611222929190613c6d565b6118266121ca565b600b546118675760405162461bcd60e51b815260206004820152600f60248201526e139bc81d1bdad95b9cc8195e1a5cdd608a1b6044820152606401610866565b600b545f9061187890600190613ca9565b5f81815260046020526040902054909150156118e75760405162461bcd60e51b815260206004820152602860248201527f43616e6e6f742064656c657465206120746f6b656e2077697468206d696e74656044820152676420737570706c7960c01b6064820152608401610866565b5f600b82815481106118fb576118fb61376f565b5f9182526020918290206040805160c081018252600490930290910180546001600160a01b038116845260ff600160a01b82048116151595850195909552600160a81b900490931690820152600182015460608201526002820154608082015260038201805491929160a08401919061197390613783565b80601f016020809104026020016040519081016040528092919081815260200182805461199f90613783565b80156119ea5780601f106119c1576101008083540402835291602001916119ea565b820191905f5260205f20905b8154815290600101906020018083116119cd57829003601f168201915b5050505050815250509050600b805480611a0657611a06613cbc565b5f8281526020812060045f199093019283020180546001600160b01b0319168155600181018290556002810182905590611a436003830182612f82565b50509055817f4db95769eeb7e8089c4f9eda25e43905dc2c86a1a624382a8f9d3ca8abf41b6e82604051611a779190613cd0565b60405180910390a25050565b60605f6112126126b4565b611a99338383612771565b5050565b611aa56121ca565b600754600160601b90046001600160a01b0316611b045760405162461bcd60e51b815260206004820152601760248201527f436f6c6c656374696f6e2064617461206e6f74207365740000000000000000006044820152606401610866565b5f611b0e846125df565b6040805160c0810182526001600160a01b0380881682525f6020830181815260ff808716958501958652606085018c8152608086018b815260a087018b8152600b80546001810182559652875160049096027f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db98101805496519a51909516600160a81b0260ff60a81b199a1515600160a01b026001600160a81b03199097169790981696909617949094179790971694909417815592517f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01dba83015593517f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01dbb8201559251939450909290917f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01dbc0190611c4590826138a6565b5050600b80545f80516020613fc98339815191529250611c6790600190613ca9565b81548110611c7757611c7761376f565b905f5260205f209060040201604051611c909190613b98565b60405180910390a15050505050565b611ca76121ca565b600b548210611cc85760405162461bcd60e51b8152600401610866906137bb565b600b8281548110611cdb57611cdb61376f565b905f5260205f20906004020160020154811115611d565760405162461bcd60e51b815260206004820152603360248201527f4e657720737570706c792063616e6e6f7420626520686967686572207468616e6044820152722063757272656e74206d617820737570706c7960681b6064820152608401610866565b5f82815260046020526040902054811015611dd95760405162461bcd60e51b815260206004820152603760248201527f4e657720737570706c792063616e6e6f74206265206c6f776572207468616e2060448201527f63757272656e746c79206d696e74656420737570706c790000000000000000006064820152608401610866565b5f828152600460205260409020548103611e2b575f600b8381548110611e0157611e0161376f565b5f91825260209091206004909102018054911515600160a01b0260ff60a01b199092169190911790555b80600b8381548110611e3f57611e3f61376f565b905f5260205f209060040201600201819055505f80516020613fc9833981519152600b838154811061167d5761167d61376f565b611e7b6121ca565b600b548210611e9c5760405162461bcd60e51b8152600401610866906137bb565b80600b8381548110611eb057611eb061376f565b905f5260205f2090600402016003019081611ecb91906138a6565b505f80516020613fc9833981519152600b838154811061167d5761167d61376f565b600a805461147c90613783565b6008805461147c90613783565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205460ff1690565b336001600160a01b0386168114801590611f555750611f538682611f07565b155b15611f865760405163711bec9160e11b81526001600160a01b03808316600483015287166024820152604401610866565b610da38686868686612805565b611f9b6121ca565b6001600160a01b0381166120005760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610866565b6120098161258e565b50565b600b818154811061201b575f80fd5b5f91825260209091206004909102018054600182015460028301546003840180546001600160a01b038516965060ff600160a01b8604811696600160a81b9096041694919061206990613783565b80601f016020809104026020016040519081016040528092919081815260200182805461209590613783565b80156120e05780601f106120b7576101008083540402835291602001916120e0565b820191905f5260205f20905b8154815290600101906020018083116120c357829003601f168201915b5050505050905086565b6001600160a01b038316331480159061210a57506121088333611f07565b155b15612115573361152f565b611567838383612891565b5f6001600160e01b03198216636cdb3d1360e11b148061215057506001600160e01b031982166303a24d0760e21b145b8061076957506301ffc9a760e01b6001600160e01b0319831614610769565b6001600160a01b03841661219857604051632bfa23e760e11b81525f6004820152602401610866565b60408051600180825260208201869052818301908152606082018590526080820190925290610da35f878484876128f3565b6003546001600160a01b0316331461157d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610866565b60605f61223083612946565b60010190505f816001600160401b0381111561224e5761224e6130c6565b6040519080825280601f01601f191660200182016040528015612278576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461228257509392505050565b60605f6122c1836002613819565b6122cc906002613806565b6001600160401b038111156122e3576122e36130c6565b6040519080825280601f01601f19166020018201604052801561230d576020820181803683370190505b509050600360fc1b815f815181106123275761232761376f565b60200101906001600160f81b03191690815f1a905350600f60fb1b816001815181106123555761235561376f565b60200101906001600160f81b03191690815f1a9053505f612377846002613819565b612382906001613806565b90505b60018111156123f9576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106123b6576123b661376f565b1a60f81b8282815181106123cc576123cc61376f565b60200101906001600160f81b03191690815f1a90535060049490941c936123f281613d31565b9050612385565b5083156124485760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610866565b9392505050565b6001600160a01b03841661247857604051632bfa23e760e11b81525f6004820152602401610866565b6001600160a01b0385166124a057604051626a0d4560e21b81525f6004820152602401610866565b6124ad85858585856128f3565b5050505050565b6060600660086009600a6124e76007600c9054906101000a90046001600160a01b03166001600160a01b031660146122b3565b6007546124fc906001600160601b0316612224565b6125216125116003546001600160a01b031690565b6001600160a01b031660146122b3565b6040516020016125379796959493929190613d46565b604051602081830303815290604052905090565b6001600160a01b03831661257357604051626a0d4560e21b81525f6004820152602401610866565b611567835f848460405180602001604052805f8152506128f3565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b5f806001600160a01b038316156126ab57826001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561262c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906126509190613e92565b905060128160ff1611156126a65760405162461bcd60e51b815260206004820181905260248201527f43757272656e637920436f6e7472616374204e6f7420436f6d70617469626c656044820152606401610866565b610769565b50601292915050565b60408051808201909152600b81526a22746f6b656e73223a205b60a81b60208201526060905f5b600b5481101561275f57816126ef82610ecf565b600b546126fe90600190613ca9565b83106127185760405180602001604052805f815250612733565b604051806040016040528060018152602001600b60fa1b8152505b60405160200161274593929190613eb2565b60408051601f1981840301815291905291506001016126db565b50806040516020016112229190613ed8565b6001600160a01b0382166127995760405162ced3e160e81b81525f6004820152602401610866565b6001600160a01b038381165f81815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b03841661282e57604051632bfa23e760e11b81525f6004820152602401610866565b6001600160a01b03851661285657604051626a0d4560e21b81525f6004820152602401610866565b6040805160018082526020820186905281830190815260608201859052608082019092529061288887878484876128f3565b50505050505050565b6001600160a01b0383166128b957604051626a0d4560e21b81525f6004820152602401610866565b604080516001808252602082018590528183019081526060820184905260a082019092525f608082018181529192916124ad918791859085905b6128ff85858585612a1d565b6001600160a01b038416156124ad57825133906001036129385760208481015190840151612931838989858589612a2f565b5050610da3565b610da3818787878787612b50565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106129845772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106129b0576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106129ce57662386f26fc10000830492506010015b6305f5e10083106129e6576305f5e100830492506008015b61271083106129fa57612710830492506004015b60648310612a0c576064830492506002015b600a83106107695760010192915050565b612a2984848484612c37565b50505050565b6001600160a01b0384163b15610da35760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190612a739089908990889088908890600401613ef4565b6020604051808303815f875af1925050508015612aad575060408051601f3d908101601f19168201909252612aaa91810190613f38565b60015b612b14573d808015612ada576040519150601f19603f3d011682016040523d82523d5f602084013e612adf565b606091505b5080515f03612b0c57604051632bfa23e760e11b81526001600160a01b0386166004820152602401610866565b805181602001fd5b6001600160e01b0319811663f23a6e6160e01b1461288857604051632bfa23e760e11b81526001600160a01b0386166004820152602401610866565b6001600160a01b0384163b15610da35760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190612b949089908990889088908890600401613f53565b6020604051808303815f875af1925050508015612bce575060408051601f3d908101601f19168201909252612bcb91810190613f38565b60015b612bfb573d808015612ada576040519150601f19603f3d011682016040523d82523d5f602084013e612adf565b6001600160e01b0319811663bc197c8160e01b1461288857604051632bfa23e760e11b81526001600160a01b0386166004820152602401610866565b612c4384848484612d73565b6001600160a01b038416612ce7575f805b8351811015612cce575f838281518110612c7057612c7061376f565b602002602001015190508060045f878581518110612c9057612c9061376f565b602002602001015181526020019081526020015f205f828254612cb39190613806565b90915550612cc390508184613806565b925050600101612c54565b508060055f828254612ce09190613806565b9091555050505b6001600160a01b038316612a29575f805b8351811015612d62575f838281518110612d1457612d1461376f565b602002602001015190508060045f878581518110612d3457612d3461376f565b60209081029190910181015182528101919091526040015f2080549190910390559190910190600101612cf8565b506005805491909103905550505050565b8051825114612da25781518151604051635b05999160e01b815260048101929092526024820152604401610866565b335f5b8351811015612ea4576020818102858101820151908501909101516001600160a01b03881615612e56575f828152602081815260408083206001600160a01b038c16845290915290205481811015612e30576040516303dee4c560e01b81526001600160a01b038a166004820152602481018290526044810183905260648101849052608401610866565b5f838152602081815260408083206001600160a01b038d16845290915290209082900390555b6001600160a01b03871615612e9a575f828152602081815260408083206001600160a01b038b16845290915281208054839290612e94908490613806565b90915550505b5050600101612da5565b508251600103612f245760208301515f906020840151909150856001600160a01b0316876001600160a01b0316846001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628585604051612f15929190918252602082015260400190565b60405180910390a450506124ad565b836001600160a01b0316856001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051612f73929190613fa4565b60405180910390a45050505050565b508054612f8e90613783565b5f825580601f10612f9d575050565b601f0160209004905f5260205f209081019061200991905b80821115612fc8575f8155600101612fb5565b5090565b80356001600160a01b0381168114612fe2575f80fd5b919050565b5f8060408385031215612ff8575f80fd5b61300183612fcc565b946020939093013593505050565b6001600160e01b031981168114612009575f80fd5b5f60208284031215613034575f80fd5b81356124488161300f565b5f6020828403121561304f575f80fd5b5035919050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6124486020830184613056565b5f805f606084860312156130a8575f80fd5b6130b184612fcc565b95602085013595506040909401359392505050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f191681016001600160401b0381118282101715613102576131026130c6565b604052919050565b5f82601f830112613119575f80fd5b8135602083015f806001600160401b03841115613138576131386130c6565b50601f8301601f191660200161314d816130da565b915050828152858383011115613161575f80fd5b828260208301375f92810160200192909252509392505050565b80356001600160601b0381168114612fe2575f80fd5b5f805f805f60a086880312156131a5575f80fd5b85356001600160401b038111156131ba575f80fd5b6131c68882890161310a565b95505060208601356001600160401b038111156131e1575f80fd5b6131ed8882890161310a565b94505060408601356001600160401b03811115613208575f80fd5b6132148882890161310a565b93505061322360608701612fcc565b91506132316080870161317b565b90509295509295909350565b5f806040838503121561324e575f80fd5b50508035926020909101359150565b5f6001600160401b03821115613275576132756130c6565b5060051b60200190565b5f82601f83011261328e575f80fd5b81356132a161329c8261325d565b6130da565b8082825260208201915060208360051b8601019250858311156132c2575f80fd5b602085015b838110156132df5780358352602092830192016132c7565b5095945050505050565b5f805f805f60a086880312156132fd575f80fd5b61330686612fcc565b945061331460208701612fcc565b935060408601356001600160401b0381111561332e575f80fd5b61333a8882890161327f565b93505060608601356001600160401b03811115613355575f80fd5b6133618882890161327f565b92505060808601356001600160401b0381111561337c575f80fd5b6133888882890161310a565b9150509295509295909350565b5f80604083850312156133a6575f80fd5b823591506133b660208401612fcc565b90509250929050565b5f80604083850312156133d0575f80fd5b82356001600160401b038111156133e5575f80fd5b8301601f810185136133f5575f80fd5b803561340361329c8261325d565b8082825260208201915060208360051b850101925087831115613424575f80fd5b6020840193505b8284101561344d5761343c84612fcc565b82526020938401939091019061342b565b945050505060208301356001600160401b0381111561346a575f80fd5b6134768582860161327f565b9150509250929050565b5f8151808452602084019350602083015f5b828110156134b0578151865260209586019590910190600101613492565b5093949350505050565b602081525f6124486020830184613480565b5f80604083850312156134dd575f80fd5b6134e683612fcc565b91506133b66020840161317b565b5f805f60608486031215613506575f80fd5b61350f84612fcc565b925060208401356001600160401b03811115613529575f80fd5b6135358682870161327f565b92505060408401356001600160401b03811115613550575f80fd5b61355c8682870161327f565b9150509250925092565b8015158114612009575f80fd5b5f8060408385031215613584575f80fd5b82359150602083013561359681613566565b809150509250929050565b5f805f606084860312156135b3575f80fd5b83359250602084013591506135ca60408501612fcc565b90509250925092565b5f80604083850312156135e4575f80fd5b6135ed83612fcc565b9150602083013561359681613566565b5f805f8060808587031215613610575f80fd5b8435935061362060208601612fcc565b92506040850135915060608501356001600160401b03811115613641575f80fd5b61364d8782880161310a565b91505092959194509250565b5f806040838503121561366a575f80fd5b8235915060208301356001600160401b03811115613686575f80fd5b6134768582860161310a565b5f80604083850312156136a3575f80fd5b6136ac83612fcc565b91506133b660208401612fcc565b5f805f805f60a086880312156136ce575f80fd5b6136d786612fcc565b94506136e560208701612fcc565b9350604086013592506060860135915060808601356001600160401b0381111561337c575f80fd5b5f6020828403121561371d575f80fd5b61244882612fcc565b60018060a01b0387168152851515602082015260ff8516604082015283606082015282608082015260c060a08201525f61376360c0830184613056565b98975050505050505050565b634e487b7160e01b5f52603260045260245ffd5b600181811c9082168061379757607f821691505b6020821081036137b557634e487b7160e01b5f52602260045260245ffd5b50919050565b60208082526017908201527f546f6b656e20494420646f6573206e6f74206578697374000000000000000000604082015260600190565b634e487b7160e01b5f52601160045260245ffd5b80820180821115610769576107696137f2565b8082028115828204841417610769576107696137f2565b5f60208284031215613840575f80fd5b5051919050565b5f60208284031215613857575f80fd5b815161244881613566565b601f82111561156757805f5260205f20601f840160051c810160208510156138875750805b601f840160051c820191505b818110156124ad575f8155600101613893565b81516001600160401b038111156138bf576138bf6130c6565b6138d3816138cd8454613783565b84613862565b6020601f821160018114613905575f83156138ee5750848201515b5f19600385901b1c1916600184901b1784556124ad565b5f84815260208120601f198516915b828110156139345787850151825560209485019460019092019101613914565b508482101561395157868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b5f81518060208401855e5f93019283525090919050565b5f815461398381613783565b60018216801561399a57600181146139af576139dc565b60ff19831686528115158202860193506139dc565b845f5260205f205f5b838110156139d4578154888201526001909101906020016139b8565b505081860193505b50505092915050565b607b60f81b81526c113a37b5b2b72fb4b2111d101160991b60018201525f613a10600e83018b613960565b7f222c202269735f746f6b656e5f73616c655f616374697665223a2000000000008152613a40601b82018b613960565b701610113a37b5b2b72fb1b7b9ba111d101160791b81529050613a66601182018a613960565b6f111610113232b1b4b6b0b639911d101160811b81529050613a8b6010820189613960565b90507f222c202263757272656e63795f61646472657373223a202200000000000000008152613abd6018820188613960565b751116101131bab93932b73a2fb9bab838363c911d101160511b81529050613ae86016820187613960565b711116101136b0bc2fb9bab838363c911d101160711b8152905060128101613b108187613960565b6a111610113ab934911d101160a91b8152915050600b8101613b43613b358287613977565b61227d60f01b815260020190565b9c9b505050505050505050505050565b5f82613b6d57634e487b7160e01b5f52601260045260245ffd5b500490565b607b60f81b81525f613b876001830184613960565b607d60f81b81526001019392505050565b602081525f825460018060a01b038116602084015260ff8160a01c161515604084015260ff8160a81c1660608401525060018301546080830152600283015460a083015260c08083015260e08201600384015f8154613bf681613783565b808552600182168015613c105760018114613c2c57613c60565b60ff1983166020870152602082151560051b8701019350613c60565b845f5260205f205f5b83811015613c575781546020828a010152600182019150602081019050613c35565b87016020019450505b5091979650505050505050565b607b60f81b81525f613c826001830185613960565b600b60fa1b8152613c966001820185613960565b607d60f81b815260010195945050505050565b81810381811115610769576107696137f2565b634e487b7160e01b5f52603160045260245ffd5b6020815260018060a01b03825116602082015260208201511515604082015260ff604083015116606082015260608201516080820152608082015160a08201525f60a083015160c080840152613d2960e0840182613056565b949350505050565b5f81613d3f57613d3f6137f2565b505f190190565b711131b7b73a3930b1ba2fb1b7b232911d101160711b81525f613d6c601283018a613977565b7f222c2022636f6c6c656374696f6e5f6e616d65223a20220000000000000000008152613d9c601782018a613977565b721116101130b93a34b9ba2fb730b6b2911d101160691b81529050613dc46013820189613977565b90507f222c2022636f6c6c656374696f6e5f6465736372697074696f6e223a202200008152613df6601e820188613977565b90507f222c202264656661756c745f66756e64735f7265636569766572223a202200008152613e28601e820187613960565b72111610113937bcb0b63a3cafb13839911d101160691b81529050613e506013820186613960565b741116101137bbb732b92fb0b2323932b9b9911d101160591b81529050613e7a6015820185613960565b601160f91b81526001019a9950505050505050505050565b5f60208284031215613ea2575f80fd5b815160ff81168114612448575f80fd5b5f613ecf613ec9613ec38488613960565b86613960565b84613960565b95945050505050565b5f613ee38284613960565b605d60f81b81526001019392505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190525f90613f2d90830184613056565b979650505050505050565b5f60208284031215613f48575f80fd5b81516124488161300f565b6001600160a01b0386811682528516602082015260a0604082018190525f90613f7e90830186613480565b8281036060840152613f908186613480565b905082810360808401526137638185613056565b604081525f613fb66040830185613480565b8281036020840152613ecf818561348056fee5143caca90c39b146846a9b71d1536b644556971384a1973dbbb13edb87cdd1a2646970667358221220afb11ddd389d4836637da86421fc1fe5d70f1db1b383db131b0d76f7a20a726064736f6c634300081a0033',
    },
}

export default versionData
