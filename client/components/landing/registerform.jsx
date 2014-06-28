/** @jsx React.DOM */

RegisterForm = React.createClass({
  render: function() {
    return (
      <form className="pure-form register-form">
        <fieldset>
          <input type="email" placeholder="Email Address" />
          <button type="submit" className="pure-button pure-button-primary">Sign up for Free</button>
        </fieldset>
      </form>
    );
  }
})
