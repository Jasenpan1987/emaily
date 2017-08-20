import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview"

class SurveyNew extends Component {
    
    state = {
        showReview: false
    }

    toggleReview = () => {
        console.log('asdasd')
        this.setState({
            showReview: !this.state.showReview
        });
    }

    render() {
        console.log(this.state.showReview);
        return this.state.showReview ? 
            <SurveyFormReview toggleReview={this.toggleReview}/>:
            <SurveyForm toggleReview={this.toggleReview}/>
    };
}

export default reduxForm({
    form: "surveyForm"
})(SurveyNew);
