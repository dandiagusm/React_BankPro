
import './Login.css';
import React from 'react';
import logo from './logo.svg';
import Login_form from '../../components/Login_form/Login_form';

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      number :'',
      redirectToReferrer: false,
      mssg :''
    }

  }


   // renderRedirect(){
   //   if (this.state.redirectToReferrer) {
   //     return <Redirect to='/Home' />
   //   }
   // }

  // ComponentDidMount(){
  //   fetch().
  //   then (result => {
  //
  //   }).then(data => {
  //
  //   })
  // }



  render() {
    return (
      <div>
        <div className="App">
          <div className="head"></div>

          <div className="judul">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>BankPro</h1>
          </div>
          <Login_form number = {this.state.number}
                      redirectToReferrer = {this.state.redirectToReferrer}
                      mssg = { this.state.mssg}
          />
        </div>
      </div>

    );
  }

}

export default Login;
