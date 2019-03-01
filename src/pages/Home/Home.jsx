import {connect} from 'react-redux'
import UI from './HomeUI'
import action from '@/store/home/action'
import './Home.scss'

const mapStateToProps=(state)=>{
  // console.log(state)
  return{
    lists:state.homeStore.lists,
    bannerList:state.homeStore.bannerList
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    requestData(url){
      dispatch(action.requestData(url))
    },
    requestBannerData(url){
      dispatch(action.requestBannerData(url))
    }
  }
}

const Home=connect(mapStateToProps,mapDispatchToProps)(UI);

export default Home
