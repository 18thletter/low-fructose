Schemas = {};

Schemas.User = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  username: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  },
  "email.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "email.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date,
    denyUpdate: true
  },
});

//Meteor.users.attachSchema(Schemas.User);
