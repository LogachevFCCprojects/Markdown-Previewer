var MarkdownPreviewer = React.createClass({
    displayName: "MarkdownPreviewer",

    propTypes: {
        data: React.PropTypes.string.isRequired
    },
    getInitialState: function () {
        return {
            sourcecode: this.props.data
        };
    },
    sourcecodeOnChange: function (e) {
        var newSourceCode = ReactDOM.findDOMNode(this.refs.src).value;
        this.setState({ sourcecode: newSourceCode });
    },
    createMarkup: function (src) {
        return { __html: marked(this.state.sourcecode) };
    },
    render: function () {
        var sourcecode = this.state.sourcecode;
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "header" },
                React.createElement(
                    "h1",
                    null,
                    "Markdown Previewer"
                ),
                React.createElement(
                    "p",
                    null,
                    "freeCodeCamp project by ",
                    React.createElement(
                        "a",
                        { href: "http://vladimirlogachev.ru", target: "_blank", rel: "noopener noreferrer" },
                        "Vladimir Logachev"
                    )
                ),
                React.createElement(
                    "p",
                    null,
                    "Made with React, SASS, Marked. ",
                    React.createElement(
                        "a",
                        { href: "https://github.com/LogachevFCCprojects/Markdown-Previewer", target: "_blank", rel: "noopener noreferrer" },
                        "Github"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "src" },
                React.createElement(
                    "textarea",
                    { className: "src__text", onChange: this.sourcecodeOnChange,
                        placeholder: "markdown code here", ref: "src" },
                    sourcecode
                )
            ),
            React.createElement(
                "div",
                { className: "display" },
                React.createElement("div", { className: "display__text", dangerouslySetInnerHTML: this.createMarkup() })
            )
        );
    }
});

ReactDOM.render(React.createElement(MarkdownPreviewer, { data: initialSourcecode }), document.getElementById('root'));