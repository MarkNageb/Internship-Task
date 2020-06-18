let cur = 1;
function changePos() {
  cur++;
  if (cur > 4) {
    cur = 1;
  }
  var rev1 = document.getElementById('rev1');
  var rev2 = document.getElementById('rev2');
  var rev3 = document.getElementById('rev3');
  var rev4 = document.getElementById('rev4');
  var parent = rev1.parentNode;
  rev1.remove();
  rev2.remove();
  rev3.remove();
  rev4.remove();

  if (cur === 2) {
    parent.appendChild(rev2);
    parent.appendChild(rev3);
    parent.appendChild(rev4);
    parent.appendChild(rev1);
  }
  if (cur === 3) {
    parent.appendChild(rev3);
    parent.appendChild(rev4);
    parent.appendChild(rev1);
    parent.appendChild(rev2);
  }
  if (cur === 4) {
    parent.appendChild(rev4);
    parent.appendChild(rev1);
    parent.appendChild(rev2);
    parent.appendChild(rev3);
  }
  if (cur === 4) {
    parent.appendChild(rev4);
    parent.appendChild(rev1);
    parent.appendChild(rev2);
    parent.appendChild(rev3);
  }
  if (cur === 1) {
    parent.appendChild(rev1);
    parent.appendChild(rev2);
    parent.appendChild(rev3);
    parent.appendChild(rev4);
  }
}

function startTrack() {
  console.log('HEREEEEEEE');
  // webgazer
  //   .setGazeListener(function (data, elapsedTime) {
  //     if (data == null) {
  //       return;
  //     }

  //     var xprediction = data.x; //these x coordinates are relative to the viewport
  //     var yprediction = data.y; //these y coordinates are relative to the viewport
  //     console.log(xprediction + '     ' + yprediction);
  //     var red = document.getElementById('dot');
  //     red.style.left = xprediction + 'px';
  //     red.style.top = yprediction + 'px';
  //     if (yprediction > 600) {
  //       moveDownfunc1();
  //     } else {
  //       if (yprediction < 200) {
  //         moveUpfunc1();
  //       }
  //     }

  //     console.log(elapsedTime); //elapsed time is based on time since begin was called
  //   })
  //   .begin();
}
function moveDownfunc1() {
  window.scrollBy(0, 10);
}

function moveUpfunc1() {
  window.scrollBy(0, -10);
}

function getLocation() {
  console.log('PREDICTION');
  console.log(webgazer.getCurrentPrediction());
  webgazer.getCurrentPrediction().then(console.log());
}
////// SCROLLING
function moveDownfunc() {
  window.scrollBy(0, 3);
}

function moveUpfunc() {
  window.scrollBy(0, -3);
}

var rep;
function startDown() {
  rep = setInterval(moveDownfunc, 3);
}
function startUp() {
  rep = setInterval(moveUpfunc, 3);
}

function stop() {
  clearInterval(rep);
}
