if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to popover-reproduction.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
  Template.hello.rendered = function() {
    $('h2').popover({
      html: true,
      content: Meteor.render(Template['popover'])
    });
  };
  Template.popover.helpers({
    'displayPieces': function () {
      total = [
        {itemName: "apple", itemPrice: 10},
        {itemName: "watermellon", itemPrice: 4},
        {itemName: "bananas", itemPrice: 3},
        {itemName: "cigars", itemPrice: 123},
        {itemName: "whisky", itemPrice: 34},
      ];
      return total;
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
