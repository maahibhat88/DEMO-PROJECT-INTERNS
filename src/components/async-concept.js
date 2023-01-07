import axios from "axios";

const AsyncComp = () => {


    //concept of asynchronous // promises  // async and await
    // const a = async () => {

        // setTimeout(()=>{
        //     console.log("4000ms");
        //     axios.get("http://demo5966108909.mockable.io/posts").then(res => {
        //         console.log("hello i am 3000ms worked successfully", res);
        //     }, (e) => {
        //         console.log("Error message", e);
        //     });
        // },4000);

        // setTimeout(()=>{
        //     console.log("3000ms");
        //     axios.get("http://demo5966109.mockable.io/posts").then(res => {
        //         console.log("hello i am 4000ms worked successfully",res);
        //     })
        // },3000);

        // const b = async () => {

        // }

        // const inte  = setInterval(()=>{
        //     console.log("hello");
        // },2000);

        // let afunc  = await a();   // user login it gets token to pass in function b required
        // let bfunc =  await b(afunc);



    // }

    // const b = () => {
    //     console.log("b");
    // }



        // A promise has 3 states  -- it return them 
        // 1 pending, 2  fulfilled,  3 Rejected

        const myFunc = () => {
            console.log("hello i am myfunc");
            return {data : [ { name: "rasheeqa" , id : 1}, {name : "irtiqa", id : 2}] , status : 400};
        }

        const myPromise = new Promise((resolve,reject) => {
            let data = myFunc();
            if(data.data && data.status == 200){
                resolve(data);
            }
            else {
                reject(data);
            }
        });

        myPromise.then(res => {
            console.log("res",res);
        },(e)=>{
            console.log("Error " ,e);
        });






    return (
        <>
            <h1>Asynchronous Concepts of JavaScript</h1>
            {/* {a()}
            {b()} */}
        </>
    )
};

export default AsyncComp;


// browser   (normal code --  synchronous code) (web apis -- asynchrnous code)

// stack            and            queue
// normal                          async
// functions                       
