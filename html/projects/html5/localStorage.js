// Local Storage
  if(localStorage){
    $(document).ready(function(){
      $("#name").val(localStorage.getItem("name"));
      $("#address").val(localStorage.getItem("address"));
      $("#phone").val(localStorage.getItem("phone_number"));
      $("input:radio[name=blood][value=" + localStorage.getItem("blood_type") + 
        "]").prop("checked", true);


      $(".save").click(function(){
        // Get input info
        var name = $("#name").val();
        var address = $("#address").val();
        var phoneNumber = $("#phone").val();
        var bloodType = $('input[name=blood]:checked').val();
            
        // Store data
        localStorage.setItem("name", name);
        localStorage.setItem("address", address);
        localStorage.setItem("phone_number", phoneNumber);
        localStorage.setItem("blood_type", bloodType);

        alert("Form has been saved.");
      });
    });
  } else{
    alert("Sorry, your browser does not support local storage.");
  }