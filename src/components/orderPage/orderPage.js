import React, {Component} from 'react';
import Button from "../assets/shopping-cart-icon-515.png";

class OrderPage extends Component {
    render() {
        return (
            <div className='order_page'>
                <div className="cart_image"><img alt='Cart' src={Button} className='main_cart_image'/></div>
                <div className="ordered_item" id='item_id'>
                    <div className="ordered_item_name"><p>name</p></div>
                    <div className="item_quantity"><p>quantity</p></div>
                    <div className="item_total"><p>total amount</p></div>
                </div>
                <div className="line"/>
                <div className="delivery_div"><div><p>Доставка</p></div><div><p>300 сом</p></div></div>
                <div className="total"><div><p>Итого</p></div><div><p>3000 сом</p></div></div>
                <div className="place_order">Заказать</div>

            </div>
        );
    }
}

export default OrderPage;