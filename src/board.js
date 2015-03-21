function Board(options) {

  for (var i = 0; i < options.size; i++) {
    for (var j = 0; j < options.size; j++) {

      field = "<div class='field "+ parseInt(i+1) +'-'+ parseInt(j+1) +"'></div>";
      $(options.root).append(field);
    };

    endLine = "<div class='clearer'></div>";
    $(options.root).append(endLine);
  };
}
