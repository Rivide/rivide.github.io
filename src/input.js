class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: "true"
        };
        this.lineRef = React.createRef();
        this.inputRef = React.createRef();
        console.log("NEW INPUT");
    }
    render() {
        
        console.log("render input");
        return (
            <div className="line" ref={this.lineRef}>
                <span className="line-prefix">{this.props.prefix}</span>
                <span className="input" ref={this.inputRef}
                    contentEditable={this.state.editable}
                    onKeyPress={(e) => this.props.handleKeyPress(e, this.lineRef.current.textContent, this.inputRef)}></span>
            </div>
        );
    }
}