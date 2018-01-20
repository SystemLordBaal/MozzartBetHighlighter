
chrome.browserAction.onClicked.addListener(function(tab) {
  var code=
  "var first,difference,second; for(i=0;i<(document.getElementsByClassName('one-match-row')).length;i++){";
/* code+="console.log(document.getElementsByClassName('one-match-row')[i].childNodes[0]);";
 code+="console.log('||||');";
 
 code+="console.log(document.getElementsByClassName('one-match-row')[i].childNodes[2]);";
 code+="console.log('******************');";*/
 code+="if(document.getElementsByClassName('one-match-row')[i].childNodes[0]){"
 code+="first=parseFloat(document.getElementsByClassName('one-match-row')[i].childNodes[0].innerHTML.replace(',','.'));"
 code+="second=parseFloat(document.getElementsByClassName('one-match-row')[i].childNodes[2].innerHTML.replace(',','.'));"
 code+=" difference=first-second;"
 code+="if(difference<0){difference*=-1;}"
 code+="if(difference>=4){document.getElementsByClassName('one-match-row')[i].style.color='green';}"
 code+="else if(difference==0){document.getElementsByClassName('one-match-row')[i].style.color='orange';}"
 code+="else{document.getElementsByClassName('one-match-row')[i].style.color='red';}}}console.log('activated');";

  chrome.tabs.executeScript({
    code: code
  });
});
