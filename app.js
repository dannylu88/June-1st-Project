$(document).ready(function(){
   //click event when click save data
  $('.setData').on('click', function() {
    let codeValue = $('.codeField').val();
    let codeFileName = $('.fileTitle').val();
    
    localStorage.setItem(codeFileName, codeValue);
    //$('.codeField').val('');
    
  });

  console.log(localStorage)

  //click event to show all code data
  $('.allData').on('click', function(){
    if(localStorage.length === 0){

      $('.showCode').text('the Library is empty');
    }
    else{
    let showAllCode = ''
     Object.keys(localStorage).forEach(function(){
         let codeFileName = localStorage.key;
         let codeValue = localStorage.getItem(localStorage.key);
         showAllCode += `${codeFileName} \n \n ${codeValue}`;
     });
     $('.showCode').text(showAllCode);
    }
  });

    //click event when click show store data
  $('.getData').on('click', function(){
    let keyRetrieved = $('.search').val();
    if (localStorage[keyRetrieved]){

      let codeRetrieved = localStorage.getItem(keyRetrieved);
      $('.showCode').text(codeRetrieved);
    }
    else if(keyRetrieved === ''){
      $('.showCode').text('Make sure you enter something to search')
    }
    else{
      $('.showCode').text('Your search does NOT match any database, please enter another one')
    }
   

    
    //$('.showCode').text(codeNameRetrieved);
  });


});