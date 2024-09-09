import React from 'react';
import '../../style/cardsLayout/cube.scss';

const Cube = () => {
    return (
        <div>
            <div class="cube-container">
                <div class="cube">
                    <div class="face front"><span>Hello</span></div>
                    <div class="face back">you'll never see...</div>
                    <div class="face right">World</div>
                    <div class="face left">...this anyway :)</div>
                    <div class="face top">french</div>
                    <div class="face bottom">I'm</div>
                </div>
            </div>

        </div>
    )
}

export default Cube