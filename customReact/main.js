const reactElement={
    type:'p',
    props:{
        insideText:'this is a paragraph',
        color:'blue'
    }
}

const reactAppRender=document.querySelector('#root');

//function to render the element in root, where to render, to whom to render
 function toRender(whereTo,whomTo){
    const ele=document.createElement(whomTo.type);
    //ele.appendChild(whomTo.props.insideText); //can't do this because direct text not supported by appendChild
    ele.innerHTML=whomTo.props.insideText;//thats why we need to useinnerHTML or createTextNode etc
    ele.setAttribute('style', `color: ${whomTo.props.color}`); // we are using style tochange the color
    whereTo.appendChild(ele);
 }

 toRender(reactAppRender,reactElement);
