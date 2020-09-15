import React, { Component } from 'react';
import AccountInfo from './AccountInfo';
import {connect} from 'react-redux'

class Contact extends Component{
    render(){
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p className="center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
                deleniti culpa labore dolores, vitae modi corporis nam maiores
                consequatur esse harum sapiente consequuntur! Nihil libero amet minus.
                Magni, suscipit unde!
      </p>
        
        
            <div className='App_user-info'>
                {this.props.users.map((item, index) => {

                    return (
                        <AccountInfo key={index} Bank_name={item.Bank_name}
                            Branch_Address={item.Branch_Address}
                            Account_name={item.Account_name}
                            Account_description={item.Account_description}
                            Account_number={item.Account_number}
                            Location={item.Location}
                            Amount_spent={item.Amount_spent} />
                    );
                })}
            </div>
        </div>
    );
            }
};
const mapStateToProps = (state) => ({
    users: state.users
})


export default connect(mapStateToProps)(Contact);