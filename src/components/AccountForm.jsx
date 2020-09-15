import React, { Component } from 'react';


export class AccountForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '1',
            Bank_name: '',
            Account_description: '',
            Branch_Address: '',
            Account_name: '',
            Account_number: '',
            Location: '',
            amount_spent: ''
        };

    }

    handleChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value,
            }
        );

    };
    handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            Bank_name: this.state.Bank_name,
            Branch_Address: this.state.Branch_Address,
            Account_name: this.state.Account_name,
            Account_description: this.state.Account_description,
            Account_number: this.state.Account_number,
            Location:this.state.Location,
            amount_spent: this.state.amount_spent,

        };

        this.props.addUser(newUser);
        this.setState(
            {
                Bank_name: '',
                Branch_Address: '',
                Account_name: '',
                Account_description: '',
                Account_number: '',
                Location: '',
                amount_spent: ''
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='App-user-form'>
                <div className='container'>
                    <h1 className='App-header'>Account Details</h1>

                    <div className='form-control'>
                        <label>Bank Name: </label>
                        <input placeholder='Bank Name' name='Bank_name' value={this.state.Bank_name} onChange={this.handleChange}  type='text'/>
                        <br />
                    </div>
                    <br /><br />
                    <div className='form-control'>
                        <label>Account Description:</label>
                        <input placeholder='Account Deascription' name='Account_description' value={this.state.Account_description} onChange={this.handleChange} type="text"/>
                        <br />
                    </div>
                    <br /><br />


                    <div className='form-control'>
                        <label>Branch_Address: </label>
                        <textarea placeholder='Branch_Address' name='Branch_Address' value={this.state.Branch_Address} onChange={this.handleChange} type="address" />
                        <br />
                    </div>
                    <br /><br />

                    <div className='form-control'>
                        <label>Account Name: </label>
                        <input placeholder='Account Name' name='Account_name' value={this.state.Account_name} onChange={this.handleChange} type='text' />
                        <br />
                    </div>
                    <br /><br />
                    <div className='form-control'>
                        <label>Account Number: </label>
                        <input placeholder='Account number' name='Account_number' value={this.state.Account_number} onChange={this.handleChange} type='number'  />
                        <br />
                    </div>
                    <br /><br />
                    <div className='form-control'>
                        <label>Location: </label>
                        <input placeholder=' Location' name='Location' value={this.state.Location} onChange={this.handleChange} type='location' />
                        <br />
                    </div>

                    <br /><br />
                    <div className='form-control'>
                        <label>Amount Spent: </label>
                        <input placeholder=' Amounnt Spent' name='amount_spent' value={this.state.amount_spent} onChange={this.handleChange} type='amount' />
                        <br /><br />
                    </div><br />
                    <button className='btn' type='submit'> Add Item</button>
                </div>
                <button type="reset" className='btn'>reset</button>
            </form>
        );
    }
}

export default AccountForm;