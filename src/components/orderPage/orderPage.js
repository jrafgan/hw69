import React, {Component} from 'react';
import Button from "../assets/shopping-cart-icon-515.png";
import {connect} from "react-redux";
import {deleteItem} from "../../Store/actions/actions";

class OrderPage extends Component {
    state = {
            ordereDish: [],
            delivery: false,
            deliveryPrice: 0,
        };

    addDelivery = () => {
        !this.state.delivery ? this.setState({delivery: !this.state.delivery, deliveryPrice: 300}) : this.setState({delivery: !this.state.delivery, deliveryPrice: 0})
        // if (this.state.delivery === true) {
        //     this.setState({deliveryPrice: 300})
        // } else {
        //     this.setState({deliveryPrice: 0})
        // }
    };

    render() {
        console.log('rerender');
        return (
            <div className='order_page'>
                <div className="cart_image"><img alt='Cart' src={Button} className='main_cart_image'/></div>
                {this.props.orderedItems.length > 0 ? this.props.orderedItems.map((item, index) => {
                    return <div key={index} className="ordered_item" id='item_id'>
                        <div className="ordered_item_name" id={item.name} onClick={this.props.deleteItem}><p>{item.name} " - "</p></div>
                        <div className="item_quantity"><p>{item.quantity}</p></div>
                        <div className="item_total"><p>{item.price * item.quantity} сом</p></div>
                    </div>
                }) : <p>Надо доделать эту часть</p>}
                <div className="line"/>
                <div className="delivery_div">
                    <div onClick={this.addDelivery}><p>Доставка {!this.state.delivery ? '+' : '-'}</p></div>
                    <div><p>{this.state.deliveryPrice} сом</p></div>
                </div>
                <div className="total">
                    <div><p>Итого</p></div>
                    <div><p>{this.props.orderedItems.reduce((acc, item) => {
                        console.log(acc);
                        return acc + item.quantity*item.price;
                    }, this.state.deliveryPrice)} сом</p></div>
                </div>
                <div className="place_order">Заказать</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    orderedItems: state.orderPageReducer.stateForChosenItems,
});

const mapDispatchToProps = dispatch => ({
    deleteItem: (e) => (dispatch(deleteItem(e.currentTarget.id)))
});
export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
