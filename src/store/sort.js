import { makeObservable, observable, computed, action } from "mobx"

class Sort {
    sortArr = {
        value: 0,
        brands: []
    }
    isVaild(item) {
        if (this.sortArr.value > 0 && item.price > this.sortArr.value) {
            return false
        }
        if (this.sortArr.brands.length > 0 && this.sortArr.brands.indexOf(item.brand) == -1) {
            return false
        }
        return true
    }
    // ChangeValue(e) {
    //     e = Number(e.target.value)
    //     console.log();
    //     if (isNaN(e)) {
    //         console.log('nan');
    //         this.sortArr.value = 0
    //     } else {
    //         this.sortArr.value = e
    //     }
    // }.target.dataset.brand
    ChangeBrand(e) {
        if (e.target.checked) {
            this.sortArr.brands.push(e.target.dataset.brand)
        } else {
            this.sortArr.brands.splice(this.sortArr.brands.indexOf(e.target.dataset.brand), 1);
        }
    }
    constructor() {
        makeObservable(this, {
            sortArr: observable,
            ChangeBrand: action.bound,
            // isVaild: computed
        })
    }

}

export default new Sort()