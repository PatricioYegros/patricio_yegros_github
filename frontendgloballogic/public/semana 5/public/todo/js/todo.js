$(function(){
   var $form = $('form'),
        taskInput = $form.find('input[type=text]'),
        taskDate = $form.find('input[type=date]'),
        showTasksButton = $form.find('.showTasks');
        tasks = [],
        taskTemplate = '<li>' + 
            '<div>' +
                '<strong>%name%: </strong>'+ 
                '<span>%date%</span>' +
                '<button type="button" class="remove">x</button></div>%Name%</li>';

   $form.on('submit', onSubmit);
   showTasksButton.on('click', showTasks);
      
   function onSubmit(){
       
       if(taskInput.val().length && taskDate.val().length){
          tasks.push({
             name:  taskInput.val(),
             date: taskDate.val()
          });
       }
       return false;
   }
   
   function showTasks(){
       $('tasks').empty();
       var tasksHtml = '';
       for(var i=0; i< tasks.length; i++){
           tasksHtml += getTaskHtml(tasks[i]);
       }
       
       $form.find('ul').append(tasksHtml);
   }
   
  function getTaskHtml(task){
      return taskTemplate
        .replace(/%name%/gi, task.name)
        .replace(/%date%/g, task.date);
  }
});