        window.addEventListener("DOMContentLoaded",init);
        function init(){
            document.getElementById("btnAdd").addEventListener("click", onBtnAddClick);
            document.getElementById("btnRemoveCompleted").addEventListener("click", onBtnRemoveCompletedClick);
            
            for(var i=0; i<window.localStorage.length;i++){
                var key = window.localStorage.key(i);
                var taskName = window.localStorage.getItem(key);
                addTaskToList(key, taskName);
            }
        }
        function onBtnAddClick(){
            var taskName = document.getElementById("txtTask").value;
            //store in localStorage
            var newId = new Date().valueOf().toString();
            window.localStorage.setItem(newId, taskName);
            addTaskToList(newId, taskName);
        }
        function addTaskToList(key, taskName){
             //Add to the list
            var newTask = document.createElement("li");
            newTask.textContent = taskName;
            newTask.setAttribute("taskId", key);
            newTask.addEventListener("click", onTaskItemClick);
            document.getElementById("olTaskList").appendChild(newTask);
        }
        
        function onTaskItemClick(){
            this.classList.toggle("completed");
        }
        function onBtnRemoveCompletedClick(){
            var taskItems = document.getElementById("olTaskList").children;
            for(var i=taskItems.length-1; i>=0; i--){
                var taskItem = taskItems[i];
                if (taskItem.classList.contains("completed")){
                    var taskIdToRemove =  taskItem.getAttribute("taskId");
                    window.localStorage.removeItem(taskIdToRemove);
                    taskItem.remove();
                }
            }
                
        }
