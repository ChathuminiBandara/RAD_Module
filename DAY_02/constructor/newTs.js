var Customer = /** @class */ (function () {
    function Customer(cId, cusName) {
        this._cId = cId;
        this._cusName = cusName;
        this._address = ""; // Default value for address
    }
    Object.defineProperty(Customer.prototype, "cusName", {
        // Getter and Setter for cusName
        get: function () {
            return this._cusName;
        },
        set: function (name) {
            this._cusName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "cId", {
        // Getter and Setter for cId
        get: function () {
            return this._cId;
        },
        set: function (id) {
            this._cId = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "address", {
        // Getter and Setter for address
        get: function () {
            return this._address;
        },
        set: function (addr) {
            this._address = addr;
        },
        enumerable: false,
        configurable: true
    });
    Customer.prototype.print = function () {
        console.log(this._cId, " : ", this._cusName);
    };
    return Customer;
}());
// Usage
var customer1 = new Customer(1, "Ian");
customer1.print();
customer1.cusName = "John Doe"; // Using setter
customer1.address = "123 Main Street"; // Using setter
console.log(customer1.cusName); // Using getter
console.log(customer1.address); // Using getter
