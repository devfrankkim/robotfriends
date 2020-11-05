import React from 'react'
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';

/*
this.state ={
    robots : robots,
    searchfield: ''
}
 1) 2 states
 2) "App"(Parent) owns the state, any components that has "state" uses the "class" syntax
    SO they can use constructor(), to create "this.state"
 3) "state" is what changes in an app.

 Virtual DOM is just a javascript Object. (Down Stream)
 ** The virtual DOM is just an Object that collects the entire "state" **
 ** and React uses the "state" to render and pass them down as props to the components**
 ** Pure functions can just render **

 **
    Everytime, there's an onChange on the <searchBox/> component, 
    it lets the "App" know, 'hey, there was a change!!!'
    Run the function "onSearchChange" with the event 
    and update the state of the "searchfield" to whatever we type.

    ****Render()****

    Now with the information that we have from <searchBox/>,
    We can now communicate to the <CardList/>,

    onSearchChange -> this.setState({searchfield : event.target.value})

    "
        Hey, I want you to filter the 'this.state.robots' to 
        have only what includes in the 'this.state.searchfield' with new updates 

        Inside <CardList robots={filteredRobots}/> 
    "

    robots(original data) is not changing, does this need to be part of "state"?
    -> Not right because we have hard coded datas
    But most of the times, we usually get new datas from another place over the internet.
    
    ex) Empty array -> An array after we go and grab all of our datas(users, robots)
    {robots: robots}
 **
*/

// smart components tend to have class syntax + "state"


class App extends React.Component {
    constructor(){        
        console.log('constructor')
        super()
        // Line 8:9:  'this' is not allowed before 'super()'  no-this-before-super
        // in order to use 'this', we need to call super() which calls the constructor of React.Component
        
        // this.state is what describes our app.
        // these are things that can change and affect our app.
        // they usually live in the parent component that kinda passes "state" to different components

        this.state ={
            robots : [],
            searchfield: ''
        }
    }

    // This is part of React, Not using arrow functions here.
    componentDidMount(){
        // Grab data list 
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots : users }))
        console.log('didmount')
    }     



    // https://reactjs.org/docs/handling-events.html
    // everytime input changes, DOM manipulation 
    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
        // where is this event happening? -> <input>
        // <input> doesn't have  -> this.state.robots
        // Anytime you make your own method on a component, use arrow functions
        // so that "this" value is according to where it was created, which is "App"                
    }

    render(){        
        console.log('render')
        const {robots, searchfield} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

                                
    return !robots.length ? 
        <h1>Loading...</h1> : 
                    <div className="tc">
                        <h1 className="f1">Robofriends</h1>
                        {/* You need to use 'this' because it's an Object which is "App" */}
                        <SearchBox searchChange={this.onSearchChange}/>
                        {/* <CardList robots={robots}/> can access from this.state*/}
                        {/* state "this.state.robots" is now passed down as "robots(props)" so CardList accepts "robots" */}


                        {/* 
                            <Scroll/> can use children 
                            even if I didn't pass props to Scroll, 

                            Automatically every signle component in React has the property "children"
                            Using the "props.children", we can create Components that wrap other Components
                            
                            "props.children" can wrap other Components
                        */}
                        <Scroll>
                            <CardList robots={filteredRobots}/>
                        </Scroll>
                    </div>                    
    }

}

export default App;

