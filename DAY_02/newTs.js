var Customer = /** @class */ (function () {
    function Customer(cId, cusName) {
        this.cId = cId;
        this.cusName = cusName;
    }
    Customer.prototype.print = function () {
        console.log(this.cId, " : ", this.cusName);
    };
    return Customer;
}());
var customer1 = new Customer(1, "Ian");
customer1.print();
