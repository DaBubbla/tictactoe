$(document).ready(function(){
    
    var player = 1;
    var random = Math.floor(Math.round() * 9) + 1;
    var rand = Math.floor(Math.round() * 9) + 1;
    var tag = ".sq" + rand.toString();
    
    
    $('#reload').hide();
    $('#win').hide();
    $('#HAL').hide();
    
    
    function randomSquare(rand){
        while($(tag).hasClass('ex')||('oh')){    //does the "tag" have and ex or oh
            rand = Math.floor(Math.round() * 9) + 1;   
            tag = ".sq" + rand.toString();
        }
        return tag; 
    };
    
    function didIWin(symbol){
        if ($(".sq1").hasClass(symbol) && $(".sq2").hasClass(symbol) && $(".sq2").hasClass(symbol)) {
            return true;
        }else if ($(".sq4").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq6").hasClass(symbol)){
            return true;
        }else if ($(".sq7").hasClass(symbol) && $(".sq8").hasClass(symbol) && $(".sq9").hasClass(symbol)){
            return true;
        }else if($(".sq1").hasClass(symbol) && $(".sq4").hasClass(symbol) && $(".sq7").hasClass(symbol)){
            return true;
        }else if($(".sq2").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq8").hasClass(symbol)){
            return true;
        }else if($(".sq3").hasClass(symbol) && $(".sq6").hasClass(symbol) && $(".sq9").hasClass(symbol)){
            return true;
        }else if($(".sq1").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq9").hasClass(symbol)){
            return true;
        }else if($(".sq7").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq3").hasClass(symbol)){
            return true; 
        }else{
            return false;
        }
    }
            
})