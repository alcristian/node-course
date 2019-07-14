var accounts = [];
//createAccount
function createAccount(account){
    accounts.push(account);
    return account;
}

//find account
function getAccount(username){
    var matchedAccount;
    for (var i=0; i < accounts.length; i++){
        if (accounts[i].username === username){
            matchedAccount = accounts[i];
        }
    }
    /*accounts.forEach( function(x) {
       if (x.username === username){
            matchedAccount = x;
       }
    });*/
    return matchedAccount;
};

//deposit
function deposit(account, amount){
    if (typeof amount==='number' ){
        account.balance +=  amount;
    }
};

// withdraw
function withdraw(account, amount = 0){
    account.balance -= amount;
};

function getBalancer(account){
    return function (){
        return  account.balance;
    }
}

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

deposit(getAccount('cristian3'),585858);

console.log(getAccount('cristian3'));

console.log(getBalancer(getAccount('cristian3'))());