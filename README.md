# Doggies NFT

![Solidity](https://img.shields.io/badge/Solidity-363636?style=for-the-badge&logo=solidity&logoColor=white)
![Hardhat](https://img.shields.io/badge/Hardhat-FFF1E2?style=for-the-badge&logo=hardhat&logoColor=black)
![IPFS](https://img.shields.io/badge/IPFS-65C2CB?style=for-the-badge&logo=ipfs&logoColor=white)
![Alchemy](https://img.shields.io/badge/Alchemy-000000?style=for-the-badge&logo=alchemy&logoColor=white)

NFT smart contract for Doggies collection. Images are hosted on IPFS via Pinata, deployed using Hardhat and Ethers.js.

## Features

- **ERC-721 Standard**: Standard NFT contract implementation
- **IPFS Storage**: Images hosted on IPFS via Pinata for decentralized storage
- **Hardhat Deployment**: Easy deployment using Hardhat
- **Alchemy Integration**: Powered by Alchemy infrastructure

## Tech Stack

- **Smart Contracts**: Solidity (ERC-721)
- **Deployment**: Hardhat, Ethers.js
- **Storage**: IPFS (Pinata)
- **Network**: Ethereum (Ropsten testnet)
- **Infrastructure**: Alchemy

## Installation

```bash
git clone https://github.com/arthur-zhuk/doggies.git
cd doggies
npm install
```

## Usage

### Compile Contracts

```bash
npx hardhat compile
```

### Deploy Contracts

```bash
npx hardhat run scripts/deploy.js --network ropsten
```

### Test

```bash
npx hardhat test
```

## Contract Details

- **Network**: Ropsten Testnet
- **Standard**: ERC-721
- **Metadata**: Stored on IPFS
- **Images**: Hosted via Pinata

## Transaction Info

View deployment transaction on [Etherscan](https://ropsten.etherscan.io/tx/0xfae4642cb59d609349050a7663e825edfb0e599786532cc433e4ccf83ee86fa0)

## Development

```bash
npx hardhat compile  # Compile contracts
npx hardhat test     # Run tests
npx hardhat node     # Start local node
```

## License

MIT
