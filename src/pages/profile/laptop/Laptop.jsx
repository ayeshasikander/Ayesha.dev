import React from 'react';
import Intro from '../../../sections/introSection/Intro';
import '../../../style/profileLayout/profileLayout.scss';

const Laptop = () => {
    return (
        <div>
            <div class="laptop">
                <div class="screen">
                    <div class="header"></div>
                    <Intro />
                </div>
                <div class="keyboard"></div>
            </div>

        </div>
    )
}

export default Laptop;