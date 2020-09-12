import SHOP_DATA from './shoppage.data';
import {} from 'react-redux';

const INTITAl_DATA={SHOP_DATA};

const shopReducer= (state=INTITAl_DATA,action)=>{
    switch(action.type){
        default:
            return state;
    }
}
export default shopReducer;