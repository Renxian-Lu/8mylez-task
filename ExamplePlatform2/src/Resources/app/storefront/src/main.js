import StickyHeader from "./script/sticky-header";

window.PluginManager.register('StickyHeader', StickyHeader, '[data-sticky-header]', {
    showOnScrollPosition: 2000,
})