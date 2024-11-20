class Customer {
    private _cusName: string;
    private _cId: number;
    private _address: string;

    constructor(cId: number, cusName: string) {
        this._cId = cId;
        this._cusName = cusName;
        this._address = ""; // Default value for address
    }

    get cusName(): string {
        return this._cusName;
    }

    set cusName(name: string) {
        this._cusName = name;
    }

    get cId(): number {
        return this._cId;
    }

    set cId(id: number) {
        this._cId = id;
    }


    get address(): string {
        return this._address;
    }

    set address(addr: string) {
        this._address = addr;
    }

    print() {
        console.log(this._cId, " : ", this._cusName);
    }
}

// Usage
const customer1 = new Customer(1, "Ian");
customer1.print();

customer1.cusName = "John Doe"; // Using setter
customer1.address = "123 Main Street"; // Using setter

console.log(customer1.cusName); // Using getter
console.log(customer1.address); // Using getter
