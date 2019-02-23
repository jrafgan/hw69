import React from 'react';
import {connect} from "react-redux";
import {keepNewText, submitNewDish} from "../../Store/actions/actions";

const AddNewDish = (props) => {

    return (
        <div className='add_div'>
            <form onSubmit={props.submitNewDish}>
                <input type="text" name='name' onChange={props.keepNewText} value={props.value.name}
                       placeholder='Название блюда'/>
                <input type="text" name='url' onChange={props.keepNewText} value={props.value.url}
                       placeholder='url кртинки'/>
                <input type="text" name='price' onChange={props.keepNewText} value={props.value.price}
                       placeholder='цена блюда'/>
                <input type="text" name='id' onChange={props.keepNewText} value={props.value.id}
                       placeholder='id (название блюда латинскими буквами)'/>
                <button className="btn-addTask" type="submit" onClick={props.submitNewDish}>Add New Dish</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => ({
    value: state.addNewDishReducer,
});

const mapDispatchToProps = dispatch => ({

    keepNewText: (e) => dispatch(keepNewText(e.currentTarget)),
    submitNewDish: (e) => dispatch(submitNewDish(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewDish);