function getQueryVariable(variable) {
  var query = window.location.search.substring(1)
  var vars = query.split("&")
  for(var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=")
    if(pair[0] === variable) {
      return decodeURIComponent(pair[1].replace(/\+/g, "%20"))
              .replace(/script/i, "scrub")
    }
  }
}

function returnSearchData(callback) {
  var file = new XMLHttpRequest()
  file.open("GET", "/search.json", false)
  file.onreadystatechange = function() {
    if(file.readyState === 4) {
      if(file.status === 200 || file.status === 0) {
        var text = file.responseText
        callback(text)
      }
    }
  }
  file.send(null)
}

function getObjects(object, key, val) {
  var objects = []
  for(var i in object) {
    if(!object.hasOwnProperty(i)) continue
    if(typeof object[i] === 'object') {
      objects = objects.concat(getObjects(object[i], key, val))
    } else if(i === key && (object[key].toLowerCase().includes(term.toLowerCase()))) {
      objects.push(object)
    }
  }

  return objects
}
