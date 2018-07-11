

$(document).ready(function(){
    $(function(){
        $('.datepicker').datepicker({
            format: 'yyyy-mm-dd',
            startDate: getCurrentDate()
        });
    });


    function getCurrentDate(){
        var d = new Date();

        var month = d.getMonth()+1;
        var day = d.getDate();

        var output = d.getFullYear() + '/' +
            (month<10 ? '0' : '') + month + '/' +
            (day<10 ? '0' : '') + day;

        return output
    }
});
