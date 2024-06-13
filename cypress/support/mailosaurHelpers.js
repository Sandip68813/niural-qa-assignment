const MailosaurClient = require('mailosaur');

const apiKey = Cypress.env('mailosaurApiKey');
const serverId = Cypress.env('mailosaurServerId');
const mailosaur = new MailosaurClient(apiKey);

function getEmailByCriteria(criteria) {
  return mailosaur.messages.search(serverId, criteria);
}

function getEmailBySubject(subject) {
  return mailosaur.messages.search(serverId, {
    sentTo: serverId,
    subject
  });
}

const getLastEmail = (emailAddress) => {
    return mailosaur.messages.search(serverId, {
        sentTo: emailAddress
    }).then( result => result.items[0]);
}

module.exports = { getEmailByCriteria, getEmailBySubject, getLastEmail };