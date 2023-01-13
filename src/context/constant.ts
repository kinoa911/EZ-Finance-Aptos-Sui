
import EzmIcon from '../asset/icons/EZM.png'
import AptIcon from '../asset/icons/Aptos.png'
import BtcIcon from '../asset/icons/crypto-btc.svg'
import EthIcon from '../asset/icons/crypto-ethereum.png'
import UsdtIcon from '../asset/icons/crypto-usdt.png'
import UsdcIcon from '../asset/icons/crypto-usdc.png'
import DaiIcon from '../asset/icons/crypto-dai.svg'


export const ezfinance = "0x95af7797fdb4edc3545d6ba03ffc4a86eb2aec0d61f40fd0c307199da8b6e438";
export const pancake = "0xc4911c40cf758ec21c0ebf0e547933ef6bb0f53ad581c08d2ecc7ad11364be1b";

export const tokens = {
    apt: '0x1::aptos_coin::AptosCoin',
    ezm: `${ezfinance}::faucet_tokens::EZM`,
    wbtc: `${ezfinance}::faucet_tokens::WBTC`,
    weth: `${ezfinance}::faucet_tokens::WETH`,
    usdt: `${ezfinance}::faucet_tokens::USDT`,
    usdc: `${ezfinance}::faucet_tokens::USDC`,
    dai: `${ezfinance}::faucet_tokens::DAI`,
}

export const TokenPrice = {
    lp: 3,
    ezm: 10,
    usdc: 1,
    usdt: 1,
    dai: 1,
    ceUsdc: 1,
    weth: 1200,
    wbtc: 17000,
    apt: 4
}

export const coins = {
    ezm: { name: 'EZM', symbol: 'ezm', logo: EzmIcon, price: 10 },
    apt: { name: 'APT', symbol: 'apt', logo: AptIcon, price: 4 },
    wbtc: { name: 'WBTC', symbol: 'wbtc', logo: BtcIcon, price: 17000 },
    weth: { name: 'WETH', symbol: 'weth', logo: EthIcon, price: 1200 },
    usdt: { name: 'USDT', symbol: 'usdt', logo: UsdtIcon, price: 1 },
    usdc: { name: 'USDC', symbol: 'usdc', logo: UsdcIcon, price: 1 },
    dai: { name: 'DAI', symbol: 'dai', logo: DaiIcon, price: 1 },
}
