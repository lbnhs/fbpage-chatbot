'use strict';
module.exports = (bot) => {
  bot.hear('Get started', (payload, chat) => {
    const text = payload.message.text;
    const buttons = [
      { type: 'postback', title: 'School Information', payload: 'HELP_INFORMATION' },
      { type: 'postback', title: 'School Announcements', payload: 'HELP_ANNOUNCEMENTS' },
      { type: 'postback', title: 'School Events', payload: 'HELP_EVENTS' },
      { type: 'postback', title: 'Bot Information', payload: 'HELP_BOT_INFORMATION' }
    ];
    chat.sendButtonTemplate(`Hi, I'm Mr. AI Tonian!\nI'm here to assist you about your concerns in our school.\n\nChoose topic here below what do you want to talk.`, buttons);
  });
};