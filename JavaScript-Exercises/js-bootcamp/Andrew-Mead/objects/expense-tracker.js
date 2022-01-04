// Challenge

/*

Create an expense tracker that does the following:

1. Add income
2. Add expense
3. Balance (income - expense)
3. Get account summary
    a. Account for Chris Redfield has $900. $1000 in income. $100 in expenses
4. Rest account (everything to 0)    

*/

let myAccount = {
    name: 'Chris Redfield',
    income: 0,
    expense: 0,
    balance: 0
}

function addIncome(account, amount) {
    account.income += amount;
    account.balance = account.income - account.expense;
}

function addExpense(account, amount) {
    account.expense += amount;
    account.balance = account.income - account.expense;
}

function accountRest(account) {
    account.income = 0;
    account.expense = 0;
    account.balance = 0;    
}

function accountSummary(account) {
    return `Account for ${account.name} has $${account.balance}. $${account.income} in income. $${account.expense} in expenses.`;
}

addIncome(myAccount, 1000);

addExpense(myAccount, 100);

console.log(accountSummary(myAccount));

accountRest(myAccount);

console.log(accountSummary(myAccount));
