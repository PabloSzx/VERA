"use strict";
function $call(method, url, params, fnCb, doEval, doAlertMsg) {
    /*if ($env.isIE) {
      url += (url.indexOf("?") === -1 ? "?" : "&") + $CONST.asynchRandParam + "=" + (new Date()).getTime();
    }*/
    
    var req = new XMLHttpRequest();
    req.open(method, url);
    
    if (fnCb) {
      req.onreadystatechange = function (e) {
        if (req.readyState === 4) {
          if (req.status === 200) {
            if (doEval) {
              var res = null;
              try {
                eval("res = " + req.responseText);
              }
              catch (ex) {
                res = { outcome: false, msg: ex };
              }
              if (!res.outcome && doAlertMsg) alert(res.msg);
              fnCb(res);
            }
            else fnCb(req);
          }
          else {
            var msg = "Server error occurred. Try repeating your last action. If that doesn't work, wait for a while and then try again. I apologize for the inconvenience.";
            if (doAlertMsg) alert(msg);
            fnCb({ outcome: false, msg: msg});
          }
        }
      };
    };
    
    if (params) {
      req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      req.setRequestHeader("Content-length", params.length);
      req.setRequestHeader("Connection", "close");
      req.send(params);
    }
    else req.send(null);
  }

  function track (idStudent, idElement, action) {
      var url = "http://146.83.216.206/vera/logstudy.php?id="+idStudent+"&idElement="+idElement+"&action="+action;
      $call("GET",url,null,null,false,false);
  }