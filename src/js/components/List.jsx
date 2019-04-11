import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return { articles: state.articles };
}

class List extends Component {
    render() {
        const { articles } = this.props;
        return (
            <ul className="list-group list-group-flush">
                {articles.map(article => {
                    return <li className="list-group-item" key={article.id}>{article.title}</li>
                })
                }
            </ul>
        )
    }
}

List.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(List)