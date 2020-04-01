import React from 'react'
import service from '../services/themoviedbservice'
import Movie from './Movie'
import MovieModal from './MovieModal'
import "../styles/dashboard.css"

export default class Dashboard extends React.Component {

    state = {
        movies: [],
        show: false,
        currentMovie: {},
        loading: false,
        page: 1
    }

    showDetails = async (currentId) => {
        const {data : currentMovie} = await service.getMovie(currentId) 
        this.setState ({
            show : true,
            currentMovie
        })
    }

    hideDetails = () => {
        this.setState ({
            show : false,
            currentMovie : {}
        })
    }

    getMovies = async (page) => {
        this.setState({
            loading : true
        })
        const { data } = await service.getMovies(page) 
        const {results} = data
        this.setState({
            movies : [...this.state.movies, ...results],
            loading : false
        })
    }

    handleObserver = () => {
        const curPage = this.state.page + 1
        this.getMovies(curPage);
        this.setState({ page: curPage });
    }

    async componentDidMount () {
        await this.getMovies(this.state.page) 

        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        };
          
        this.observer = new IntersectionObserver(
            this.handleObserver,
            options
        );

        this.observer.observe(this.loadingRef);
    }

    render() { 
        return (
            <div>
                <div className={this.state.show && "listOpacity"}>
                    <ul>
                        {this.state.movies.map(movie => (
                            <Movie  key={movie.id} 
                                    id={movie.id}
                                    title={movie.title} 
                                    showDetails={this.showDetails} 
                            />
                        ))}
                    </ul>
                </div>

                <div className="loading" ref={loadingRef => (this.loadingRef = loadingRef)}>
                    <span className={this.state.loading ? " loadingText display : block" : "display : none"}>Loading...</span>
                </div>

                <MovieModal show={this.state.show} 
                             onClose={this.hideDetails} 
                             movie={this.state.currentMovie}
                />
            </div>
        )
    }
}