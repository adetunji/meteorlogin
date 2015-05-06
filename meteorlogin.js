if (Meteor.isClient) {
  Template.register.events({
    'submit form':function(event){
      event.preventDefault();
      var emailVar = event.target.registerEmail.value;
      var passVar = event.target.registerPassword.value;
      console.log('Form Submitted');
      Accounts.createUser({
        email: emailVar,
        password: passVar
      });
    }
  });

  Template.login.events({
    'submit form':function(event){
      event.preventDefault();
      var emailVar = event.target.loginEmail.value;
      var passVar = event.target.loginPassword.value;
      Meteor.loginWithPassword(emailVar, passVar);
      console.log('Form Submitted');

    }
  });

  Template.dashboard.events({
    'click.logout':function(event){
      event.preventDefault();
      Meteor.logout();
    }
  });
}
