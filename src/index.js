import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const items =[
    {
        name    : 'Tuan Kreb',
        color   : 'Merah',
        img     : 'merah.png',
    },
    {
        name    : 'Spombob',
        color   : 'Kuning',
        img     : 'kuning.png',
    },
    {
        name    : 'Plangton',
        color   : 'Hijau',
        img     : 'hijau.png',
    },
    {
        name    : 'Squidwed',
        color   : 'Biru',
        img     : 'biru.png',
    },
];

//const items = ['Merah', 'Kuning', 'Hijau', 'Biru']

ReactDOM.render(<App items={items}/>, document.getElementById('root'));
serviceWorker.register();

