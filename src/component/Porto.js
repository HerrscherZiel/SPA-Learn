import React, {Component} from 'react';


class Porto extends Component {
    render() {
        return (
            <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
            <div class="mdl-card__media">
                <img class="article-image" src={Bg} border="0" alt=""></img>
            </div>
            <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">Sistem Informasi OkeAja</h2>
            </div>
            <div class="mdl-card__supporting-text">
            Sistem Informasi Pariwisata OkeAja
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="#">Read more</a>
            </div>
            </div>
        );
    }
}

export default Main;

