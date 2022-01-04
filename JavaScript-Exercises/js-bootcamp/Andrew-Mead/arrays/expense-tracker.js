'use strict'

const account = {
    name: 'Chris Redfield',
    expenses: [],
    income: [],
    addIncome: function(desp, amt) {
        this.income.push( { description: desp, amount: amt} );
    },
    addExpense: function(desp, amt) {
        this.expenses.push( { description: desp, amount: amt } );
    },
    getAccountSummary: function() {
        let totalExp = 0;
        let totalInc = 0;

        this.income.forEach(function(elm) {
            totalInc += elm.amount;
        });

        this.expenses.forEach(function(elm) {
            totalExp += elm.amount;
        });

        return `${this.name} has a balance of $${totalInc -  totalExp}. $${totalInc} in income. $${totalExp} in expenses.`;
    }
}

// Expense -> description (string), amount (number)
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Andrew Mead has $1250 in expenses.

// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccount Summary

// Andrew Mead has a balance of $10. $100 in income. $90 in expenses.

account.addIncome('Work', 100000);
account.addIncome('Side project', 200);
account.addExpense('Bear', 1250);
account.addExpense('Liquor', 20);
console.log(account);
console.log('\r');
console.log(account.getAccountSummary());