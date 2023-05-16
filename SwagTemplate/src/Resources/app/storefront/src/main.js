import QuantityFieldPlugin from './script/quantity-field.plugin'
import Feedback from './script/cart-feedback'

window.PluginManager.register('QuantityField', QuantityFieldPlugin, '[data-quantity-field]')
window.PluginManager.override('AddToCart', Feedback, '[data-add-to-cart]')

// console.info("Thema loaded")