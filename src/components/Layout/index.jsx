
import "./style.scss";
import Intro from "../Intro";
import Offers from "../Offers";

import OrderForm from "../OrderForm";

const index = () => {
    return (
        <main>
            <Intro/>
            <Offers/>
            <OrderForm/>
           
        </main>
    );
};

export default index;