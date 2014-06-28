/** @jsx React.DOM */

Landing = React.createClass({
  render: function() {
    return (
      <div className="splash pure-g">
        <div className="pure-u-1-8"></div>
        <div className="pure-u-3-4">
          <div className="pure-g">
            <h2 className="logo pure-u-1-2">Low Fructose</h2>
            <SignInButton />
          </div>
          <h1 className="catchphrase">More sports, less sugar.</h1>
          <p className="tagline">Tired of the same old fantasy sports? So are we.</p>
          <p className="tagline">Low Fructose does sports right, and we think you'll agree.</p>
          <RegisterForm />
        </div>
        <div className="pure-u-1-8"></div>
      </div>
    );
  }
});
