$(document).ready(function () {
    $("form").submit(function (e) {

        if ($(".name").val() == "") {
            if (!($(".errorName").length)) {
                $(".name").after(
                    `<div class="errorName" style="color:red;text-align:right;font-weight:100px;font-size:10px;border:none;margin:1px;margin-right:20px;padding:1px;">
                    First Name can't be empty <img src='images/icon-error.svg' style="width:20px;height:20px;border:none;margin:0px;padding:0px;">
                </div>`
                )

                setTimeout(function () {
                    $(".errorName").remove()
                }, 2000)
            }
            e.preventDefault();

        }

        if ($(".lName").val() == "") {
            if (!($(".errorlName").length)) {
                $(".lName").after(
                    `<div class="errorlName" style="color:red;text-align:right;font-weight:100px;font-size:10px;border:none;margin:1px;margin-right:20px;padding:1px;">
                    Last Name can't be empty <img src='images/icon-error.svg' style="width:20px;height:20px;border:none;margin:0px;padding:0px;">
                </div>`
                )
                setTimeout(function () {
                    $(".errorlName").remove()
                }, 2000)
            }
            e.preventDefault();

        }
        if ($(".email").val() == "") {

            if (!($(".errorEmail").length)) {
                $(".email").after(
                    `<div class="errorEmail" style="color:red;text-align:right;font-weight:100px;font-size:10px;border:none;margin:1px;margin-right:20px;padding:1px;">
                    Email can't be empty <img src='images/icon-error.svg' style="width:20px;height:20px;border:none;margin:0px;padding:0px;">
                </div>`
                )
                setTimeout(function () {
                    $(".errorEmail").remove()
                }, 2000)
            }
            e.preventDefault();

        }
        else if (!($(".email").val().match(/\w+@(gmail|email|yahoo).(info|net|org|com)/))) {
            if (!($(".errorEmail").length)) {
                $(".email").after(
                    `<div class="errorEmail" style="color:red;text-align:right;font-weight:100px;font-size:10px;border:none;margin:1px;margin-right:20px;padding:1px;">
                This is not an email <img src='images/icon-error.svg' style="width:20px;height:20px;border:none;margin:0px;padding:0px;">
                    </div>`
                )
                setTimeout(function () {
                    $(".errorEmail").remove()
                }, 2000)
            }
            e.preventDefault();

        }

        if ($(".pass").val() == "") {
            if (!($(".errorPass").length)) {
                $(".pass").after(
                    `<div class="errorPass" style="color:red;text-align:right;font-weight:100px;font-size:10px;border:none;margin:1px;margin-right:20px;padding:1px;">
                    Password can't be empty <img src='images/icon-error.svg' style="width:20px;height:20px;border:none;margin:0px;padding:0px;">
                </div>`
                )
                setTimeout(function () {
                    $(".errorPass").remove()
                }, 2000)
            }
            e.preventDefault();

        }
    }
    )

})