import React, {Component} from 'react';
import {addToCart, getApiList} from "../../Store/actions/actions";
import {connect} from "react-redux";
import Button from '../assets/shopping-cart-icon-515.png'

class DishesList extends Component {
    componentDidMount() {
        this.props.getApiList();
    }

    render() {
        console.log(this.props.apiResponse);
        return (<div className='list_div'>
                {this.props.apiResponse !== null ? this.props.apiResponse.map((item, index)=>{
                    return <div className="item_div" key={index}>
                    <div><img className="image" alt='Food' src={item.url}/></div>
                    <div className="name_div">
                        <p>{item.name}</p>
                        <p>{item.price} сом</p>
                    </div>
                    <div className="add_button">
                        <img className='image_button' id={item.id} src={Button} alt='button_image' onClick={this.props.addToCart}/>
                    </div>
                </div>}) : null}

            </div>
        );
    }
}

const mapStateToProps = state => ({
    apiResponse: state.dishListReducer.apiResponse,
});

const mapDispatchToProps = dispatch => ({
    getApiList: () => (dispatch(getApiList())),
    addToCart: (e) => (dispatch(addToCart(e.currentTarget.id)))
});

export default connect(mapStateToProps, mapDispatchToProps)(DishesList);