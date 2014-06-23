/** @jsx React.DOM */

Sidebar = React.createClass({
  render: function() {
    var items = this.props.items.map(function(item) {
      return <SidebarItem item={item} />;
    })
    return (
      <div id="side-bar" className="side-bar pure-menu pure-menu-open">
        <ul>
          {items}
        </ul>
      </div>
    );
  }
});

var SidebarItem = React.createClass({
  render: function() {
    return (<li>{this.props.item}</li>);
  }
})

