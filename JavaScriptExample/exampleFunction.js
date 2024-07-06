var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var products = [
    { name: 'Coffer Maker', price: 2500, category: 'Appliances' },
    { name: ' Maker', price: 25000, category: 'Appliances' },
    { name: 'Coffer ', price: 30000, category: 'Appliances' },
];
function filterProductByPrice(products) {
    return products.filter(function (product) { return product.price > 10000; });
}
function discountProduct(products) {
    return products.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); }); // "..." copy array to return a new one
}
var filterProduct = filterProductByPrice(products);
var discountProducts = discountProduct(filterProduct);
