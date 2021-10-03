import {Component} from "react";
import {fetchPopularRepos} from "./api/fetchPopularRepos";
import RepoGrid from "./components/RepoGrid";
import {SelectedLanguage} from "./components/SelectedLanguage"

class App extends Component {
    state = {
        selectedLanguage: 'All',
        repos: null
    }

    setPopularRepos() {
        fetchPopularRepos(this.state.selectedLanguage)
            .then(data => this.setState({ repos: data }));
    }

    componentDidMount() {
        this.setPopularRepos()
    }

    selectLanguage = (event) => {
        this.setState({ repos: null });
        this.setPopularRepos()
        if(event.target.innerText !== this.state.selectedLanguage) {
            this.setState({selectedLanguage: event.target.innerText});
        }
    }

    render() {
        return (
            <>
                <SelectedLanguage
                    repos={this.state.repos}
                    selectedLanguage={this.state.selectedLanguage}
                    selectLanguage={this.selectLanguage}
                />
                {this.state.repos ?
                    <RepoGrid repos={this.state.repos} /> :
                    <p style={{ textAlign: 'center'}}>Loading ...</p>}
            </>
        )
    }
}

export default App;