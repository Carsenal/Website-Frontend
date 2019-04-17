var titleState = 0;
var title = document.getElementById("title");
//In final build replace ' in a with `
var titleFires = [
    [String.raw`                                    (                         `,
     String.raw`   (                                )\ )        )             `,
     String.raw`   )\      )  (                    (()/( (   ( /(    (   (    `,
     String.raw` (((_)  ( /(  )(   (    (    (      /(_)))\  )\())  ))\  )(   `,
     String.raw` )\___  )(_))(()\  )\   )\   )\ )  (_)) ((_)((_)\  /((_)(()\  `,
     String.raw`((/ __|((_)_  ((_)((_) (_)) _(_/(  | _ \ (_)| |(_)(_))   ((_) `,
     String.raw` | (__ / _' || '_|(_-</ _ \| '  \))|   / | || / / / -_) | '_| `,
     String.raw`  \___|\__,_||_|  /__/\___/|_||_|  |_|_\ |_||_\_\ \___| |_|   `,
     String.raw`                                                              `],
    [String.raw`                                    (                         `,
     String.raw`   (                                )\ )        )             `,
     String.raw`   )\      )  (          *         (()/( (   ( /(    (   (    `,
     String.raw` (((_)  ( /(  )(   (    )    (      /(_)))\  )\())  ))\  )(   `,
     String.raw` )\___  )(_))(()\  )\   )\   )\ )  (_)) ((_)((_)\  /((_)(()\  `,
     String.raw`((/ __|((_)_  ((_)((_) ((_) _(_/(  | _ \ (_)| |(_)(_))   ((_) `,
     String.raw` | (__ / _' || '_|(_-</ _ \| '  \))|   / | || / / / -_) | '_| `,
     String.raw`  \___|\__,_||_|  /__/\___/|_||_|  |_|_\ |_||_\_\ \___| |_|   `,
     String.raw`                                                              `],
    [String.raw`                                    (                         `,
     String.raw`   (                      .         )\ )        )             `,
     String.raw`   )\      )  (                    (()/( (   ( /(    (   (    `,
     String.raw` (((_)  ( /(  )(   (    )    (      /(_)))\  )\())  ))\  )(   `,
     String.raw` )\___  )(_))(()\  )\  /(    )\ )  (_)) ((_)((_)\  /((_)(()\  `,
     String.raw`((/ __|((_)_  ((_)((_) ((_) _(_/(  | _ \ (_)| |(_)(_))   ((_) `,
     String.raw` | (__ / _' || '_|(_-</ _ \| '  \))|   / | || / / / -_) | '_| `,
     String.raw`  \___|\__,_||_|  /__/\___/|_||_|  |_|_\ |_||_\_\ \___| |_|   `,
     String.raw`                                                              `],
    [String.raw`                                    (                         `,
     String.raw`   (                                )\ )        )             `,
     String.raw`   )\      )  (                    (()/( (   ( /(    (   (    `,
     String.raw` (((_)  ( /(  )(   (    (    (      /(_)))\  )\())  ))\  )(   `,
     String.raw` )\___  )(_))(()\  )\   )\   )\ )  (_)) ((_)((_)\  /((_)(()\  `,
     String.raw`((/ __|((_)_  ((_)((_) ((_) _(_/(  | _ \ (_)| |(_)(_))   ((_) `,
     String.raw` | (__ / _' || '_|(_-</ _ \| '  \))|   / | || / / / -_) | '_| `,
     String.raw`  \___|\__,_||_|  /__/\___/|_||_|  |_|_\ |_||_\_\ \___| |_|   `,
     String.raw`                                                              `],
    [String.raw`                                    (                         `,
     String.raw`   (                                )\ )        )             `,
     String.raw`   )\      )  (                    (()/( (   ( /(    (   (    `,
     String.raw` (((_)  ( /(  )(   (    (    (      /(_)))\  )\())  ))\  )(   `,
     String.raw` )\___  )(_))(()\  )\   )\   )\ )  (_)) ((_)((_)\  /((_)(()\  `,
     String.raw`((/ __|((_)_  ((_)((_) ((_) _(_/(  | _ \ (_)| |(_)(_))   ((_) `,
     String.raw` | (__ / _' || '_|(_-</ _ \| '  \))|   / | || / / / -_) | '_| `,
     String.raw`  \___|\__,_||_|  /__/\___/|_||_|  |_|_\ |_||_\_\ \___| |_|   `,
     String.raw`                                                              `]
];

function initFire(){
    changeFire();
    setBottom();
    setInterval(function(){ changeFire(); }, 200);
    setInterval(function(){ setBottom(); }, 150);
    window.addEventListener('resize', function(){setBottom()});
}

function changeFire(){
    titleState ++;
    if(titleState >= titleFires.length)titleState = 0;
    title.innerText = fireString(titleFires[titleState]);
}
function fireString(array){
    var str = "";
    for(var i = 0; i < array.length; i ++){
        str += array[i];
        str += `\n`;
    }
    return str;
}



var bottom = document.getElementById("bottomFire");
var bottomState = 0;
var bottomFires = [
    ["   ) ",
     " ( /(",
     ")(/))",
     "((_)\\"],
    ["   ( ",
     " ) /)",
     ")\\())",
     "((_)\\"],
    ["   ( ",
     " (\\ (",
     ")()\\)",
     "/(_))"],
    ["  (  ",
     " )\\ )",
     ")(//))",
     "/(_))"]
];

function setBottom(){
    bottomState ++;
    if(bottomState >= bottomFires.length)bottomState = 0;
    var nFires = Math.round(bottom.offsetWidth / 32);
    var array = ["",""," ",""];
    for(var i = 0; i < nFires; i ++){
        array[0] += bottomFires[bottomState][0];
        array[1] += bottomFires[bottomState][1];
        array[2] += bottomFires[bottomState][2];
        array[3] += bottomFires[bottomState][3];
    }
    bottom.innerText = fireString(array);
}