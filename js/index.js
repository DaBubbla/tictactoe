$(document).ready(function(){
    
    var player = 1;
    var random = Math.floor(Math.random() * 9) + 1; //console.log (random);
    var rand = Math.floor(Math.random() * 9) + 1; //console.log(rand);
    var tag = ".sq" + rand.toString();
    
    
    $('#reload').hide();
    $('#win').hide();
    $('#HAL').hide();
    
    $('.square').on('click',function(event){
        
        var squareSelected = $(this);
        
        if(squareSelected.hasClass('ex') || squareSelected.hasClass('oh')){ 
            alert('This square has already been selected!');
        } else {
            if (player===1) {
                squareSelected.addClass('ex').append('<i class="fa fa-times" aria-hidden="true"></i>')
                if(didIWin('ex')){
                    $('#gameBoard').hide();
                    $('#reload').show();
                    $('#win').show();
                    $('#reload').click(function(){
                        location.reload();
                    });
                }else{
                    player = 2;
                    console.log(tag);
                }
            }else{
                $(randomSquare(random)).addClass('oh').append('<i class="fa fa-circle-o" aria-hidden="true"></i>')
                if(didIWin('oh')){ 
                    $('#gameBoard').hide();
                    $('#reload').show();
                    $('#HAL').show();
                    $('#reload').click(function(){
                        location.reload();
                    });
                }else{
                    player = 1;
                    console.log(tag);
                }
            } 
        }   
        
    });
    
    
    function randomSquare(rand){
        if($(tag).hasClass('ex')||$(tag).hasClass('oh')){    //does the "tag" have and ex or oh
            rand = Math.floor(Math.random() * 9) + 1;   
            tag = ".sq" + rand.toString();
        }
        return tag; 
    };
    
    function didIWin(symbol){
        if ($(".sq1").hasClass(symbol) && $(".sq2").hasClass(symbol) && $(".sq3").hasClass(symbol)) {
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