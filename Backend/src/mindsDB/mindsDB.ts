import MindsDB from "mindsdb-js-sdk";

async function generatingResponse(user: string, text: string) {
    await MindsDB.connect({
        user: 'ahmed_hilly2002@yahoo.com',
        password: '4Bw#]#Etu#=m5Fa',
        host: 'https://cloud.mindsdb.com'
    });
    const queryOptions = {
        where: [
            `user = "${user}"`,
            `text = "${text}"`
        ]
    }
    return MindsDB.Models.queryModel('gpt_model', 1, 'response', 'mindsdb', queryOptions);
}
export default generatingResponse