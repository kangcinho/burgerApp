import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger'
import BurgerPurchaseOrders from '../../components/Burger/BurgerPurchaseOrders/BurgerPurchaseOrders'
import TopingsContext from '../../context/TopingsContext'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axiosConfig'
import Spinner from '../../components/UI/Spinner/Spinner'
import errorHandler from '../../hoc/ErrorHandler/ErrorHandler'
const TOPINGS_PRICE = {
  salad: 0.54,
  meat: 0.71,
  cheese: 0.82,
  bacon: 1.32
}

class BurgerBuilder extends Component{
  state = {
    topings: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    },
    totalPrices: 0.0,
    disablePurchase: true,
    purchasing: false,
    loading: false
  }
  
  changeToping = (type, more) => {
    const topings = {...this.state.topings};
    let totalPrices = this.state.totalPrices;
    if(more){
      totalPrices += TOPINGS_PRICE[type];
      topings[type] = topings[type] + 1
    }else{
      if(topings[type] > 0){
        totalPrices -= TOPINGS_PRICE[type];
        topings[type] = topings[type] - 1
      }else{
        topings[type] = 0
      }
    }
    
    this.setState({
      topings: topings,
      totalPrices: Math.round(totalPrices*100)/100,
      disablePurchase: !(totalPrices > 0)
    })
    // console.log(TOPINGS_PRICE[type], this.state.totalPrices)
    // console.log(topings)
  }

  purchasingOrder = (purchasing) => {
    this.setState({
      purchasing: purchasing
    })
  }

  purchasingContinue = () => {
    // console.log("purchasingContinue")
    // alert("Purchasing Continue!")
    this.setState({loading: true})
    const orders = {
      topings: this.state.topings,
      price: this.state.totalPrices,
      customer:{
        name: 'Agus Setiawan',
        address: {
          name: 'Jalan Susuku',
          nomor: '120x'
        },
        email: 'kangcinho@gmail.com'
      }
    }
    axios.post('orders.json', orders)
      .then( (respon) => {
        console.log(respon)
        this.purchasingOrder(false)
        this.setState({loading: false})
      })
      .catch( (error) => {
        console.log(error)
        this.setState({loading: false})
      })
  }
  
  render(){
    console.log("[BurgerBuilder.js] Render")
    const disableInfo = {...this.state.topings};
    for(let key in disableInfo){
      disableInfo[key] = disableInfo[key] <= 0
    }

    let orderSummary = (
      <OrderSummary 
        topings={this.state.topings}
        price={this.state.totalPrices}
        purchasingOrder={this.purchasingOrder}
        purchasingContinue={this.purchasingContinue}
        rerender={this.state.purchasing}
        />
    )
    if(this.state.loading){
      orderSummary = <Spinner />
    }
    return (
      <Auxiliary>
        <TopingsContext.Provider value={{changeToping: this.changeToping, disableInfo: disableInfo, purchasingOrder:this.purchasingOrder}} >
          <Modal show={this.state.purchasing} purchasingOrder={this.purchasingOrder}>
            {orderSummary}
          </Modal>
          <Burger topings={this.state.topings}/>
          <BurgerPurchaseOrders 
            price={this.state.totalPrices}
            disablePurchase={this.state.disablePurchase}
            purchasingOrder={this.purchasingOrder}
          />
        </TopingsContext.Provider>
      </Auxiliary>
    );
  }
}

export default errorHandler(BurgerBuilder, axios);