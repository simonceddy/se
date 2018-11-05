import React, { Component } from 'react';
//import renderHTML from 'react-render-html';
import './Article.scss';

class Paragraph extends Component
{
    render() {
        return (
            <div>
                <div className="container content-paragraph">
                    {this.props.extra.content}
                </div>
            </div>
        );
    }
}

export default Paragraph;