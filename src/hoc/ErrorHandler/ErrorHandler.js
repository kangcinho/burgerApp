import React, { Component } from 'react'

import Auxiliary from '../Auxiliary/Auxiliary'
import Modal from '../../components/UI/Modal/Modal'

const ErrorHandler = (WrappedComponent, axios) =>{
  return class extends Component {
    state = {
      error: null
    }
    componentDidUpdate() {
      console.log("ErrorHandler.js componentDidUpdate")
    }
    componentDidMount(){
      console.log("ErrorHandler.js componentDidMount")
      axios.interceptors.request.use(req => {
        this.setState({error: null})
        return req
      })
      axios.interceptors.response.use(respon => respon, error => {
        this.setState({error : error})
      })
    }

    errorHilang = () => {
      this.setState({error : null})
    }
    render(){
      return (
        <Auxiliary>
          <Modal show={this.state.error} purchasingOrder={this.errorHilang}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      )
    }
  }
}

export default ErrorHandler