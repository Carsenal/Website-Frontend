function execute(command){
    switch(command){
        
    }
}
var console = document.getElementById("console");

function init(){
    var banner = document.createElement("pre");
    banner.setAttribute("style", "color: var(--secondary-color);");
    banner.innerText = "                                    (                         \r\n   (                                )\\ )        )             \r\n   )\\      )  (                    (()\/( (   ( \/(    (   (    \r\n (((_)  ( \/(  )(   (    (    (      \/(_)))\\  )\\())  ))\\  )(   \r\n )\\___  )(_))(()\\  )\\   )\\   )\\ )  (_)) ((_)((_)\\  \/((_)(()\\  \r\n((\/ __|((_)_  ((_)((_) ((_) _(_\/(  | _ \\ (_)| |(_)(_))   ((_) \r\n | (__ \/ _` || \'_|(_-<\/ _ \\| \' \\)) |   \/ | || \/ \/ \/ -_) | \'_| \r\n  \\___|\\__,_||_|  \/__\/\\___\/|_||_|  |_|_\\ |_||_\\_\\ \\___| |_|   \r\n                                                              "
    console.appendChild(banner);
}
