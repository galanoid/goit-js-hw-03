const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

class Account {
    balance = 0;
    transactions = [];

    createTransaction(amount, type) {
        this.transactions.push({id: this.transactions.length + 1, amount, type});
        this.balance += amount;
        console.log('%c%s', 'color: green', 'Transaction: SUCCESS!');
    }

    deposit(amount) {
        if (amount < 0) {
            console.error('Нельзя положить сумму меньше нуля!');
            return;
        }

        this.createTransaction(amount, Transaction.DEPOSIT)
        console.log('Вы положили на счет:', amount);
    }

    withdraw(amount) {
        if (this.balance < amount) {
            console.error('Недостаточно средств');
            return; 
        }

        this.createTransaction(-amount, Transaction.WITHDRAW);
        console.log('Вы сняли со счета:', amount);
    }

    get name() {
        return this._name;
    }
    
    getBalance() {
        console.log('Ваш баланс:', this.balance);
    }

    getTransactionDetails(id) {
        const yourTransaction = this.transactions.find(item => item.id === id);
        console.log('Сумма операции:', yourTransaction.amount, '\nТип операции:', yourTransaction.type === Transaction.WITHDRAW ? 'Снято' : 'Депозит');
    }
    getTransactionTotal(type) {
        const filteredTransactions = this.transactions.filter(item => item.type === type);
        let total = 0;
        filteredTransactions.forEach(item => total += item.amount);
        console.log(total);
    }
}

const myAccount = new Account();
myAccount.deposit(1000);
myAccount.withdraw(200);
myAccount.getBalance();
myAccount.getTransactionDetails(1);
myAccount.getTransactionTotal(Transaction.WITHDRAW);