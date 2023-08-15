
import "./style.scss";
import Intro from "../Intro";
import Offers from "../Offers";

import OrderForm from "../OrderForm";

import RecommendItems from "../RecommendItems";

const index = () => {
    return (
        <main>
            <Intro/>
            <Offers/>
            <OrderForm/>
            <RecommendItems/>
        </main>
    );
};

export default index;