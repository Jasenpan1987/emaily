import React from "react";
import _ from "lodash";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions";

const SurveyFormReview = ({ toggleReview, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({name, label}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your email</h5>
            {reviewFields}
            <button
                className="yellow btn-flat darken-3 white-text left"
                onClick={toggleReview}
            >
                Back
            </button>
            <button
                className="green btn-flat white-text right"
                onClick={() => submitSurvey(formValues, history)}
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));