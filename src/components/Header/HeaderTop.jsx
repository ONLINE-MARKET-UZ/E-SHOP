
import logo from "../../assets/icons/logo.svg";

import user from "../../assets/icons/user.svg";
import message from "../../assets/icons/message.svg";
import orders from "../../assets/icons/orders.svg";
import cart from "../../assets/icons/cart.svg";


import { Input, Select, Button } from "antd";

const onChange = (value) => {
    console.log(`selected ${value}`);
};


const HeaderTop = () => {




    return (


        <div className="h-[86px] flex items-center justify-between">
            <a href=""><img src={logo} alt="#" /></a>
            <div className="flex border border-blue-500 rounded-md">
                <Input className="w-[406px] text-[16px] rounded-l-md rounded-none outline-none border-none" placeholder="Search" />
                <Select
                    className="text-[16px] color-bl"
                    bordered={false}
                    placeholder="All cattegory"
                    optionFilterProp="children"
                    onChange={onChange}
                
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={[
                        {
                            value: 'Automobiles',
                            label: 'Automobiles',
                        },
                        {
                            value: 'Clothes and wear',
                            label: 'Clothes and wear',
                        },
                        {
                            value: 'Home interiors',
                            label: 'Home interiors',
                        },
                    ]}
                />
                <Button default className="text-[16px] h-[40px] bg-blue-500 text-white border-none rounded-none rounded-r-md">
                    Search
                </Button>
            </div>



            <ul className="flex items-center gap-x-[23px] text-[#8B96A5] text-[12px]">
                <li className="flex flex-col justify-between h-[41px]"><img className="self-center" src={user} alt="user" />Profile</li>
                <li className="flex flex-col justify-between h-[41px]"><img className="self-center" src={message} alt="message" />Message</li>
                <li className="flex flex-col justify-between h-[41px]"><img className="self-center" src={orders} alt="orders" />Orders</li>
                <li className="flex flex-col justify-between h-[41px]"><img className="self-center" src={cart} alt="cart" />My cart</li>
            </ul>
        </div>
    );
};

export default HeaderTop;