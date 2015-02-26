var numHistoryItem = 0;
// Image preloader!
/*
 ex. $("#container").loadimage("image.jpg", function() { doSomething; });
 */
$.fn.loadImage = function(src, callback){ 
    // Give the image a unique src so internet explorer doesn't cache and crash!
    var randomnumber = Math.floor(Math.random()*10000);
    src += '?rand='+randomnumber;
  
    return this.each(function(){ 
        var i = new Image(200,200); 
        i.src = src;
        i.onload = callback; 
        this.appendChild(i);
    }); 

};
function removeRemainingSliders ( numSliders, callback ) {
    if ( numSliders > 0 ) {
        // Calculate the distance the sliders will travel by getting the distance
        // of the slider farthest to the right
        var x_distance = $(".slider:last").offset().left + $(".slider:last").width();
        
        // Animate the sliders!
        for ( var i = 0; i < numSliders; i++ ) {
            // Animate everything except the last
            if ( i < (numSliders-1) ) {
                $("#slider"+i).delay(i*100).animate({
                    left: '-='+x_distance
                }, {
                    duration: 500,

                    specialEasing: {left: 'easeInOutBack'}
                });
            }
            // Animate the last slider
            else {
                $("#slider"+i).delay(i*100).animate({
                    left: '-='+x_distance
                }, {
                    duration: 500,

                    specialEasing: {left: 'easeInOutBack'},

                    complete: function() {
                        // Delete the sliders
                        $(".slider").remove();

                        // Call the callback function
                        if ( callback != null ) { callback(); }
                    }
                });
            }
        }
    }
    else {
        // Call the callback function
        if ( callback != null ) { callback(); }
    }
}
function getNewMenuItems ( newMenuContent, callback ) {
//------------------------------------------------------------------------------------
// newMenuItemsContent[0] = { name: '', value: '', imgsrc: '', caption: '', desc: '' }
//------------------------------------------------------------------------------------
// name = the name of the form input
// value = the value of the form input
// imgsrc = the src of the image to be displayed
// caption = the title/caption of the displayed thing
// desc = the description of the displayed thing
    
    // Show loading dialog
    $("#slider_area").html('<div style="position:absolute;width:100%;top:-25px;"><div style="text-align:center;"><img src="src/css/img/loading.gif" width="400" height="400"></div></div>');
    
    // Determine grid size
    var gridSize = 12 / newMenuContent.item.length;
    
    // Create the menu items... saving the images for later
    var newMenuItems = '';
    for ( var i = 0; i < newMenuContent.item.length; i++ ) {
        if ( gridSize == 12 ) {            
            newMenuItems += '<div id="menu_item'+i+'" style="visibility:hidden;"><div class="menu_item grid_'+gridSize+'"><input class="hiddeninput" type="hidden" name="'+newMenuContent.name+'" value="'+newMenuContent.item[i].value+'"><input class="price" type="hidden" name="'+newMenuContent.name+'_price" value="'+newMenuContent.item[i].price+'"><div class="image"></div><div class="caption">'+newMenuContent.item[i].caption+'</div><div class="description">'+newMenuContent.item[i].desc+'</div></div></div>';        
        }
        else {
            newMenuItems += '<div id="menu_item'+i+'" style="visibility:hidden;"><div class="menu_item grid_'+gridSize+'"><input class="hiddeninput" type="hidden" name="'+newMenuContent.name+'" value="'+newMenuContent.item[i].value+'"><input class="price" type="hidden" name="'+newMenuContent.name+'_price" value="'+newMenuContent.item[i].price+'"><div class="image"></div><div class="caption"><button class="continue" style="font-size:24px;">'+newMenuContent.item[i].caption+'</button></div><div class="description">'+newMenuContent.item[i].desc+'</div></div></div>';
        }
    }
    // Insert the new menu items into the menu
    $("#menu").html(newMenuItems);        
    
    // Load the images
    for ( i = 0; i < newMenuContent.item.length; i++ ) {
        
        $("#menu_item"+i).find(".image").loadImage( newMenuContent.item[i].imgsrc, function() {            
            // Once all images are loaded...
            if ( i >= newMenuContent.item.length && i < newMenuContent.item.length*2 ) {
                i++;             
            }
            if ( i == newMenuContent.item.length*2 ) {
                // Animate
                animate();
            }
        });
    }
    
    function animate() {
        // First we have to create the sliders from the current menu items        
        var sliders = '';
        var s = 0;
        var numMenuItems = $(".menu_item").length;     
        for ( var i = 0; i < numMenuItems; i++ ) {
            var padding_left = $("#menu_item"+i).children().find("img").offset().left - $("#menu_item"+i).children().offset().left;
            var width = $("#menu_item"+i).children().width() + 40 - padding_left;
            var left = $("#menu_item"+i).children().offset().left - 30 + $("#slider_area").width();
            sliders += '<div id="slider'+s+'" style="width:'+width+'px;left:'+left+'px;" class="slider">'+$("#menu_item"+i).html()+'</div>';
            s++;
        }
        
        // Insert sliders
        $("#slider_area").html(sliders);
        
        // Insert the category description
        $("#category-desc").hide();
        $("#category-desc").html(newMenuContent.desc);
        $("#category-desc").fadeIn();
        
        // Calculate distance the sliders will travel
        var x_distance = $("#slider0").offset().left - $("#menu_item0").offset().left - padding_left + 20;
        
        // Animate the sliders!
        for ( i = 0; i < newMenuContent.item.length; i++ ) {
            if ( i < (newMenuContent.item.length-1) ) {
                $("#slider"+i).delay(i*100).animate({
                    left: '-='+x_distance
                }, {
                    duration: 500,

                    specialEasing: {left: 'easeOutBack'}                                
                });
            }
            // This is the final slider
            else {
                $("#slider"+i).delay(i*100).animate({
                    left: '-='+x_distance
                }, {
                    duration: 500,

                    specialEasing: {left: 'easeOutBack'},

                    complete: function() {
                        // Show the menu items
                        for ( i = 0; i < newMenuContent.item.length; i++ ) {
                            $("#menu_item"+i).css("visibility","visible");
                        }

                        // Delete the sliders
                        $(".slider").remove();
                        
                        // Call the callback function
                        if ( callback != null ) { callback(); }
                    }
                });                
            }
        }
    }
}
function selectMenuItem( selectedMenuItem, callback ) {  
    // Remove continue button
    if ( $(selectedMenuItem).find(".continue").parent().attr("class") == "caption" ) {
        var captext = $(selectedMenuItem).find(".continue").html();
        $(selectedMenuItem).find(".caption").html(captext);        
    }
    else {
        $(selectedMenuItem).find(".continue").remove();
    }            
    
    // Remove category description
    $("#category-desc").html('');
    
    // Store value of the selectedMenuItem
    var value = $(selectedMenuItem).find(":input").val();
    
    // If the menu item has form fields in it, then serialize the data and put it back when it's a history item
    var fieldData = $(selectedMenuItem).find('.description').find(':input').serializeArray();
    
    // Create the history item with the menu item's content
    var historyItem = '<div class="clear"></div><div id="history_item'+numHistoryItem+'" class="history_item grid_12"><input class="hiddeninput" type="hidden" name="'+$(selectedMenuItem).find('.hiddeninput').attr('name')+'" value="'+$(selectedMenuItem).find('.hiddeninput').val()+'"><div class="history_item_left grid_4 alpha"><input class="price" type="hidden" name="'+$(selectedMenuItem).find('.price').attr('name')+'" value="'+$(selectedMenuItem).find('.price').val()+'"><div class="image">'+$(selectedMenuItem).find(".image").html()+'</div></div><div class="history_item_right grid_8 omega"><div class="caption">'+$(selectedMenuItem).find(".caption").html()+'</div><div class="description">'+$(selectedMenuItem).find(".description").html()+'</div></div></div>';

    // Insert the history item
    $("#history").prepend(historyItem);        

    // If the history item has fields, then fill them with the previous content          
    var w = 0;
    $("#history_item"+numHistoryItem).find('.description').find(':input').each(function(index, value) {          
        if ( w < fieldData.length && $(value).attr('name') == fieldData[w].name ) {
            if ( $(value).attr('type') == 'checkbox' ) {
                $(value).attr('checked','checked');
            }   
            else {
                $(value).val( fieldData[w].value );
            }
            w++;
        }
    });
    
    // Create slider of selected menu item
    var padding_left = $(selectedMenuItem).find("img").offset().left - $(selectedMenuItem).offset().left;
    var width = $(selectedMenuItem).width() + 40 - padding_left;
    var left = $(selectedMenuItem).offset().left - 30 + padding_left;
    var top = $(selectedMenuItem).offset().top;
    var selectedSlider = '<div id="selected_slider" style="width:'+width+'px;top:'+top+'px;left:'+left+'px;" class="slider">'+$(selectedMenuItem).parent().html()+'</div>';
    
    // Create sliders for each remaining menu item
    var sliders = '';
    var s = 0;
    var numMenuItems = $(".menu_item").length;
    var selectedMenuItemID = $(selectedMenuItem).parent().attr("id");
    for ( var i = 0; i < numMenuItems; i++ ) {
        if ( "menu_item"+i != selectedMenuItemID ) {
            padding_left = $("#menu_item"+i).children().find("img").offset().left - $("#menu_item"+i).children().offset().left;
            width = $("#menu_item"+i).children().width() + 40 - padding_left;
            left = $("#menu_item"+i).children().offset().left - 30 + padding_left;
            sliders += '<div id="slider'+s+'" style="width:'+width+'px;left:'+left+'px;" class="slider">'+$("#menu_item"+i).html()+'</div>';
            s++;
        }
    }
    // Preserve the white background
    $(selectedMenuItem).addClass("whitebg");
    
    // Change the id of the selected menu item
    $(selectedMenuItem).parent().attr("id","ramp");
    
    // Insert the selected slider
    $("body").prepend(selectedSlider);
    // If the selected slider has fields, then fill them with the previous content
    var e = 0;
    $("#selected_slider").find('.description').find(':input').each(function(index, value) {        
        if ( e < fieldData.length && $(value).attr('name') == fieldData[e].name ) {
            if ( $(value).attr('type') == 'checkbox' ) {
                $(value).attr('checked','checked');
            }   
            else {
                $(value).val( fieldData[e].value );
            }
            e++;
        }
    });
    
    // Remove the contents of the selectedMenuItem
    $(selectedMenuItem).html('');   

    // Insert the sliders
    $("#slider_area").html(sliders);
    
    // Hide the menu items
    for ( i = 0; i < numMenuItems; i++ ) {
        if ( $("#menu_item"+i) != null ) {
            $("#menu_item"+i).css("visibility","hidden");
        }
    }
    
    // Calculate distances the selectedslider will travel
    var x_distance = $("#selected_slider").offset().left - $(".history_item_left:first").offset().left + 10;
    var y_distance = $("#selected_slider").offset().top - $(".history_item_left:first").offset().top;
    
    // Animate - move it down, then move it to the left, then show the holder and kill the slider
    $("#selected_slider").animate({
            top: '-='+y_distance
        }, {
            duration: 500,

            specialEasing: {
                top: 'easeOutBounce'
            },

            complete: function() {
                // Fade out the white space
                $(selectedMenuItem).fadeTo('fast',0, function() {
                    // Remove the selected menu item
                    $("#ramp").remove();
                    
                    // Remove the menu items
                    for ( i = 0; i < numMenuItems; i++ ) {
                        if ( $("#menu_item"+i) != null ) {
                            $("#menu_item"+i).remove();
                        }
                    }
                });
                
                
                
                
                // Push this to the left
                $("#selected_slider").animate({
                    left: '-='+x_distance
                } , {
                    duration: 500,

                    specialEasing: {
                        left: 'easeOutBounce'
                    },

                    complete: function() {
                        // Add a remove button under the picture
                        $(".history_item:first").find(".image").append("<div style='padding-top:10px;'><button class='remove'>Click to Remove</button></div>");
    
                        // Show the history item
                        $(".history_item:first").css("visibility","visible");

                        // Delete the selected slider
                        $("#selected_slider").remove();
                        
                        // Animate the remaining sliders away!
                        removeRemainingSliders(s, function() {
                            // Call the callback function - contains the value of the input field
                            if ( callback != null ) { callback( value ); }
                        });
                    }
                });
            }
    });
    
    // Add one to the number of history items
    numHistoryItem++;        
}
function removeAllMenuItems(callback) {
    var sliders = '';
    var s = 0;
    var numMenuItems = $(".menu_item").length;
    var padding_left;
    var width;
    var left;

    // create sliders
    for ( var i = 0; i < numMenuItems; i++ ) {        
        padding_left = $("#menu_item"+i).children().find("img").offset().left - $("#menu_item"+i).children().offset().left;
        width = $("#menu_item"+i).children().width() + 40 - padding_left;
        left = $("#menu_item"+i).children().offset().left - 30 + padding_left;
        sliders += '<div id="slider'+s+'" style="width:'+width+'px;left:'+left+'px;" class="slider">'+$("#menu_item"+i).html()+'</div>';
        s++;
    }
    
    // Insert the sliders
    $("#slider_area").html(sliders);
    
    // remove all menu items
    for ( i = 0; i < numMenuItems; i++ ) {
        $("#menu_item"+i).remove();
    }
    
    // call function to animate out
    removeRemainingSliders(numMenuItems, function() {
        if ( callback != null ) { callback(); }
    });
}
function removeHistoryItem(historyItem, callback) {
    // Fade out this and all other history items before it
    
    // Get history item id number
    var idNum = $(historyItem).attr("id").replace("history_item",'');
    
    // Get history item form name for hash reference
    var name = $(historyItem).find(".hiddeninput").attr('name');
    
    // Cycle through and fade out the history items
    for ( var i = idNum; i < numHistoryItem; i++ ) {
        $("#history_item"+i).fadeOut('fast', function() {
            // Remove the clear div before this history item
            $(this).prev('.clear').remove();
            
            // Remove this history item now that it has faded out
            $(this).remove();            
        });
    }
    
    // Change the history item number back to what just went away
    numHistoryItem = idNum;
    
    // Remove current menu items and get last history item
    removeAllMenuItems(function() {
        getNewMenuItems( menucontent[name] );
    });
    
    // Scroll back to the top
    $( 'html, body' ).animate( { scrollTop: 0 }, 'fast' );
}