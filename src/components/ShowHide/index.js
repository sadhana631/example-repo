import {Component} from 'react'

import './index.css'

class ShowHide extends Component{
    state = {
        showFirstName: false,

        showLastName: false,
    }

    onShowLastName = () => {
      this.setState(prevState => ({showLastName: !prevState.showLastName}))
    }

    render() {
    const {showFirstName, showLastName} = this.state

    return (
        <div className="app-container">
         <h1 className="heading">Show/Hide</h1>
          <div className="show-hide-container">
           <button
             type="button"
             className="show-hide-button"
             onClick={this.onShowFirstName}
           >
             Show/Hide FirstName
              {showFirstName && <p className="name">Joe</p>}
           </button>   
         </div>
         <div className="name-container">  
           <button
             type="button"
             className="show-hide-button"
             onClick={this.onShowLastName}
            >
             Show/Hide showLastname
            </button> 
             {showLastName && <p className="name">Jonas</p>}
           </div>
    )
  }
}
export default ShowHide 

     
        