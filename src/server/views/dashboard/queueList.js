const Queues = require('../../bull');

function handler(req, res) {
  Queues.setConfig(req.app.get('bull config'));
  const queues = Queues.list();

  return res.render('dashboard/templates/queueList', { queues });
}

module.exports = handler;
