function redirectInstagram(link) {
  window.open( link );
}

function showPage() {
  var sel = document.getElementById('subjects');
  var option = sel.options[sel.selectedIndex].value;
  window.location.href =  option;
}

function getdata(nr){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var javaobj = JSON.parse((JSON.stringify(this.response)));
        document.getElementById('show-more'+nr.toString()).outerHTML="";
        document.getElementById('more-info'+nr.toString()).innerHTML =javaobj[nr].description1;
       
      }
  }
  xhttp.open("GET", "moreinfo.json",true);
  xhttp.responseType = 'json';
  xhttp.send();
}

  
