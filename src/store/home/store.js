const reducer = (state = {
    lists: [],
    bannerList: [],
    searchList: []
}, action) => {
    const { type, data } = action; // type表示你要做的事行为，data就是传递过来的数据
    switch (type) {
        case 'CHANGE_LISTS_DATA': // 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
            return {
                lists: data,
                bannerList: state.bannerList,
                searchList: state.searchList
            }
        case 'CHANGE_SEARCHLISTS_DATA': // 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
            return {
                lists: state.data,
                bannerList: state.bannerList,
                searchList: data
            }
        case 'CHANGE_BANNER_DATA': // 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
            return {
                lists: state.lists,
                bannerList: data,
                searchList: state.searchList
            }

        default:
            return state;
    }
}

export default reducer;