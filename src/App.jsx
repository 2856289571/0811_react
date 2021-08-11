// 引入React
import React,{Component} from 'react'
// 引入Hello组件(默认寻找文件夹下的index.js)
import Hello from './components/Hello'

// 创建组件
class App extends Component{
    render(){
        return(
            <div>
                <Hello/>
            </div>
        )
    }
}

// 暴露组件
export default App