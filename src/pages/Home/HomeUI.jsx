import React, { Component } from 'react';
import Lists from '@/components/home/Lists'
import { Carousel } from 'antd-mobile';
// import store from '@/store'
// import action from '@/store/home/action'

class Com extends Component {
  
  componentDidMount(){
    // console.log(this.props)
    this.props.requestData('/product')
    this.props.requestBannerData('/mi/banner')
    // // console.log(action)
    //   store.dispatch(action.requestData('/product'))
    //   store.dispatch(action.requestBannerData('/mi/banner'))
  }
  render () {
    // console.log(this.props.bannerList)
    return (
      <div className = "content">
        <Carousel
          autoplay={true}
          infinite={true}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.props.bannerList.map(val => (
            <a
              key={val._id}
              href="http://39.98.41.185"
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
        <Lists list={this.props.lists} />
      </div>
    )
  }

}

export default Com
