import React from 'react'

// function component

//function Greet() {
//    return <h1>Hello Vikram</h1>
//}

/*
export const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>
                Hello { props.name } a.k.a {props.heroName}
            </h1>
            {props.children}
        </div>
    )    
}
*/

/*
export const Greet = ({name, heroName}) => {
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )    
}
*/

export const Greet = (props) => {
    console.log(props)
    const {name, heroName} = props
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
            {props.children}
        </div>
    )    
}

export const Reet = () => <h1>Hello Reet</h1> 

// exporting Greet as default, this will allow us to import with any name (e.g MyComponents) 
//export default Greet