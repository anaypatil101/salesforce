({
    handleSave : function(component, event, helper) {

        let action = component.get("c.saveEmployee");

        action.setParams({

            name : component.get("v.name"),

            employeeId : component.get("v.employeeId"),

            salary : component.get("v.salary"),

            email : component.get("v.email"),

            department : component.get("v.department"),

            joiningDate : component.get("v.joiningDate")
        });

        action.setCallback(this, function(response) {

            let state = response.getState();

            if(state === "SUCCESS") {

                alert(response.getReturnValue());
            }

            else {

                alert("Apex Error");
            }
        });

        $A.enqueueAction(action);
    }
})