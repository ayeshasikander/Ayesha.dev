import React from 'react';
import { Col, Row } from 'antd';
import { ImInstagram } from 'react-icons/im';
import { LiaLinkedin } from 'react-icons/lia';
import { BsMailbox, BsWhatsapp } from 'react-icons/bs';
import '../../style/frontWrap/frontWrapStyle.scss';

const FrontWrap = () => {
    return (
        <div className='front-wrap'>
            <Row>
                <Col
                    className='front-wrap-col'
                    span={2}
                // xs={{
                //     order: 3,
                // }}
                // sm={{
                //     order: 4,
                // }}
                // md={{
                //     order: 2,
                // }}
                // lg={{
                //     order: 1,
                // }}
                >
                    <div>Front</div>
                    <div
                        className='front-wrap-icon'>
                        <ImInstagram />
                        <LiaLinkedin />
                        <BsMailbox />
                        <BsWhatsapp />
                    </div>
                </Col>

                <Col
                    span={14}
                // xs={{
                //     order: 4,
                // }}
                // sm={{
                //     order: 3,
                // }}
                // md={{
                //     order: 1,
                // }}
                // lg={{
                //     order: 2,
                // }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In, amet nisi similique delectus, dolor saepe at, ea laborum doloribus libero rem distinctio? Quis quod laudantium, atque rem mollitia officiis quidem?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro dolore odit adipisci ullam voluptates? Illo saepe explicabo, incidunt architecto labore laborum hic. Eius totam accusamus, nulla dicta odit recusandae magnam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In, amet nisi similique delectus, dolor saepe at, ea laborum doloribus libero rem distinctio? Quis quod laudantium, atque rem mollitia officiis quidem?
                </Col>
                <Col
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: 10,
                    }}
                    span={6}
                // xs={{
                //     order: 3,
                // }}
                // sm={{
                //     order: 4,
                // }}
                // md={{
                //     order: 2,
                // }}
                // lg={{
                //     order: 1,
                // }}
                >
                    <ImInstagram />
                    <LiaLinkedin />
                    <BsMailbox />
                    <BsWhatsapp />
                </Col>

            </Row>
        </div>
    )
}

export default FrontWrap