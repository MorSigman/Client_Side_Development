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

console.log("--- מתחילים בדיקה ---");

// 1. יצירת בעלים
const ownerTest = new Owner("Mor", 1);

// 2. יצירת חשבון בנק (נסיון תקין)
// שימי לב: ה-ID חייב להיות 9 ספרות כדי לעבור את הבדיקה
const accountTest = new BankAccount(ownerTest, 123456789, 1000);

// בדיקה האם החשבון נוצר (אם ה-ID לא תקין, הוא לא יישמר)
console.log("החשבון שלי:", accountTest);

// 3. בדיקת הפקדה
accountTest.deposit(500); // אמור להדפיס שהופקדו 500

// 4. בדיקת משיכה
accountTest.withdraw(200); // אמור להדפיס שנמשכו 200

// 5. בדיקת שגיאות (האם ההגנות עובדות?)
console.log("\n--- בדיקת שגיאות ---");
accountTest.withdraw(5000); // אמור להיכשל (אין מספיק כסף)
accountTest.balance = -50;  // אמור להיכשל (יתרה שלילית)
accountTest.id = 123;       // אמור להיכשל (ID קצר מידי)