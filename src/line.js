class Line extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: "true"
        };
    }
    render() {
        return (
            <div className="line">
                <span className="line-prefix">{this.props.prefix}</span>
                <span className="line-body" contentEditable={this.state.editable}>
                    {this.props.body}
                </span>
            </div>
        );
    }
}