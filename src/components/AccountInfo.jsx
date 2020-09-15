import React from 'react';


const accountInfo = ({id, Bank_name, Branch_Address, Account_name, Account_description, Location, Amount_spent,Account_nummber ,removeUser}) => {
    const handleClick = () => {
        removeUser(id)
    }
    return (
        <div>
            <div className='output-info'>
                <h1>USER DAILY RESULT</h1>
    
                <p>Bank Name:{Bank_name}</p>
                <p>Branch Address: {Branch_Address}</p>
                <p>Account Name: {Account_name}</p>
                <p>Account Number:{Account_nummber}</p>
                <p>Account Description: {Account_description}</p>
                <p>Location:{Location}</p>
                <p>AMOUNT_SPENT: {Amount_spent}</p>
                <button onClick={handleClick}>DLELTE_USER</button><br />
                <a href={`/edit/${id}`}>EDIT USER</a>
                
                <button>Delete account</button>
            </div>
        </div>
    );
}

export default accountInfo;