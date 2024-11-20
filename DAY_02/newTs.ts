class Customer {
    private cusName : string;
    cId : number;
    address : string

    constructor(cId:number, cusName: string){
        this.cId = cId;
        this.cusName = cusName;
    }

    print(){
        console.log(this.cId, " : ", this.cusName);
        
    }
}

const customer1 = new Customer(1, "Ian")
customer1.print();