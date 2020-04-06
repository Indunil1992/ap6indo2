let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    try {
        let data = await sns.subscribe({
            TopicArn: "arn:aws:sns:us-east-1:318300609668:TestSNS",
            Protocol: "https",
            Endpoint: "https://052p9kjn18.execute-api.us-east-1.amazonaws.com/test/qa/indu"
        }).promise();
console.log("Daaata")
console.log(data)
    } catch (err) {
        console.log("errrr")
console.log(err)
        // error handling goes here
    };

    return { "message": "successfully executed" };

};