var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Console = function (_React$Component) {
    _inherits(Console, _React$Component);

    function Console(props) {
        _classCallCheck(this, Console);

        var _this = _possibleConstructorReturn(this, (Console.__proto__ || Object.getPrototypeOf(Console)).call(this, props));

        _this.state = {
            lineList: [],
            lineStarter: React.createElement(
                "span",
                null,
                "<Console>"
            )
        };
        _this.handleKeyPress = _this.handleKeyPress.bind(_this);
        _this.lineRef = React.createRef();
        _this.state.lineList.push(_this.renderLine(0));
        return _this;
    }

    _createClass(Console, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.lineRef.current.focus();
        }
    }, {
        key: "handleKeyPress",
        value: function handleKeyPress(e) {
            if (e.key === "Enter") {
                e.preventDefault();
                var target = e.target;
                target.innerHTML += "\n";
                target.setAttribute("contentEditable", "false");
                this.addLine();
            }
        }
    }, {
        key: "renderLine",
        value: function renderLine(i) {
            var state = this.state;
            return React.createElement(
                "li",
                { key: i },
                state.lineStarter,
                React.createElement("span", { className: "line", contentEditable: "true", ref: this.lineRef,
                    onKeyPress: this.handleKeyPress })
            );
        }
    }, {
        key: "addLine",
        value: function addLine() {
            var _this2 = this;

            this.setState(function (state, props) {
                return {
                    lineList: state.lineList.concat(_this2.renderLine(state.lineList.length))
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "console" },
                React.createElement(
                    "ul",
                    null,
                    this.state.lineList
                )
            );
        }
    }]);

    return Console;
}(React.Component);

ReactDOM.render(React.createElement(Console, null), document.getElementById("root"));