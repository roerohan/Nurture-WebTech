function calcWI() {
    var weight = $("#WI-weight").val();
    var duration = $("#WI-duration").val();
    var result = ((weight * 2/3) + (duration/30) * 12) * 0.0295735 * 2;
    result = Math.round(result*100)/100;
    $(".result-WI").html(`${result} litres`);
}

function calcIW() {
    var sex = $("input[name='sex']:checked").val();
    var height = $("#IW-height").val();
    var result = 0;
    if (sex === "M") { result = 56.2 + 1.41* (height-152.4)/2.54 }
    if (sex === "F") { result = 53.1 + 1.36* (height-152.4)/2.54 }
    result = Math.round(result*100)/100;
    $(".result-IW").html(`${result} kg`);
}

function calcBMI() {
    var height = $("#BMI-height").val() / 100;
    var weight = $("#BMI-weight").val();
    var result = weight/(height*height);
    result = Math.round(result*100)/100;
    $(".result-BMI").html(`${result}`);
}

function calcBMR() {
    var weight = $("#BMR-weight").val();
    var height = $("#BMR-height").val();
    var age = $("#BMR-age").val();
    var sex = $("input[name='BMR-sex']:checked").val();
    var result = 0;
    if (sex==="M") { result = 10*weight + 6.25*height - 5*age + 5 }
    else if (sex==="F") { result = 10*weight + 6.25*height - 5*age - 161 }
    result = Math.round(result*100)/100;
    $(".result-BMR").html(`${result}`);
}
