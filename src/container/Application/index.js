import React, {Component, Fragment, history} from 'react'
import PersonalInfo from '../../component/personalInfo'
import './application.css'

class ApplictaionForm extends Component {

    render(props){
        return (
            <div className="col-md-12">
                <PersonalInfo />
            </div>
        )
    }
}
export default ApplictaionForm