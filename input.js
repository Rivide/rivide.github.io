var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

        _this.state = {
            editable: "true"
        };
        _this.lineRef = React.createRef();
        _this.inputRef = React.createRef();
        console.log("NEW INPUT");
        return _this;
    }

    _createClass(Input, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            console.log("render input");
            return React.createElement(
                "div",
                { className: "line", ref: this.lineRef },
                React.createElement(
                    "span",
                    { className: "line-prefix" },
                    this.props.prefix
                ),
                React.createElement("span", { className: "input", ref: this.inputRef,
                    contentEditable: this.state.editable,
                    onKeyPress: function onKeyPress(e) {
                        return _this2.props.handleKeyPress(e, _this2.lineRef.current.textContent, _this2.inputRef);
                    } })
            );
        }
    }]);

    return Input;
}(React.Component);