$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    
    /*const person1Input = $("input#person1").val();   'Building without array'
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();*/

    //const inputArray = [];
    //inputArray.push($("input#person1").val(), $("input#person2").val(), $("input#animal").val(), $("input#exclamation").val(), $("input#verb").val(), $("input#noun").val());  

    const spanClasses = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
    spanClasses.forEach(function(spanClass){
      let input = $("input#"+spanClass).val(); // let person2Input = $("input#person2").val();
      $("."+spanClass).text(input); //$(".person2").text(person2Input);
    });
    /*$(".person1").text(inputArray[0]);
    $(".person2").text(inputArray[1]);
    $(".animal").text(inputArray[2]);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);*/
    
    $("#story").show();
  });
});
