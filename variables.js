// string
// collection of characters called as string.
// "", '', and ``(backtick).
//``(backtick) operator introduced in ES6.
//``(backtick) operator used to define the paragraphs.
//``(backtick) operator also called as template literal.
var sub = "ReactJS";
var wish = "Welcome to " + sub + " with Typescript";
console.log(wish); //Welcome to ReactJS with Typescript
var tbl_name = "employees";
var u_name = "scott";
var u_pwd = "tiger";
var sql_query = "select * from " + tbl_name + " where uname = '" + u_name + "' and upwd = '" + u_pwd + "'";
console.log(sql_query); //select * from employees where uname = 'scott' and upwd = 'tiger'
//number
//decimal, double, hexadecimal, octal and binary
//hexadecimal number should prefix with "0x"
//octal number will prefix with "0o"
//binary number will prefix with "0b"
var decimal = 100;
var double = 100.12345;
var hexadecimal = 0x123ABC;
var octal = 83;
var binary = 10;
console.log(decimal, double, hexadecimal, octal, binary); //100 100.12345 1194684 83 10
//boolean
//true or false
var $flag = true;
console.log($flag); //true
var demo = 1000;
console.log(demo); //1000
demo = "Active";
console.log(demo); //Active
//any
//any called as global datatype
//any have the capabality to hold any values
var demo1 = 200;
var demo2 = "Hello";
var demo3 = true;
var demo4 = { "wish": "welcome to react native" };
console.log(demo1, demo2, demo3, demo4); //200 Hello true { wish: 'welcome to react native' }
//array
var arr1 = [10, 20, 30, 40, 50];
var arr2 = [100, 200, 300, 400, 500];
arr1.forEach(function (element, index) {
    console.log(element, arr2[index]);
}); //10 100 20 200 30 300 40 400 50 500
var sub1 = ["Angular", "ReactJS", "VueJS"];
var sub2 = ["MongoDB", "Cassandra", "CouchDB"];
sub1.forEach(function (element, index) {
    console.log(element, sub2[index]);
});
