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
    topings: null,
    totalPrices: 0.0,
    disablePurchase: true,
    purchasing: false,
    loading: false,
    errorGetData: false
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
  
  componentDidMount(){
    console.log("BurgerBuilder.js componentDidMount")
    axios.get('https://burgerapp-8ea80.firebaseio.com/topings.json')
      .then( (respons) => {
        const topings = respons.data
        const totalPrice =  Object.keys(topings).map( (toping) => {
          return topings[toping] * TOPINGS_PRICE[toping]
        }).reduce( (firstEl, nextEl) =>{
          return firstEl + nextEl
        })

        console.log(totalPrice)
        this.setState({
          topings: respons.data,
          totalPrices: totalPrice
        })
      })
      .catch( (error) => {
        this.setState({
          errorGetData: true
        })
      })
  }
  render(){
    console.log("[BurgerBuilder.js] Render")
    const disableInfo = {...this.state.topings};
    for(let key in disableInfo){
      disableInfo[key] = disableInfo[key] <= 0
    }
    let orderSummary = null;

    let burgerContainer = this.state.errorGetData ? <p>Toping Burger Gagal di Load!</p>: <Spinner/>;

    if(this.state.topings){
      burgerContainer = (
        <Auxiliary>
          <Burger topings={this.state.topings}/>
          <BurgerPurchaseOrders 
            price={this.state.totalPrices}
            disablePurchase={this.state.disablePurchase}
            purchasingOrder={this.purchasingOrder}
          />
        </Auxiliary>
      )
      orderSummary = (
        <OrderSummary 
          topings={this.state.topings}
          price={this.state.totalPrices}
          purchasingOrder={this.purchasingOrder}
          purchasingContinue={this.purchasingContinue}
          rerender={this.state.purchasing}
          />
      )
    }

    if(this.state.loading){
      orderSummary = <Spinner />
    }
    return (
      <Auxiliary>
        <TopingsContext.Provider value={{changeToping: this.changeToping, disableInfo: disableInfo, purchasingOrder:this.purchasingOrder}} >
          <Modal show={this.state.purchasing} purchasingOrder={this.purchasingOrder}>
            {orderSummary}
          </Modal>
          {burgerContainer}
        </TopingsContext.Provider>
      </Auxiliary>
    );
  }
}

export default errorHandler(BurgerBuilder, axios);