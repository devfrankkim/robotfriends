## life cycle methods

They get run every time a component does something.

### Mounting - starting the app

when I refresh web page 
App component gets mounted

- constructor() -> Yes? run the code inside 
- static getDerivedStateFromProps() -> NO? Ignore it.
- render() -> Yes? render the code
- componentDidMount() -> NO? Ignore it

- componentDidMount() gets called after render()

**render()**
if there's an update with "state", it renders() again.
ex) constructor() -> render() -> componentDidMount() -> render()
state{user: []} -> render() -> setState(user: DATA) -> render()



### Updating - ex) Everytime I type NEW data

The components get re-rendered because we have new information


### Unmounting - ex) Going to different pages(the components will get deleted from the page)

This method is called when a component is being removed from the DOM:




```js
/*
App -> getting mounted in 'root'

we are replacing <div id="root"></div> with the entire <App/>.
*/

ReactDOM.render(<App /> ,document.getElementById('root'));




```