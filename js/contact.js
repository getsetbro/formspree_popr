$(function() {
    'use strict';
    var $contactUs = $('[name="contactUs"]');
    var $formInfo = $contactUs.find('.formInfo');
    var $formFields = $contactUs.find('input, textarea');
    
    //When clicking on Full hide fail/success boxes
    $formFields.focus(function() { $formInfo.html(''); });

    $formFields.jqBootstrapValidation({
        preventSubmit: true,
        submitSuccess: function($form, e) {
            e.preventDefault();// prevent default submit behaviour
            $.ajax({
                url: "//formspree.io/hello@getsetbro.com", 
                type: "POST",
                method: "POST",
                dataType: "json",
                data: {
                    name: $form[0][0].value,//$("input#name").val()
                    phone: $form[0][1].value,//$("input#email").val()
                    email: $form[0][2].value,//$("input#phone").val()
                    message: $form[0][3].value,//$("textarea#message").val()
                },
                cache: false,
                success: function() {                   
                    $form.trigger("reset");//clear all fields
                    // Success message
                    $formInfo.html(""+
                        "<div class='alert alert-success alert-dismissible fade show' role='alert'>"+
                            "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"+
                            "<strong>:)</strong> Your message has been sent."+
                        "</div>"
                    );

                },
                error: function() {
                    // Fail message
                    $formInfo.html(""+
                        "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"+
                            "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"+
                            "<strong>:(</strong> It seems that my mail server is not responding. Please try again later!"+
                        "</div>"
                    );
                },
            });
        }
    });

});
