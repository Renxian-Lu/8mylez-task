import AddToCartPlugin from 'src/plugin/add-to-cart/add-to-cart.plugin'
import DomAccess from 'src/helper/dom-access.helper'
import HttpClient from 'src/service/http-client.service'

export default class Feedback extends AddToCartPlugin{
    init() {
        this.PluginManager = window.PluginManager
        this._cartEl = DomAccess.querySelector(document, '.header-cart')
        this._buyEl = DomAccess.querySelector(document, '.btn-buy')
        this._client = new HttpClient(window.accessKey, window.contextToken)
        super.init()

        this._buyEl.innerHTML = 'In den Warenkorb'
    }

    _openOffCanvasCart(instance, requestUrl, formData) {

        this._client.post(requestUrl, formData, this._afterAddItemToCart.bind(this))
    }

    _afterAddItemToCart(){
        this._refreshCartValue()

        this._cartFeedback()
    }

    _cartFeedback() {
        this._buyEl.innerHTML = 'Wird in den Warenkorb gelegt'
        this._buyEl.style.backgroundColor = "#526e7f"
        window.setTimeout(() => {
            this._buyEl.innerHTML = 'In den Warenkorb'
            this._buyEl.style.backgroundColor = "#008490"
            this._buyEl.classList.remove('background-change')
        }, 1000)
    }

    _refreshCartValue() {
        const cartWidgetEl = DomAccess.querySelector(this._cartEl, '[data-cart-widget]')
        const cartWidgetInstance = this.PluginManager.getPluginInstanceFromElement(cartWidgetEl, 'CartWidget')
        cartWidgetInstance.fetch()
    }
}


