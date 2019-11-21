import React, { Component } from 'react';


class Gallery extends Component{
    constructor(props){
        super(props);
        imageURL= props.url;
        title = props.title;
        btnLink = props.link;
        btnText = props.btnText;
    }
    
}

export default gallery;