import React, {Component, Fragment} from 'react'
import history from '../../history';
class AsideBar extends Component {
    state = {
        userInfo:[
              {
                name: "Personal Info",
                route: ""
              },
              {
                name: "View",
                route: "/table"
              }, 
              // {
              //   name: "Education Info",
              //   route: "positionInfo"
              // },
              // {
              //   name: "Eductaion",
              //   route: "education"
              // },
              // {
              //   name: "Skills",
              //   route: "skills"
              // },
              // {
              //   name: "Experience",
              //   route: "experience"
              // }
        ]
    }
    render(){
        return (
            <Fragment>
              <h6 className="dashboard_heading">Dashboard</h6>
                <ul>
                    {this.state.userInfo.map((item, index) => {
                        return <li key ={index} onClick={() => history.push(item.route)}>{item.name}</li>
                    })
                    }
                </ul>
            </Fragment>
        )
    }
}
export default AsideBar