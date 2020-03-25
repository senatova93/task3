import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    input_ref = React.createRef()
    state = {
        add: [],
        num:0
    }

    clickButton = () => {
        let newNum = this.input_ref.current.value;
        let num=this.state.num;
        if (newNum) {
            this.input_ref.current.value = ''
            num++
            let newNum1={num:newNum}
            let newNums=[...this.state.add,newNum1]
            this.setState({
                add:newNums,
                num:num
            })
            alert(`Вы ввеели: ${newNum} `)
        }
    }

    render = () => {
        return (
            <div className="App">

                <input  ref={this.input_ref} type="text" placeholder="Введите ваш запрос:"/>
                <span> Число нажатий: {this.state.num} </span>
                <button onClick={this.clickButton} > Нажать </button>
                        </div> )


}}

export default App;
