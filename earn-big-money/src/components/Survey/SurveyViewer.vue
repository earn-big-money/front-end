<template>
  <div id="surveyViewer">
    <survey :survey="survey"></survey>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import "bootstrap/dist/css/bootstrap.css";
var Survey = SurveyVue.Survey;
Survey.cssType = "bootstrap";

import * as widgets from "surveyjs-widgets";
import "inputmask/dist/inputmask/phone-codes/phone.js";

export default {
  name: "survey-viewer",
  components: {
    Survey
  },
  beforeCreate() {
      this.surveyData = this.$route.params.data
  },
  data(){
    var _this = this;
    this.model = new SurveyVue.Model(JSON.parse(this.surveyData));
    this.model.onComplete.add(function(survey){
      console.log(survey.data);
      _this.$http.post('/api/test/submitSurvey', survey.data).then(function(response){
          console.log(response)
        }, function(response){
          console.log(response)
        });
    });
    return {
      survey: this.model
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
