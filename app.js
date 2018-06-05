$(document).ready(function(){
   //click event when click save data
  $('.setData').on('click', function() {
    let codeValue = $('.codeField').val();
    let codeFileName = $('.fileTitle').val();
    
    localStorage.setItem(codeFileName, codeValue);
    $('.codeField').val('');
    $('fileTitle').val('');
    
  });

  console.log(localStorage)

  //click event to show all code data
  $('.allData').on('click', function(){
    if(localStorage.length === 0){

      $('.showCode').text('the Library is empty');
    }
    else{
    let showAllCode = ''
     for(let i = 0; i < localStorage.length; i++){
       let codeFileName = localStorage.key(i);
       let codeValue = localStorage.getItem(localStorage.key(i));
       showAllCode += (`Name of Method:  ${codeFileName}\n ${codeValue}\n\n`)
     }
     $('.showCode').html(showAllCode);
    }
  });

    //click event when click show store data
  $('.getData').on('click', function(){
    let keyRetrieved = $('.search').val();
    if (localStorage[keyRetrieved]){

      let codeRetrieved = localStorage.getItem(keyRetrieved);
      $('.showCode').html(codeRetrieved);
    }
    else if(keyRetrieved === ''){
      $('.showCode').text('Make sure you enter something to search')
    }
    else{
      $('.showCode').text('Your search does NOT match any database, please enter another one')
    }
   });
   

   //the possible list of codenames

   for(let i = 0; i < localStorage.length; i++){
    let codeFileName = localStorage.key(i)
    let list = $('<div></div>').text(codeFileName);
    $('.userlist').append(list)
   }

    //create keyup event to change possible list
   $('.search').change(function(){
       let filter = $(this).val();
       if(filter){
          $('.userlist').find("div:not(:contains(" + filter + "))").parent().slideUp();
          $('.userlist').find("div:contains(" + filter + ")").parent().slideDown();
       }
       else{
        $('.userlist').find($('.userlist')).slideDown();
       }
      
   }).keyup(function(){
      $(this).change()
   });


});