/** @jsx React.DOM */

RegisterForm = React.createClass({
  render: function() {
    return (
      <form>
        <fieldset>
          <input type="email" placeholder="Email Address" />
          <button type="submit">Sign up for Free</button>
        </fieldset>
      </form>
    );
  }
})
