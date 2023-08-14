

import "./style.scss";


const index = () => {
    return (
        <section className="order-form">
            <div className="container">
                <div className="order-form__wrapper flex justify-between px-5">
                    <div className="flex flex-col gap-y-2 pt-[50px]">
                        <h2 className="text-[32px] font-semibold tracking-[-0.2px] text-white w-[440px]">An easy way to send requests to all suppliers</h2>
                        <p className="text-[16px] tracking-[-0.2px] text-white w-[390px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    </div>

                    <div className="bg-white w-[490px] rounded-md p-[20px] mt-[10px]">
                        <h3 className="text-[20px] font-semibold mb-[16px]">Send quote to suppliers</h3>
                        <form>
                            <input className="border rounded-md p-[10px] w-full mb-5 outline-none" type="text" placeholder="What item you need?"/>
                            <textarea className="mb-5 border rounded-md p-[10px] w-full outline-none" placeholder="Type more details" cols="30" rows="3"></textarea>
                            <div className="mb-5">
                                <input className="border rounded-md p-[10px] outline-none mr-[8px]" type="text" placeholder="Quantity"/>
                                <select className="border rounded-md p-[10px] outline-none">
                                    <option value="Pcs">Pcs</option>
                                    <option value="Pcs">Pcs</option>
                                </select>
                            </div>
                            <button className="text-white bg-blue-500 rounded-md p-[16px] font-medium text-[16px]">Send inquiry</button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default index;