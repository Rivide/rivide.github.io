class Console extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lineList: ["hey", "how's", "it", "going"],
            readingInput: true,
            inputPrefix: (
                <span>{"<Console>"}</span>
            )
        };
        this.inputRef = React.createRef();
        this.consoleRef = React.createRef();

        this.handleKeyPress = this.handleKeyPress.bind(this);
        //this.lineRef = React.createRef();
        //this.state.lineList.push(this.renderLine(0));
    }
    componentDidUpdate() {
        //this.lineRef.current.focus();
        this.consoleRef.current.scrollTop = this.consoleRef.current
            .scrollHeight;
    }
    handleKeyPress(e, inputLine, inputSpan) {
        if (e.key === "Enter") {
            e.preventDefault();

            let target = e.target;
            target.innerHTML += "\n";

            let input = inputSpan.current.textContent;
            inputSpan.current.innerHTML = "";
            this.setState((state, props) => ({
                lineList: state.lineList.concat(inputLine)
            }));
            this.onInput(input);
            //this.addLine();
        }
    }
    onInput(input) {
        console.log(input);
        this.props.onInput(input);
    }
    addLine() {
        this.setState((state, props) => ({
            lineList: state.lineList.concat(this.renderLine(state.lineList.length))
        }));
    }
    renderLines() {
        return this.state.lineList.map((line, i) => 
           <li key={i}><span className="line">{line}</span></li>
        );
    }
    renderInputLine() {
        let state = this.state;
        if (state.readingInput) {
            let a = <Input ref={this.inputRef} prefix={this.state.inputPrefix} handleKeyPress={this.handleKeyPress}>
                </Input>;
            return a;
            
            /*return (
                <li key={state.lineList.length}>
                    {state.inputPrefix}
                    <span className="input" contentEditable="true"
                        onKeyPress={this.handleKeyPress}></span>
                </li>
            );*/
        }
    }
    render() {
        console.log("render console");
      return (
        <div className="console" ref={this.consoleRef} style={this.props.style}>
            <ul>
                {this.renderLines()}
                {this.renderInputLine()}
            </ul>
        </div>
      );
    }
}