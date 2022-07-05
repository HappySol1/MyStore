import { makeObservable, observable, computed, action } from "mobx"
import products from "./products"


class CartStore {
    cart = []
    get productsDetailed() {
        return this.cart.map(pr => {
            let info = products.getById(pr.id)
            return { ...info, ...pr }
        })
    }
    inCart = (id) => this.cart.some(pr => pr.id === id)

    add(id) {
        if (!this.inCart(id)) {
            this.cart.push({ id, cnt: 1 })
        }
    }

    remove(id) {
        this.cart = this.cart.filter(pr => pr.id !== id)
    }

    change(id, cnt) {
        if (this.inCart(id)) {
            let index = this.cart.findIndex(pr => pr.id === id);
            this.cart[index].cnt = cnt;
        }
    }
    get totalItems() {
        return this.cart.reduce((acc, pr) => acc + pr.cnt, 0)
    }
    get total() {
        return this.productsDetailed.reduce((acc, pr) => acc + pr.price * pr.cnt, 0)
    }
    constructor() {
        makeObservable(this, {
            cart: observable,
            add: action.bound,
            remove: action.bound,
            productsDetailed: computed,
            total: computed,
            change: action.bound,
        })
    }

}

export default new CartStore()