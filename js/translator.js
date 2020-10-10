$(document).ready(function() {
  $("img").each((i, v) => {
    if(v.className !== "img-fluid") {
      v.className = "img-fluid"
    }
  })

  $("table").each((i, v) => {
    if(v.className !== "table") {
      v.className = "table"
    }
  })
})
