import React, {memo, useEffect} from 'react'
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getTopBannerAction} from "../../store/actionCreators";
import './index.less'
import {Carousel, Col, Row} from "antd";
const Banner:React.FC = () => {
    const dispatch = useDispatch();
    const { topBanners } = useSelector(
        (state: any) => ({
            topBanners: state.recommend.get("topBanners"),
        }),
        shallowEqual
    );
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch]);
    return <Row gutter={24} justify={'center'} className="banner-wrapper">
        <Col sm={24} xs={24} md={18} lg={18} xl={16} className="banner">
            <Carousel effect={'fade'} autoplay>
                {
                    topBanners.map((banner:any) => (
                        <div className="banner-item" key={banner.imageUrl}>
                            <img src={banner.imageUrl}/>
                        </div>
                    ))
                }
            </Carousel>
        </Col>
    </Row>
}

export default memo(Banner)