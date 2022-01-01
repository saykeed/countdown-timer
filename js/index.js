



let startCount = function () {
    let getForm = document.querySelector("#form");
    let getName = getForm.firstname.value;
    let getDayValue = getForm.day.value;
    let getMonthValue = getForm.month.value;

     window.location.replace(`/count.html?name=${getName}&day=${getDayValue}&month=${getMonthValue}`);
     
}