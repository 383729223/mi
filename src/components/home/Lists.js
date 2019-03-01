import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

let lists = ({list}) => {
    let html=[]
    if(list.length===0){
      html=<h1>LOADING...</h1>
    }else{
        list.map(item=>{
        html.push(
          <Link key={item._id} to={"/detailapp/detail/"+item._id}>
            <p>{item.title}</p>
            <img src={item.big_pic} alt="" width="100px"/>
          </Link>
        )
        return ''
      })
    }
    return (
        <ul>
            {html}
        </ul>
    )
}

lists.propTypes={
    list:PropTypes.array
}

export default lists