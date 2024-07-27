import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


function TransactionList () {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        fetch.get('/api/transactions').then((response) => {
            setTransactions(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Office Transactions</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Credit</th>
                        <th>Debit</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.credit}</td>
                            <td>{transaction.debit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/add">+Add Transaction</Link>
        </div>
    );

}

export default TransactionList