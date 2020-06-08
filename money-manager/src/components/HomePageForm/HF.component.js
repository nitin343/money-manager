import React,{useState, useEffect} from "react";
import "./HF.style.scss";
import NumberFormat from "react-number-format";
import {  userName } from "../../redux/User/user.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const HF = ({displayName}) => {
   
    const [formData , setFormData] = useState({
        updateAmount: '',
        date: '',
        describe1: '',
        amount1: '',
        describe2: '',
        amount2: '',
        describe3: '',
        amount3: '',
        describe4: '',
        amount4: '',
        describe5: '',
        amount5: '',
        describe6: '',
        amount6: '',
        describe7: '',
        amount7: '',
        describe8: '',
        amount8: '',

    })

    useEffect(() => {
          const data = localStorage.getItem("my-form-data");
          if( data){
              setFormData(JSON.parse(data))
          }
    }, [])

    useEffect(() => {
        localStorage.setItem("my-form-data", JSON.stringify(formData));
    })

    const {
        updateAmount , date , describe1 , amount1 ,
        describe2 , amount2 , describe3 , amount3 ,
        describe4 , amount4 , describe5 , amount5 ,
        describe6 , amount6 , describe7 , amount7 ,
        describe8 , amount8
    } = formData


  const   handleSubmit =  (event) => {
        event.preventDefault();
          setFormData({
            updateAmount: '',
            date: '',
            describe1: '',
            amount1: '',
            describe2: '',
            amount2: '',
            describe3: '',
            amount3: '',
            describe4: '',
            amount4: '',
            describe5: '',
            amount5: '',
            describe6: '',
            amount6: '',
            describe7: '',
            amount7: '',
            describe8: '',
            amount8: '',
          });
        }

const handleChange = (event) => {
    const {name , value} = event.target;
    setFormData({...formData , [name]: value})
}

console.log(formData);


  return (
    <div className="parent">
      <div className="Rectangle1">
        <div className="DisplayName">Welcome &nbsp; {displayName}</div>
        <form onSubmit={handleSubmit}>
          <div className="Rectangle2">
            <div className="AddAmount">
              Update Amount
              <div>
                <NumberFormat
                  className="aLabel"
                  thousandSeparator={true}
                  thousandsGroupStyle="lakh"
                  prefix={"INR  "}
                  name='updateAmount'
                  value={updateAmount}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='Reactangle3' >
        <input type='date' className='input' style={{margin:'10px 27%' }}
        name='date'
        value={date}
        onChange={handleChange} />
        
        <input type='text' placeholder='Describre Your Spending' className='input'
        name='describe1'
        value={describe1}
        onChange={handleChange}/>
            <NumberFormat    thousandSeparator={true}
             thousandsGroupStyle="lakh"
             placeholder='Amount in INR ' className='Format'
             name='amount1'
             value={amount1}
             onChange={handleChange}/>

             <input type='text' placeholder='Describre Your Spending' className='input'
             name='describe2'
             value={describe2}
             onChange={handleChange}/>
               <NumberFormat    thousandSeparator={true}
               thousandsGroupStyle="lakh"
               placeholder='Amount in INR ' className='Format'
               name='amount2'
               value={amount2}
               onChange={handleChange}/>

              <input type='text' placeholder='Describre Your Spending' className='input'
              name='describe3'
              value={describe3}
              onChange={handleChange}/>
                <NumberFormat    thousandSeparator={true}
                thousandsGroupStyle="lakh"
                placeholder='Amount in INR ' className='Format'
                name='amount3'
                value={amount3}
                onChange={handleChange}/>

               <input type='text' placeholder='Describre Your Spending' className='input'
               name='describe4'
               value={describe4}
               onChange={handleChange}/>
                  <NumberFormat    thousandSeparator={true}
                  thousandsGroupStyle="lakh"
                  placeholder='Amount in INR '  className='Format'
                  name='amount4'
                  value={amount4}
                  onChange={handleChange}/>

                <input type='text' placeholder='Describre Your Spending' className='input'
                name='describe5'
                value={describe5}
                onChange={handleChange}/>
                  <NumberFormat    thousandSeparator={true}
                  thousandsGroupStyle="lakh"
                  placeholder='Amount in INR ' className='Format'
                  name='amount5'
                  value={amount5}
                  onChange={handleChange}/>

                 <input type='text' placeholder='Describre Your Spending' className='input'
                 name='describe6'
                 value={describe6}
                 onChange={handleChange}/>
                    <NumberFormat    thousandSeparator={true}
                     thousandsGroupStyle="lakh"
                      placeholder='Amount in INR ' className='Format'
                      name='amount6'
                      value={amount6}
                      onChange={handleChange}/>

                  <input type='text' placeholder='Describre Your Spending' className='input'
                  name='describe7'
                  value={describe7}
                  onChange={handleChange}/>
                     <NumberFormat    thousandSeparator={true}
                     thousandsGroupStyle="lakh"
                     placeholder='Amount in INR' className='Format'
                     name='amount7'
                     value={amount7}
                     onChange={handleChange}/>

                   <input type='text' placeholder='Describre Your Spending' className='input'
                   name='describe8'
                   value={describe8}
                   onChange={handleChange}/>
                     <NumberFormat    thousandSeparator={true}
                     thousandsGroupStyle="lakh"
                     placeholder='Amount in INR ' className='Format'
                     name='amount8'
                     value={amount8}
                     onChange={handleChange}/>


                    <button class="btn btn-primary" type="submit">Save </button>

                </div>
            </div>
            
          
    
        </form>
      </div>
    </div>
  );
  }

 const  mapStateToProps = createStructuredSelector({
      displayName: userName
  })

export default connect(mapStateToProps)(HF);
