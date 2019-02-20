import React, {Component} from 'react';

class OrderPage extends Component {
    render() {
        return (
            <div className='order_page'>
                <div className="cart_image"><img alt='Cart' src='asdf' className='main_cart_image'/></div>
                <div className="ordered_item" id='item_id'>
                    <div className="ordered_item_name"><p>name</p></div>
                    <div className="item_quantity"><p>quantity</p></div>
                    <div className="item_total"><p>total amount</p></div>
                </div>
                <div className="line">line</div>
                <div className="delivery_div"><p>Доставка</p></div>
                <div className="total"><p>Итого</p></div>
                <div className="place_order">Заказать</div>

            </div>
        );
    }
}

export default OrderPage;