import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './ShowList.scss'


let showList = ({list}) => {
    let html=[]
    if(list.length===0){
      html=<div style={{width:"100%",textAlign:"center"}}><img src="http://www.sucaijishi.com/uploadfile/2013/0527/20130527034921885.gif" alt="" width="80%" height="auto"/></div>

    }else{
        list.map(item=>{
          html.push(
            <Link className="showlistItem" key={item.goodsId} to={"/detailapp/detail/"+item.goodsId}>
              <img src={item.imgsrc} alt=""/>
              <p className="listTitle">{item.title}</p>
              <p className="listDir">{item.dir}</p>
              <p className="listPrice">
              ¥<b>{item.sale}</b>起&nbsp;<span>¥{item.price}</span>
              </p>
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

showList.propTypes={
    list:PropTypes.array
}

export default showList