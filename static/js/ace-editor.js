var editor = ace.edit("editor");
editor.setTheme("ace/theme/tomorrow_night_bright");
editor.renderer.setShowGutter(false);
editor.session.setMode("ace/mode/json");

var solutionEditor = ace.edit("solutionEditor");
solutionEditor.setTheme("ace/theme/tomorrow_night_bright");
solutionEditor.session.setMode("ace/mode/json");
solutionEditor.renderer.setShowGutter(false);
solutionEditor.setReadOnly(true);

var sourceDataEditor = ace.edit("sourceDataEditor");
sourceDataEditor.setTheme("ace/theme/tomorrow_night_bright");
sourceDataEditor.session.setMode("ace/mode/json");
sourceDataEditor.setReadOnly(true);

var outputDataEditor = ace.edit("outputDataEditor");
outputDataEditor.setTheme("ace/theme/tomorrow_night_bright");
outputDataEditor.session.setMode("ace/mode/json");
outputDataEditor.setReadOnly(true);

var sampleViewerEditor = ace.edit("sampleViewerEditor");
sampleViewerEditor.setTheme("ace/theme/tomorrow_night_bright");
sampleViewerEditor.session.setMode("ace/mode/json");
sampleViewerEditor.setReadOnly(true);

var Range = ace.require("ace/range").Range

var rows = 9;
var cell_height = 100;
var cell_width = 90;

var icon_height = 50;
var icon_width = 50;

var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope', '$sce', '$location', '$window', function($scope, $sce, $location, $window) {
    $scope.jsonData = {}
    $scope.correct_answer = false;
    $scope.question_state = "light-blue darken-4"
    $scope.showSolutionFlag = false;
    $scope.lastQuestion = false
    $scope.finalOutput = false;
    $scope.show_hint = false;
    $scope.finished = false;
    $scope.current_question_type = "";
    $scope.current_question_text = "";
    $scope.current_question_subText = "";
    $scope.current_question_hint = "";

    $scope.questions_override = $location.search();
    console.log($scope.questions_override);

    if($scope.questions_override && $scope.questions_override.questions){
        questions = $window[$scope.questions_override.questions]
    }


    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/json");

    $scope.typeOfItem = function(item){

        if(typeof(item) == 'object'){

            if(Array.isArray(item)){
                return "array"
            }else{
                return "dictionary"
            }

        }else{
            return(typeof(item))
        }

    }

    var updateJsonData = function(){

        jsonPathString = editor.getValue();
        try{
            $scope.jsonData = jsonPath($scope.current_question.source_data, jsonPathString.trim());
            if($scope.jsonData){
                $scope.finalOutput = $scope.jsonData

                sampleViewerEditor.setValue(JSON.stringify($scope.finalOutput,null, 2));
            }else{
                sampleViewerEditor.setValue("Нет соответствия");
            }
            sampleViewerEditor.session.selection.clearSelection();

        }catch(err) {
            console.log(err.message);
            sampleViewerEditor.setValue(err.message);
        }

    }

    updateJsonData()

    var range;

    var stageQuestion = function(){
        $scope.silent_change = true
        sourceDataEditor.setValue(JSON.stringify($scope.current_question.source_data,null, 2));
        $scope.current_question.output_data && outputDataEditor.setValue(JSON.stringify($scope.current_question.output_data,null, 2));

        sourceDataEditor.session.selection.clearSelection();
        outputDataEditor.session.selection.clearSelection();

        editor.setValue("");
        updateJsonData()
        $scope.silent_change = false

        var highlights = $scope.current_question.highlights

        if(range){
            sourceDataEditor.session.removeMarker(range)
        }

        if(highlights){
            highlights.forEach(function(highlight, index){
                range = new Range(highlight.rowStart, highlight.columnStart, highlight.rowEnd, highlight.columnEnd);
                sourceDataEditor.session.addMarker(range, "myMarker", "fullLine")
            });
        }

    }

    $scope.checkAnswer = function(answer){

        if($scope.current_question_type == 'multiple_choice'){
          if($scope.current_question.answer == answer){
            $scope.correct_answer = true;
            $scope.question_state = "teal darken-3"
          }else{
            $scope.question_state = "red accent-2"
            $scope.show_hint = true;
          }
        }else{
          if(_.isEqual($scope.finalOutput, $scope.current_question.output_data)){
              $scope.correct_answer = true;
              $scope.question_state = "teal darken-3"
          }
        }

    }


    var loadQuestion = function(){
        $scope.current_question = questions[$scope.current_question_number]
        $scope.current_question_text = $sce.trustAsHtml($scope.current_question.question)
        $scope.current_question_subText = $sce.trustAsHtml($scope.current_question.subText)
        $scope.current_question_hint = $sce.trustAsHtml($scope.current_question.hint)
        $scope.correct_answer = false;
        $scope.showSolutionFlag = false;
        $scope.show_hint = false;

        $scope.current_question_type = $scope.current_question["question_type"]

        stageQuestion()
        $scope.question_state = "light-blue darken-4"
        if($scope.current_question_number >= (questions.length - 1))$scope.lastQuestion = true
        else $scope.lastQuestion = false
    }

    $scope.nextQuestion = function(){
        if($scope.current_question_number >= (questions.length - 1)){
          $scope.finished = true
        }else{
          $scope.current_question_number += 1
          loadQuestion()
        }

        localStorage.setItem('current_question_number', $scope.current_question_number);
    }

    $scope.previousQuestion = function(){
        $scope.current_question_number -= 1
        loadQuestion()
        localStorage.setItem('current_question_number', $scope.current_question_number);
    }

    $scope.showSolution = function(){
        $scope.showSolutionFlag = !$scope.showSolutionFlag
        if($scope.showSolutionFlag){
            solutionEditor.setValue($scope.current_question.answer);
            solutionEditor.session.selection.clearSelection();
        }
    }

    $scope.resetAnswer = function(){
        stageQuestion()
    }

    $scope.current_question_number = -1
    $scope.total_questions = questions.length
    $scope.nextQuestion()

    editor.session.on('change', function(delta) {
        if($scope.silent_change) return
        updateJsonData()
        $scope.$apply(function(){
            $scope.checkAnswer()
        });

    });


}]);
