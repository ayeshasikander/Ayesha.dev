import React from 'react';
import '../../style/cardsLayout/cube.scss';

const Cube = () => {
    return (
        <div>
            <div className="cube-container">
                <div className="cube">
                    <div className="face front"><span>Hello</span></div>
                    <div className="face back">you'll never see...</div>
                    <div className="face right">World</div>
                    <div className="face left">...this anyway :)</div>
                    <div className="face top">french</div>
                    <div className="face bottom">I'm</div>
                </div>
            </div>

        </div>
    )
}

export default Cube