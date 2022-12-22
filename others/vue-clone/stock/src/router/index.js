import HomeView from '@/views/HomeView'
import StockView from '@/views/StockView'
import BalanceView from '@/views/BalanceView'
import EconomyView from '@/views/EconomyView'

let routes = [
    {
        path : '/',
        components : HomeView
    },
    {
        path : '/stock',
        components : StockView
    },
    {
        path : '/balance',
        components : BalanceView
    },
    {
        path : '/economy',
        components : EconomyView
    },
    
]