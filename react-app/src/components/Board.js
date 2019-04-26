import React, {Component} from 'react';
import '../css/Board.css';
import Note from './Note'

class Board extends Component{
    constructor(){
        super();
        this.state = {
            notes: [
                {
                    title:"Class Notes",
                    body: "use constructors when extending another class"
                },
                { 
                    tite:"My address",
                    body: "Nunya"
                },
                {
                    title:"React Notes",
                    body: "Everything in React is component"
                }

            ]
        }

    }
    addNote() {
        this.state.notes.push(
            {
                title: "New Notes Title",
                body: "New Note Body"
            }
        );
        this.setState(
            {
            notes: this.state.notes
            }
           
        );
    }
    render(){
        return(
                <div>
                <div className="div-board">
                <div className="row">
                {
                    this.state.notes.map(note => {
                        return <Note title ={note.title} body=
                            {note.body} />
                    })
                }
        
                </div>              
                <div>
                    <button className="btn btn-success add-button" onClick={this.addNote.bind(this)}> Add </button>
                </div>
            </div>
            </div>
        );
    }


}
export default Board;
