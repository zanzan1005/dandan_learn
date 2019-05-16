攻防
攻 ：SQL 前端的SQL是什么？
前端处理着表单，SQL
攻击者就是带着目的来的，SQL
输入字符串　有可能带来SQL麻烦
表单->onsubmit->/login POST
{email:'user@email.com',passsword:'123456''}
->SQL拼接

SELECT * from users WHERE
email = 'user@email.com' and password = '123456'';

怎么录入进银行账号，把钱给拿走
登录银行账号，但密码是不知道的
SQL  一种是破坏，SQL语法 导致服务器挂了
还有一种是窃取账户 ' or 1 = 1--

session