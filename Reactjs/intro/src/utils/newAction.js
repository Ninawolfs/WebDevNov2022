const newsAll = async()=>{
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data= res.json()
    return data
}
const newsById = ()=>{
    console.log('news by id');
}
const getNewsDetail = ()=>{
    console.log('news detail');
}

export {newsAll, newsById, getNewsDetail}