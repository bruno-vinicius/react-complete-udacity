
let visible = false;

const toggleView = () => {
    visible = !visible;
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleView}>
                {visible ? 'Hide details' : 'Show details'}
            </button>
            <p style={{display: !visible ? 'none': ''}}>Hey. These are some details you can now see!</p>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

render();

