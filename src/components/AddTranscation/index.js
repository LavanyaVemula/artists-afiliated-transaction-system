import React, {useState} from "react";
import {useHistory} from 'react-router-dom';

function AddTransaction(){
    const [form, setForm] = useState({
        type : 'Debit',
        amount : '',
        description : ''
    })

    const history = useHistory();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name] : value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch.post('./api/transactions', form).then(() => {
            history.push('/');
        });
    };

    return(
        <div>
            <h1>New Transaction</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Transaction Type :
                    <select name="type" value={form.type} onChange={handleChange}>
                        <option value="Credit">Credit</option>
                        <option value="Debit">Debit</option>
                    </select>
                </label>
                <label>
                    Amount :
                    <input type="number" name="amount" value={form.amount} onChange={handleChange} />
                </label>
                <label>
                    Description :
                    <input type="text" name="description" value={form.description} onChange={handleChange}  />
                </label>
                <button type="button">submit</button>
            </form>
        </div>
    )
}
export default AddTransaction;