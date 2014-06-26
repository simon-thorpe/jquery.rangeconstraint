$(function(){
	$('[data-rangeconstraint-start]').each(function(){
		var id=$(this).attr('data-rangeconstraint-start');
		var endControl=$('[data-rangeconstraint-end="'+id+'"]');
		var startControl=$(this);
		
		var ensureNumeric=function(control){
			var val=$(control).val();
			var intVal=parseInt(val);
			if(val!=intVal){
				if(intVal)
					$(control).val(intVal);
				else
					$(control).val('');
			}
		};
		
		var validate=function(){
			var startNum=parseInt(startControl.val());
			if(!isNaN(startNum)){
				var endNum=parseInt(endControl.val());
				if(isNaN(endNum)||startNum>=endNum){
					endControl.val(startNum);
				}
				endControl.prop('disabled',false);
			}
			else{
				endControl.val('').prop('disabled',true);
			}
		};
		
		endControl.prop('disabled',true).bind('change keyup',function(){ensureNumeric(this);validate();});
		startControl.bind('change keyup',function(){ensureNumeric(this);validate();});
		
		if(startControl.val()){
			startControl.trigger('change');
		}
	});
});
