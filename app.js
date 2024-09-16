// Створіть об'єкт, який матиме одну властивість з масивом об'єктів.
// Які представляють контакти у вашій контактній книзі. 
// Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. 
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.


const userInfo = {
    users: [
        {
            name: "Tyler Joseph",
            phone: "157654982",
            email: "tjoseph@gmail.com"
        },
        {
            name: "Josh Dun",
            phone: "246479410",
            email: "ddun@gmail.com"
        },
        {
            name: "Jenna Joseph",
            phone: "651102801",
            email: "jjoseph@gmail.com"
        }
    ],

    addContact: function(){
        let name, phone, email;

        do{
            name = prompt("Enter a name:");
        }while(!name);

        do{
            phone = prompt("Enter a phone number:");
        }while(!phone || phone.length !==9 || isNaN(parseInt(phone)));

        do{
            email = prompt("Enter an email:");
        }while(!email);

        const newUser = {
            name: name,
            phone: phone,
            email: email,
        };
        this.users.push(newUser);
    },

    findUserByName: function(){
        let findName = prompt("Enter the name of the user you'd like to find: ");
        let userToFound = this.users.find(user => user.name === findName);

        if(!userToFound){
            console.log("User with this name isn't found");
        }else{
            console.log(`Info about user with this name: \nName: ${userToFound.name} \nPhone: ${userToFound.phone} \nemail: ${userToFound.email}`);
        }
    },

    showUsers: function(){
       for (let i = 0; i < this.users.length; i++){
        console.log(`Name: ${this.users[i].name}`);
        console.log(`Phone: ${this.users[i].phone}`);
        console.log(`Email: ${this.users[i].email}`);
       }
    }
}
userInfo.addContact();
userInfo.showUsers();
userInfo.findUserByName();




// showUsers: function(){
//     for(let key in this.users){
//         console.log(`${key}: ${this.users[key]}`);
//     }
// }