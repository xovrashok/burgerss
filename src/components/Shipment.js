import React from 'react';
import PropTypes from 'prop-types';

class Shipment extends React.Component {

    static propTypes = {
        total: PropTypes.number,        
    }

    render() {
        const { total } = this.props;
        const shipping = total > 0 && total < 200 ? 100 : 40;
        const shippingNeon =
            shipping === 40 ? (
            <span className='font-effect-neon total_wrap-cheap'>
                {shipping} ₴
            </span>
        ) : (
            <span>{shipping} ₴</span>
        );
        return (
        <div className='total'>
                <div className='total_wrap'>

                    <div>
                        <div>Доставка: {total > 0 ? shippingNeon : null}</div>
                        <div className='total_wrap-free'>
                            {total < 200 ? `Закажите ещё на ${200 - total} ₴ для доставки за 40 ₴` : null}
                        </div>
                    </div>
                <div className='total_wrap-final'>
                    Итого: {total}
                </div>
            </div>
        </div >
        ); 
    }
}

export default Shipment;