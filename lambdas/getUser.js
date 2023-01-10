const Responses = require('./API_Responses');

exports.handler = async event => {
    console.log('event', event);

    if (!event.pathParameters || !event.pathParameters.ID) {
        // IDがない場合
        return Responses._400({ message: 'パスにIDがありません' });
    }

    let ID = event.pathParameters.ID;

    if (data[ID]) {
        // データを返します
        return Responses._200(data[ID]);
    }

    //データにIDがない場合
    return Responses._400({ message: 'データにIDがありません' });
};

const data = {
    1234: { name: '田中', age: 25, job: 'エンジニア' },
    7893: { name: '木下', age: 52, job: '教師' },
    5132: { name: '安藤', age: 23, job: '芸術家' },
};
