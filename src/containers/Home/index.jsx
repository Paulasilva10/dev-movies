import { useState, useEffect } from "react"

import { Background, Info, Poster, Container, ContainerButtons } from "./styles"

import Button from "../../components/Button"
import Slider from "../../components/Slider"
import api from "../../services/api"
import { getImages } from "../../services/utils/getImages"


function Home() {
    const [movie, setMovie] = useState()
    const [topMovie, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()
    const [upComing, setUpComing] = useState()
    const [airing, setAiring] = useState()




    useEffect(() => {
        async function getMovies() {
            const {
                data: { results }
            } = await api.get('/movie/popular')

            setMovie(results[0])
        }



        async function getUpComing() {
            const {
                data: { results }
            } = await api.get('/movie/upcoming')
            console.log(results)
            setUpComing(results)
        }


        async function getTopMovies() {
            const {
                data: { results }
            } = await api.get('/movie/top_rated')
            console.log(results)
            setTopMovies(results)
        }

        async function getTopPeople() {
            const {
                data: { results }
            } = await api.get('/person/popular')
            console.log(results)
            setTopPeople(results)
        }



        async function getAiring() {
            const {
                data: { results }
            } = await api.get('/tv/airing_today')
            console.log(results)
            setAiring(results)
        }



        async function getTopSeries() {
            const {
                data: { results }
            } = await api.get('/tv/top_rated')
            console.log(results)
            setTopSeries(results)
        }



        async function getPopularSeries() {
            const {
                data: { results }
            } = await api.get('/tv/popular')
            console.log(results)
            setPopularSeries(results)
        }




        getMovies()
        getTopMovies()
        getUpComing()
        getAiring()
        getTopPeople()
        getTopSeries()
        getPopularSeries()
        
       
    }, [])

    return (

        <>
            {movie && (

                <Background img={getImages(movie.backdrop_path)}>
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red={true}  >Assista agora</Button>
                                <Button red={false}>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)}
                                alt="capa do filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovie && <Slider info={topMovie} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Series'} />}
            {upComing && <Slider info={upComing} title={'Latest'} />}
            {airing && <Slider info={airing} title={'Airing Today'} />}
            {popularSeries && <Slider info={popularSeries} title={'Popular Series'} />}
            {topPeople && <Slider info={topPeople} title={'Top People'} />}
       
        </>
    )
}

export default Home

