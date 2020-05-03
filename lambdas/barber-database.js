const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-2' });

exports.handler = (event, context, callback) => {
  console.log('Processing...');
  const params = {
    Item: {
      date: Date.now(),
      name: event.key1,
      address: event.key2,
      phonenumber: event.key3,
    },
    TableName: 'barbershops',
  };
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify('Lambda for the barbershops works!'),
  };

  docClient.put(params, function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};
