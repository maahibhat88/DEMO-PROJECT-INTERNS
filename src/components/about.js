import axios from 'axios';



function About (){

    let data =  null;
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
        console.log("Data ",res.data);
        data = res.data;
    })

    return(
        <>
            About Us
        </>
    )
};


export default About;