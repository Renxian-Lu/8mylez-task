import Plugin from 'src/plugin-system/plugin.class'
import DomAccess from 'src/helper/dom-access.helper'

export default class QuantityFieldPlugin extends Plugin{
    init() {
        this.minus = DomAccess.querySelector(this.el, '.decrease')
        this.plus = DomAccess.querySelector(this.el, '.increase')
        this.field = DomAccess.querySelector(this.el, 'input[type="number"]')

        this.registerEvents()
    }

    registerEvents() {
        this.minus.addEventListener('click', this.decreaseQuantity.bind(this))
        this.plus.addEventListener('click', this.increaseQuantity.bind(this))
    }

    decreaseQuantity(){
        const step = parseInt(this.options.purchaseSteps)
        const newQuant = parseInt(this.field.value) - step
        

        if(this.field.value <= step) {
            this.field.value = step
            return
        }
        
        this.field.value = newQuant
    }

    increaseQuantity(){
        const step = parseInt(this.options.purchaseSteps)
        const maxQuant = parseInt(this.options.maxQuantity)
        const newQuant = parseInt(this.field.value) + step

        console.info(newQuant, maxQuant)
        if(newQuant >= maxQuant){
            this.field.value = maxQuant
            return
        }
        this.field.value = parseInt(this.field.value) + step
    }
}


