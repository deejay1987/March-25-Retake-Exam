/**
 * DOCU: This will handle the intl load oh dates <br>
 * Triggered by: intl_load_oh_dates(stack_id) <br>
 * Last updated at: March 25, 2022
 * @author Denver
 */

 function get_cohort_dates(){    
    var location_name = '';
    $('#cohort option.cohort_date').detach();
    $('#cohort').css('opacity', 1).attr('disabled', false);
    let location_name = ["Seattle", "Silicon_Valley", "Los_Angeles", "Dallas", "DC", "Chicago", "Berkeley", "Orange_County", "Tulsa"];

    if(bootcamp_location === "1"){
        location_name = location_name.length + 1;
    }
  
    if(bootcamp_location != '0' && bootcamp_location != '9.0')
    {
        if(program_type == 1){
            add_cohort_dates('Onsite_'+location_name.length);
        }               
        else if(program_type == 4){
            let stack_name = '';
            let stack_names = ["ios", "mean", "lamp", "python", "ruby", "net", "java"];

            if(location_name.length !== "" && stack_id != undefined){
                if(stack_id <= stack_names.length - 1){
                    stack_name = stack_names[stack_id - 1];
                }
            }
            add_cohort_dates("Dev_"+location_name.length+'_'+stack_name);
        }               
    }
    else
        add_cohort_dates("Online");
 }