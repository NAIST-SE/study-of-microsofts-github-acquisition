var HTML_FILE_URL = 'https://raw.githubusercontent.com/ammyblabla/microsoftGitHub/master/assets/response.csv';

$(document).ready(function() {
    $.get(HTML_FILE_URL, function(data) {
      var responses = []
      lines = data.split("\n");
      for (var i=0; i<lines.length; i++) {
        line = lines[i].split(',');
        console.log(line.length, line);
        console.log();
      }
    });
});
