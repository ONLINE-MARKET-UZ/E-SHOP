
import menu from "../../assets/icons/menu.svg";

import { Select } from 'antd';
const Navbar = () => {
    return (
        <div className="h-[56px] flex items-center justify-between">
            <ul className="flex gap-x-[28px] tetx-[16px] font-medium">
                <li><a href="#" className="flex gap-x-[6px]"><img src={menu} alt="menu" /> All cetegory</a></li>
                <li><a href="#">Hot offers</a></li>
                <li><a href="#">Gift boxes</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Menu item</a></li>
                <li><a href="#">Help</a></li>
            </ul>
            <ul className="flex gap-x-[32px]">
                <li>
                    <Select
                        className="custom-select"
                        defaultValue="English, USD"

                        style={{
                            width: 120
                        }}
                        bordered={false}
                        options={[
                            {
                                value: 'RU, RUBL',
                                label: 'RU, RUBL',
                            },
                            {
                                value: 'UZB, SUM',
                                label: 'UZB, SUM',
                            },
                            {
                                value: 'UK',
                                label: 'UK',
                            },
                        ]}
                    />
                </li>
                <li>
                    <Select
                        className="custom-select"
                        defaultValue="Ship to "

                        style={{
                            width: 120
                        }}
                        bordered={false}
                        options={[
                            {
                                value: 'USD',
                                label: 'USD',
                            },
                            {
                                value: 'USD',
                                label: 'USD',
                            },
                            {
                                value: 'USD',
                                label: 'USD',
                            },
                        ]}
                    />
                </li>
            </ul>
        </div>
    );
};

export default Navbar;