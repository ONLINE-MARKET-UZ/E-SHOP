
import IntroCarousel from "./IntroCarousel";

const index = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="intro_wrapper">
                    <ul>
                        <li></li>
                    </ul>
                    <IntroCarousel/>
                    <ul>
                        <div className="card">Cards</div>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default index;