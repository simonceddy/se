import React, { Component } from 'react';
//import renderHTML from 'react-render-html';
import './Article.scss';

class Article extends Component
{
    render() {
        return (
            <div>
                <h1>{this.props.extra.title}</h1>
                {this.props.extra.content()}
            </div>
        );
    }
}

export default Article;