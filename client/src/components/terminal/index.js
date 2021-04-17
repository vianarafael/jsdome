import './terminal.css'

const Terminal = ({ expressionsToBeDisplayed }) =>
{

    return (
        <div id="terminal">
            <section id="terminal__bar">
                <div id="bar__buttons">
                    <button class="bar__button" id="bar__button--exit">
                        &#10005;
        </button>
                    <button class="bar__button">&#9472;</button>
                    <button class="bar__button">&#9723;</button>
                </div>
                <p id="bar__user">rafascode@ubuntu: ~</p>
            </section>

            <section id="terminal__body">
                <div id="terminal__prompt">
                    <span id="terminal__prompt--user">rafascode@ubuntu:</span>
                    <span id="terminal__prompt--location">~</span>
                    <span id="terminal__prompt--bling">$</span>
                    <span id="terminal__prompt--cursor"></span>
                    <div>
                        {expressionsToBeDisplayed.length ? expressionsToBeDisplayed.map((el) => el) : "No code, dude"}
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Terminal;