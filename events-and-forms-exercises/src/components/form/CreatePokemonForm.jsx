import React, { Component } from 'react';
import validationFunc from './../../utils/formValidator';
import Input from './formFields/Input';
import PokemonField from './formFields/PokemonField';

export default class CreatePokemonForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pokemonName: '',
            pokemonImg: '',
            pokemonInfo: '',
            data: []
        }

        this.createPokemon = this.createPokemon.bind(this);
        this.onChange = this.onChange.bind(this);
        this.persistPokemon = this.persistPokemon.bind(this);


        this.getPokemons = this.getPokemons.bind(this);
    }

    createPokemon(e) {
        e.preventDefault();
        ///send request
        let payload = {
            pokemonName: this.state.pokemonName,
            pokemonImg: this.state.pokemonImg,
            pokemonInfo: this.state.pokemonInfo
        }

        this.persistPokemon(payload);
    }

    persistPokemon(payload) {
        let self = this;

        fetch('http://localhost:5000/pokedex/create', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then((res) => {
            return res.json();
        }).then(d => {
            })
    }

    getPokemons() {
        fetch('http://localhost:5000/pokedex/pokedex')
            .then(data => {
                return data.json()
            })
            .then(pokemons => {
                this.setState({
                    data: pokemons.pokemonColection
                })
            })
            .catch(err => {
                console.log(err);
            })
    }


    componentDidMount() {
        this.getPokemons();
        // fetch('http://localhost:5000/pokedex/pokedex')
        //     .then(data => {
        //         return data.json()
        //     })
        //     .then(pokemons => {
        //         this.setState({ 
        //             data: pokemons.pokemonColection,
        //             pokemonName: '',
        //             pokemonInfo: '',
        //             pokemonImg: ''
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        let validName = this.state.pokemonName !== '';
        let validImage = this.state.pokemonImg.startsWith('http');
        let validContent = this.state.pokemonInfo.length > 3
            && this.state.pokemonInfo.length < 50;

        return (
            <div>
                <form onSubmit={this.createPokemon}>
                    <fieldset>
                        <Input
                            data='pokemonName'
                            name='Pokemon name'
                            func={this.onChange}
                            valid={validName}
                        />
                        <Input
                            data='pokemonImg'
                            name='Pokemon image'
                            func={this.onChange}
                            valid={validImage}
                        />
                        <Input
                            data='pokemonInfo'
                            name='Pokemon info'
                            func={this.onChange}
                            valid={validContent}
                        />
                        <input
                            type='submit'
                            value='Create Pokemon'
                            style={({ 'display': (validName && validImage && validContent) === true ? '' : 'none' })}
                        />
                    </fieldset>
                </form>

                <div style={({ display: 'inline-block' })}>
                    {this.state.data.map((pokemon, index) => {
                        return <PokemonField key={index} data={pokemon} />
                    })}
                </div>

            </div>
        )
    }



}