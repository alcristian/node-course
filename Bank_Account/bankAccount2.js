var accounts = [];

//object account
var account = {
    balance: 0 , 
    username:'' 
};
//createAccount
function createAccount(account){
    accounts.push(account);
    return account;
}

//getAccount(username)
//find matching account using foreach

function getAccount(username){
    var matchedAccount;
    accounts.forEach( function(x) {

       if (x.username === username){
            matchedAccount = x;
       }
    });
    return matchedAccount;
};

//deposit
function deposit(account, amount = 0){
    account.balance +=  amount;
};

// withdraw
function withdraw(account, amount = 0){
    account.balance -= amount;
};

function getBalance(account){
    return account.balance;
    //console.log('The actual balance in our account is = ' + account.balance);
};

createAccount({
    username: 'cristian1', 
    balance : 0
}
);
createAccount({
    username: 'cristian2', 
    balance : 0
}
);

createAccount({
    username: 'cristian3', 
    balance : 0
}
);

deposit(getAccount('cristian3'),200);
deposit(getAccount('cristian3'),200);
deposit(getAccount('cristian2'),2020);
deposit(getAccount('cristian1'),2400);

console.log('withdrawn');
withdraw(getAccount('cristian2'),100);
withdraw(getAccount('cristian3'),100)
withdraw(getAccount('cristian1'),100)

console.log(accounts);
