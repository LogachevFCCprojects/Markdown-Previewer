var MarkdownPreviewer = React.createClass({
    propTypes: {
        data: React.PropTypes.string.isRequired
    },
    getInitialState: function() {
        return {
            sourcecode: this.props.data
        };
    },
    sourcecodeOnChange: function(e) {
        var newSourceCode = ReactDOM.findDOMNode(this.refs.src).value
        this.setState({sourcecode: newSourceCode});
    },
    createMarkup: function(src) {
        return {__html: marked(this.state.sourcecode)};
    },
    render: function() {
        var sourcecode = this.state.sourcecode;
        return (
            <div>
                <div className="header">
                    <h1>Markdown Previewer</h1>
                    <p>freeCodeCamp project by <a href="http://vladimirlogachev.ru" target="_blank" rel="noopener noreferrer">Vladimir Logachev</a></p>
                    <p>Made with React, SASS, Marked. <a href="https://github.com/LogachevFCCprojects/Markdown-Previewer" target="_blank" rel="noopener noreferrer">Github</a></p>
                </div>
                <div className="src">
                    <textarea className='src__text'onChange={this.sourcecodeOnChange}
                    placeholder='markdown code here' ref='src'>{sourcecode}</textarea>
                </div>
                <div className="display">
                    <div className="display__text" dangerouslySetInnerHTML={this.createMarkup()} />
                </div>
            </div>
            )
    }
});

ReactDOM.render(
    <MarkdownPreviewer data={initialSourcecode} />,
    document.getElementById('root')
    );
