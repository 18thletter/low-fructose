/** @jsx React.DOM */

Landing = React.createClass({
  render: function() {
    // todo: eventually we will put the logo into the background image itself,
    // once we figure out what the logo is
    return (
      <div className="landing">
        <div className="landing-inner">
          <div className="landing-top">
            <div className="logo">Low Fructose</div>
            <SignInButton />
          </div>
          <div className="landing-middle">
            <h1>More sports, less sugar.</h1>
            <p>Tired of the same old fantasy sports? So are we.</p>
            <p>Low Fructose does sports right, and we think you'll agree.</p>
          </div>
          <RegisterForm />
        </div>
      </div>
    );
  }
});
