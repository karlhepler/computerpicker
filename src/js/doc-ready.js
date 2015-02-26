function loadNinite(div) {
    var app = [];
    // Make the tabbed interface
    $(div).load('src/php/proxy.php?url=https://ninite.com/ .categories',
        function() {
            $(div+" .categories h3").each(function(i) {

                // Write everything to the app object
                app[i] = {
                    category: $(this).text(),
                    name: [],
                    desc: []
                };

                // Get the sub ul
                $(this).next('ul').children('li').each(function(n) {                    
                    app[i].name[n] = $(this).children('label').text();
                    app[i].desc[n] = $(this).children('p').text();     
                });                                

            });            
            
            $(this).html('<ul></ul>');

            for ( var i = 0; i < app.length; i++ ) {
                // Insert a li inside the ul
                $(this).children('ul').append('<li><a href="#tabs_'+i+'">'+app[i].category+'</a></li>');

                // Insert div after ul
                $(this).children('ul').after('<div id="tabs_'+i+'"><p></p></div>');

                var internalli = '<table><tbody>';

                // Construct the internal li's
                for ( var n = 0; n < app[i].name.length; n++ ) {
                    internalli += '<tr>';
                    internalli += '<td><input type="checkbox" name="cat'+i+'_name_'+n+'" value="'+app[i].name[n]+'" id="cat'+i+'_name_'+n+'"><label title="'+app[i].desc[n]+'" for="cat'+i+'_name_'+n+'">'+app[i].name[n]+'</label></td>';
                    n++;
                    if ( app[i].name[n] != null ) {
                        internalli += '<td><input type="checkbox" name="cat'+i+'_name_'+n+'" value="'+app[i].name[n]+'" id="cat'+i+'_name_'+n+'"><label title="'+app[i].desc[n]+'" for="cat'+i+'_name_'+n+'">'+app[i].name[n]+'</label></td>';
                        n++;
                        if ( app[i].name[n] != null ) {
                            internalli += '<td><input type="checkbox" name="cat'+i+'_name_'+n+'" value="'+app[i].name[n]+'" id="cat'+i+'_name_'+n+'"><label title="'+app[i].desc[n]+'" for="cat'+i+'_name_'+n+'">'+app[i].name[n]+'</label></td>';
                            n++;
                            if ( app[i].name[n] != null ) {
                                internalli += '<td><input type="checkbox" name="cat'+i+'_name_'+n+'" value="'+app[i].name[n]+'" id="cat'+i+'_name_'+n+'"><label title="'+app[i].desc[n]+'" for="cat'+i+'_name_'+n+'">'+app[i].name[n]+'</label></td>';
                            }
                            else {
                                internalli += '<td></td>';
                            }
                        }
                        else {
                            internalli += '<td></td><td></td>';
                        }
                    }
                    else {
                        internalli += '<td></td><td></td><td></td>';
                    }
                    internalli += '</tr>';
                }

                internalli += '</tbody></table>';

                // Insert the li's into the div
                $(this).children('#tabs_'+i).children('p').append(internalli);
            }
            
            // Now that the content from ninite is loaded, make an additional one for paid software
            $(this).children('ul').append('<li><a href="#tabs_'+i+'">Purchase Software</a></li>');
            $(this).children('ul').after('<div id="tabs_'+i+'"><table><tbody><tr><td>Thing #1</td><td>Thing #2</td></tr></tbody></table></div>');
            
            // Finally, turn it into tabs
            $(div).tabs();
        }
    );
}
$(document).ready(function() {    
    
    $("h1").click(function() {
        $('form').submit();
    });
    
    getNewMenuItems( menucontent['welcome'] );

    // List of checkboxes (some prefilled) containing ninite stuff
    //getNewMenuItems( menucontent['poweruser_choices'] );
    
    $(".menu_item").live('mouseover', function() {
        if ( $(this).find(".description").text() != '' && $('#tooltip-area').text() == 'Click above to continue...' ) {
            $("#tooltip-area").text( $(this).find(".description").text().substr(0,50)+"..." );
        }
    });
    $(".menu_item").live('mouseout', function() {
        $("#tooltip-area").text('Click above to continue...');
    });
    
    $('label').live('mouseover', function() {
        $('#tooltip-area').text($(this).attr('title'));
    });
    $('label').live('mouseout', function() {
        $('#tooltip-area').text('Click above to continue...');
    });
    
    $(".remove").live('click', function() {

        removeHistoryItem( $(this).parents(".history_item") );
        
        return false;
    });
    
    $(".continue").live('click',function() {                  
        
        selectMenuItem($(this).parents(".menu_item"), function(value) {
            switch (value) {
                
                case 'welcome':
                    getNewMenuItems( menucontent['formfactor'] );
                break;
                    
                    case 'laptop':
                        getNewMenuItems( menucontent['laptop_size'] );
                    break;
                    
                    case 'desktop':
                        getNewMenuItems( menucontent['desktop_size'] );
                    break;
                    
                        case 'laptop_small':
                            getNewMenuItems( menucontent['package'] );
                        break;       
                        case 'laptop_medium':
                            getNewMenuItems( menucontent['package'] );
                        break;
                        case 'laptop_large':
                            getNewMenuItems( menucontent['package'] );
                        break;
                        case 'desktop_small':
                            getNewMenuItems( menucontent['package'] );
                        break;
                        case 'desktop_medium':
                            getNewMenuItems( menucontent['package'] );
                        break;
                        case 'desktop_large':
                            getNewMenuItems( menucontent['package'] );
                        break;
                        case 'desktop_none':
                            getNewMenuItems( menucontent['package'] );
                        break;
                
                            case 'package_personal':
                                getNewMenuItems( menucontent['other'] );
                            break;
                            case 'package_business':
                                getNewMenuItems( menucontent['other'] );
                            break;
                            case 'package_poweruser':
                                // List of checkboxes (some prefilled) containing ninite stuff
                                getNewMenuItems( menucontent['poweruser_choices'], function() {
                                    $("#ajaxninite").tabs();
                                });                                
                            break;
                            case 'package_blank':
                                getNewMenuItems( menucontent['shipto'] );
                            break;
                            
                                case 'poweruser_choices':
                                    // FOR OTHER: have textarea and also have selections for autoclean
                                    getNewMenuItems( menucontent['other'], function() {
                                        $("#ajaxninite").tabs();
                                    });
                                break;
                                
                                    case 'other':
                                        // Use Google API to verify location as icon
                                        getNewMenuItems( menucontent['shipto'] );
                                    break;
                                    
                                        case 'shipto':
                                            // Link to Paypal
                                            getNewMenuItems( menucontent['review_and_pay'] );
                                        break;
                                        
                                            case 'review_and_pay':
                                                // Print page for your records
                                                getNewMenuItems( menucontent['thanks'] );
                                            break;
                
                default:
                break;
                
            }
        });
        
        return false;
    });
});