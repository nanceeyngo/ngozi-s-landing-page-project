import React, {useState} from 'react';
import './form.css';


// creating a FormComponent to house my form
export default function FormComponent() {
    //declaring a constanst to track and handle form input state
    const [inputValues, setInputValues] = useState({});
   //declaring a constant to validate form
    const [error, setError] = useState('');
   
   
//creating a function to hadle input changes in the form
    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // controling the values of all input fields by mapping and concatenating with the 3 dots
        setInputValues(values => ({...values, [name]: value}));

        //using the if statement to prevent submission until all fields are filled out by user
        if (!value.trim()) {
            setError('This field is required!');
            
        }
        else {
            setError('')
        }
        
    }
//function to drop an alert messeage, as well as print input values into the console, if all fields have been filled
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!error) {

        console.log('Form submitted with input:', inputValues);
        alert('THANK YOU FOR BOOKING WITH US! YOUR RESPONSE HAS BEEN RECEIVED.');
        }
    }

    return (
        <div>
        <div className='bk'><h3 className='inndiv'>BOOK YOUR SPACE NOW BY FILLING THE FORM BELOW!</h3></div>
        <div className='form'> 
       {/* adding the handleSubmit function to the onSubmit event of the form */}
        <form onSubmit={handleSubmit}>
           {/*form input fields  */}
            <label htmlFor='username'>
                Name  </label>
            
            {/* specifying input type as 'text' name as 'username' (used to track input valuesin 'value={inputValues.username}, placeholder to give info in the inputfield, and the handleInputChange to handle onChange events*/}
            {/* inserting 'required' in my form fields (example on line 57) helps validate the form by putting up the notification 'Please fill out this field' whenever a user fails to fill in all fields */}
            <input 
                type="text"
                name='username'
                placeholder='Enter your name'
                value={inputValues.username || ""}
                onChange={handleInputChange} required/>
            <br></br><br></br>

            <label htmlFor='email'>
                Email  </label>
            <input 
                type="email"
                name='email'
                placeholder='ex:myname@gmail.com'
                value={inputValues.email || ""}
                onChange={handleInputChange} required/>
            <br></br><br></br>

                <label htmlFor='phoneno'>
                Phone Number  </label>
            <input 
                type="number"
                name='phoneno'
                placeholder='Enter your phonenumber'
                value={inputValues.phoneno || ""}
                onChange={handleInputChange} required/>
            <br></br><br></br>

            <label htmlFor='roomtype'>
                Room Type  </label>

            {/*the select tag creates a dropdown menu  */}
            <select 
                name='roomtype'
                
                value={inputValues.roomtype || ""}
                onChange={handleInputChange} required>

                <option value= ''>--Please Select---</option>
                <option value="standard-room">Standard Room - 1 to 2 people</option>
                <option value= "family-room" >Family Room - 1 to 4 people</option>
                <option value= "private-room" >Private Room - 1 to 3 people</option>
            </select><br></br><br></br>

            <label htmlFor='guests'>Number of Guests  </label>
                 
            <input 
                placeholder="e.g. 2, 3"
                type="number"
                name='guests'
                value={inputValues.guests || ""}
                onChange={handleInputChange} required/>
            <br></br><br></br>

            <label htmlFor='roomtype'>
                Arrival Time  </label>
            
            <select 
                name='arrival'
                value={inputValues.arrival || ""}
                onChange={handleInputChange} required>

                <option value= ''>--Please Select---</option>
                <option value="1daytime">1 day time</option>
                <option value= "2-5daystime" >2 - 5 days time</option>
                <option value= "1weektime" >1 week time</option>
                <option value= "2weeks-1monthtime" >2 weeks - 1 month time</option>
                <option value= "3monthstime" >2 months - 3 months time</option>
                <option value= "longerthan3months" >Longer than 3 months</option>
            </select><br></br><br></br>

            <label htmlFor='referral'>
                Referral Source  </label>
            
            <select 
                name='referral'
                value={inputValues.referral || ""}
                onChange={handleInputChange} required>

                <option value= ''>--Please Select---</option>
                <option value="internet">Internet</option>
                <option value= "socialmediaadverts" >Social Media Adverts</option>
                <option value= "wordofmouth" >Word of mouth</option>
                
            </select><br></br><br></br>

            {/* to display error message at the bottom of the form, whenever a user has not filled the form correctly */}
            {error && <p className='errormsg'>{error}</p>}
            <button type="submit">BOOK NOW</button>
        </form>
        </div>
        </div>
        
    
    )


}


