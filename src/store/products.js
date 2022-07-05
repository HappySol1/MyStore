import { makeObservable, observable, computed, action } from "mobx"

class Products {
    productFromServer = [
        {
            id: 100,
            title: 'Ultraboost-22',
            price: 12000,
            rest: 10,
            brand: 'Adidas',
            imgUrl: 'https://sneakerstudio.com.ua/rus_il_MUZHSKIE-KROSSOVKI-DLIA-BEGA-Adidas--GX3060-1035297.jpg'
        },
        {
            id: 101,
            title: 'WS327LAG',
            price: 10000,
            rest: 10,
            brand: 'New-Balance',
            imgUrl: 'https://sneakerstudio.com.ua/rus_il_ZHENSKIE-KROSSOVKI-New-Balance-WS327LAG-1035137.jpg'
        },
        {
            id: 102,
            title: 'Ultra-4D',
            price: 8000,
            rest: 10,
            brand: 'Adidas',
            imgUrl: 'https://sneakerstudio.com.ua/rus_il_MUZHSKIE-KROSSOVKI-DLIA-BEGA-Adidas-Ultra-4D-GX6366-1035259.jpg'
        },
        {
            id: 103,
            title: 'MS327WA1',
            price: 17000,
            rest: 10,
            brand: 'New-Balance',
            imgUrl: 'https://sneakerstudio.com.ua/rus_il_MUZHSKIE-KROSSOVKI-New-Balance-MS327WA1-1035136.jpg'
        },
        {
            id: 104,
            title: 'WL574HR2',
            price: 20000,
            rest: 10,
            brand: 'New-Balance',
            imgUrl: 'https://sneakerstudio.com.ua/rus_il_ZHENSKIE-KROSSOVKI-New-Balance-WL574HR2-1035099.jpg'
        },
        {
            id: 105,
            title: 'Ultraboost-4-0',
            price: 2000,
            rest: 10,
            brand: 'Adidas',
            imgUrl: 'https://sneakerstudio.com.ua/rus_il_ZHENSKIE-KROSSOVKI-DLIA-BEGA-Adidas-Ultraboost-4-0-DNA-H02590-1033868.jpg'
        },
        {
            id: 106,
            title: 'Lift-2X',
            price: 30000,
            rest: 10,
            brand: 'Chuck-Taylor',
            imgUrl: 'https://sneakerstudio.com.ua/rus_il_ZHENSKIE-VYSOKIE-KEDY-Converse-Chuck-Taylor-Lift-2X-Hi-572067C-1033792.jpg'
        },
        {
            id: 107,
            title: 'BMW-MMS',
            price: 110000,
            rest: 10,
            brand: 'Puma',
            imgUrl: 'https://sneakerstudio.com.ua/rus_il_KROSSOVKI-Puma-BMW-MMS-Low-Race-306939-01-1032975.jpg'
        },
        {
            id: 108,
            title: 'Originals-Delpala',
            price: 25000,
            rest: 10,
            brand: 'Adidas',
            imgUrl: 'https://sneakerstudio.com.ua/rus_il_MUZHSKIE-KEDY-Adidas-Originals-Delpala-FV0639-1032886.jpg'
        },
        {
            id: 109,
            title: 'Unlocked',
            price: 40000,
            rest: 10,
            brand: 'Pampa',
            imgUrl: 'https://sneakerstudio.com.ua/rus_il_MUZHSKIE-BOTINKI-Palladium-Pampa-Unlocked-77239-116-M-1031963.jpg'
        },
        {
            id: 110,
            title: 'Noosa',
            price: 100000,
            rest: 1,
            brand: 'Asics',
            imgUrl: 'https://sneakerstudio.com.ua/rus_il_ZHENSKIE-KROSSOVKI-DLIA-BEGA-Asics-Noosa-TRI-13-1012A898-004-1031894.jpg'
        },
        {
            id: 111,
            title: 'Workout-Plus',
            price: 18000,
            rest: 5,
            brand: 'Reebok',
            imgUrl: 'https://sneakerstudio.com.ua/rus_il_MUZHSKIE-KROSSOVKI-Reebok-Workout-Plus-2760-9584.jpg'
        },
    ];
    changeCnt = (id, cnt) => {
        this.productFromServer = this.productFromServer.map(pr => pr.id !== id ? pr : { ...pr, cnt })
    }
    get total() {
        return this.productFromServer.reduce((acc, pr) => acc + pr.price * pr.cnt, 0)
    }
    getById = (id) => {
        return this.productFromServer.find(pr => pr.id === id);
    }
    delItem = (id) => {
        this.productFromServer = this.productFromServer.filter(name => name.id !== id)
    }
    constructor() {
        makeObservable(this, {
            productFromServer: observable,
            changeCnt: action,
            total: computed,
            delItem: action
        })
    }
}

export default new Products()