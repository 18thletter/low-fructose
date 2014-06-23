/**  @jsx React.DOM */

if (Meteor.isClient) {
  Meteor.startup(function() {

  var sidebarItems = [
    "menu option 1",
    "menu option 2",
    "menu option 3",
    "menu option 4",
  ];

    React.renderComponent(
      <div>
        <Topbar leagueName="League Name" userName="User Name" />
        <Sidebar items={sidebarItems} />
      </div>,
      document.body
    );
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
