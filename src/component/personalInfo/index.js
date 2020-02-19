import React, {Component, Fragment, useImperativeHandle} from 'react'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import history from '../../history';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";

class PersonalInfo extends Component {
    state = {
        data: {
            f_name:"",
            l_name:"",
            email:"",
            mobileNo:"",
            city:"",
            state:"",
            country:""  
        },
        personInfo:[],
        show:false,
        showSave:true,
        personName:""
    };
    
    componentWillMount() {
        console.log('Mount -',this.state.data)
        if(localStorage.details !== undefined){

       
      
            let allPersonInfo = JSON.parse(localStorage.getItem("details")) 
        let personInfo = JSON.parse(JSON.stringify(this.state.personInfo))
            personInfo = allPersonInfo
            this.setState({
                personInfo:allPersonInfo
            })   
        if(history.location.state !== undefined){
            console.log('history',history.location.state)
            let f_name = history.location.state.itemName
            let res = personInfo.filter((item, index) => {
                let personObj
                    if(item.f_name == f_name){
                        personObj = item
                    }
                return personObj
            }) 
            console.log('PerObj',res)
            this.setState({
                data:res[0],
                showSave: false,
                personName: f_name
            })
        }  
    }      
    }

    
   
   getInputFieldsValue = (e) => {
        let data = JSON.parse(JSON.stringify(this.state.data))
        if(e.target.name == "mobileNo"){
             const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
                data[e.target.name] = e.target.value
                this.setState({
                    data
                })
            }
        }

        else {
            data[e.target.name] = e.target.value
            this.setState({
                data
            })
        }        
    }

    resetForm = () => {
        let data = this.state.data
            data.f_name = '';
            data.l_name='';
            data.mobileNo = '';
            data.email=" ";
            data.city='';
            data.state="";
            data.country='';
        this.setState({data});
    }

    savePersonInfo = () => {
        localStorage.setItem("details", JSON.stringify(this.state.personInfo))
        
    }

    notify = () => {
        toast.success("Data saved successfully !", {
            position: toast.POSITION.TOP_RIGHT
          });
    };

    onSubmitHandler = (e) => {
        e.preventDefault() 
            if(this.state.showSave){
                let data = JSON.parse(JSON.stringify(this.state.data))
                let personInfo = [...this.state.personInfo]
                personInfo.push(data)
                this.setState({
                    personInfo
                }, () => {this.savePersonInfo()})
            }

            else{
                this.updatePersonObject()
            }
        this.notify()
    }

    showForm = () => {
        this.setState({show: true})
    }

    updatePersonObject = () => {
        let personInfo = JSON.parse(JSON.stringify(this.state.personInfo))
        let index = personInfo.findIndex((item, index) => {
            return item.f_name == this.state.personName 
        })
        console.log(index, 'index VAlue')
        console.log(this.state.data, 'this.state.datathis.state.data')
        personInfo[index] = this.state.data

        this.setState({
            personInfo,
            showSave:true
        }, () => {this.savePersonInfo()})
    }
    
    

    render(){
        console.log(this.state.data, 'data inside render')

        return (
            <Fragment>
                   <h3 className="heading"><button className="add_info_btn" onClick={() => this.showForm() }><i class="fa fa-plus"></i><span>Add Personal Info</span></button></h3>
                    {
                        this.state.show ? <form onSubmit={this.onSubmitHandler}>
                        <div className ="d-flex">
                            <div class="form-group col-md-6  ">
                                <label htmlFor="">First Name</label>
                                <input type="text" name="f_name" 
                                    class="form-control" 
                                    value={this.state.data.f_name} 
                                    onChange={this.getInputFieldsValue}
                                    autoFocus 
                                    
                                />
                            </div>
                            <div class="form-group col-md-6">
                                <label htmlFor="">Last Name</label>
                                <input type="text" name="l_name"   class="form-control" value={ this.state.data.l_name } onChange={  this.getInputFieldsValue}  />
                            </div>
                        </div>
                        <div class="form-group col-md-6">
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" class="form-control"  value={ this.state.data.email } onChange={ this.getInputFieldsValue} required  />
                        </div>
                        <div class="form-group col-lg">
                            <label htmlFor="">Mobile Number</label>
                            <input type="text" name="mobileNo" class="form-control"     value={this.state.data.mobileNo} onChange={ this.getInputFieldsValue}  maxlength="10" required />
                        </div>
                        <div class="form-group col-lg ">
                            <label htmlFor="">Address</label>
                            <div className="d-flex">                            
                                <div class="form-group col-md-4">
                                <label htmlFor="">City</label>
                                <input type="text" name="city" class="form-control"   value={this.state.data.city }  onChange={this.getInputFieldsValue}  required/>
                            </div>
                            <div class="form-group col-md-4">
                                <label htmlFor="">State</label>
                                <input type="text" name="state" class="form-control"  value={ this.state.data.state} onChange={ this.getInputFieldsValue} required />
                            </div>
                            <div class="form-group col-md-4">
                                <label htmlFor="">Country</label>
                                <input type="text" name="country" class="form-control"   value={this.state.data.country } onChange={this.getInputFieldsValue} required />
                            </div>
                            </div>

                        </div>
                        <ToastContainer autoClose={1000}
                        transition={Zoom}
                    />
                        <button  className="btn btn-success btn-next" >{this.state.showSave ? "save" : "Update"}</button>
                   </form> : ""
                    }
            </Fragment>
        )
    }
}
export default PersonalInfo