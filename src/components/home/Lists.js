import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './ListStyle.scss'


let lists = ({list}) => {
    let html=[]
    if(list.length===0){
      html=<h1>LOADING...</h1>
    }else{
        list.map(item=>{
          html.push(
            <Link className="listItem" key={item._id} to={"/detailapp/detail/"+item._id}>
              <img src={item.big_pic} alt="" width="100px"/>
              <p className="listTitle">{item.title}</p>
              <p className="listDir">商品描述</p>
              <p className="listPrice">
              ¥<b>{item.discount_price}</b>起&nbsp;<span>¥{item.original_price}</span>
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