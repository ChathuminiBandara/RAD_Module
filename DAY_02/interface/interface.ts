interface Customer {
    cusName : string;
    cId : number;
    address : string

}


class VIPCustomer implements Customer {
    cusName : string;
    cId : number;
    address : string

    constructor(cId:number, cusName: string){
        this.cId = cId;
        this.cusName = cusName;
    }
    ["constructor"](cId: number, cusName: string) {
        throw new Error("Method not implemented.");
    }

    print(){
        console.log(this.cId, " : ", this.cusName);
        
    }
}



const vipCust = new VIPCustomer(1, "Ian")
vipCust.print();