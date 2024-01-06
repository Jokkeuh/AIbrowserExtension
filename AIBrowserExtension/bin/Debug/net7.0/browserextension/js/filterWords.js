function filterWords(elementId) {
    var element = document.getElementById(elementId);
    console.log('filterWords script is running!');
    if (element) {
        // Replace or hide specific words
        element.innerHTML = element.innerHTML.replace(/QuestionUser|AnwserOPENAI/g, '***');
    }
}