var account = {
    balance: 0
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
    return account.balance
    //console.log('The actual balance in our account is = ' + account.balance);
};


deposit(account,55555555);
withdraw(account,8888888);
console.log('The actual balance in our account is = ' + getBalance(account));
deposit(account,66666);
console.log('The actual balance in our account is = ' + getBalance(account));
