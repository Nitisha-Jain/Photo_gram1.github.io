$(function(){
    $("#Upload").click(function(){

        var person = prompt("Please enter your name");
        var caption=prompt("Add Caption");
        var user_image=prompt("Add image");
        var image=prompt("Add User image");
       /* var mi= $("#card_clone").clone().appendTo(".row-cards");
        $(".name_c").text(person);
        $("#cap").text(caption);
        $("#img").attr("src",user_image);
        $("#p_img").attr("src",image)  */
        $t1=$("#card_clone").clone();
        $(".name_c",$t1).text(person);
        $("#cap",$t1).text(caption);
        $("#p_img",$t1).attr("src",image);
        $("#img1",$t1).css("background-image","url("+user_image+")");
        $t1.appendTo(".row-cards");
       

         });
});
