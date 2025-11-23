class Owner {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

class BankAccount{
    constructor (owner, id, balance){
        this.owner = owner;
        this.id = id; //מפעיל את set id
        this.balance= balance ; //מפעיל את set balance
    }

    //get: התפקיד שלו להחזיר תשובה בכל פעם שמישהו שואל מה הערך
    get id(){
        return this._id;
    }

    //set :התפקיד שלו לבדוק אם התז תקין - 9 ספרות
    set id(value){
        if (String(value).length == 9){
            this._id = value;
        } else{
            console.log("Error: id must be 9 digits");
        }
    }
    get balance(){
        return this._balance;

    }
    set balance(value){
        if (value>=0){
            this._balance = value;
        } else {
            console.log('Error: Balance cannot be negative');
        }
    }
    //הפקדה
    deposit(amount){
        if (amount>0){
            this.balance+=amount;
            console.log(`הופקדו: ${amount}. יתרה חדשה: ${this.balance}`);
        }else {
            console.log("סכום ההפקדה חייב להיות חיובי");
        }
    }
    //משיכה
    withdraw(amount){
        if (this._balance - amount>=0){
            this.balance -= amount;
            console.log(`withdrew ${amount}. new balance: ${this.balance}`);
        }else {
            console.log("Transaction denied: Insufficient funds.");
        }
    }

}

console.log("--- Tests ---");
const ownerTest = new Owner("Mor", 1);
const accountTest = new BankAccount(ownerTest, 123456789, 1000);
console.log("החשבון שלי:", accountTest);
accountTest.deposit(500); 
accountTest.withdraw(200);
console.log("\n--- בדיקת שגיאות ---");
accountTest.withdraw(5000); 
accountTest.balance = -50; 
accountTest.id = 123;     
