import React, {Component} from 'react'
import { Route, Switch, } from 'react-router-dom'
import ApplictaionForm from '../container/Application'
import Header from '../component/Header'
import PositionInfo from '../component/positionInfo'
import Education from '../component/education'
import Skills from '../component/skills'
import Experience from '../component/experience'
import Slider from '../component/RangeSlider'
import Toast from '../component/ToastNoification'
import Table from '../component/ReactTableData'

class AllRoute extends Component {
    render(props){
        return (
            <div> 
                <Switch>
                    <Route exact path="/" component={ApplictaionForm}  {...props} />
                    <Route path = "/positionInfo" component={PositionInfo}/>
                    <Route path = "/education" component={Education}/>
                    <Route path = "/skills" component={Skills}/>
                    <Route path = "/experience" component={Experience}/>
                    {/* <Route path = '/rangeslider' component ={Slider}/>
                    <Route path ="/toast" component ={Toast}/> */}
                      <Route path = "/table" component={Table}/>
                </Switch>
            </div>
        )
    }
}

export default AllRoute