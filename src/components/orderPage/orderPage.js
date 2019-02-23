import React, {Component} from 'react';
import ButtonImg from "../assets/shopping-cart-icon-515.png";
import orderBtn from "../assets/placeOrderButton.png";
import {connect} from "react-redux";
import {deleteItem, fetchPost, sendOrder} from "../../Store/actions/actions";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";

class OrderPage extends Component {
    state = {
        delivery: false,
        deliveryPrice: 0,
        showModal: false,
        name: '',
        email: '',
        street: '',
        postal: '',
    };

    addDelivery = () => {
        !this.state.delivery ? this.setState({
            delivery: !this.state.delivery,
            deliveryPrice: 300
        }) : this.setState({delivery: !this.state.delivery, deliveryPrice: 0})
    };

    getUserData = () => {
        this.setState({showModal: true})
    };

    orderSendToApi = (e) => {
        e.preventDefault();
        this.closeModal();
        this.props.sendOrder(this.state);
        ;
    };

    newValue = e => {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value});
    };

    closeModal = () => {
        this.setState({showModal: false})
    };

    render() {

        return (
            <div className='order_page'>
                <div className="cart_image"><img alt='Cart' src={ButtonImg} className='main_cart_image'/></div>
                {this.props.orderedItems.length > 0 ? this.props.orderedItems.map((item, index) => {
                    return <div key={index} className="ordered_item" id='item_id'>
                        <div className="ordered_item_name" id={item.name} onClick={this.props.deleteItem}>
                            <p>{item.name} (-)</p></div>
                        <div className="item_quantity"><p>{item.quantity}</p></div>
                        <div className="item_total"><p>{item.price * item.quantity} сом</p></div>
                    </div>
                }) : <p>Добавьте блюда</p>}
                <div className="line"/>
                <div className="delivery_div">
                    <div onClick={this.addDelivery}><p>Доставка {!this.state.delivery ? '+' : '-'}</p></div>
                    <div><p>{this.state.deliveryPrice} сом</p></div>
                </div>
                <div className="total">
                    <div><p>Итого</p></div>
                    <div><p>{this.props.orderedItems.reduce((acc, item) => {
                        return acc + item.quantity * item.price;
                    }, this.state.deliveryPrice)} сом</p></div>
                </div>
                {this.props.orderedItems.length > 0 ?
                    <img className="place_order" src={orderBtn} onClick={this.getUserData} alt='Btn Proceed'/> : null}

                <Modal show={this.state.showModal} close={this.closeModal} children={
                    <div className='modal_form'>

                        <form onSubmit={(e) => this.orderSendToApi(e)}>
                            <input className="Input" type="text" name="name" placeholder="Имя"
                                   value={this.state.name} onChange={this.newValue}
                            />
                            <input className="Input" type="email" name="email" placeholder="e-mail"
                                   value={this.state.email} onChange={this.newValue}
                            />
                            <input className="Input" type="text" name="street" placeholder="Адрес"
                                   value={this.state.street} onChange={this.newValue}
                            />
                            <input className="Input" type="text" name="postal" placeholder="Почтовый индекс"
                                   value={this.state.postal} onChange={this.newValue}
                            />
                            <Button btnType="Success" onClick={(e) => this.orderSendToApi(e)}>ОПЛАТИТЬ</Button>
                        </form>
                    </div>
                }/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    orderedItems: state.orderPageReducer.stateForChosenItems,
});

const mapDispatchToProps = dispatch => ({
    deleteItem: (e) => dispatch(deleteItem(e.currentTarget.id)),
    sendOrder: (info) => {
        dispatch(sendOrder(info));
        dispatch(fetchPost());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
