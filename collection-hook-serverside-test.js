TestDB = new Mongo.Collection('test');

TestDB.allow({
  insert() {
    return false;
  },
  update() {
    return false;
  },
  remove() {
    return false;
  }
});

TestDB.before.insert((userId, doc)=>{
  console.log('before insert hook!');
  doc.createdAt = new Date();
});

var schema = new SimpleSchema({
  foo: {
    type: String,
  },
  createdAt: {
    type: Date,
  }
});

TestDB.attachSchema(schema);

Meteor.methods({
  insertTest(foo) {
    TestDB.insert({foo: foo});
  },
});

if (Meteor.isClient) {
  Template.hello.events({
    'click button': function () {
      Meteor.call('insertTest', 'bar');
    }
  });
}
