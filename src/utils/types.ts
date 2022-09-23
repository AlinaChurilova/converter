export const currencyValue = [
    'USD',
    'EUR',
    'BTC',
]
export const currenciesTypes = {
    Euro:'EUR',
    Dollar:'USD',
    Bitcoin: 'BTC',
    Hryvnia: 'UAH',
}
export type CurrencyListTypes = {
    ccy: string;
    base_ccy: string;
    buy: string;
    sale: string;
}