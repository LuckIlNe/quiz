import React, { Component } from 'react' 
import Router from 'next/router';


class Welcome extends Component {
    render() {
        return (
            <h1> Приветствую вас на тесте, балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала</h1>
        );
    }
}


class StartBtn extends Component {
    render() {
        return (
            <>
            <div className="str-btn">
                <button  type="button" onClick={() => Router.push('/test')} >
                    Начать!
                </button>
            </div>
            </>
       ); 
    }
}


export default class Main extends Component {
    render() {
        return (
            <div className="root">
                <div className="back-container">
                    <div className="container">
                        <div className="main-header"> 
                            <Welcome/>
                        </div>
                        <div className="main-body"> 
                            Добро пожаловать на тест от компании Давида, тут всякое описание и тому подобное теста, возможно пару щуток и лаконичное подытоживание 
                            балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала балабалабала
                        </div>
                        <StartBtn/>
                    </div>
                </div>
            </div>
        );
    }
}
