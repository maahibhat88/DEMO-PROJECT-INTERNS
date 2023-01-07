const Callback = () => {

    //ASYNC - SYNC
    // i will call back 
    // JS ASYNC --- callbacks work synchronously  -- in a sequence (one after another)
    const function1 = (callback) => {
        console.log("function 1 executed");
        let data = 1;
        callback(data,function3);
    }

    const function2 = (data,callback) => {
        console.log("function 2 executed");
        let sum = data + 2;
        callback(sum);

    }

    const function3 = (sum) => {
        console.log("function 3 executed and sum is ",sum);
    }

    return(
        <>
        { function1(function2) }
        </>
    );


};


export default Callback;