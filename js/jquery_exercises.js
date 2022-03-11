//code from the fist exercises
// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
//     // $('#para').css('background-color', 'red');
//     // $('#para').css('color','blue');
// });

//code from the selectors exercises
// $("#unorderList").on('click', function (){
//
//     alert('you just click the unorder list');
// })
//
// $("h1").on('click', function (){
//     listoriginal =$(this).text();
//     alert(listoriginal);
// })
// $(document).ready(function (){
//     $(".codeup").css('border', '1px solid red');
//     $('li').css('font-size', '20px')
//     $('li , p , h1').css('background-color', 'yellow')
// })
//
//
//
// $('.color').on('click', function (){
//     $(this).css('color','blue');
// })

// let listoriginal;
//
//
let orginalcolor;
$('h1').click(function (){
    $(this).css('background-color', 'red')
})
$('p').dblclick(function (){
    $(this).css('font-size', '18px')
})
$('li').hover(function (){
    orginalcolor = $(this).css('color');
    $(this).css('color', 'red');
}, function (){
        $(this).css('color', orginalcolor);
})





// //testing jquery
// $("#para").on("click",function (){
// //when click on does this
//
//     $('#para').html("Jquery");
//
// })
// $('.list').hover(function (){
//     listoriginal =$(this).text();
//     $(this).html('you are hover over me')
// }, function (){
//     $(this).html(listoriginal)
// })
//

// $('#para').hover(function (){
//     //hover in function
//     //gets the original background-color
//    orginalcolor = $(this).css('background-color')
//     //sets the background-color to a new value
//     $(this).css("background-color", 'lightblue')
// }, function (){
//     //rest to original value
//     $(this).css("background-color",orginalcolor)
// })
