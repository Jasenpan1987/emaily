import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../actions";

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="card" key={survey._id}>
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                        <p>{survey.body}</p>
                        <p className="left">
                            {survey.lastResponded && `Last Responed: ${new Date(survey.lastResponded).toLocaleDateString()}` }
                        </p>
                        <p className="right">
                            Sent On: {new Date(survey.dateSend).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action">
                        <a>Yes Votes: {survey.yes}</a>
                        <a>No Votes: {survey.no}</a>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps({ surveys }) {
    return {
        surveys
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSurveys: () => dispatch(fetchSurveys())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);