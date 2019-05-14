import React, {Component} from 'react';

class Kontak extends Component {
    render() {
        return (
            <div>
                
        <main class="mdl-layout__content">
            <div class="mdl-grid portfolio-max-width portfolio-contact">
                <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Email me</h2>
                    </div>
                    <div class="mdl-card__media">
                        <img class="article-image" src=" image/bg.jpg" border="0" alt=""></img>
                    </div>
                    <div class="mdl-card__supporting-text">
                        <p>
                            Untuk informasi lebih lanjut anda dapat mengemail saya pada form di bawah
                        </p>

                        <form action="#" class="">
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input class="mdl-textfield__input" pattern="[A-Z,a-z, ]*" type="text" id="Name"></input>
                                <label class="mdl-textfield__label" for="Name">Name...</label>
                                <span class="mdl-textfield__error">Letters and spaces only</span>
                            </div>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input class="mdl-textfield__input" type="text" id="Email"></input>
                                <label class="mdl-textfield__label" for="Email">Email...</label>
                            </div>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <textarea class="mdl-textfield__input" type="text" rows="5" id="note"></textarea>
                                <label class="mdl-textfield__label" for="note">Enter note</label>
                            </div>
                            <p>
                                <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit">
                                    Submit
                                </button>
                            </p>
                        </form>
                    </div>
                    
                </div>
            </div>
            
    
        </main>
    </div>
            
        );
    }
}

export default Kontak;