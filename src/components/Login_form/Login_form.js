
import './Login_form.css';
import React from 'react';


class Login_form extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      number :this.props.number,
      redirectToReferrer: this.props.redirectToReferrer,
      mssg :this.props.mssg
    }
   this.login = this.login.bind(this);
   this.onChange = this.onChange.bind(this);

  }

  login(e) {
    e.preventDefault();
    this.setState({mssg: this.state.number});
    // this.renderRedirect();
    // if(this.state.number!=''){
    //   PostData('login',this.state).then((result) => {
    //    let responseJson = result;
    //    if(responseJson.userData){
    //      sessionStorage.setItem('userData',JSON.stringify(responseJson));
    //      this.setState({redirectToReferrer: true});
    //    }
    //
    //   });
    // } else {
    //
    // }

   }

  onChange(e){
    this.setState({number:e.target.value});


   }


  render() {
    return (
      <div class="Login">
          <form class="login-form"  name="myForm">
              <div class="form-header">
                  <h2>Welcome to BankPro</h2>
              </div>

              <div class="form-group">
                <label for="nomor">Enter your number here</label>
                <input type="text" name="nomor" placeholder="xxxxxxxx" id="nomor" onChange={this.onChange} />
                <div class = "error" id="error">
                {this.state.mssg}
                </div>
              </div>

              <div class="form-group">
                <button name="login" type="submit" id="login" onClick={(e) => {this.login(e)}}>Login</button>
              </div>

              <div class="form-footer"></div>

          </form>
      </div>

    );
  }

}

export default Login_form;
