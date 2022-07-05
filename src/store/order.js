import { makeObservable, observable, computed, action } from "mobx"


class OrderStore {
    formData = {
        name: { lable: 'Name', value: '' },
        email: { lable: 'Email', value: '' },
        phone: { lable: 'Phone', value: '' }
    };

    get isValid() {
        return Object.values(this.formData).every(field => field.value !== '')
    };

    change = (name, val) => {
        this.formData[name].value = val.trim()
    }
    constructor() {
        makeObservable(this, {
            formData: observable,
            isValid: computed,
            change: action,
        })
    }
}

export default new OrderStore()