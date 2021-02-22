import React from 'react'
import Person from './Person'

function NameList() {

    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Bruce',
    //         age: 30,
    //         skill: 'React',
    //     },
    //     {
    //         id: 2,
    //         name: 'Clark',
    //         age: 35,
    //         skill: 'Angular',
    //     },  
    //     {
    //         id: 3,
    //         name: 'Daina',
    //         age: 20,
    //         skill: 'Angular',
    //     },
    // ]
    
    // const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
    const nameList = names.map((name, index)  => <h2 key={index}>{index} {name}</h2>)

    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}

            {/* {  
            z    names.map(name => <h2>{name}</h2>)
            } */}

            {/* {personList} */}
            {nameList}

        </div>
    )
}

export default NameList
