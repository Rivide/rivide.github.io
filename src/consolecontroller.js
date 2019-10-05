class ConsoleController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: null,
            outputStyle: {}
        }
        this.commands = {
            welcome: () => {
                this.setOutput(
                    <div>Welcome</div>
                );
            },
            clear: () => {
                this.setOutput(null);
            },
            background: (color) => {
                console.log(color + color.length);
                this.setStyle({backgroundColor: color});
            }
        }
        this.handleInput = this.handleInput.bind(this);
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
    render() {
        return (
            <React.Fragment>
                <Console onInput={this.handleInput}></Console>
                <span id="console-output" style={this.state.outputStyle}>
                    {this.state.output}
                </span>
            </React.Fragment>
        );
    }
}
ReactDOM.render(<ConsoleController />, document.getElementById("root"));