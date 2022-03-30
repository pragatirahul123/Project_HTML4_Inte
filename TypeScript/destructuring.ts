// Array desturing

let arr =[1,2];
    let[x1,x2] = arr;
    console.log(x1,x2);




    // Object destructuring
    const student ={
        name:'Sachin Tendulkar';
        age:16,
        score:{
            maths:75;
            english:45;
            science:56
        }
    };

    function displaySummary(student){
        console.log('Hello' + student.name);
        console.log('your math score is' +(student.scores.maths));
        console.log('your English score is' + (student.scores.science));
    }
    displaySummary(student);

        // const student={
        //     firstname:'sachin',
        //     lastname:'tendulkar',
        //     country:'India'
        // }
        //object Destructuring
        const {firstname,lastname,country} = student;

        console.log(firstname,lastname,country);

    // Array Desturing

    let arr =[1,2];
        let [x1,x2] = arr;
        console.log(x1,x2)
    