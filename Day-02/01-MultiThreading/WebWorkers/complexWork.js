function doWork(){
    for(var i=0; i<10000; i++){
        for(var j=0; j<10000; j++)
            for(var k=0; k<100; k++){
            }
        var percentCompleted = (i / 10000) * 100;
        if (i % 100 === 0){
            self.postMessage({
                type : "progress",
                percentCompleted : percentCompleted
            });
        }
    }
}
self.addEventListener("message", function(arg){
    var dataFromMain = arg.data;
    if (dataFromMain === "start"){
        doWork();
        self.postMessage({type : "done"});
    }
});

