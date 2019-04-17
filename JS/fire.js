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

var bottom = document.getElementById("bottomFire");

function initFire(){
    changeFire();
    setBottom();
    setInterval(function(){ changeFire(); }, 150);
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

window.addEventListener('resize', function(){setBottom()});

function setBottom(){
    var nFires = Math.round(bottom.offsetWidth / 32);
    var lines = [
        "   ) ",
        " ( /(",
        ")\\())",
        "((_)\\"
    ];
    var array = ["",""," ",""];
    for(var i = 0; i < nFires; i ++){
        array[0] += lines[0];
        array[1] += lines[1];
        array[2] += lines[2];
        array[3] += lines[3];
    }
    bottom.innerText = fireString(array);
}