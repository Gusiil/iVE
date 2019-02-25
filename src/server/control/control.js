
var questions=[
{
    data:213,
    num:444,
    age:12
},
{
    data:456,
    num:678,
    age:13
}];

const API = [{
    req: '/123/:ac,:pass',
    do: (res) => {
        console.log(JSON.stringify(res));

        console.log(`账号：${res.ac},密码：${res.pass}`);
        return res.ac === 'gusiil' && res.pass === '9527' ? {
            state: true,
            res: `登录成功`,
        } : {
            state: false,
            res: `账号错误`,
        }
    }
}]

module.exports = API
