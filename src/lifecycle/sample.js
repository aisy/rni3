class App extends Component {
  constructor () {
    // seperti yang sebelumnya
  }

  componentDidMount() {
    apiCall("https://jsonplaceholder.typicode.com/users")
      .then(response =>
        this.setState({
          robots: response,
          isPending: false
        })
      )
  }
}