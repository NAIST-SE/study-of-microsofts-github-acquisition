var HTML_FILE_URL = 'https://raw.githubusercontent.com/ammyblabla/microsoftGitHub/master/assets/response.csv';

$(document).ready(function() {
    $.get(HTML_FILE_URL, function(data) {
      var responses = []
      var questions = [11,12,13,14,15,16,21,22,23,24,31,32,33,41,42,43,44,45,51,52,53,54,61,62,63]
      lines = data.split("\n");
      for (var i=0; i<lines.length; i++) {
        line = lines[i].split(',');
        console.log(line.length, line);
        console.log();
      }
    });
});
