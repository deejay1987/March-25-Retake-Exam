/**
 * DOCU: This will handle the intl load oh dates <br>
 * Triggered by: select_campus_tour_location <br>
 * Last updated at: March 25, 2022
 * @author updated by: Denver
 */

$(document).ready(function(){
    $("body")
        .on("click", ".campus_tour_button, .campus_tour_signup, .campus_tour_button_mobile", campus_tour_modal)
        .on("change", "#campus_locations_wrapper", select_campus_tour_location);
  
     $("#campus_tour_form_modal")
        .on("submit", submit_campus_tour_form)
        .on("keydown", "#campus_tour_phone_number", allow_numeric_function);
 
     $("#campus_tour_phone_number").on("blur", check_phone_number_function);
 });
  
 /* ADDING CAMPUS TOUR DATES PER LOCATION */
 function select_campus_tour_location() {
    let selected_campus_tour_location = $(this).val();
    let current_campus = $("#campus_locations_wrapper option:selected").attr("data-selected-campus");
    let current_campus_direction_url = $("#campus_locations_wrapper option:selected").attr("data-selected-campus-direction");
    let current_campus_index = $('#campus_locations_wrapper option:selected').closest("option").index();
    let campus_locations_information = $(".campus_locations_information");
    let campus_locations_information_ul = $(".campus_locations_information ul");
    $("#date_to_attend_selectpicker option.open_house_dates").detach();
    let campus_name = ["Seattle",
                        "Bellevue",
                        "Silicon Valley",
                        "Los Angeles",
                        "Dallas",
                        "Chicago",
                        "Washington DC",
                        "Tulsa",
                        "Berkeley",
                        "Boise",
                        "Orange County",
                        "Online"
                    ];
  
    if(current_campus == "Online"){
        campus_locations_information.find(".campus_directions").attr("href", '/online');
        campus_locations_information_ul.find(".campus_address").text("Coding Dojo Online Bootcamp");
    }
    else {
        campus_locations_information.find(".campus_street_address").text(campus_address_information[current_campus_index].street_address);
        campus_locations_information.find(".campus_number_address").text(campus_address_information[current_campus_index].city_address);
        campus_locations_information_ul.find(".campus_address").text("Coding Dojo " + current_campus);
        campus_locations_information.find(".campus_directions").attr("href", current_campus_direction_url);
        $("body").find("#campus_locations li .content_block").removeClass("active_campus");
        $("body").find("#campus_locations li." + selected_campus_tour_location + "_campus_block .content_block").addClass("active_campus");
        $("#date_to_attend_selectpicker .open_house_dates").removeAttr("checked");
        $(".campus_locations_information:not('.online')").removeClass("hidden");
    }
    /* Select campus */
    if(current_campus !== campus_name.length){
        add_tour_dates();
    }
 }
 