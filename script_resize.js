/**
 * DOCU: This will handle the differents sizes of screen <br>
 * Last updated at: March 25, 2022
 * @author Denver
 */

$(window).resize(function() {
    let cohort_navigation_location  = $(".cohort_navigation_location");script
    let mobile_cohort_table         = $(".mobile_cohort_table");
    let selectpicker_location       = $("#selectpicker_location");
    let selectpicker_program_value  = $("#selectpicker_program").val();
    let tab_content                 = $(".tab-content");
    let table_head                  = $(".table_head");
    let window_browser_width        = window.innerWidth;
    const PROGRAMS                  = { ONSITE: 2, ONLINE: 4};

    /* MOBILE VIEW */
    if(window_browser_width <= 975){
        mobile_cohort_table.addClass("low_opacity").removeClass("high_opacity").find(".program_details").addClass("hidden");
        tab_content.find(".details").addClass("hidden");
        cohort_navigation_location.show();

        /* COMMENTS EXPLAINING THIS CONDITION */ 
        if (selectpicker_program_value === PROGRAMS.ONSITE || selectpicker_program_value === PROGRAMS.ONLINE) {
            selectpicker_location.selectpicker("hide");
        }

        tab_content.find("." + selectpicker_location.val()).show();
    }

    /* IPAD VIEW */ 
    if (window_browser_width >= 976) {
        table_head.find("li").show();
        $(".table").find("td").show();
        tab_content.find(".details").addClass("table_cell");
        cohort_navigation_location.show();
        selectpicker_location.selectpicker("hide");
    };
    
    /* DESKTOP VIEW */ 
    if (window_browser_width >= 1120) {
        mobile_cohort_table.addClass("high_opacity").removeClass("low_opacity");
        table_head.find("li").show();
        mobile_cohort_table.find(".program_details").removeClass("hidden");
        selectpicker_location.selectpicker("show");
    };
});