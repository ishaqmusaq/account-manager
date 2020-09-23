import React, { Component } from 'react';
import AccountInfo from './AccountInfo';
import {connect} from 'react-redux'
import {deleteUser} from './store/usersAction'

class Contact extends Component{
    deleteUser = user_id => {
        this.props.deleteUser(user_id)
    };
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
                {this.props.users.map((item) => {

                    return (
                        <AccountInfo key={item.id}
                        id={item.id}
                         Bank_name={item.Bank_name}
                            Branch_Address={item.Branch_Address}
                            Account_name={item.Account_name}
                            Account_description={item.Account_description}
                            Account_number={item.Account_number}
                            Location={item.Location}
                            Amount_spent={item.Amount_spent}
                            removeUser={this.deleteUser} />
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

const mapDispatchToProps={
    deleteUser:deleteUser,
}


export default connect(mapStateToProps,mapDispatchToProps)(Contact);