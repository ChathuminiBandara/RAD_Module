var VIPCustomer = /** @class */ (function () {
    function VIPCustomer(cId, cusName) {
        this.cId = cId;
        this.cusName = cusName;
    }
    VIPCustomer.prototype["constructor"] = function (cId, cusName) {
        throw new Error("Method not implemented.");
    };
    VIPCustomer.prototype.print = function () {
        console.log(this.cId, " : ", this.cusName);
    };
    return VIPCustomer;
}());
var vipCust = new VIPCustomer(1, "Ian");
vipCust.print();
