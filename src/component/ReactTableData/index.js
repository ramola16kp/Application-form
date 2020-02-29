import React, { Component } from 'react'
import history from '../../history';
import ReactTable from 'react-table-v6'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-table-v6/react-table.css'


export default class Table extends Component {
    state={
        data: []
    }
    componentWillMount() {
      const data = JSON.parse( localStorage.getItem( "details" )) || [];
      this.setState( { data } );
    }

  editPersonDetail = (item) => {
   history.push('/', {"itemName":item, "showSave":true})
  }

  savePersonInfo = () => {
    localStorage.setItem("details", JSON.stringify(this.state.data))
  }

  deleteUser = (item) => {
    let data = JSON.parse(JSON.stringify(this.state.data))
    let res = data.filter((el, index) => {
      return el.f_name !== item
    })
  
    this.setState({data:res}, () => {this.savePersonInfo()})
    this.notify()
    setTimeout(() => {
      window.location.reload()
    }, 2000)
   
    
  }

  notify = () => {
    toast.success("Request completed successfully !", {
        position: toast.POSITION.TOP_RIGHT
      });
  };


    render() {
        const columns = [{
            Header: 'First Name',
            accessor: "f_name"
          }, 

          {
            Header: 'Last Name',
            accessor:"l_name"
          },

          {
            Header: 'Email',
            accessor:"email"
          }, 
          {
            Header: 'Mobile Number',
            accessor:"mobileNo"
          }, 
          {
            
            Header: 'City',
            accessor:"city"
           
          }, 
          {
            Header: 'State',
            accessor:"state"
          },
          {
            Header: 'Country',
            accessor:"country"
          },
          {
            Header:"Action",
            Cell:row => (
              

              <div>
                <span className="edit_icon" onClick={()=> this.editPersonDetail(row.original.f_name)}><i class="fa fa-pencil"></i></span>
                <span className="delete_icon" onClick={() =>this.deleteUser(row.original.f_name) }><i class="fa fa-trash"></i></span>
              </div>
              )
          }
        ]
        
        return (
            <div>
                <ReactTable 
                className="reacttabledata"
                data = {this.state.data}
                columns = {columns}
                minRows={10}
                showPagination ={false}
                noDataText="No Data Found"
                />
                 <ToastContainer autoClose={1000}
                        transition={Zoom}
                  />
               
            </div>
        )
    }
}
