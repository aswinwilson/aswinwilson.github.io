// Code starts execution when the DOM is fully loaded
$(document).ready(function () {
    // Focus on the first name 
    $("#fName").focus();

    // On the click of submit button, the click event will be triggered
    $("#submit").click(function () {

        //Validation check using the jquery plugin
        $("#contact_form").validate({
            // Rules defining the constraints for each attribute
            rules: {
                fName: {
                    required: true,
                },
                lName: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    phoneUS: true
                }
            },
            // Customizing the messages for each invalid input
            messages: {
                email: {
                    email: "Please specify a valid email id"
                },
                phone: {
                    phoneUS: "Please specify a valid phone number"
                }
            }
        });
    });
}); // end ready
