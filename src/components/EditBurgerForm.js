import React from 'react';
import PropTypes from 'prop-types';


class EditBurgerForm extends React.Component {

    static propTypes = {
        burger: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            desc: PropTypes.string,
            status: PropTypes.string
        }),
        index: PropTypes.string,
        updateBurger: PropTypes.func,
        deleteBurger: PropTypes.func,
    }

    handleChage = (event) => {
        const updatedBurger = {
            ...this.props.burger,
            [event.currentTarget.name]: event.currentTarget.name === 'price'
                ? parseFloat(event.currentTarget.value) : event.currentTarget.value
        };
        this.props.updateBurger(this.props.index, updatedBurger);
    };

    render() {
        return (
            <div className='burger-edit'>
                <input
                    onChange={this.handleChage}
                    name='name'
                    type='text'
                    value={this.props.burger.name}
                     />
                <input 
                    onChange={this.handleChage}
                    name='price'
                    type='text'
                    value={this.props.burger.price}
                     />
                <select  
                    onChange={this.handleChage}
                    name='status'
                    className='status'>
                    value={this.props.burger.status}
                    <option value='available'>Доступно</option>
                    <option value='unavailable'>Убрать из меню</option>
                </select>
                <textarea 
                    onChange={this.handleChage}
                    name='desc'
                    value={this.props.burger.desc}
                     />
                <input   
                    onChange={this.handleChage}
                    name='image'
                    type='text'
                    value={this.props.burger.image}
                />
                <button onClick={()=> this.props.deleteBurger(this.props.index)}>Удалить из меню</button>
            </div>
        );
    }
}

export default EditBurgerForm;