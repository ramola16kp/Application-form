import React, { Component } from 'react'
import history from '../../history';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'


export default class Table extends Component {
    state={
        data: []
    }
    
    componentWillMount() {
      const data = JSON.parse( localStorage.getItem( "details" )) || [];
      console.log('data: ', data);
      this.setState( { data } );
    }

  editPersonDetail = (item) => {
   history.push('/', {"itemName":item, "showSave":true})
  }

    render() {
        console.log(this.props, 'props in react table')
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
                <span className="delete_icon"><i class="fa fa-trash"></i></span>
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
               
            </div>
        )
    }
}
