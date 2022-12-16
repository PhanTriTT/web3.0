// https://eth-goerli.g.alchemy.com/v2/t7Vf6uQYYF9VJHvg3EAkQGOsJaMvTB7e

require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/t7Vf6uQYYF9VJHvg3EAkQGOsJaMvTB7e',
      accounts: [
        'dc4ecc09e911fd8f59baf24c2ab27d1fe198dbc8382afe20ad2e9f75b05ae3d3',
      ],
    },
  },
};
