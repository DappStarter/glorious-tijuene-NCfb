require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remind minor heavy private fortune slide'; 
let testAccounts = [
"0xa2df722151870e7fb99a6b6d349819b45ef0e0eb5a9037e499dafc3ce291473d",
"0x26c3a74d63022db7ba5ccfed47b6647bad5d0d899f95f0906db6df5d6075e245",
"0x9bd8e0687224fbbb7f64c49063b3d50bfba028501582a1f477a505f59b0c99fd",
"0x725bad27a545c9bf451675849997627018cd6c96bb1b4207c4310dc7196d8be7",
"0x0ecc11b2db5ba7b27b65544a78164bf3308e7233482aa785aba705d809fb6804",
"0x14bcb0db43a9cbffbf2804a8a18f2b5818174e38948831373ae35606cc75842e",
"0xfb8c7d9c7951a4cd36b855d90a17e13668d5c82e163dd94fd62cba6dcba8b44a",
"0x3b055db203079b842428ecac72ee0abcc1980926f3dfe25735e4e445eb0cc8c4",
"0x0675e2b786b513ba715d8a52051fc9e75a51b584a97b41a7b6ed195b84db8d1a",
"0x62be901fb759c4188f329b0adba53a84676a50bf362320bcb70ac6191f90f40e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


