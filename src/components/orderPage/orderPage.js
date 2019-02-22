import React, {Component} from 'react';
import Button from "../assets/shopping-cart-icon-515.png";
import {connect} from "react-redux";

class OrderPage extends Component {
    state = {
            ordereDish: [],
            delivery: false,
        };

    addDelivery = () => {
        this.setState({delivery: !this.state.delivery})
    };

    render() {
        console.log('rerender');
        return (
            <div className='order_page'>
                <div className="cart_image"><img alt='Cart' src={Button} className='main_cart_image'/></div>
                {this.props.orderedItems.length > 0 ? this.props.orderedItems.map((item, index) => {
                    return <div key={index} className="ordered_item" id='item_id'>
                        <div className="ordered_item_name"><p>{item.name}</p></div>
                        <div className="item_quantity"><p>{item.quantity}</p></div>
                        <div className="item_total"><p>{item.price * item.quantity} сом</p></div>
                    </div>
                }) : <p>Надо доделать эту часть</p>}
                <div className="line"/>
                <div className="delivery_div">
                    <div onClick={this.addDelivery}><p>Доставка</p></div>
                    <div><p>{this.state.delivery ? 300 : 0} сом</p></div>
                </div>
                <div className="total">
                    <div><p>Итого</p></div>
                    <div><p>3000 сом</p></div>
                </div>
                <div className="place_order">Заказать</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    orderedItems: state.orderPageReducer.stateForChosenItems,
});

export default connect(mapStateToProps, null)(OrderPage);
