class ConsoleController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: null,
            outputStyle: {
                flex: -1
            }
        }
        this.mouseX = 0;
        this.commands = {
            welcome: () => {
                let opacity = 0;
                let timer = setInterval(() => {
                    opacity += .1;
                    this.setOutput(
                        <span id="textbox" style={{opacity: opacity}}>Welcome</span>
                    );
                    if (opacity >= 1) {
                        clearInterval(timer);
                    }
                }, 100);
            },
            clear: () => {
                this.setOutput(null);
            },
            background: (color) => {
                this.setStyle({backgroundColor: color});
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.beginResize = this.beginResize.bind(this);
        this.resize = this.resize.bind(this);
        this.endResize = this.endResize.bind(this);
    }
    setOutputAndStyle(jsx, prop) {
        this.setState((state, props) => ({
            output: jsx,
            outputStyle: {...state.outputStyle, ...prop}
        }));
    }
    setStyle(prop) {
        this.setState((state, props) => ({
            outputStyle: {...state.outputStyle, ...prop}, 
        }));
    }
    setOutput(jsx) {
        this.setState({output: jsx});
    }
    handleInput(input) {
        console.log("handled");
        let args = input.trim().split(/\s+/);
        let command = this.commands[args[0]];
        console.log(command);
        if (command) {
            command(...args.slice(1));
        }
    }
    beginResize(e) {
        console.log("Resizer down");
        this.mouseX = e.pageX;
        document.addEventListener("mousemove", this.resize);
        document.addEventListener("mouseup", this.endResize);
    }
    resize(e) {
        console.log(e.movementX + ", " + e.movementY);
        console.log("offset: " + e.pageX);
        //let consoleOutput = document.getElementById("console-output");
        let root = document.getElementById("root");
        this.setState((state, props) => ({
            outputStyle: {
                ...state.outputStyle, flex: Math.min(Math.max((1 - (e.pageX -
                    root.getBoundingClientRect().x) /
                root.clientWidth) * 2, 0), 2)
                /*state.outputStyle.flex * (1 -
                    (e.pageX - this.mouseX) /
                    document.getElementById("console-output").clientWidth)*/
            }
        }));
        this.mouseX = e.pageX;
        console.log(e.pageX -
            document.getElementById("root").getBoundingClientRect().x);
    }
    endResize(e) {
        document.removeEventListener("mousemove", this.resize);
        document.removeEventListener("mouseup", this.endResize);
    }
    
    render() {
        console.log(this.state.outputStyle.flex);

        return (
            <React.Fragment>
                <Console style={{flex: 2 - this.state.outputStyle.flex}}
                    onInput={this.handleInput}></Console>
                <span id="console-output" style={this.state.outputStyle}>
                    <span id="resizer" onMouseDown={this.beginResize}
                        onDragStart={(e) => e.preventDefault()}>
                    </span>
                    <span id="output-wrapper">
                        {this.state.output}
                    </span>
                </span>
            </React.Fragment>
        );
    }
}
ReactDOM.render(<ConsoleController />, document.getElementById("root"));