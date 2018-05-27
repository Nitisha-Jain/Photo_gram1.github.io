$(function(){
    $("#Upload").click(function(){

        var person = prompt("Please enter your name");
        var caption=prompt("Add Capti on");
        var user_image=prompt("Add User image");
        var image=prompt("Add image");
       /* var mi= $("#card_clone").clone().appendTo(".row-cards");
        $(".name_c").text(person);
        $("#cap").text(caption);
        $("#img").attr("src",user_image);
        $("#p_img").attr("src",image)  */
        $t1=$("#card_clone").clone();
        $(".name_c",$t1).text(person);
        $("#cap",$t1).text(caption);
        $("#img",$t1).attr("src",image);
        $("#p_img",$t1).attr("src",user_image);
        $t1.appendTo(".row-cards");
       

         });
});
