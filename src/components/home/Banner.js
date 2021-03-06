import React from 'react'
import PropTypes from 'prop-types'
import { Carousel} from 'antd-mobile';


let banner = ({banner}) => {
        let html=[]
        if(banner.length===0){
            html=<div style={{width:"100%",height:"100%",textAlign:"center"}}><img src="http://www.sucaijishi.com/uploadfile/2015/0210/20150210104952902.gif" alt="" width="auto" height="200%"/></div>
        }else{
            html=<Carousel
            autoplay={true}
            infinite={true}
            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            // afterChange={index => console.log('slide to', index)}
            >
            {banner.map(val => (
                <a
                key={val._id}
                href="http://39.98.41.185/mi"
                style={{ display: 'inline-block', width: '100%', height: 'auto' }}
                >
                <img
                    src={val.imgSrc}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    }}
                />
                </a>
            ))}             
            </Carousel>
        }
        return (
            <ul>
                {html}
            </ul>
        )
    }

banner.propTypes={
    banner:PropTypes.array
}

export default banner