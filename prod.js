var kafkaesque = require('kafkaesque')({
  brokers: [{host: 'localhost', port: 9092}]
});

kafkaesque.produce('testing', 'message 1');
kafkaesque.produce('testing', 'message 2');
kafkaesque.produce('testing', 'message 3');
kafkaesque.produce('testing', 'message 4');
kafkaesque.produce('testing', 'message 5');
kafkaesque.produce('testing', 'message 6');
kafkaesque.produce('testing', 'message 7');

