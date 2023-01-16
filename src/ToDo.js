import { Component } from "react";
import check from './check.png';

export class ToDo extends Component {
    state = {
        inputItem:'',
        ToDo: []
    }

    onChangeEvent(e){
        this.setState({inputItem: e});
    }

    addItem(input){
        if (input === " " ){
            alert('Please enter an item!');
        } else {
        let listArray = this.state.ToDo;
        listArray.push(input);
        this.setState({ToDo: listArray, inputItem: ' '});
        // console.log(listArray);
    }
}
    crossedWord(event){
        const li = event.target;
        li.classList.toggle('crossed');
    }
    deleteItem(){
        let listArray = this.state.ToDo;
        listArray = [];
        this.setState({ToDo: listArray})
    }

    onFormSubmit(e){
        e.preventDefault();

    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type='text'
                placeholder="What do u wanna buy?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.inputItem}/>
            </div>

            <div className="container add">
                <button onClick={() => this.addItem(this.state.inputItem)} className="btn-add btn" >Add</button>
            </div>

            <ul>
                {this.state.ToDo.map((item, index) => 

                (<li onClick={this.crossedWord} key={index}>
                    
                    <img src={check} width="40px" alt="check-emoji"/>
                    
                    {item}</li>))}
                
            </ul>

            <div className="container">
            <button onClick={() => this.deleteItem() } className="btn-delete btn">Delete</button>
            </div>

            </form>

            </div>
        )
    }
}