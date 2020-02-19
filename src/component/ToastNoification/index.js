import React, {Component, Fragment,Button} from 'react'
import { ToastContainer, toast,Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Toast extends Component {
    state={
        message:""
    }
    onChangeHandler = (e) => {
        let message = JSON.parse(JSON.stringify(this.state.message))
        message= e.target.value
        this.setState({
            message
        })
    }
    showMessage = () => {
        this.notify(this.state.message)
  }
  notify = (message) => {
    if(message == "success"){
        toast.success("Success Notification !", {  
        });
    }
    if(message == "error"){
        toast.error("Error Notification !", {
        });
    }

    if(message == "warn"){
        toast.warn("Warning Notification !", {
        });
    }

    if(message == "info"){
        toast.info("Info Notification !", { 
        });
    }
  };
    
    render() {
        return (
            <Fragment>
                <div>
                    <input type ="radio" 
                     value="success" 
                     checked={this.state.value == "success"} 
                     onChange ={(e) => this.onChangeHandler(e)}/>success
                     
                    
                    <input type = "radio" 
                    value="warn"  
                    onChange ={(e) => this.onChangeHandler(e)} 
                    checked={this.state.value =="warn"}/>Warning
                  
                    
                    <input type ="radio"
                     value="error" 
                     onChange ={(e) => this.onChangeHandler(e)}
                     checked={this.state.value == "error"}
                     />Error
                    
                    
                    <input type ="radio" 
                    value="info"
                    onChange ={(e) => this.onChangeHandler(e)}
                    checked={this.state.value == "info"}
                    />Info
                    <button onClick={() => this.showMessage()}>Submit</button>
                    <ToastContainer autoClose={1000}
                        transition={Zoom}
                    />
                </div>   
            </Fragment>
        )
    }
}

export default Toast