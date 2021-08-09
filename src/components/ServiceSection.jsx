import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import {StyleAbout, StyledDescription, StyleImage} from "./LayoutStyle";
import styled from "styled-components";
import Scrollable from "./Scrollable";
import {ScrollAnim} from "../PageAnims";

const ServiceSection = () => {
    const [ element, controls ] = Scrollable();
    return(
        <StyleServices ref={element} variants={ScrollAnim} animate={controls}>
            <StyledDescription>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock img" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork img" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm img" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money img" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </StyledDescription>
            <StyleImage>
                    <img src={home2} alt="camera" />
            </StyleImage>
        </StyleServices>
    )
}

const StyleServices = styled(StyleAbout)`
    h2{
        margin-bottom: 2rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex-basis: 15rem;
    margin: 0;
    padding: 0;
    p{
        padding: 0;
        font-size: 1rem;
    }
    .icon{
        display: flex;
        flex-direction: row;
        margin: 1rem 0;
        h3{
            background-color: white;
            color: black;
            padding: 0.5rem 1rem;
            margin-left: 1rem; 
            font-size: 0.9rem;
        }
        img{
            padding: 0.5rem;
        }
    }
`;

export default ServiceSection;