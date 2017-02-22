$(function() {
    'use strict';
    var $contactUs = $('.contactUs');
    var $formInfo = $contactUs.find('.formInfo');
    var $formFields = $contactUs.find('input, select, textarea');
    
    //When clicking on Full hide fail/success boxes
    $formFields.focus(function() { $formInfo.html(''); });

    $formFields.jqBootstrapValidation({
        preventSubmit: true,
        submitSuccess: function($form, e) {
            e.preventDefault();// prevent default submit behaviour
            $.ajax({
                url: "//formspree.ioi/hello@getsetbro.com", 
                type: "POST",
                method: "POST",
                dataType: "json",
                data: {
                    first: $form[0][1].value,//first
                    last: $form[0][2].value,//last
                    email: $form[0][3].value,//email
                    choice: $form[0][4].value,//choice
                    message: $form[0][5].value,//message
                },
                cache: false,
                success: function() {                   
                    $form.trigger("reset");//clear all fields
                    $('#contactUsModal').modal('hide');

                },
                error: function() {
                    // Fail message
                    $formInfo.html(""+
                        "<div class='text-danger'>"+
                            "<p>It seems that the mail server is not responding. Please try again later!</p>"+
                        "</div>"
                    );
                },
            });
        }
    });

});
