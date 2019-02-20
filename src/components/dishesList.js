import React, {Component} from 'react';

class DishesList extends Component {
    render() {
        return (
            <div className='list_div'>
                <div className="item_div">
                    <div className="image_div">image</div>
                    <div className="name_div">
                        <p>name</p>
                        <p>price</p>
                    </div>
                    <div className="add_button">
                        <img className='image_button' id='item_id' src='agf' alt='button_image'/>
                    </div>
                </div>

            </div>
        );
    }
}

export default DishesList;