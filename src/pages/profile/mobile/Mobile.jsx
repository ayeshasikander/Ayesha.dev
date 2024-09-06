import React from 'react';
import Intro from '../../../sections/introSection/Intro';
import '../../../style/profileLayout/mobileLayout.scss';

const Mobile = () => {
    return (
        <div>
            <div class="card">
                <div class="btn1"></div>
                <div class="btn2"></div>
                <div class="btn3"></div>
                <div class="btn4"></div>
                <div class="card-int">
                    {/* <div class="hello">Hello
                        <span class="hidden">uiverse</span>
                    </div> */}
                    <Intro />
                </div>
                <div class="top">
                    <div class="camera">
                        <div class="int"></div>
                    </div>
                    <div class="speaker"></div>
                </div>
            </div>
        </div>
    )
}

export default Mobile