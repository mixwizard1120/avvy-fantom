export default {
  name: 'testnet',
  chainId: '4002',
  contracts: {
    Domain: {
      address: '0x48DE29663f232f0F162E0bebB2948462d6181307',
      abi: [
        {
          inputs: [
            {
              internalType: 'string',
              name: 'name',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'symbol',
              type: 'string',
            },
            {
              internalType: 'contract ContractRegistryInterface',
              name: 'contractRegistry',
              type: 'address',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'address',
              name: 'owner',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'approved',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256',
            },
          ],
          name: 'Approval',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'address',
              name: 'owner',
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
          inputs: [
            {
              indexed: false,
              internalType: 'string',
              name: 'uri',
              type: 'string',
            },
          ],
          name: 'ContractURISet',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'address',
              name: 'agent',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'registrant',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: 'leaseLength',
              type: 'uint256',
            },
          ],
          name: 'Recycle',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'address',
              name: 'agent',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'registrant',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: 'leaseLength',
              type: 'uint256',
            },
          ],
          name: 'Register',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'address',
              name: 'agent',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'holder',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
          ],
          name: 'Revoke',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              indexed: true,
              internalType: 'bytes32',
              name: 'previousAdminRole',
              type: 'bytes32',
            },
            {
              indexed: true,
              internalType: 'bytes32',
              name: 'newAdminRole',
              type: 'bytes32',
            },
          ],
          name: 'RoleAdminChanged',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'sender',
              type: 'address',
            },
          ],
          name: 'RoleGranted',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'sender',
              type: 'address',
            },
          ],
          name: 'RoleRevoked',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'address',
              name: 'agent',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'bool',
              name: 'suspended',
              type: 'bool',
            },
          ],
          name: 'Suspend',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'string',
              name: 'uri',
              type: 'string',
            },
          ],
          name: 'TokenBaseURISet',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
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
              indexed: true,
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256',
            },
          ],
          name: 'Transfer',
          type: 'event',
        },
        {
          inputs: [],
          name: 'ADMIN_AGENT',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'DEFAULT_ADMIN_ROLE',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'LEASING_AGENT',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'RECYCLING_AGENT',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'REVOCATION_AGENT',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'SUSPENSION_AGENT',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: '_contractRegistry',
          outputs: [
            {
              internalType: 'contract ContractRegistryInterface',
              name: '',
              type: 'address',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256',
            },
          ],
          name: 'approve',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address',
            },
          ],
          name: 'balanceOf',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'contractURI',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
          ],
          name: 'exists',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256',
            },
          ],
          name: 'getApproved',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
          ],
          name: 'getDomainExpiry',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'domainId',
              type: 'uint256',
            },
          ],
          name: 'getNamespaceId',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
          ],
          name: 'getRoleAdmin',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'namespaceId',
              type: 'uint256',
            },
          ],
          name: 'getRoleForNamespace',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32',
            },
          ],
          stateMutability: 'pure',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
          ],
          name: 'grantRole',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
          ],
          name: 'hasRole',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'operator',
              type: 'address',
            },
          ],
          name: 'isApprovedForAll',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
          ],
          name: 'isSuspended',
          outputs: [
            {
              internalType: 'bool',
              name: 'suspended',
              type: 'bool',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'name',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256',
            },
          ],
          name: 'ownerOf',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'namespaceId',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'leaseLength',
              type: 'uint256',
            },
          ],
          name: 'recycle',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'registrant',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'namespaceId',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'leaseLength',
              type: 'uint256',
            },
            {
              internalType: 'bytes',
              name: 'constraintsData',
              type: 'bytes',
            },
          ],
          name: 'register',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
          ],
          name: 'renounceRole',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'namespaceId',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
          ],
          name: 'revoke',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
          ],
          name: 'revokeRole',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256',
            },
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
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256',
            },
            {
              internalType: 'bytes',
              name: '_data',
              type: 'bytes',
            },
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
            {
              internalType: 'bool',
              name: 'approved',
              type: 'bool',
            },
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
              name: 'uri',
              type: 'string',
            },
          ],
          name: 'setBaseTokenURI',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'string',
              name: 'uri',
              type: 'string',
            },
          ],
          name: 'setContractURI',
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
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'namespaceId',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'suspended',
              type: 'bool',
            },
          ],
          name: 'suspend',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [],
          name: 'symbol',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'index',
              type: 'uint256',
            },
          ],
          name: 'tokenByIndex',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'index',
              type: 'uint256',
            },
          ],
          name: 'tokenOfOwnerByIndex',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256',
            },
          ],
          name: 'tokenURI',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'totalSupply',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256',
            },
          ],
          name: 'transferFrom',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
      ],
    },
    EVMReverseResolverV1: {
      address: '0x48bff5c8A1A3bc97011F9E2b72e61a0Be3687a2e',
      abi: [
        {
          inputs: [
            {
              internalType: 'contract ContractRegistryInterface',
              name: '_contractRegistry',
              type: 'address',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'uint256[]',
              name: 'path',
              type: 'uint256[]',
            },
            {
              indexed: false,
              internalType: 'address',
              name: 'target',
              type: 'address',
            },
          ],
          name: 'EntrySet',
          type: 'event',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              internalType: 'uint256[]',
              name: 'path',
              type: 'uint256[]',
            },
          ],
          name: 'clear',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [],
          name: 'contractRegistry',
          outputs: [
            {
              internalType: 'contract ContractRegistryInterface',
              name: '',
              type: 'address',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'target',
              type: 'address',
            },
          ],
          name: 'get',
          outputs: [
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'hash',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'hash',
              type: 'uint256',
            },
          ],
          name: 'getEntry',
          outputs: [
            {
              internalType: 'address',
              name: 'entry',
              type: 'address',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              internalType: 'uint256[]',
              name: 'path',
              type: 'uint256[]',
            },
          ],
          name: 'set',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
      ],
    },
    LeasingAgentV1: {
      address: '0xE52746ea7809BF3936943804Cfb409742BFe1714',
      abi: [
        {
          inputs: [
            {
              internalType: 'address',
              name: 'contractRegistryAddress',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'namespaceId',
              type: 'uint256',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'bool',
              name: 'enabled',
              type: 'bool',
            },
          ],
          name: 'Enabled',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'uint256[]',
              name: 'names',
              type: 'uint256[]',
            },
            {
              indexed: false,
              internalType: 'uint256[]',
              name: 'quantities',
              type: 'uint256[]',
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: 'payment',
              type: 'uint256',
            },
          ],
          name: 'Registered',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'uint256',
              name: 'premiumStartTime',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: 'premiumEndTime',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'uint256[]',
              name: 'premiumPricePoints',
              type: 'uint256[]',
            },
          ],
          name: 'RegistrationPremiumSet',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              indexed: true,
              internalType: 'bytes32',
              name: 'previousAdminRole',
              type: 'bytes32',
            },
            {
              indexed: true,
              internalType: 'bytes32',
              name: 'newAdminRole',
              type: 'bytes32',
            },
          ],
          name: 'RoleAdminChanged',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'sender',
              type: 'address',
            },
          ],
          name: 'RoleGranted',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'sender',
              type: 'address',
            },
          ],
          name: 'RoleRevoked',
          type: 'event',
        },
        {
          inputs: [],
          name: 'DEFAULT_ADMIN_ROLE',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'MANAGER_ROLE',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: '_contractRegistry',
          outputs: [
            {
              internalType: 'contract ContractRegistryInterface',
              name: '',
              type: 'address',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: '_enabled',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: '_namespaceId',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: '_premiumEndTime',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
          name: '_premiumPricePoints',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: '_premiumStartTime',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'bool',
              name: 'enabled',
              type: 'bool',
            },
          ],
          name: 'enable',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 't',
              type: 'uint256',
            },
          ],
          name: 'getRegistrationPremium',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
          ],
          name: 'getRoleAdmin',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
          ],
          name: 'grantRole',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
          ],
          name: 'hasRole',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256[]',
              name: 'names',
              type: 'uint256[]',
            },
            {
              internalType: 'uint256[]',
              name: 'quantities',
              type: 'uint256[]',
            },
            {
              internalType: 'bytes[]',
              name: 'constraintsProofs',
              type: 'bytes[]',
            },
            {
              internalType: 'bytes[]',
              name: 'pricingProofs',
              type: 'bytes[]',
            },
          ],
          name: 'register',
          outputs: [],
          stateMutability: 'payable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256[]',
              name: 'names',
              type: 'uint256[]',
            },
            {
              internalType: 'uint256[]',
              name: 'quantities',
              type: 'uint256[]',
            },
            {
              internalType: 'bytes[]',
              name: 'constraintsProofs',
              type: 'bytes[]',
            },
            {
              internalType: 'bytes[]',
              name: 'pricingProofs',
              type: 'bytes[]',
            },
            {
              internalType: 'uint256[]',
              name: 'preimages',
              type: 'uint256[]',
            },
          ],
          name: 'registerWithPreimage',
          outputs: [],
          stateMutability: 'payable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
          ],
          name: 'renounceRole',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
          ],
          name: 'revokeRole',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'premiumStartTime',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'premiumEndTime',
              type: 'uint256',
            },
            {
              internalType: 'uint256[]',
              name: 'premiumPricePoints',
              type: 'uint256[]',
            },
          ],
          name: 'setRegistrationPremiumDetails',
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
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
      ],
    },
    PublicResolverV1: {
      address: '0x22Dc29a99B32b554346107B71eFc3ebCe7090F7D',
      abi: [
        {
          inputs: [
            {
              internalType: 'address',
              name: 'contractRegistryAddress',
              type: 'address',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              indexed: true,
              internalType: 'uint256',
              name: 'hash',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'uint256[]',
              name: 'path',
              type: 'uint256[]',
            },
            {
              indexed: false,
              internalType: 'string',
              name: 'key',
              type: 'string',
            },
            {
              indexed: false,
              internalType: 'string',
              name: 'data',
              type: 'string',
            },
          ],
          name: 'EntrySet',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              indexed: true,
              internalType: 'uint256',
              name: 'hash',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'uint256[]',
              name: 'path',
              type: 'uint256[]',
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: 'key',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'string',
              name: 'data',
              type: 'string',
            },
          ],
          name: 'StandardEntrySet',
          type: 'event',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'hash',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: 'key',
              type: 'string',
            },
          ],
          name: 'resolve',
          outputs: [
            {
              internalType: 'string',
              name: 'data',
              type: 'string',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'hash',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'key',
              type: 'uint256',
            },
          ],
          name: 'resolveStandard',
          outputs: [
            {
              internalType: 'string',
              name: 'data',
              type: 'string',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              internalType: 'uint256[]',
              name: 'path',
              type: 'uint256[]',
            },
            {
              internalType: 'string',
              name: 'key',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'data',
              type: 'string',
            },
          ],
          name: 'set',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              internalType: 'uint256[]',
              name: 'path',
              type: 'uint256[]',
            },
            {
              internalType: 'uint256',
              name: 'key',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: 'data',
              type: 'string',
            },
          ],
          name: 'setStandard',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
      ],
    },
    RainbowTableV1: {
      address: '0x7873AFd2a6b06f104e673350040cBfabeBdFaE3c',
      abi: [
        {
          inputs: [
            {
              internalType: 'address',
              name: 'contractRegistryAddress',
              type: 'address',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'uint256',
              name: 'hash',
              type: 'uint256',
            },
          ],
          name: 'Revealed',
          type: 'event',
        },
        {
          inputs: [],
          name: 'contractRegistry',
          outputs: [
            {
              internalType: 'contract ContractRegistryInterface',
              name: '',
              type: 'address',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'hash',
              type: 'uint256',
            },
            {
              internalType: 'uint256[]',
              name: 'preimage',
              type: 'uint256[]',
            },
          ],
          name: 'getHash',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'hash',
              type: 'uint256',
            },
          ],
          name: 'isRevealed',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'hash',
              type: 'uint256',
            },
          ],
          name: 'lookup',
          outputs: [
            {
              internalType: 'uint256[]',
              name: 'preimage',
              type: 'uint256[]',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256[]',
              name: 'preimage',
              type: 'uint256[]',
            },
            {
              internalType: 'uint256',
              name: 'hash',
              type: 'uint256',
            },
          ],
          name: 'reveal',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
      ],
    },
    ResolverRegistryV1: {
      address: '0x5f0483952c2F304911c299A2B75cB5a776651DC9',
      abi: [
        {
          inputs: [
            {
              internalType: 'address',
              name: 'contractRegistryAddress',
              type: 'address',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              indexed: true,
              internalType: 'uint256',
              name: 'hash',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'uint256[]',
              name: 'path',
              type: 'uint256[]',
            },
            {
              indexed: false,
              internalType: 'address',
              name: 'resolver',
              type: 'address',
            },
            {
              indexed: false,
              internalType: 'uint256',
              name: 'datasetId',
              type: 'uint256',
            },
          ],
          name: 'ResolverSet',
          type: 'event',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'hash',
              type: 'uint256',
            },
          ],
          name: 'get',
          outputs: [
            {
              internalType: 'address',
              name: 'resolver',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'datasetId',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              internalType: 'uint256[]',
              name: 'path',
              type: 'uint256[]',
            },
            {
              internalType: 'address',
              name: 'resolver',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'datasetId',
              type: 'uint256',
            },
          ],
          name: 'set',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
      ],
    },
    ReverseResolverRegistryV1: {
      address: '0x3aeCeaf0993772258E0e0dF4F9717Ae49c794f5A',
      abi: [
        {
          inputs: [
            {
              internalType: 'contract ContractRegistryInterface',
              name: '_contractRegistry',
              type: 'address',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'address',
              name: 'contractAddress',
              type: 'address',
            },
          ],
          name: 'AuthenticatorSet',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'uint256',
              name: 'standardKey',
              type: 'uint256',
            },
            {
              indexed: false,
              internalType: 'address',
              name: 'resolverAddress',
              type: 'address',
            },
          ],
          name: 'ResolverSet',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              indexed: true,
              internalType: 'bytes32',
              name: 'previousAdminRole',
              type: 'bytes32',
            },
            {
              indexed: true,
              internalType: 'bytes32',
              name: 'newAdminRole',
              type: 'bytes32',
            },
          ],
          name: 'RoleAdminChanged',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'sender',
              type: 'address',
            },
          ],
          name: 'RoleGranted',
          type: 'event',
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'sender',
              type: 'address',
            },
          ],
          name: 'RoleRevoked',
          type: 'event',
        },
        {
          inputs: [],
          name: 'DEFAULT_ADMIN_ROLE',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'MANAGER_ROLE',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
          name: 'authenticators',
          outputs: [
            {
              internalType: 'contract ReverseResolverAuthenticatorInterface',
              name: '',
              type: 'address',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              internalType: 'uint256[]',
              name: 'path',
              type: 'uint256[]',
            },
            {
              internalType: 'address',
              name: 'sender',
              type: 'address',
            },
          ],
          name: 'canWrite',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'contractRegistry',
          outputs: [
            {
              internalType: 'contract ContractRegistryInterface',
              name: '',
              type: 'address',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'standardKey',
              type: 'uint256',
            },
          ],
          name: 'getResolver',
          outputs: [
            {
              internalType: 'address',
              name: 'resolverAddress',
              type: 'address',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
          ],
          name: 'getRoleAdmin',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
          ],
          name: 'grantRole',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
          ],
          name: 'hasRole',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
          ],
          name: 'renounceRole',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: 'role',
              type: 'bytes32',
            },
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
          ],
          name: 'revokeRole',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'name',
              type: 'uint256',
            },
            {
              internalType: 'contract ReverseResolverAuthenticatorInterface',
              name: 'authenticator',
              type: 'address',
            },
          ],
          name: 'setAuthenticator',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'standardKey',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'resolverAddress',
              type: 'address',
            },
          ],
          name: 'setResolver',
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
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
      ],
    },
  },
}
