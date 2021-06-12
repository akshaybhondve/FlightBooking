
    $("#sort").DataTable({
       columnDefs : [
     { type : 'date', targets : [3] }
 ],  
    });

 $(function () {
   $('#dtpickerdemo').datetimepicker();
});