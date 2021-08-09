import styled from "styled-components";
import { StyleAbout } from "./LayoutStyle";
import Collapse from "./Collapse";
import Scrollable from "./Scrollable";
import { ScrollAnim } from "../PageAnims";

const FaqSection = () => {
    const [ element, controls ] = Scrollable();
    return(
        <StyleFaq ref={element} variants={ScrollAnim} animate={controls}>
            <h2>Any Questions <span>FAQ</span></h2>
            <Collapse question="How do i start?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, placeat!</p>
                </div>
            </Collapse>
            <Collapse question="Payment Methods?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, placeat!</p>
                </div>
            </Collapse>
            <Collapse question="What da dog doin?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, placeat!</p>
                </div>
            </Collapse>
            <Collapse question="What products do you offer?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, placeat!</p>
                </div>
            </Collapse>
        </StyleFaq>
    )
}

const StyleFaq = styled(StyleAbout)`
    flex-direction: column;
    align-items: flex-start;
    span{
        display: block;
    }
    h2{
        padding-bottom: 0;
        margin: 0;
        font-weight: lighter;
    }
    h3{
        font-size: 1.5rem;
        padding: 0;
        margin: 0;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 0rem 0rem;
        padding: 0;
        width: 100%;
    }
    .question{
        width: 100%;
        padding: 1rem 0rem;
        margin-top: 4rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
            font-size: 0.9rem;
        }
    }
`;
export default FaqSection;