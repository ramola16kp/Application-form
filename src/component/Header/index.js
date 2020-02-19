import React, {Component, Fragment} from 'react'
import './header.css'
class Header extends Component {
    render(){
        return (
            <Fragment>
                  <header className = "container-fluid header">
                        <h1>
                            <a href="#">My Project</a>
                        </h1>
                        <div>
                            <h3>Application</h3>
                            <span>for Employment</span>
                        </div>
                  </header>
            </Fragment>
        )
    }
}
export default Header