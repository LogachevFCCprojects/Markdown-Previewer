var initialSourcecode = '### Header ###\nkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBGkdjfgskdjfgsdkfjvnsdkfjbnaekdfjgns;dkjfbn;LKJHBLKJBSGLKSJFBG';

var MarkdownPreviewer = React.createClass({
    propTypes: {
        data: React.PropTypes.string.isRequired
    },
    getInitialState: function() {
        return {
            sourcecode: this.props.data
        };
    },
    sourcecodeKeyUp: function(e) {
        var newSourceCode = ReactDOM.findDOMNode(this.refs.src).value
        this.setState({sourcecode: newSourceCode});
    },  
    componentDidMount: function() {
        ReactDOM.findDOMNode(this.refs.src).focus();
    },
    createMarkup: function(src) {
        return {__html: marked(this.state.sourcecode)};
    },
    render: function() {
        var sourcecode = this.state.sourcecode;
        return (
            <div>
                <div className="src">
                    <textarea className='src__text'onChange={this.sourcecodeKeyUp}
                    placeholder='markdown code here' ref='src'>{sourcecode}</textarea>
                </div>
                <div className="display" dangerouslySetInnerHTML={this.createMarkup()} />
            </div>
            )
    }
});

ReactDOM.render(
    <MarkdownPreviewer data={initialSourcecode+initialSourcecode+initialSourcecode} />,
    document.getElementById('root')
    );
