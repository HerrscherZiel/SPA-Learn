import React, {Component} from 'react';
import CardProduct from "./CardProduct";
import Bg from '../image/bg.jpg';


class Portofolio extends Component {

    render() {
        return (
            <div>
              <main>
                
            <div class="mdl-grid portfolio-max-width">
               
                <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                    <div class="mdl-card__media">
                        <img class="article-image" src={Bg} border="0" alt=""></img>
                    </div>
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Tech Enthusiast Day</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        Web pada acara TED yang berisi informasi lomba, pendaftaran, dan dokumentasi acara
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="#">Read more</a>
                    </div>
                </div>


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
                
                <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                    <div class="mdl-card__media">
                        <img class="article-image" src={Bg} border="0" alt=""></img>
                    </div>
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Sistem Informasi Seminar</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        Sistem Informasi Seminar
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="#">Read more</a>
                    </div>
                </div>
                
                {/* <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                    <div class="mdl-card__media">
                        <img class="article-image" src={Bg} border="0" alt=""></img>
                    </div>
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Consequat ut quis</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="#">Read more</a>
                    </div>
                </div>
                
                <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                    <div class="mdl-card__media">
                        <img class="article-image" src={Bg} border="0" alt=""></img>
                    </div>
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Consequat ut quis</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="#">Read more</a>
                    </div>
                </div>
                
                <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                    <div class="mdl-card__media">
                        <img class="article-image" src={Bg} border="0" alt=""></img>
                    </div>
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Consequat ut quis</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="#">Read more</a>
                    </div>
                </div> */}


            </div>
            </main>
            </div>

        );
    }
}

export default Portofolio;