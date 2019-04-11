import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {getData} from "../action/action"

const mapStateToProps = (state) => {
    return { remoteArticles: state.remoteArticles };
}

class Posts extends Component {
    componentDidMount(){
        this.props.getData();
    }
    render() {
        const { remoteArticles } = this.props;
        return (
            <ul className="list-group list-group-flush">
                {remoteArticles.map(article => {
                    return <li className="list-group-item" key={article.id}>{article.title}</li>
                })
                }
            </ul>
        )
    }
}

Posts.propTypes = {
    remoteArticles: PropTypes.array.isRequired,
    getData: PropTypes.func.isRequired
}

export default connect(mapStateToProps,{getData})(Posts)