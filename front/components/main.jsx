import React, { Component } from 'react' 
import Router from 'next/router';



class Welcome extends Component {
    render() {
        return (
            <h1> Приветствую вас на тесте, балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала
                
            </h1>            
        );
    }
}



// todo redirect for id
class StartBtn extends Component {
    render() {
        const id = this.props.id
        console.log(this.props)
        return (
            <>
            <div className="str-btn">
                <button  type="button" onClick={() => Router.push('/' + id + '/test')} > 
                    Начать!
                </button>
            </div>
            </>
       ); 
    }
}


export default class Main extends Component {

    render() {
        const id = this.props.id
        console.log(this.props)
        return (
            <div className="root">
                <div className="back-container">
                    <div className="container">
                        <div className="main-header"> 
                            <Welcome/>
                            <div>{id}</div>
                        </div>
                        <div className="main-body"> 
                            Добро пожаловать на тест от компании Давида, тут всякое описание и тому подобное теста, возможно пару щуток и лаконичное подытоживание 
                            балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала
                        </div>
                        <StartBtn id={id}/>
                    </div>
                </div>
            </div>
        );
    }
}
