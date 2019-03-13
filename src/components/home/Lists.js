import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './ListStyle.scss'


let lists = ({list}) => {
    let html=[]
    if(list.length===0){
      html=<div style={{width:"100%",textAlign:"center"}}><img src="http://www.sucaijishi.com/uploadfile/2015/0210/20150210104952191.gif" alt="" width="20%" height="auto"/></div>
      // html=<div style={{width:"100%",textAlign:"center"}}><img src="http://cdn.uedna.com/201402/1392662527843_1140x0.gif" alt="" width="20%" height="auto"/></div>

    }else{
        list.map(item=>{
          html.push(
            <Link className="listItem" key={item.goodsId} to={"/detailapp/detail/"+item.goodsId}>
              <img src={item.imgsrc} alt="" />
              <p className="listTitle">{item.title}</p>
              <p className="listDir">{item.dir}</p>
              <p className="listPrice">
              ¥<b>{item.sale}</b>起&nbsp;<span>¥{item.price}</span>
              </p>
              <button className="buyBtn">立即购买</button>
            </Link>
          )
          return ''
        })
      }
    return (
        <ul className='listBox'>
            {html}
        </ul>
    )
}

lists.propTypes={
    list:PropTypes.array
}

export default lists