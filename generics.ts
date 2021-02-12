// function fun_one<string>(arg1:string):string{}

/*
    function fun_one<A>(arg1:A):A{
        return arg1;
    }
    console.log( fun_one<string>("Hello") );        //Hello
    console.log( fun_one<number>(100) );            //100
    console.log( fun_one<boolean>(true) );          //true
*/
/*
    function fun_one<T>(arg1:T[]):T[]{
        return arg1;
    };
    let arr1 = fun_one<string>(["Hello_1", "Hello_2", "Hello_3"]);
    arr1.push("Hello_4");
    // arr1.push(100)      //Argument of type 'number' is not assignable to parameter of type 'string'
    console.log(arr1);      //[ 'Hello_1', 'Hello_2', 'Hello_3', 'Hello_4' ]

    let arr2 = fun_one<number>([100,200,300]);
    arr2.push(400);
    // arr2.push("Hello_5");       //Argument of type 'string' is not assignable to parameter of type 'number'.
    console.log(arr2);        //[ 100, 200, 300, 400 ]
*/

function fun_one<A,B>(arg1:A,arg2:B):void{
    console.log(arg1,arg2);
};
fun_one<string,string>("Hello_1","Hello_2");    //Hello_1 Hello_2
fun_one<number,number>(100,200);                //100 200
fun_one<any,any>(true,"Hello");                 //true Hello
