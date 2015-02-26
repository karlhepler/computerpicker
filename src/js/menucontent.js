var menucontent = new Array();
/*
menucontent[''] = {
    name: '',
    desc: '',
    item: [
        {
            value: '',
            price: '',
            imgsrc: '',
            caption: '',
            desc: ''
        }
    ]
};
 */
menucontent['welcome'] = {
    name: 'welcome',
    desc: 'Do you love Cristen?',
    item: [
        {
            value:  "welcome",
            price: '0',
            imgsrc: "src/css/img/happycomputeruser.png",
            caption:"We Make it Easy!",
            desc:   "<ul><li><b>Personalized: </b>You tell us what you want to do with the computer, and we will find the best way to make it happen.</li><li><b>Junk-Free: </b>We remove all the junk software first, then we only install what you need.</li><li><b>Optimized: </b>Automatic software updates, free antivirus, and weekly clean-ups.</li></ul><div style='padding-top:20px;'><button class='continue'>Click Here to Continue</button></div>"
        }
    ]
};

menucontent['formfactor'] = {
    name: 'formfactor',
    desc: 'Do you want a laptop or a desktop?',
    item: [
        {
            value:  "laptop",
            price: '0',
            imgsrc: "src/css/img/laptop.png",
            caption:"Laptop",
            desc:   "You are constantly on the move and you need to take your computer with you. This is a great choice for movers and shakers like you. \"Never leave home without it!\""
        },
        {
            value:  "desktop",
            price: '385.91',
            imgsrc: "src/css/img/desktop.png",
            caption:"Desktop",
            desc:   "This is best for safe and dependable computer use. You don't have to worry about potential damage from movement"
        }
    ]
};

menucontent['laptop_size'] = {
    name: 'laptop_size',
    desc: 'How big do you want your laptop to be?',
    item: [
        {
            value:  "laptop_small",
            price: '300.81',
            imgsrc: "src/css/img/laptop_small.png",
            caption:"Small",
            desc:   "This is going to be tiny! Most people refer to this as a netbook. Keep in mind it has no CDROM drive."
        },
        {
            value:  "laptop_medium",
            price: '403.29',
            imgsrc: "src/css/img/laptop_med.png",
            caption:"Medium",
            desc:   "This is the best laptop size for most users. It is easy to carry and has a CDROM drive."
        },
        {
            value:  "laptop_large",
            price: '687.14',
            imgsrc: "src/css/img/laptop_large.png",
            caption:"Large",
            desc:   "This laptop is going to be big. It has a 17\" screen and all the bells and whistles."
        }
    ]
};

menucontent['desktop_size'] = {
    name: 'desktop_size',
    desc: 'How big do you want your desktop\'s LCD screen to be?',
    item: [
        {
            value:  "desktop_none",
            price: '0',
            imgsrc: "src/css/img/desktoplcd_none.png",
            caption:"None",
            desc:   "You don't want a monitor!"
        },
        {
            value:  "desktop_small",
            price: '119.99',
            imgsrc: "src/css/img/desktoplcd_small.png",
            caption:"Small",
            desc:   "This is going to be tiny! Most people refer to this as a netbook. Keep in mind it has no CDROM drive."
        },
        {
            value:  "desktop_medium",
            price: '189',
            imgsrc: "src/css/img/desktoplcd_medium.png",
            caption:"Medium",
            desc:   "This is the best laptop size for most users. It is easy to carry and has a CDROM drive."
        },
        {
            value:  "desktop_large",
            price: '220',
            imgsrc: "src/css/img/desktoplcd_large.png",
            caption:"Large",
            desc:   "This laptop is going to be big. It has a 17\" screen and all the bells and whistles."
        }
    ]
};

menucontent['package'] = {
    name: 'package',
    desc: 'Pick Your Configuration',
    item: [
        {
            value: 'package_personal',
            price: '249',
            imgsrc: 'src/css/img/happycomputeruser.png',
            caption: 'Personal',
            desc: 'This is right for most people. Includes MS Office 2010 Home and Student.'
        },
        {
            value: 'package_business',
            price: '349',
            imgsrc: 'src/css/img/happycomputeruser.png',
            caption: 'Business',
            desc: 'The Business Package includes MS Office 2010 Professional.'
        },
        {
            value: 'package_poweruser',
            price: '149',
            imgsrc: 'src/css/img/happycomputeruser.png',
            caption: 'Power User',
            desc: 'You are the kind of person who wants to decide exactly what they want. You tell me what to include!'
        },
        {
            value: 'package_blank',
            price: '149',
            imgsrc: 'src/css/img/happycomputeruser.png',
            caption: 'Blank Slate',
            desc: 'You want absolutely nothing more than the standard Windows components and hardware drives!'
        }
    ]
};

menucontent['poweruser_choices'] = {
    name: 'poweruser_choices',
    desc: 'Choose, Mr. Power User!',
    item: [
        {
            value: 'poweruser_choices',
            price: '0',
            imgsrc: 'src/css/img/happycomputeruser.png',
            caption: '',            
            desc: '<script type="text/javascript">loadNinite("#ajaxninite");</script><fieldset id="ajaxninite">Loading...</fieldset><button class="continue">Click Here to Continue</button>'
    }
    ]
};

menucontent['other'] = {
    name: 'other',
    desc: 'Anything else you want to add?',
    item: [
        {
            value: 'other',
            price: '0',
            imgsrc: 'src/css/img/happycomputeruser.png',
            caption: 'Anything else?',
            desc: '<fieldset><textarea name="othertext"></textarea></fieldset>Also have selections for autoclean and carbonite here - pre-selected.<button class="continue">Click Here to Continue</button>'
        }
    ]
};

menucontent['shipto'] = {
    name: 'shipto',
    desc: 'Where is this going?',
    item: [
        {
            value: 'shipto',
            price: '50',
            imgsrc: 'src/css/img/map.png',
            caption: 'Where am I shipping this?',
            desc: '<fieldset><input name="shiptotext" type="text"></fieldset><button class="continue">Click Here to Continue</button>'
        }
    ]
};

menucontent['review_and_pay'] = {
    name: 'review_and_pay',
    desc: 'Pay me please',
    item: [
        {
            value: 'review_and_pay',
            price: '0',
            imgsrc: 'src/css/img/happycomputeruser.png',
            caption: 'Pay us!',
            desc: 'Price = $<span id="pricearea"></span><script type="text/javascript">var price=0;$(".price").each(function(index,value){price+=parseFloat($(value).val());price=Math.round(price*100+((price*1000)%10>4?1:0))/100;});$("#pricearea").text(price);</script> <button class="continue">Click Here to Continue</button>'
        }
    ]
};

menucontent['thanks'] = {
    name: 'thanks',
    desc: 'Thank you!',
    item: [
        {
            value: 'thanks',
            price: '0',
            imgsrc: 'src/css/img/happycomputeruser.png',
            caption: 'Thank you! You the best!',
            desc: 'Click here to print!'
        }
    ]
};