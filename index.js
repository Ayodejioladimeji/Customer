
$(document).ready(function(){
    $("#btn").click(function(){
        $(this).toggleClass("fa-toggle-on");

        // THE SECTION OF THE BODY
            if($("body").hasClass("dark")){
                $("body").removeClass("dark");
            }
            else{
                $("body").addClass("dark");
            }



            // THE SECTION OF THE LEFT
            if($(".left").hasClass("dark")){
                $(".left").removeClass("dark");
                $(".left").css("background", "#546CCE");
            }
            else{
                $(".left").addClass("dark")
                $(".left").css("background", "#546CCE");
            }




             // THE SECTION OF THE RIGHT
             if($(".right").hasClass("dark")){
                $(".right").removeClass("dark");
                $(".right").css("background", "#F4F6FA");
            }
            else{
                $(".right").addClass("dark");
                $(".right").css("background", "#243447");
            }


            // THE SECTION OF THE RIGHT ONE LEFT
            if($(".right-one-left").hasClass("dark")){
                $(".right-one-left").removeClass("dark");
                $(".right-one-left").css("background", "white");
                $(".right-one-left input").css("border", "2px solid #F4F6FA");
            }
            else{
                $(".right-one-left").addClass("dark");
                $(".right-one-left").css("background", "#243447");
                $(".right-one-left input").css("border", "2px solid #00ff00");
            }


            if($(".right-one-middle").hasClass("dark")){
                $(".right-one-middle").removeClass("dark");
                $(".right-one-middle").css("background", "white");
            }
            else{
                $(".right-one-middle").addClass("dark");
                $(".right-one-middle").css("background", "#243447");
            }



            if($(".right-one-right").hasClass("dark")){
                $(".right-one-right").removeClass("dark");
                $(".right-one-right").css("background", "white");
            }
            else{
                $(".right-one-right").addClass("dark");
                $(".right-one-right").css("background", "#243447");
            }


             // THE SECTION OF THE RIGHT TWO
            if($(".right-two-left").hasClass("dark")){
                $(".right-two-left").removeClass("dark");
            }
            else{
                $(".right-two-left").addClass("dark");
                // $(".right-two-left").css("background", "rgb(221, 20, 188)");
            }


            if($(".right-two-right").hasClass("dark")){
                $(".right-two-right").removeClass("dark");
                $(".right-two-right button").css("background", "#546CCE");
            }
            else{
                $(".right-two-right").addClass("dark");
                $(".right-two-right button").css("background", "#c51f5d");
            }


             // THE SECTION OF THE RIGHT THREE
            //  if($(".right-three").hasClass("dark")){
            //     $(".right-three").removeClass("dark");
            //     $(".right-three").css("background", "white");
            // }
            // else{
            //     $(".right-three").addClass("dark");
            //     $(".right-three").css("background", "black");
            // }



            if($(".right-three-left").hasClass("dark")){
                $(".right-three-left").removeClass("dark");
                $(".right-three-left").css("background", "#F4F6FA");
            }
            else{
                $(".right-three-left").addClass("dark");
                $(".right-three-left").css("background", "#243447");
            }


            if($(".right-three-middle").hasClass("dark")){
                $(".right-three-middle").removeClass("dark");
                $(".right-three-middle").css("background", "#F4F6FA");
            }
            else{
                $(".right-three-middle").addClass("dark");
                $(".right-three-middle").css("background", "#243447");
            }



            if($(".right-three-right").hasClass("dark")){
                $(".right-three-right").removeClass("dark");
                $(".right-three-right").css("background", "#F4F6FA");
            }
            else{
                $(".right-three-right").addClass("dark");
                $(".right-three-right").css("background", "#243447");
            }


            if($(".icons").hasClass("dark")){
                $(".icons").removeClass("dark");
            }
            else{
                $(".icons").addClass("dark");
            }


            if($(".right-three").hasClass("dark")){
                $(".right-three").removeClass("dark");
            }
            else{
                $(".right-three").addClass("dark");
            }



            // THE SECTION OF THE RIGHT FOUR

            if($(".right-four").hasClass("dark")){
                $(".right-four").removeClass("dark");
            }
            else{
                $(".right-four").addClass("dark");
            }


            if($(".right-four-left").hasClass("dark")){
                $(".right-four-left").removeClass("dark");
                $(".right-four-left").css("background", "white");
            }
            else{
                $(".right-four-left").addClass("dark");
                $(".right-four-left").css("background", "#062041");
            }


            if($(".right-four-middle1").hasClass("dark")){
                $(".right-four-middle1").removeClass("dark");
                $(".right-four-middle1").css("background", "white");

            }
            else{
                $(".right-four-middle1").addClass("dark");
                $(".right-four-middle1").css("background", "#062041");

            }


            if($(".right-four-middle2").hasClass("dark")){
                $(".right-four-middle2").removeClass("dark");
                $(".right-four-middle2").css("background", "white");

            }
            else{
                $(".right-four-middle2").addClass("dark");
                $(".right-four-middle2").css("background", "#062041");

            }


            if($(".right-four-right").hasClass("dark")){
                $(".right-four-right").removeClass("dark");
                $(".right-four-right").css("background", "white");

            }
            else{
                $(".right-four-right").addClass("dark");
                $(".right-four-right").css("background", "#062041");
            }


            if($(".four-top").hasClass("dark")){
                $(".four-top").removeClass("dark");
                $(".four-top").css("background", "white");

            }
            else{
                $(".four-top").addClass("dark");
                $(".four-top").css("background", "#062041");

            }


            if($(".four-bottom").hasClass("dark")){
                $(".four-bottom").removeClass("dark");
            }
            else{
                $(".four-bottom").addClass("dark");

            }



            if($(".right-four .due").hasClass("dark")){
                $(".right-four .due").removeClass("dark");
                $(".right-four .due").css("background", "#546CCE");
            }
            else{
                $(".right-four .due").addClass("dark");
                $(".right-four .due").css("background", "#CBE1A8");
            }


            if($(".right-four .amount").hasClass("dark")){
                $(".right-four .amount").removeClass("dark");
                $(".right-four .amount").css("background", "#00FF00");
            }
            else{
                $(".right-four .amount").addClass("dark");
                $(".right-four .amount").css("background", "#c51f5d");
            }



             // THE SECTION OF THE RIGHT FIVE

             if($(".right-five").hasClass("dark")){
                $(".right-five").removeClass("dark");
            }
            else{
                $(".right-five").addClass("dark");

            }


            if($(".right-five-left").hasClass("dark")){
                $(".right-five-left").removeClass("dark");
                $(".right-five-left").css("background", "white");
            }
            else{
                $(".right-five-left").addClass("dark");
                $(".right-five-left").css("background", "#062041");
            }


            if($(".right-five-middle1").hasClass("dark")){
                $(".right-five-middle1").removeClass("dark");
                $(".right-five-middle1").css("background", "white");
            }
            else{
                $(".right-five-middle1").addClass("dark");
                $(".right-five-middle1").css("background", "#062041");
            }


            if($(".right-five-middle2").hasClass("dark")){
                $(".right-five-middle2").removeClass("dark");
                $(".right-five-middle2").css("background", "white");
            }
            else{
                $(".right-five-middle2").addClass("dark");
                $(".right-five-middle2").css("background", "#062041");
            }


            if($(".right-five-right").hasClass("dark")){
                $(".right-five-right").removeClass("dark");
                $(".right-five-right").css("background", "white");
            }
            else{
                $(".right-five-right").addClass("dark");
                $(".right-five-right").css("background", "#062041");
            }


            if($(".five-top").hasClass("dark")){
                $(".five-top").removeClass("dark");
                $(".five-top").css("background", "white");
            }
            else{
                $(".five-top").addClass("dark");
                $(".five-top").css("background", "#062041");
            }


            if($(".five-bottom").hasClass("dark")){
                $(".five-bottom").removeClass("dark");
                $(".five-bottom").css("background", "white");
            }
            else{
                $(".five-bottom").addClass("dark");
                $(".five-bottom").css("background", "#062041");
            }


            if($(".right-five .due").hasClass("dark")){
                $(".right-five .due").removeClass("dark");
                $(".right-five .due").css("background", "#546CCE");
            }
            else{
                $(".right-five .due").addClass("dark");
                $(".right-five .due").css("background", "#c51f5d");
            }


            if($(".right-five .amount").hasClass("dark")){
                $(".right-five .amount").removeClass("dark");
                $(".right-five .amount").css("background", "#00FF00");
            }
            else{
                $(".right-five .amount").addClass("dark");
                $(".right-five .amount").css("background", "#CBE1A8");
            }

    });
});