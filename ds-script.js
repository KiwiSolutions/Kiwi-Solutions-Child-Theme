/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/*                    MAIN MENU                      */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */

/* change Header when scrolled */
jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $("#menu_section_large_desktop").addClass("menu_scrolled");
      /*$(".headerScroll_row").addClass("mhmmScrolled");*/
    } else {
      $("#menu_section_large_desktop").removeClass("menu_scrolled");
      /*$(".headerScroll_row").removeClass("mhmmScrolled");*/
    }
  });
  /*$("#headerScroll").click(function(){
      /*('#menu_social-media').css('display', 'block');
    });*/
});

/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/*                  TIDIO CHAT MODULE                */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */

src = "//code.tidio.co/qrxvn9afkeyfpkobnaim9pg4pexp9lrf.js";

/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/*              WEBSITE ERSTELLEN LASSEN             */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */

/* ************************************************* */
/*            JS IMAGE SLIDER NAVIGATION             */
/* ************************************************* */

//Make the images under the slider work as a navigation bar
jQuery(document).ready(function ($) {
  var selector = ".activelinks a";
  $(selector).on("click", function () {
    $(selector).removeClass("active");
    $(this).addClass("active");
  });

  function removeClassFocus() {
    $("#websites_slider_video").removeClass("focus");
    $("#websites_slider_beratung").removeClass("focus");
    $("#websites_slider_analyse").removeClass("focus");
    $("#websites_slider_design").removeClass("focus");
    $("#websites_slider_responsiv").removeClass("focus");
    $("#websites_slider_wartung").removeClass("focus");
  }

  $("#websites_slider_video").on("click", function (e) {
    e.preventDefault();
    removeClassFocus();
    $(".et-pb-controllers a:nth-child(1)").trigger("click");
    $(this).addClass("focus");
  });

  $("#websites_slider_beratung").on("click", function (e) {
    e.preventDefault();
    removeClassFocus();
    $(".et-pb-controllers a:nth-child(2)").trigger("click");
    $(this).addClass("focus");
  });

  $("#websites_slider_analyse").on("click", function (e) {
    e.preventDefault();
    removeClassFocus();
    $(".et-pb-controllers a:nth-child(3)").trigger("click");
    $(this).addClass("focus");
  });

  $("#websites_slider_design").on("click", function (e) {
    e.preventDefault();
    removeClassFocus();
    $(".et-pb-controllers a:nth-child(4)").trigger("click");
    $(this).addClass("focus");
  });

  $("#websites_slider_responsiv").on("click", function (e) {
    e.preventDefault();
    removeClassFocus();
    $(".et-pb-controllers a:nth-child(5)").trigger("click");
    $(this).addClass("focus");
  });

  $("#websites_slider_wartung").on("click", function (e) {
    e.preventDefault();
    removeClassFocus();
    $(".et-pb-controllers a:nth-child(6)").trigger("click");
    $(this).addClass("focus");
  });
});
//=======================

/* ************************************************* */
/*                    PRICE TABLE                    */
/* ************************************************* */


jQuery(document).ready(function ($) {
  // Switch button for the Price Table Desktop
  $("#ce-table_button-website-pakete").addClass(
    "aktive_slider-button"
  );
  $("#websites_additional-features_services_row").hide();

  $("#ce-table_button-website-pakete").click(function () {
    $(this).addClass("aktive_slider-button");
    $("#ce-table_button-spezial-pakete").removeClass(
      "aktive_slider-button"
    );
    $("#websites_additional-features_services_row").hide();
    $("#ce-table_website-pakete_row").show();
  });

  $("#ce-table_button-spezial-pakete").click(function () {
    $(this).addClass("aktive_slider-button");
    $("#ce-table_button-website-pakete").removeClass(
      "aktive_slider-button"
    );
    $("#ce-table_website-pakete_row").hide();
    $("#websites_additional-features_services_row").show();
  });

  //make the gif obove the price table mobile dissapear when scrolled left
  $("#ce-table_responsiv-view_mobile").scroll(function () {
    var elmnt = document.getElementById(
      "ce-table_responsiv-view_mobile"
    );
    if (elmnt.scrollLeft > 100) {
      $("#ce-table_swipe-gif_mobile").hide();
    }
  });
});

/* ************************************************* */
/*               ADDITIONAL FEATURES                 */
/* ************************************************* */

jQuery(document).ready(function ($) {
  // Switch button for the additional features
  $("#websites_additional-packages_switch-button").addClass(
    "aktive_slider-button"
  );
  $("#websites_additional-features_services_row").hide();

  $("#websites_additional-packages_switch-button").click(function () {
    $(this).addClass("aktive_slider-button");
    $("#websites_additional-services_switch-button").removeClass(
      "aktive_slider-button"
    );
    $("#websites_additional-features_services_row").hide();
    $("#websites_additional-features_packages_row").show();
  });

  $("#websites_additional-services_switch-button").click(function () {
    $(this).addClass("aktive_slider-button");
    $("#websites_additional-packages_switch-button").removeClass(
      "aktive_slider-button"
    );
    $("#websites_additional-features_packages_row").hide();
    $("websites_additional-features_services_row").show();
  });
});


/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/*                      ANALYSE                      */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */

/* Hide & Show Sections */

jQuery(document).ready(function () {
  // Hide things on Page Analysis
  // HEATMAPS
  jQuery("#Heatmaps_ButtonClosed_Klicken_Sie_auf_Heatmaps").hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_verschieben").hide();
  jQuery("#Heatmaps_Image_Heatmaps_verschieben").hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_scrollen").hide();
  jQuery("#Heatmaps_image_Heatmaps_scrollen").hide();
  jQuery(
    "#Heatmaps_ButtonActive_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).hide();
  jQuery(
    "#Heatmaps_Image_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
  jQuery("#Heatmaps_Image_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
  // ========
  //Besucheraufnahme
  jQuery(
    "#analyse_besucheraufnahmen_button_inactive_wiederholungssitzungen"
  ).hide();
  jQuery("#analyse_besucheraufnahmen_button_active_tag_recordings").hide();
  jQuery("#analyse_besucheraufnahmen_image_tag_recordings").hide();
  jQuery(
    "#analyse_besucheraufnahmen_button_active_benutzeraktionen_notizen"
  ).hide();
  jQuery("#analyse_besucheraufnahmen_image_benutzeraktionen_notizen").hide();
  jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_teilen").hide();
  jQuery("#analyse_besucheraufnahmen_image_aufnahmen_teilen").hide();
  jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_filtern").hide();
  jQuery("#analyse_besucheraufnahmen_image_aufnahmen_filtern").hide();
  jQuery(
    "#analyse_besucheraufnahmen_button_active_unterstuetzt_tastenanschlaege"
  ).hide();
  jQuery(
    "#analyse_besucheraufnahmen_image_unterstuetzt_tastenanschlaege"
  ).hide();
  //================
  //Konvertierungstunnel
  jQuery(
    "#analyse_konvertierungstunnel_button_inactive_unbegrenzte_schritte"
  ).hide();
  jQuery(
    "#analyse_konvertierungstunnel_button_active_abbrueche_von_aufnahmen"
  ).hide();
  jQuery(
    "#analyse_konvertierungstunnel_section_abbrueche_von_aufnahmen"
  ).hide();
  //====================
  //Effektive Formularanalyse
  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_visualisieren_form_feldeinsaetze"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_problemfelder_identifizieren"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_section_problemfelder_identifizieren"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_drop-offs_einrichtungsstatistiken"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_section_drop-offs_einrichtungsstatistiken"
  ).hide();
  //=========================
  //Feedback Polls
  jQuery(
    "#analyse_feedback_polls_button_inactive_direktes_feedback_seitenbesucher"
  ).hide();
  jQuery("#analyse_feedback_polls_button_active_mehrere_fragetypen").hide();
  jQuery("#analyse_feedback_polls_section_mehrere_fragetypen").hide();
  jQuery(
    "#analyse_feedback_polls_button_active_feedback_ergebnisse_visualisieren"
  ).hide();
  jQuery(
    "#analyse_feedback_polls_section_feedback_ergebnisse_visualisieren"
  ).hide();
  jQuery("#analyse_feedback_polls_button_active_anpassbares_widget").hide();
  jQuery("#analyse_feedback_polls_section_anpassbares_widget").hide();
  //==============
  //Eingehendes Feedback
  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_feedback_kontext"
  ).hide();
  jQuery(
    "#analyse_eingehendes_feedback_button_active_visuelles_feedback_dashboard"
  ).hide();
  jQuery(
    "#analyse_eingehendes_feedback_section_visuelles_feedback_dashboard"
  ).hide();
  jQuery(
    "#analyse_eingehendes_feedback_button_active_gefuehls_ueberwachung"
  ).hide();
  jQuery("#analyse_eingehendes_feedback_section_gefuehls_ueberwachung").hide();
  jQuery(
    "#analyse_eingehendes_feedback_button_active_anpassbares_widget"
  ).hide();
  jQuery("#analyse_eingehendes_feedback_section_anpassbares_widget").hide();
  //====================
  //Umfragen starten
  jQuery(
    "#analyse_umfragen_starten_button_inactive_benutzerfreundliche_umfragen"
  ).hide();
  jQuery("#analyse_umfragen_starten_button_active_mehrere_fragetypen").hide();
  jQuery("#analyse_umfragen_starten_section_mehrere_fragetypen").hide();
  jQuery(
    "#analyse_umfragen_starten_button_active_weitere_besucher_einladen"
  ).hide();
  jQuery("#analyse_umfragen_starten_section_weitere_besucher_einladen").hide();
  jQuery(
    "#analyse_umfragen_starten_button_active_ergebnisse_visualisieren"
  ).hide();
  jQuery("#analyse_umfragen_starten_section_ergebnisse_visualisieren").hide();
  //================
  // Testnutzer generieren
  jQuery(
    "#analyse_testnutzer_generieren_button_inactive_rekrutieren_sie_teilnehmer"
  ).hide();
  jQuery(
    "#analyse_testnutzer_generieren_button_active_details_der_befragten"
  ).hide();
  jQuery("#analyse_testnutzer_generieren_section_details_der_befragten").hide();
  jQuery(
    "#analyse_testnutzer_generieren_button_active_anpassbares_widget"
  ).hide();
  jQuery("#analyse_testnutzer_generieren_section_anpassbares_widget").hide();
  // =====================
});
//
//
//
//
//
//
//
//
//BUTTON FUNCTIONS ON PAGE ANALYSIS
//HEATMAPS BUTTON KLICKEN AUF HEATMAPS CLOSED
jQuery("#Heatmaps_ButtonClosed_Klicken_Sie_auf_Heatmaps").click(function (e) {
  e.preventDefault();
  jQuery("#Heatmaps_ButtonActive_Klicken_Sie_auf_Heatmaps").show();
  jQuery("#Heatmaps_Image_Klicken_Sie_auf_Heatmaps").show();

  jQuery("#Heatmaps_ButtonClosed_Heatmaps_verschieben").show();
  jQuery("#Heatmaps_ButtonClosed_Heatmaps_scrollen").show();
  jQuery(
    "#Heatmaps_ButtonClosed_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).show();
  jQuery("#Heatmaps_ButtonClosed_Heatmaps_nach_Gerätetyp_aufgeteilt").show();

  jQuery("#Heatmaps_ButtonClosed_Klicken_Sie_auf_Heatmaps").hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_verschieben").hide();
  jQuery("#Heatmaps_Image_Heatmaps_verschieben").hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_scrollen").hide();
  jQuery("#Heatmaps_image_Heatmaps_scrollen").hide();
  jQuery(
    "#Heatmaps_ButtonActive_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).hide();
  jQuery(
    "#Heatmaps_Image_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
  jQuery("#Heatmaps_Image_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
});
//======================
//
//
//HEATMAPS BUTTON KLICKEN AUF HEATMAPS ACTIVE
jQuery("#Heatmaps_ButtonActive_Klicken_Sie_auf_Heatmaps").click(function (e) {
  e.preventDefault();
  jQuery("#Heatmaps_ButtonActive_Klicken_Sie_auf_Heatmaps").show();
  jQuery("#Heatmaps_Image_Klicken_Sie_auf_Heatmaps").show();

  jQuery("#Heatmaps_ButtonClosed_Heatmaps_verschieben").show();
  jQuery("#Heatmaps_ButtonClosed_Heatmaps_scrollen").show();
  jQuery(
    "#Heatmaps_ButtonClosed_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).show();
  jQuery("#Heatmaps_ButtonClosed_Heatmaps_nach_Gerätetyp_aufgeteilt").show();

  jQuery("#Heatmaps_ButtonClosed_Klicken_Sie_auf_Heatmaps").hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_verschieben").hide();
  jQuery("#Heatmaps_Image_Heatmaps_verschieben").hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_scrollen").hide();
  jQuery("#Heatmaps_image_Heatmaps_scrollen").hide();
  jQuery(
    "#Heatmaps_ButtonActive_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).hide();
  jQuery(
    "#Heatmaps_Image_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
  jQuery("#Heatmaps_Image_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
});
//======================
//
//
//HEATMAPS BUTTON HEATMAPS VERSCHIEBEN CLOSED
jQuery("#Heatmaps_ButtonClosed_Heatmaps_verschieben").click(function (e) {
  e.preventDefault();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_verschieben").show();
  jQuery("#Heatmaps_Image_Heatmaps_verschieben").show();

  jQuery("#Heatmaps_ButtonClosed_Klicken_Sie_auf_Heatmaps").show();
  jQuery("#Heatmaps_ButtonClosed_Heatmaps_scrollen").show();
  jQuery(
    "#Heatmaps_ButtonClosed_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).show();
  jQuery("#Heatmaps_ButtonClosed_Heatmaps_nach_Gerätetyp_aufgeteilt").show();

  jQuery("#Heatmaps_ButtonClosed_Heatmaps_verschieben").hide();
  jQuery("#Heatmaps_ButtonActive_Klicken_Sie_auf_Heatmaps").hide();
  jQuery("#Heatmaps_Image_Klicken_Sie_auf_Heatmaps").hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_scrollen").hide();
  jQuery("#Heatmaps_image_Heatmaps_scrollen").hide();
  jQuery(
    "#Heatmaps_ButtonActive_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).hide();
  jQuery(
    "#Heatmaps_Image_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
  jQuery("#Heatmaps_Image_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
});
//======================
//
//
//HEATMAPS BUTTON HEATMAPS VERSCHIEBEN ACTIVE
jQuery("#Heatmaps_ButtonActive_Heatmaps_verschieben").click(function (e) {
  e.preventDefault();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_verschieben").show();
  jQuery("#Heatmaps_Image_Heatmaps_verschieben").show();

  jQuery("#Heatmaps_ButtonClosed_Klicken_Sie_auf_Heatmaps").show();
  jQuery("#Heatmaps_ButtonClosed_Heatmaps_scrollen").show();
  jQuery(
    "#Heatmaps_ButtonClosed_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).show();
  jQuery("#Heatmaps_ButtonClosed_Heatmaps_nach_Gerätetyp_aufgeteilt").show();

  jQuery("#Heatmaps_ButtonClosed_Heatmaps_verschieben").hide();
  jQuery("#Heatmaps_ButtonActive_Klicken_Sie_auf_Heatmaps").hide();
  jQuery("#Heatmaps_Image_Klicken_Sie_auf_Heatmaps").hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_scrollen").hide();
  jQuery("#Heatmaps_image_Heatmaps_scrollen").hide();
  jQuery(
    "#Heatmaps_ButtonActive_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).hide();
  jQuery(
    "#Heatmaps_Image_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
  jQuery("#Heatmaps_Image_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
});
//======================
//
//
//HEATMAPS BUTTON HEATMAPS SCROLLEN CLOSED
jQuery("#Heatmaps_ButtonClosed_Heatmaps_scrollen").click(function (e) {
  e.preventDefault();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_scrollen").show();
  jQuery("#Heatmaps_image_Heatmaps_scrollen").show();

  jQuery("#Heatmaps_ButtonClosed_Klicken_Sie_auf_Heatmaps").show();
  jQuery("#Heatmaps_ButtonClosed_Heatmaps_verschieben").show();
  jQuery(
    "#Heatmaps_ButtonClosed_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).show();
  jQuery("#Heatmaps_ButtonClosed_Heatmaps_nach_Gerätetyp_aufgeteilt").show();

  jQuery("#Heatmaps_ButtonClosed_Heatmaps_scrollen").hide();
  jQuery("#Heatmaps_ButtonActive_Klicken_Sie_auf_Heatmaps").hide();
  jQuery("#Heatmaps_Image_Klicken_Sie_auf_Heatmaps").hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_verschieben").hide();
  jQuery("#Heatmaps_Image_Heatmaps_verschieben").hide();
  jQuery(
    "#Heatmaps_ButtonActive_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).hide();
  jQuery(
    "#Heatmaps_Image_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
  jQuery("#Heatmaps_Image_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
});
//======================
//
//
//HEATMAPS BUTTON HEATMAPS SCROLLEN ACTIVE
jQuery("#Heatmaps_ButtonActive_Heatmaps_scrollen").click(function (e) {
  e.preventDefault();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_scrollen").show();
  jQuery("#Heatmaps_image_Heatmaps_scrollen").show();

  jQuery("#Heatmaps_ButtonClosed_Klicken_Sie_auf_Heatmaps").show();
  jQuery("#Heatmaps_ButtonClosed_Heatmaps_verschieben").show();
  jQuery(
    "#Heatmaps_ButtonClosed_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).show();
  jQuery("#Heatmaps_ButtonClosed_Heatmaps_nach_Gerätetyp_aufgeteilt").show();

  jQuery("#Heatmaps_ButtonClosed_Heatmaps_scrollen").hide();
  jQuery("#Heatmaps_ButtonActive_Klicken_Sie_auf_Heatmaps").hide();
  jQuery("#Heatmaps_Image_Klicken_Sie_auf_Heatmaps").hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_verschieben").hide();
  jQuery("#Heatmaps_Image_Heatmaps_verschieben").hide();
  jQuery(
    "#Heatmaps_ButtonActive_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).hide();
  jQuery(
    "#Heatmaps_Image_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
  jQuery("#Heatmaps_Image_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
});
//======================
//
//
//HEATMAPS BUTTON Laden Sie Heatmaps herunter und geben Sie sie frei CLOSED
jQuery(
  "#Heatmaps_ButtonClosed_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#Heatmaps_ButtonActive_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).show();
  jQuery(
    "#Heatmaps_Image_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).show();

  jQuery("#Heatmaps_ButtonClosed_Klicken_Sie_auf_Heatmaps").show();
  jQuery("#Heatmaps_ButtonClosed_Heatmaps_verschieben").show();
  jQuery("#Heatmaps_ButtonClosed_Heatmaps_scrollen").show();
  jQuery("#Heatmaps_ButtonClosed_Heatmaps_nach_Gerätetyp_aufgeteilt").show();

  jQuery(
    "#Heatmaps_ButtonClosed_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).hide();
  jQuery("#Heatmaps_ButtonActive_Klicken_Sie_auf_Heatmaps").hide();
  jQuery("#Heatmaps_Image_Klicken_Sie_auf_Heatmaps").hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_verschieben").hide();
  jQuery("#Heatmaps_Image_Heatmaps_verschieben").hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_scrollen").hide();
  jQuery("#Heatmaps_image_Heatmaps_scrollen").hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
  jQuery("#Heatmaps_Image_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
});
//======================
//
//
//HEATMAPS BUTTON Laden Sie Heatmaps herunter und geben Sie sie frei ACTIVE
jQuery(
  "#Heatmaps_ButtonActive_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#Heatmaps_ButtonClosed_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).show();
  jQuery(
    "#Heatmaps_Image_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).show();

  jQuery("#Heatmaps_ButtonClosed_Klicken_Sie_auf_Heatmaps").show();
  jQuery("#Heatmaps_ButtonClosed_Heatmaps_verschieben").show();
  jQuery("#Heatmaps_ButtonClosed_Heatmaps_scrollen").show();
  jQuery("#Heatmaps_ButtonClosed_Heatmaps_nach_Gerätetyp_aufgeteilt").show();

  jQuery(
    "#Heatmaps_ButtonClosed_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
  ).hide();
  jQuery("#Heatmaps_ButtonActive_Klicken_Sie_auf_Heatmaps").hide();
  jQuery("#Heatmaps_Image_Klicken_Sie_auf_Heatmaps").hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_verschieben").hide();
  jQuery("#Heatmaps_Image_Heatmaps_verschieben").hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_scrollen").hide();
  jQuery("#Heatmaps_image_Heatmaps_scrollen").hide();
  jQuery("#Heatmaps_ButtonActive_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
  jQuery("#Heatmaps_Image_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
});
//======================
//
//
//HEATMAPS BUTTON Heatmaps nach Gerätetyp aufgeteilt CLOSED
jQuery("#Heatmaps_ButtonClosed_Heatmaps_nach_Gerätetyp_aufgeteilt").click(
  function (e) {
    e.preventDefault();
    jQuery("#Heatmaps_ButtonActive_Heatmaps_nach_Gerätetyp_aufgeteilt").show();
    jQuery("#Heatmaps_Image_Heatmaps_nach_Gerätetyp_aufgeteilt").show();

    jQuery("#Heatmaps_ButtonClosed_Klicken_Sie_auf_Heatmaps").show();
    jQuery("#Heatmaps_ButtonClosed_Heatmaps_verschieben").show();
    jQuery("#Heatmaps_ButtonClosed_Heatmaps_scrollen").show();
    jQuery(
      "#Heatmaps_ButtonClosed_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
    ).show();

    jQuery("#Heatmaps_ButtonClosed_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
    jQuery("#Heatmaps_ButtonActive_Klicken_Sie_auf_Heatmaps").hide();
    jQuery("#Heatmaps_Image_Klicken_Sie_auf_Heatmaps").hide();
    jQuery("#Heatmaps_ButtonActive_Heatmaps_verschieben").hide();
    jQuery("#Heatmaps_Image_Heatmaps_verschieben").hide();
    jQuery("#Heatmaps_ButtonActive_Heatmaps_scrollen").hide();
    jQuery("#Heatmaps_image_Heatmaps_scrollen").hide();
    jQuery(
      "#Heatmaps_ButtonActive_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
    ).hide();
    jQuery(
      "#Heatmaps_Image_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
    ).hide();
  }
);
//======================
//
//
//HEATMAPS BUTTON Heatmaps nach Gerätetyp aufgeteilt ACTIVE
jQuery("#Heatmaps_ButtonActive_Heatmaps_nach_Gerätetyp_aufgeteilt").click(
  function (e) {
    e.preventDefault();
    jQuery("#Heatmaps_ButtonActive_Heatmaps_nach_Gerätetyp_aufgeteilt").show();
    jQuery("#Heatmaps_Image_Heatmaps_nach_Gerätetyp_aufgeteilt").show();

    jQuery("#Heatmaps_ButtonClosed_Klicken_Sie_auf_Heatmaps").show();
    jQuery("#Heatmaps_ButtonClosed_Heatmaps_verschieben").show();
    jQuery("#Heatmaps_ButtonClosed_Heatmaps_scrollen").show();
    jQuery(
      "#Heatmaps_ButtonClosed_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
    ).show();

    jQuery("#Heatmaps_ButtonClosed_Heatmaps_nach_Gerätetyp_aufgeteilt").hide();
    jQuery("#Heatmaps_ButtonActive_Klicken_Sie_auf_Heatmaps").hide();
    jQuery("#Heatmaps_Image_Klicken_Sie_auf_Heatmaps").hide();
    jQuery("#Heatmaps_ButtonActive_Heatmaps_verschieben").hide();
    jQuery("#Heatmaps_Image_Heatmaps_verschieben").hide();
    jQuery("#Heatmaps_ButtonActive_Heatmaps_scrollen").hide();
    jQuery("#Heatmaps_image_Heatmaps_scrollen").hide();
    jQuery(
      "#Heatmaps_ButtonActive_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
    ).hide();
    jQuery(
      "#Heatmaps_Image_Laden_Sie_Heatmaps_herunter_und_geben_Sie_sie_frei"
    ).hide();
  }
);
//=========================================================
//
//Besucheraufnahmen Wiederholungssitzungen Button Inactive
jQuery(
  "#analyse_besucheraufnahmen_button_inactive_wiederholungssitzungen"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_besucheraufnahmen_button_active_wiederholungssitzungen"
  ).show();
  jQuery("#analyse_besucheraufnahmen_image_wiederholungssitzungen").show();
  jQuery("#analyse_besucheraufnahmen_button_inactive_tag_recordings").show();
  jQuery(
    "#analyse_besucheraufnahmen_button_inactive_benutzeraktionen_notizen"
  ).show();
  jQuery("#analyse_besucheraufnahmen_button_inactive_aufnahmen_teilen").show();
  jQuery("#analyse_besucheraufnahmen_button_inactive_aufnahmen_filtern").show();
  jQuery(
    "#analyse_besucheraufnahmen_button_inactive_unterstuetzt_tastenanschlaege"
  ).show();

  jQuery(
    "#analyse_besucheraufnahmen_button_inactive_wiederholungssitzungen"
  ).hide();
  jQuery("#analyse_besucheraufnahmen_button_active_tag_recordings").hide();
  jQuery("#analyse_besucheraufnahmen_image_tag_recordings").hide();
  jQuery(
    "#analyse_besucheraufnahmen_button_active_benutzeraktionen_notizen"
  ).hide();
  jQuery("#analyse_besucheraufnahmen_image_benutzeraktionen_notizen").hide();
  jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_teilen").hide();
  jQuery("#analyse_besucheraufnahmen_image_aufnahmen_teilen").hide();
  jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_filtern").hide();
  jQuery("#analyse_besucheraufnahmen_image_aufnahmen_filtern").hide();
  jQuery(
    "#analyse_besucheraufnahmen_button_active_unterstuetzt_tastenanschlaege"
  ).hide();
  jQuery(
    "#analyse_besucheraufnahmen_image_unterstuetzt_tastenanschlaege"
  ).hide();
});
//========================================================
//
//Besucheraufnahmen Wiederholungssitzungen Button Active
jQuery("#analyse_besucheraufnahmen_button_active_wiederholungssitzungen").click(
  function (e) {
    e.preventDefault();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_wiederholungssitzungen"
    ).show();
    jQuery("#analyse_besucheraufnahmen_image_wiederholungssitzungen").show();
    jQuery("#analyse_besucheraufnahmen_button_inactive_tag_recordings").show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_benutzeraktionen_notizen"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_aufnahmen_teilen"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_aufnahmen_filtern"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_unterstuetzt_tastenanschlaege"
    ).show();

    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_wiederholungssitzungen"
    ).hide();
    jQuery("#analyse_besucheraufnahmen_button_active_tag_recordings").hide();
    jQuery("#analyse_besucheraufnahmen_image_tag_recordings").hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_benutzeraktionen_notizen"
    ).hide();
    jQuery("#analyse_besucheraufnahmen_image_benutzeraktionen_notizen").hide();
    jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_teilen").hide();
    jQuery("#analyse_besucheraufnahmen_image_aufnahmen_teilen").hide();
    jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_filtern").hide();
    jQuery("#analyse_besucheraufnahmen_image_aufnahmen_filtern").hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_unterstuetzt_tastenanschlaege"
    ).hide();
    jQuery(
      "#analyse_besucheraufnahmen_image_unterstuetzt_tastenanschlaege"
    ).hide();
  }
);
//========================================================
//
//Besucheraufnahmen Tag Recordings Button Inactive
jQuery("#analyse_besucheraufnahmen_button_inactive_tag_recordings").click(
  function (e) {
    e.preventDefault();
    jQuery("#analyse_besucheraufnahmen_button_active_tag_recordings").show();
    jQuery("#analyse_besucheraufnahmen_image_tag_recordings").show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_wiederholungssitzungen"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_benutzeraktionen_notizen"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_aufnahmen_teilen"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_aufnahmen_filtern"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_unterstuetzt_tastenanschlaege"
    ).show();

    jQuery("#analyse_besucheraufnahmen_button_inactive_tag_recordings").hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_wiederholungssitzungen"
    ).hide();
    jQuery("#analyse_besucheraufnahmen_image_wiederholungssitzungen").hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_benutzeraktionen_notizen"
    ).hide();
    jQuery("#analyse_besucheraufnahmen_image_benutzeraktionen_notizen").hide();
    jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_teilen").hide();
    jQuery("#analyse_besucheraufnahmen_image_aufnahmen_teilen").hide();
    jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_filtern").hide();
    jQuery("#analyse_besucheraufnahmen_image_aufnahmen_filtern").hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_unterstuetzt_tastenanschlaege"
    ).hide();
    jQuery(
      "#analyse_besucheraufnahmen_image_unterstuetzt_tastenanschlaege"
    ).hide();
  }
);
//========================================================
//
////Besucheraufnahmen Tag Recordings Button Active
jQuery("#analyse_besucheraufnahmen_button_active_tag_recordings").click(
  function (e) {
    e.preventDefault();
    jQuery("#analyse_besucheraufnahmen_button_active_tag_recordings").show();
    jQuery("#analyse_besucheraufnahmen_image_tag_recordings").show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_wiederholungssitzungen"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_benutzeraktionen_notizen"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_aufnahmen_teilen"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_aufnahmen_filtern"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_unterstuetzt_tastenanschlaege"
    ).show();

    jQuery("#analyse_besucheraufnahmen_button_inactive_tag_recordings").hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_wiederholungssitzungen"
    ).hide();
    jQuery("#analyse_besucheraufnahmen_image_wiederholungssitzungen").hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_benutzeraktionen_notizen"
    ).hide();
    jQuery("#analyse_besucheraufnahmen_image_benutzeraktionen_notizen").hide();
    jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_teilen").hide();
    jQuery("#analyse_besucheraufnahmen_image_aufnahmen_teilen").hide();
    jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_filtern").hide();
    jQuery("#analyse_besucheraufnahmen_image_aufnahmen_filtern").hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_unterstuetzt_tastenanschlaege"
    ).hide();
    jQuery(
      "#analyse_besucheraufnahmen_image_unterstuetzt_tastenanschlaege"
    ).hide();
  }
);
//========================================================
//
//Besucheraufnahmen Benutzeraktionen und Notizen Button Inactive
jQuery(
  "#analyse_besucheraufnahmen_button_inactive_benutzeraktionen_notizen"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_besucheraufnahmen_button_active_benutzeraktionen_notizen"
  ).show();
  jQuery("#analyse_besucheraufnahmen_image_benutzeraktionen_notizen").show();
  jQuery(
    "#analyse_besucheraufnahmen_button_inactive_wiederholungssitzungen"
  ).show();
  jQuery("#analyse_besucheraufnahmen_button_inactive_tag_recordings").show();
  jQuery("#analyse_besucheraufnahmen_button_inactive_aufnahmen_teilen").show();
  jQuery("#analyse_besucheraufnahmen_button_inactive_aufnahmen_filtern").show();
  jQuery(
    "#analyse_besucheraufnahmen_button_inactive_unterstuetzt_tastenanschlaege"
  ).show();

  jQuery(
    "#analyse_besucheraufnahmen_button_inactive_benutzeraktionen_notizen"
  ).hide();
  jQuery(
    "#analyse_besucheraufnahmen_button_active_wiederholungssitzungen"
  ).hide();
  jQuery("#analyse_besucheraufnahmen_image_wiederholungssitzungen").hide();
  jQuery("#analyse_besucheraufnahmen_button_active_tag_recordings").hide();
  jQuery("#analyse_besucheraufnahmen_image_tag_recordings").hide();
  jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_teilen").hide();
  jQuery("#analyse_besucheraufnahmen_image_aufnahmen_teilen").hide();
  jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_filtern").hide();
  jQuery("#analyse_besucheraufnahmen_image_aufnahmen_filtern").hide();
  jQuery(
    "#analyse_besucheraufnahmen_button_active_unterstuetzt_tastenanschlaege"
  ).hide();
  jQuery(
    "#analyse_besucheraufnahmen_image_unterstuetzt_tastenanschlaege"
  ).hide();
});
//========================================================
//
//Besucheraufnahmen Benutzeraktionen und Notizen Button Active
jQuery(
  "#analyse_besucheraufnahmen_button_active_benutzeraktionen_notizen"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_besucheraufnahmen_button_active_benutzeraktionen_notizen"
  ).show();
  jQuery("#analyse_besucheraufnahmen_image_benutzeraktionen_notizen").show();
  jQuery(
    "#analyse_besucheraufnahmen_button_inactive_wiederholungssitzungen"
  ).show();
  jQuery("#analyse_besucheraufnahmen_button_inactive_tag_recordings").show();
  jQuery("#analyse_besucheraufnahmen_button_inactive_aufnahmen_teilen").show();
  jQuery("#analyse_besucheraufnahmen_button_inactive_aufnahmen_filtern").show();
  jQuery(
    "#analyse_besucheraufnahmen_button_inactive_unterstuetzt_tastenanschlaege"
  ).show();

  jQuery(
    "#analyse_besucheraufnahmen_button_inactive_benutzeraktionen_notizen"
  ).hide();
  jQuery(
    "#analyse_besucheraufnahmen_button_active_wiederholungssitzungen"
  ).hide();
  jQuery("#analyse_besucheraufnahmen_image_wiederholungssitzungen").hide();
  jQuery("#analyse_besucheraufnahmen_button_active_tag_recordings").hide();
  jQuery("#analyse_besucheraufnahmen_image_tag_recordings").hide();
  jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_teilen").hide();
  jQuery("#analyse_besucheraufnahmen_image_aufnahmen_teilen").hide();
  jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_filtern").hide();
  jQuery("#analyse_besucheraufnahmen_image_aufnahmen_filtern").hide();
  jQuery(
    "#analyse_besucheraufnahmen_button_active_unterstuetzt_tastenanschlaege"
  ).hide();
  jQuery(
    "#analyse_besucheraufnahmen_image_unterstuetzt_tastenanschlaege"
  ).hide();
});
//========================================================
//
//Besucheraufnahmen Aufnahmen teilen Button Inactive
jQuery("#analyse_besucheraufnahmen_button_inactive_aufnahmen_teilen").click(
  function (e) {
    e.preventDefault();
    jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_teilen").show();
    jQuery("#analyse_besucheraufnahmen_image_aufnahmen_teilen").show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_wiederholungssitzungen"
    ).show();
    jQuery("#analyse_besucheraufnahmen_button_inactive_tag_recordings").show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_benutzeraktionen_notizen"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_aufnahmen_filtern"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_unterstuetzt_tastenanschlaege"
    ).show();

    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_aufnahmen_teilen"
    ).hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_wiederholungssitzungen"
    ).hide();
    jQuery("#analyse_besucheraufnahmen_image_wiederholungssitzungen").hide();
    jQuery("#analyse_besucheraufnahmen_button_active_tag_recordings").hide();
    jQuery("#analyse_besucheraufnahmen_image_tag_recordings").hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_benutzeraktionen_notizen"
    ).hide();
    jQuery("#analyse_besucheraufnahmen_image_benutzeraktionen_notizen").hide();
    jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_filtern").hide();
    jQuery("#analyse_besucheraufnahmen_image_aufnahmen_filtern").hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_unterstuetzt_tastenanschlaege"
    ).hide();
    jQuery(
      "#analyse_besucheraufnahmen_image_unterstuetzt_tastenanschlaege"
    ).hide();
  }
);
//========================================================
//
//Besucheraufnahmen Aufnahmen teilen Button Active
jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_teilen").click(
  function (e) {
    e.preventDefault();
    jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_teilen").show();
    jQuery("#analyse_besucheraufnahmen_image_aufnahmen_teilen").show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_wiederholungssitzungen"
    ).show();
    jQuery("#analyse_besucheraufnahmen_button_inactive_tag_recordings").show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_benutzeraktionen_notizen"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_aufnahmen_filtern"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_unterstuetzt_tastenanschlaege"
    ).show();

    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_aufnahmen_teilen"
    ).hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_wiederholungssitzungen"
    ).hide();
    jQuery("#analyse_besucheraufnahmen_image_wiederholungssitzungen").hide();
    jQuery("#analyse_besucheraufnahmen_button_active_tag_recordings").hide();
    jQuery("#analyse_besucheraufnahmen_image_tag_recordings").hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_benutzeraktionen_notizen"
    ).hide();
    jQuery("#analyse_besucheraufnahmen_image_benutzeraktionen_notizen").hide();
    jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_filtern").hide();
    jQuery("#analyse_besucheraufnahmen_image_aufnahmen_filtern").hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_unterstuetzt_tastenanschlaege"
    ).hide();
    jQuery(
      "#analyse_besucheraufnahmen_image_unterstuetzt_tastenanschlaege"
    ).hide();
  }
);
//========================================================
//
//Besucheraufnahmen Aufnahmen filtern Button Inactive
jQuery("#analyse_besucheraufnahmen_button_inactive_aufnahmen_filtern").click(
  function (e) {
    e.preventDefault();
    jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_filtern").show();
    jQuery("#analyse_besucheraufnahmen_image_aufnahmen_filtern").show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_wiederholungssitzungen"
    ).show();
    jQuery("#analyse_besucheraufnahmen_button_inactive_tag_recordings").show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_benutzeraktionen_notizen"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_aufnahmen_teilen"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_unterstuetzt_tastenanschlaege"
    ).show();

    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_aufnahmen_filtern"
    ).hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_wiederholungssitzungen"
    ).hide();
    jQuery("#analyse_besucheraufnahmen_image_wiederholungssitzungen").hide();
    jQuery("#analyse_besucheraufnahmen_button_active_tag_recordings").hide();
    jQuery("#analyse_besucheraufnahmen_image_tag_recordings").hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_benutzeraktionen_notizen"
    ).hide();
    jQuery("#analyse_besucheraufnahmen_image_benutzeraktionen_notizen").hide();
    jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_teilen").hide();
    jQuery("#analyse_besucheraufnahmen_image_aufnahmen_teilen").hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_unterstuetzt_tastenanschlaege"
    ).hide();
    jQuery(
      "#analyse_besucheraufnahmen_image_unterstuetzt_tastenanschlaege"
    ).hide();
  }
);
//========================================================
//
//Besucheraufnahmen Aufnahmen filtern Button Active
jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_filtern").click(
  function (e) {
    e.preventDefault();
    jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_filtern").show();
    jQuery("#analyse_besucheraufnahmen_image_aufnahmen_filtern").show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_wiederholungssitzungen"
    ).show();
    jQuery("#analyse_besucheraufnahmen_button_inactive_tag_recordings").show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_benutzeraktionen_notizen"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_aufnahmen_teilen"
    ).show();
    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_unterstuetzt_tastenanschlaege"
    ).show();

    jQuery(
      "#analyse_besucheraufnahmen_button_inactive_aufnahmen_filtern"
    ).hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_wiederholungssitzungen"
    ).hide();
    jQuery("#analyse_besucheraufnahmen_image_wiederholungssitzungen").hide();
    jQuery("#analyse_besucheraufnahmen_button_active_tag_recordings").hide();
    jQuery("#analyse_besucheraufnahmen_image_tag_recordings").hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_benutzeraktionen_notizen"
    ).hide();
    jQuery("#analyse_besucheraufnahmen_image_benutzeraktionen_notizen").hide();
    jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_teilen").hide();
    jQuery("#analyse_besucheraufnahmen_image_aufnahmen_teilen").hide();
    jQuery(
      "#analyse_besucheraufnahmen_button_active_unterstuetzt_tastenanschlaege"
    ).hide();
    jQuery(
      "#analyse_besucheraufnahmen_image_unterstuetzt_tastenanschlaege"
    ).hide();
  }
);
//========================================================
//
//Besucheraufnahmen unterstützt Tastenanschläge Button Inactive
jQuery(
  "#analyse_besucheraufnahmen_button_inactive_unterstuetzt_tastenanschlaege"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_besucheraufnahmen_button_active_unterstuetzt_tastenanschlaege"
  ).show();
  jQuery(
    "#analyse_besucheraufnahmen_image_unterstuetzt_tastenanschlaege"
  ).show();
  jQuery(
    "#analyse_besucheraufnahmen_button_inactive_wiederholungssitzungen"
  ).show();
  jQuery("#analyse_besucheraufnahmen_button_inactive_tag_recordings").show();
  jQuery(
    "#analyse_besucheraufnahmen_button_inactive_benutzeraktionen_notizen"
  ).show();
  jQuery("#analyse_besucheraufnahmen_button_inactive_aufnahmen_teilen").show();
  jQuery("#analyse_besucheraufnahmen_button_inactive_aufnahmen_filtern").show();

  jQuery(
    "#analyse_besucheraufnahmen_button_inactive_unterstuetzt_tastenanschlaege"
  ).hide();
  jQuery(
    "#analyse_besucheraufnahmen_button_active_wiederholungssitzungen"
  ).hide();
  jQuery("#analyse_besucheraufnahmen_image_wiederholungssitzungen").hide();
  jQuery("#analyse_besucheraufnahmen_button_active_tag_recordings").hide();
  jQuery("#analyse_besucheraufnahmen_image_tag_recordings").hide();
  jQuery(
    "#analyse_besucheraufnahmen_button_active_benutzeraktionen_notizen"
  ).hide();
  jQuery("#analyse_besucheraufnahmen_image_benutzeraktionen_notizen").hide();
  jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_teilen").hide();
  jQuery("#analyse_besucheraufnahmen_image_aufnahmen_teilen").hide();
  jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_filtern").hide();
  jQuery("#analyse_besucheraufnahmen_image_aufnahmen_filtern").hide();
});
//========================================================
//
//Besucheraufnahmen unterstützt Tastenanschläge Button Active
jQuery(
  "#analyse_besucheraufnahmen_button_active_unterstuetzt_tastenanschlaege"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_besucheraufnahmen_button_active_unterstuetzt_tastenanschlaege"
  ).show();
  jQuery(
    "#analyse_besucheraufnahmen_image_unterstuetzt_tastenanschlaege"
  ).show();
  jQuery(
    "#analyse_besucheraufnahmen_button_inactive_wiederholungssitzungen"
  ).show();
  jQuery("#analyse_besucheraufnahmen_button_inactive_tag_recordings").show();
  jQuery(
    "#analyse_besucheraufnahmen_button_inactive_benutzeraktionen_notizen"
  ).show();
  jQuery("#analyse_besucheraufnahmen_button_inactive_aufnahmen_teilen").show();
  jQuery("#analyse_besucheraufnahmen_button_inactive_aufnahmen_filtern").show();

  jQuery(
    "#analyse_besucheraufnahmen_button_inactive_unterstuetzt_tastenanschlaege"
  ).hide();
  jQuery(
    "#analyse_besucheraufnahmen_button_active_wiederholungssitzungen"
  ).hide();
  jQuery("#analyse_besucheraufnahmen_image_wiederholungssitzungen").hide();
  jQuery("#analyse_besucheraufnahmen_button_active_tag_recordings").hide();
  jQuery("#analyse_besucheraufnahmen_image_tag_recordings").hide();
  jQuery(
    "#analyse_besucheraufnahmen_button_active_benutzeraktionen_notizen"
  ).hide();
  jQuery("#analyse_besucheraufnahmen_image_benutzeraktionen_notizen").hide();
  jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_teilen").hide();
  jQuery("#analyse_besucheraufnahmen_image_aufnahmen_teilen").hide();
  jQuery("#analyse_besucheraufnahmen_button_active_aufnahmen_filtern").hide();
  jQuery("#analyse_besucheraufnahmen_image_aufnahmen_filtern").hide();
});
//========================================================
//
//Konvertierungstunnel unbegrenzte Schritte Button Inactive
jQuery(
  "#analyse_konvertierungstunnel_button_inactive_unbegrenzte_schritte"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_konvertierungstunnel_button_active_unbegrenzte_schritte"
  ).show();
  jQuery("#analyse_konvertierungstunnel_section_unbegrenzte_schritte").show();
  jQuery(
    "#analyse_konvertierungstunnel_button_inactive_abbrueche_von_aufnahmen"
  ).show();

  jQuery(
    "#analyse_konvertierungstunnel_button_inactive_unbegrenzte_schritte"
  ).hide();
  jQuery(
    "#analyse_konvertierungstunnel_button_active_abbrueche_von_aufnahmen"
  ).hide();
  jQuery(
    "#analyse_konvertierungstunnel_section_abbrueche_von_aufnahmen"
  ).hide();
});
//========================================================
//
//Konvertierungstunnel unbegrenzte Schritte Button Active
jQuery(
  "#analyse_konvertierungstunnel_button_active_unbegrenzte_schritte"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_konvertierungstunnel_button_active_unbegrenzte_schritte"
  ).show();
  jQuery("#analyse_konvertierungstunnel_section_unbegrenzte_schritte").show();
  jQuery(
    "#analyse_konvertierungstunnel_button_inactive_abbrueche_von_aufnahmen"
  ).show();

  jQuery(
    "#analyse_konvertierungstunnel_button_inactive_unbegrenzte_schritte"
  ).hide();
  jQuery(
    "#analyse_konvertierungstunnel_button_active_abbrueche_von_aufnahmen"
  ).hide();
  jQuery(
    "#analyse_konvertierungstunnel_section_abbrueche_von_aufnahmen"
  ).hide();
});
//========================================================
//
//Konvertierungstunnel Abbrüche von Aufnahmen Button Inactive
jQuery(
  "#analyse_konvertierungstunnel_button_inactive_abbrueche_von_aufnahmen"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_konvertierungstunnel_button_active_abbrueche_von_aufnahmen"
  ).show();
  jQuery(
    "#analyse_konvertierungstunnel_section_abbrueche_von_aufnahmen"
  ).show();
  jQuery(
    "#analyse_konvertierungstunnel_button_inactive_unbegrenzte_schritte"
  ).show();

  jQuery(
    "#analyse_konvertierungstunnel_button_inactive_abbrueche_von_aufnahmen"
  ).hide();
  jQuery(
    "#analyse_konvertierungstunnel_button_active_unbegrenzte_schritte"
  ).hide();
  jQuery("#analyse_konvertierungstunnel_section_unbegrenzte_schritte").hide();
});
//========================================================
//
//Konvertierungstunnel Abbrüche von Aufnahmen Button Active
jQuery(
  "#analyse_konvertierungstunnel_button_active_abbrueche_von_aufnahmen"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_konvertierungstunnel_button_active_abbrueche_von_aufnahmen"
  ).show();
  jQuery(
    "#analyse_konvertierungstunnel_section_abbrueche_von_aufnahmen"
  ).show();
  jQuery(
    "#analyse_konvertierungstunnel_button_inactive_unbegrenzte_schritte"
  ).show();

  jQuery(
    "#analyse_konvertierungstunnel_button_inactive_abbrueche_von_aufnahmen"
  ).hide();
  jQuery(
    "#analyse_konvertierungstunnel_button_active_unbegrenzte_schritte"
  ).hide();
  jQuery("#analyse_konvertierungstunnel_section_unbegrenzte_schritte").hide();
});
//========================================================
//
//Effektive Formularanalyse Visualisieren von Form und Feldeinsätzen Button Inactive
jQuery(
  "#analyse_effektive_formularanalyse_button_inactive_visualisieren_form_feldeinsaetze"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_visualisieren_form_feldeinsaetze"
  ).show();
  jQuery(
    "#analyse_effektive_formularanalyse_section_visualisieren_form_feldeinsaetze"
  ).show();
  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_problemfelder_identifizieren"
  ).show();
  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_drop-offs_einrichtungsstatistiken"
  ).show();

  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_visualisieren_form_feldeinsaetze"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_problemfelder_identifizieren"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_section_problemfelder_identifizieren"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_drop-offs_einrichtungsstatistiken"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_section_drop-offs_einrichtungsstatistiken"
  ).hide();
});
//========================================================
//
//Effektive Formularanalyse Visualisieren von Form und Feldeinsätzen Button Active
jQuery(
  "#analyse_effektive_formularanalyse_button_active_visualisieren_form_feldeinsaetze"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_visualisieren_form_feldeinsaetze"
  ).show();
  jQuery(
    "#analyse_effektive_formularanalyse_section_visualisieren_form_feldeinsaetze"
  ).show();
  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_problemfelder_identifizieren"
  ).show();
  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_drop-offs_einrichtungsstatistiken"
  ).show();

  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_visualisieren_form_feldeinsaetze"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_problemfelder_identifizieren"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_section_problemfelder_identifizieren"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_drop-offs_einrichtungsstatistiken"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_section_drop-offs_einrichtungsstatistiken"
  ).hide();
});
//========================================================
//
//Effektive Formularanalyse Problemfelder identifizieren Button Inactive
jQuery(
  "#analyse_effektive_formularanalyse_button_inactive_problemfelder_identifizieren"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_problemfelder_identifizieren"
  ).show();
  jQuery(
    "#analyse_effektive_formularanalyse_section_problemfelder_identifizieren"
  ).show();
  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_visualisieren_form_feldeinsaetze"
  ).show();
  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_drop-offs_einrichtungsstatistiken"
  ).show();

  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_problemfelder_identifizieren"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_visualisieren_form_feldeinsaetze"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_section_visualisieren_form_feldeinsaetze"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_drop-offs_einrichtungsstatistiken"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_section_drop-offs_einrichtungsstatistiken"
  ).hide();
});
//========================================================
//
//Effektive Formularanalyse Problemfelder identifizieren Button Active
jQuery(
  "#analyse_effektive_formularanalyse_button_active_problemfelder_identifizieren"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_problemfelder_identifizieren"
  ).show();
  jQuery(
    "#analyse_effektive_formularanalyse_section_problemfelder_identifizieren"
  ).show();
  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_visualisieren_form_feldeinsaetze"
  ).show();
  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_drop-offs_einrichtungsstatistiken"
  ).show();

  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_problemfelder_identifizieren"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_visualisieren_form_feldeinsaetze"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_section_visualisieren_form_feldeinsaetze"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_drop-offs_einrichtungsstatistiken"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_section_drop-offs_einrichtungsstatistiken"
  ).hide();
});
//========================================================
//
//Effektive Formularanalyse Drop-Offs Einrichtungsstatistiken Button Inactive
jQuery(
  "#analyse_effektive_formularanalyse_button_inactive_drop-offs_einrichtungsstatistiken"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_drop-offs_einrichtungsstatistiken"
  ).show();
  jQuery(
    "#analyse_effektive_formularanalyse_section_drop-offs_einrichtungsstatistiken"
  ).show();
  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_visualisieren_form_feldeinsaetze"
  ).show();
  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_problemfelder_identifizieren"
  ).show();

  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_drop-offs_einrichtungsstatistiken"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_visualisieren_form_feldeinsaetze"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_section_visualisieren_form_feldeinsaetze"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_problemfelder_identifizieren"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_section_problemfelder_identifizieren"
  ).hide();
});
//========================================================
//
//Effektive Formularanalyse Drop-Offs Einrichtungsstatistiken Button Active
jQuery(
  "#analyse_effektive_formularanalyse_button_active_drop-offs_einrichtungsstatistiken"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_drop-offs_einrichtungsstatistiken"
  ).show();
  jQuery(
    "#analyse_effektive_formularanalyse_section_drop-offs_einrichtungsstatistiken"
  ).show();
  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_visualisieren_form_feldeinsaetze"
  ).show();
  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_problemfelder_identifizieren"
  ).show();

  jQuery(
    "#analyse_effektive_formularanalyse_button_inactive_drop-offs_einrichtungsstatistiken"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_visualisieren_form_feldeinsaetze"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_section_visualisieren_form_feldeinsaetze"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_button_active_problemfelder_identifizieren"
  ).hide();
  jQuery(
    "#analyse_effektive_formularanalyse_section_problemfelder_identifizieren"
  ).hide();
});
//========================================================
//
//Feedback Polls direktes Feedback von Seitenbesuchern Button Inactive
jQuery(
  "#analyse_feedback_polls_button_inactive_direktes_feedback_seitenbesucher"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_feedback_polls_button_active_direktes_feedback_seitenbesucher"
  ).show();
  jQuery(
    "#analyse_feedback_polls_section_direktes_feedback_seitenbesucher"
  ).show();
  jQuery("#analyse_feedback_polls_button_inactive_mehrere_fragetypen").show();
  jQuery(
    "#analyse_feedback_polls_button_inactive_feedback_ergebnisse_visualisieren"
  ).show();
  jQuery("#analyse_feedback_polls_button_inactive_anpassbares_widget").show();

  jQuery(
    "#analyse_feedback_polls_button_inactive_direktes_feedback_seitenbesucher"
  ).hide();
  jQuery("#analyse_feedback_polls_button_active_mehrere_fragetypen").hide();
  jQuery("#analyse_feedback_polls_section_mehrere_fragetypen").hide();
  jQuery(
    "#analyse_feedback_polls_button_active_feedback_ergebnisse_visualisieren"
  ).hide();
  jQuery(
    "#analyse_feedback_polls_section_feedback_ergebnisse_visualisieren"
  ).hide();
  jQuery("#analyse_feedback_polls_button_active_anpassbares_widget").hide();
  jQuery("#analyse_feedback_polls_section_anpassbares_widget").hide();
});
//========================================================
//
//Feedback Polls direktes Feedback von Seitenbesuchern Button Active
jQuery(
  "#analyse_feedback_polls_button_active_direktes_feedback_seitenbesucher"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_feedback_polls_button_active_direktes_feedback_seitenbesucher"
  ).show();
  jQuery(
    "#analyse_feedback_polls_section_direktes_feedback_seitenbesucher"
  ).show();
  jQuery("#analyse_feedback_polls_button_inactive_mehrere_fragetypen").show();
  jQuery(
    "#analyse_feedback_polls_button_inactive_feedback_ergebnisse_visualisieren"
  ).show();
  jQuery("#analyse_feedback_polls_button_inactive_anpassbares_widget").show();

  jQuery(
    "#analyse_feedback_polls_button_inactive_direktes_feedback_seitenbesucher"
  ).hide();
  jQuery("#analyse_feedback_polls_button_active_mehrere_fragetypen").hide();
  jQuery("#analyse_feedback_polls_section_mehrere_fragetypen").hide();
  jQuery(
    "#analyse_feedback_polls_button_active_feedback_ergebnisse_visualisieren"
  ).hide();
  jQuery(
    "#analyse_feedback_polls_section_feedback_ergebnisse_visualisieren"
  ).hide();
  jQuery("#analyse_feedback_polls_button_active_anpassbares_widget").hide();
  jQuery("#analyse_feedback_polls_section_anpassbares_widget").hide();
});
//========================================================
//
//Feedback Polls mehrere Fragetypen Button Inactive
jQuery("#analyse_feedback_polls_button_inactive_mehrere_fragetypen").click(
  function (e) {
    e.preventDefault();
    jQuery("#analyse_feedback_polls_button_active_mehrere_fragetypen").show();
    jQuery("#analyse_feedback_polls_section_mehrere_fragetypen").show();
    jQuery(
      "#analyse_feedback_polls_button_inactive_direktes_feedback_seitenbesucher"
    ).show();
    jQuery(
      "#analyse_feedback_polls_button_inactive_feedback_ergebnisse_visualisieren"
    ).show();
    jQuery("#analyse_feedback_polls_button_inactive_anpassbares_widget").show();

    jQuery("#analyse_feedback_polls_button_inactive_mehrere_fragetypen").hide();
    jQuery(
      "#analyse_feedback_polls_button_active_direktes_feedback_seitenbesucher"
    ).hide();
    jQuery(
      "#analyse_feedback_polls_section_direktes_feedback_seitenbesucher"
    ).hide();
    jQuery(
      "#analyse_feedback_polls_button_active_feedback_ergebnisse_visualisieren"
    ).hide();
    jQuery(
      "#analyse_feedback_polls_section_feedback_ergebnisse_visualisieren"
    ).hide();
    jQuery("#analyse_feedback_polls_button_active_anpassbares_widget").hide();
    jQuery("#analyse_feedback_polls_section_anpassbares_widget").hide();
  }
);
//========================================================
//
//Feedback Polls mehrere Fragetypen Button Active
jQuery("#analyse_feedback_polls_button_active_mehrere_fragetypen").click(
  function (e) {
    e.preventDefault();
    jQuery("#analyse_feedback_polls_button_active_mehrere_fragetypen").show();
    jQuery("#analyse_feedback_polls_section_mehrere_fragetypen").show();
    jQuery(
      "#analyse_feedback_polls_button_inactive_direktes_feedback_seitenbesucher"
    ).show();
    jQuery(
      "#analyse_feedback_polls_button_inactive_feedback_ergebnisse_visualisieren"
    ).show();
    jQuery("#analyse_feedback_polls_button_inactive_anpassbares_widget").show();

    jQuery("#analyse_feedback_polls_button_inactive_mehrere_fragetypen").hide();
    jQuery(
      "#analyse_feedback_polls_button_active_direktes_feedback_seitenbesucher"
    ).hide();
    jQuery(
      "#analyse_feedback_polls_section_direktes_feedback_seitenbesucher"
    ).hide();
    jQuery(
      "#analyse_feedback_polls_button_active_feedback_ergebnisse_visualisieren"
    ).hide();
    jQuery(
      "#analyse_feedback_polls_section_feedback_ergebnisse_visualisieren"
    ).hide();
    jQuery("#analyse_feedback_polls_button_active_anpassbares_widget").hide();
    jQuery("#analyse_feedback_polls_section_anpassbares_widget").hide();
  }
);
//========================================================
//
//Feedback Polls Feedback Ergebnisse visualisieren Button Inactive
jQuery(
  "#analyse_feedback_polls_button_inactive_feedback_ergebnisse_visualisieren"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_feedback_polls_button_active_feedback_ergebnisse_visualisieren"
  ).show();
  jQuery(
    "#analyse_feedback_polls_section_feedback_ergebnisse_visualisieren"
  ).show();
  jQuery(
    "#analyse_feedback_polls_button_inactive_direktes_feedback_seitenbesucher"
  ).show();
  jQuery("#analyse_feedback_polls_button_inactive_mehrere_fragetypen").show();
  jQuery("#analyse_feedback_polls_button_inactive_anpassbares_widget").show();

  jQuery(
    "#analyse_feedback_polls_button_inactive_feedback_ergebnisse_visualisieren"
  ).hide();
  jQuery(
    "#analyse_feedback_polls_button_active_direktes_feedback_seitenbesucher"
  ).hide();
  jQuery(
    "#analyse_feedback_polls_section_direktes_feedback_seitenbesucher"
  ).hide();
  jQuery("#analyse_feedback_polls_button_active_mehrere_fragetypen").hide();
  jQuery("#analyse_feedback_polls_section_mehrere_fragetypen").hide();
  jQuery("#analyse_feedback_polls_button_active_anpassbares_widget").hide();
  jQuery("#analyse_feedback_polls_section_anpassbares_widget").hide();
});
//========================================================
//
//Feedback Polls Feedback Ergebnisse visualisieren Button Active
jQuery(
  "#analyse_feedback_polls_button_active_feedback_ergebnisse_visualisieren"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_feedback_polls_button_active_feedback_ergebnisse_visualisieren"
  ).show();
  jQuery(
    "#analyse_feedback_polls_section_feedback_ergebnisse_visualisieren"
  ).show();
  jQuery(
    "#analyse_feedback_polls_button_inactive_direktes_feedback_seitenbesucher"
  ).show();
  jQuery("#analyse_feedback_polls_button_inactive_mehrere_fragetypen").show();
  jQuery("#analyse_feedback_polls_button_inactive_anpassbares_widget").show();

  jQuery(
    "#analyse_feedback_polls_button_inactive_feedback_ergebnisse_visualisieren"
  ).hide();
  jQuery(
    "#analyse_feedback_polls_button_active_direktes_feedback_seitenbesucher"
  ).hide();
  jQuery(
    "#analyse_feedback_polls_section_direktes_feedback_seitenbesucher"
  ).hide();
  jQuery("#analyse_feedback_polls_button_active_mehrere_fragetypen").hide();
  jQuery("#analyse_feedback_polls_section_mehrere_fragetypen").hide();
  jQuery("#analyse_feedback_polls_button_active_anpassbares_widget").hide();
  jQuery("#analyse_feedback_polls_section_anpassbares_widget").hide();
});
//========================================================
//
//Feedback Polls Anpassbares Widget Button Inactive
jQuery("#analyse_feedback_polls_button_inactive_anpassbares_widget").click(
  function (e) {
    e.preventDefault();
    jQuery("#analyse_feedback_polls_button_active_anpassbares_widget").show();
    jQuery("#analyse_feedback_polls_section_anpassbares_widget").show();
    jQuery(
      "#analyse_feedback_polls_button_inactive_direktes_feedback_seitenbesucher"
    ).show();
    jQuery("#analyse_feedback_polls_button_inactive_mehrere_fragetypen").show();
    jQuery(
      "#analyse_feedback_polls_button_inactive_feedback_ergebnisse_visualisieren"
    ).show();

    jQuery("#analyse_feedback_polls_button_inactive_anpassbares_widget").hide();
    jQuery(
      "#analyse_feedback_polls_button_active_direktes_feedback_seitenbesucher"
    ).hide();
    jQuery(
      "#analyse_feedback_polls_section_direktes_feedback_seitenbesucher"
    ).hide();
    jQuery("#analyse_feedback_polls_button_active_mehrere_fragetypen").hide();
    jQuery("#analyse_feedback_polls_section_mehrere_fragetypen").hide();
    jQuery(
      "#analyse_feedback_polls_button_active_feedback_ergebnisse_visualisieren"
    ).hide();
    jQuery(
      "#analyse_feedback_polls_section_feedback_ergebnisse_visualisieren"
    ).hide();
  }
);
//========================================================
//
//Feedback Polls Anpassbares Widget Button Active
jQuery("#analyse_feedback_polls_button_active_anpassbares_widget").click(
  function (e) {
    e.preventDefault();
    jQuery("#analyse_feedback_polls_button_active_anpassbares_widget").show();
    jQuery("#analyse_feedback_polls_section_anpassbares_widget").show();
    jQuery(
      "#analyse_feedback_polls_button_inactive_direktes_feedback_seitenbesucher"
    ).show();
    jQuery("#analyse_feedback_polls_button_inactive_mehrere_fragetypen").show();
    jQuery(
      "#analyse_feedback_polls_button_inactive_feedback_ergebnisse_visualisieren"
    ).show();

    jQuery("#analyse_feedback_polls_button_inactive_anpassbares_widget").hide();
    jQuery(
      "#analyse_feedback_polls_button_active_direktes_feedback_seitenbesucher"
    ).hide();
    jQuery(
      "#analyse_feedback_polls_section_direktes_feedback_seitenbesucher"
    ).hide();
    jQuery("#analyse_feedback_polls_button_active_mehrere_fragetypen").hide();
    jQuery("#analyse_feedback_polls_section_mehrere_fragetypen").hide();
    jQuery(
      "#analyse_feedback_polls_button_active_feedback_ergebnisse_visualisieren"
    ).hide();
    jQuery(
      "#analyse_feedback_polls_section_feedback_ergebnisse_visualisieren"
    ).hide();
  }
);
//========================================================
//
//Eingehendes Feedback Feedback Kontext Button Inactive
jQuery("#analyse_eingehendes_feedback_button_inactive_feedback_kontext").click(
  function (e) {
    e.preventDefault();
    jQuery(
      "#analyse_eingehendes_feedback_button_active_feedback_kontext"
    ).show();
    jQuery("#analyse_eingehendes_feedback_section_feedback_kontext").show();
    jQuery(
      "#analyse_eingehendes_feedback_button_inactive_visuelles_feedback_dashboard"
    ).show();
    jQuery(
      "#analyse_eingehendes_feedback_button_inactive_gefuehls_ueberwachung"
    ).show();
    jQuery(
      "#analyse_eingehendes_feedback_button_inactive_anpassbares_widget"
    ).show();

    jQuery(
      "#analyse_eingehendes_feedback_button_inactive_feedback_kontext"
    ).hide();
    jQuery(
      "#analyse_eingehendes_feedback_button_active_visuelles_feedback_dashboard"
    ).hide();
    jQuery(
      "#analyse_eingehendes_feedback_section_visuelles_feedback_dashboard"
    ).hide();
    jQuery(
      "#analyse_eingehendes_feedback_button_active_gefuehls_ueberwachung"
    ).hide();
    jQuery(
      "#analyse_eingehendes_feedback_section_gefuehls_ueberwachung"
    ).hide();
    jQuery(
      "#analyse_eingehendes_feedback_button_active_anpassbares_widget"
    ).hide();
    jQuery("#analyse_eingehendes_feedback_section_anpassbares_widget").hide();
  }
);
//========================================================
//
//Eingehendes Feedback Feedback Kontext Button Active
jQuery("#analyse_eingehendes_feedback_button_active_feedback_kontext").click(
  function (e) {
    e.preventDefault();
    jQuery(
      "#analyse_eingehendes_feedback_button_active_feedback_kontext"
    ).show();
    jQuery("#analyse_eingehendes_feedback_section_feedback_kontext").show();
    jQuery(
      "#analyse_eingehendes_feedback_button_inactive_visuelles_feedback_dashboard"
    ).show();
    jQuery(
      "#analyse_eingehendes_feedback_button_inactive_gefuehls_ueberwachung"
    ).show();
    jQuery(
      "#analyse_eingehendes_feedback_button_inactive_anpassbares_widget"
    ).show();

    jQuery(
      "#analyse_eingehendes_feedback_button_inactive_feedback_kontext"
    ).hide();
    jQuery(
      "#analyse_eingehendes_feedback_button_active_visuelles_feedback_dashboard"
    ).hide();
    jQuery(
      "#analyse_eingehendes_feedback_section_visuelles_feedback_dashboard"
    ).hide();
    jQuery(
      "#analyse_eingehendes_feedback_button_active_gefuehls_ueberwachung"
    ).hide();
    jQuery(
      "#analyse_eingehendes_feedback_section_gefuehls_ueberwachung"
    ).hide();
    jQuery(
      "#analyse_eingehendes_feedback_button_active_anpassbares_widget"
    ).hide();
    jQuery("#analyse_eingehendes_feedback_section_anpassbares_widget").hide();
  }
);
//========================================================
//
//Eingehendes Feedback Visuelles Feedback Dashboard Button Inactive
jQuery(
  "#analyse_eingehendes_feedback_button_inactive_visuelles_feedback_dashboard"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_eingehendes_feedback_button_active_visuelles_feedback_dashboard"
  ).show();
  jQuery(
    "#analyse_eingehendes_feedback_section_visuelles_feedback_dashboard"
  ).show();
  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_feedback_kontext"
  ).show();
  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_gefuehls_ueberwachung"
  ).show();
  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_anpassbares_widget"
  ).show();

  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_visuelles_feedback_dashboard"
  ).hide();
  jQuery("#analyse_eingehendes_feedback_button_active_feedback_kontext").hide();
  jQuery("#analyse_eingehendes_feedback_section_feedback_kontext").hide();
  jQuery(
    "#analyse_eingehendes_feedback_button_active_gefuehls_ueberwachung"
  ).hide();
  jQuery("#analyse_eingehendes_feedback_section_gefuehls_ueberwachung").hide();
  jQuery(
    "#analyse_eingehendes_feedback_button_active_anpassbares_widget"
  ).hide();
  jQuery("#analyse_eingehendes_feedback_section_anpassbares_widget").hide();
});
//========================================================
//
//Eingehendes Feedback Visuelles Feedback Dashboard Button Active
jQuery(
  "#analyse_eingehendes_feedback_button_active_visuelles_feedback_dashboard"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_eingehendes_feedback_button_active_visuelles_feedback_dashboard"
  ).show();
  jQuery(
    "#analyse_eingehendes_feedback_section_visuelles_feedback_dashboard"
  ).show();
  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_feedback_kontext"
  ).show();
  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_gefuehls_ueberwachung"
  ).show();
  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_anpassbares_widget"
  ).show();

  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_visuelles_feedback_dashboard"
  ).hide();
  jQuery("#analyse_eingehendes_feedback_button_active_feedback_kontext").hide();
  jQuery("#analyse_eingehendes_feedback_section_feedback_kontext").hide();
  jQuery(
    "#analyse_eingehendes_feedback_button_active_gefuehls_ueberwachung"
  ).hide();
  jQuery("#analyse_eingehendes_feedback_section_gefuehls_ueberwachung").hide();
  jQuery(
    "#analyse_eingehendes_feedback_button_active_anpassbares_widget"
  ).hide();
  jQuery("#analyse_eingehendes_feedback_section_anpassbares_widget").hide();
});
//========================================================
//
//Eingehendes Feedback Gefühls Überwachung Button Inactive
jQuery(
  "#analyse_eingehendes_feedback_button_inactive_gefuehls_ueberwachung"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_eingehendes_feedback_button_active_gefuehls_ueberwachung"
  ).show();
  jQuery("#analyse_eingehendes_feedback_section_gefuehls_ueberwachung").show();
  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_feedback_kontext"
  ).show();
  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_visuelles_feedback_dashboard"
  ).show();
  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_anpassbares_widget"
  ).show();

  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_gefuehls_ueberwachung"
  ).hide();
  jQuery("#analyse_eingehendes_feedback_button_active_feedback_kontext").hide();
  jQuery("#analyse_eingehendes_feedback_section_feedback_kontext").hide();
  jQuery(
    "#analyse_eingehendes_feedback_button_active_visuelles_feedback_dashboard"
  ).hide();
  jQuery(
    "#analyse_eingehendes_feedback_section_visuelles_feedback_dashboard"
  ).hide();
  jQuery(
    "#analyse_eingehendes_feedback_button_active_anpassbares_widget"
  ).hide();
  jQuery("#analyse_eingehendes_feedback_section_anpassbares_widget").hide();
});
//========================================================
//
//Eingehendes Feedback Gefühls Überwachung Button Active
jQuery(
  "#analyse_eingehendes_feedback_button_active_gefuehls_ueberwachung"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_eingehendes_feedback_button_active_gefuehls_ueberwachung"
  ).show();
  jQuery("#analyse_eingehendes_feedback_section_gefuehls_ueberwachung").show();
  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_feedback_kontext"
  ).show();
  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_visuelles_feedback_dashboard"
  ).show();
  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_anpassbares_widget"
  ).show();

  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_gefuehls_ueberwachung"
  ).hide();
  jQuery("#analyse_eingehendes_feedback_button_active_feedback_kontext").hide();
  jQuery("#analyse_eingehendes_feedback_section_feedback_kontext").hide();
  jQuery(
    "#analyse_eingehendes_feedback_button_active_visuelles_feedback_dashboard"
  ).hide();
  jQuery(
    "#analyse_eingehendes_feedback_section_visuelles_feedback_dashboard"
  ).hide();
  jQuery(
    "#analyse_eingehendes_feedback_button_active_anpassbares_widget"
  ).hide();
  jQuery("#analyse_eingehendes_feedback_section_anpassbares_widget").hide();
});
//========================================================
//
//Eingehendes Feedback Anpassbares Widget Button Inactive
jQuery(
  "#analyse_eingehendes_feedback_button_inactive_anpassbares_widget"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_eingehendes_feedback_button_active_anpassbares_widget"
  ).show();
  jQuery("#analyse_eingehendes_feedback_section_anpassbares_widget").show();
  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_feedback_kontext"
  ).show();
  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_visuelles_feedback_dashboard"
  ).show();
  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_gefuehls_ueberwachung"
  ).show();

  jQuery(
    "#analyse_eingehendes_feedback_button_inactive_anpassbares_widget"
  ).hide();
  jQuery("#analyse_eingehendes_feedback_button_active_feedback_kontext").hide();
  jQuery("#analyse_eingehendes_feedback_section_feedback_kontext").hide();
  jQuery(
    "#analyse_eingehendes_feedback_button_active_visuelles_feedback_dashboard"
  ).hide();
  jQuery(
    "#analyse_eingehendes_feedback_section_visuelles_feedback_dashboard"
  ).hide();
  jQuery(
    "#analyse_eingehendes_feedback_button_active_gefuehls_ueberwachung"
  ).hide();
  jQuery("#analyse_eingehendes_feedback_section_gefuehls_ueberwachung").hide();
});
//========================================================
//
//Eingehendes Feedback Anpassbares Widget Button Active
jQuery("#analyse_eingehendes_feedback_button_active_anpassbares_widget").click(
  function (e) {
    e.preventDefault();
    jQuery(
      "#analyse_eingehendes_feedback_button_active_anpassbares_widget"
    ).show();
    jQuery("#analyse_eingehendes_feedback_section_anpassbares_widget").show();
    jQuery(
      "#analyse_eingehendes_feedback_button_inactive_feedback_kontext"
    ).show();
    jQuery(
      "#analyse_eingehendes_feedback_button_inactive_visuelles_feedback_dashboard"
    ).show();
    jQuery(
      "#analyse_eingehendes_feedback_button_inactive_gefuehls_ueberwachung"
    ).show();

    jQuery(
      "#analyse_eingehendes_feedback_button_inactive_anpassbares_widget"
    ).hide();
    jQuery(
      "#analyse_eingehendes_feedback_button_active_feedback_kontext"
    ).hide();
    jQuery("#analyse_eingehendes_feedback_section_feedback_kontext").hide();
    jQuery(
      "#analyse_eingehendes_feedback_button_active_visuelles_feedback_dashboard"
    ).hide();
    jQuery(
      "#analyse_eingehendes_feedback_section_visuelles_feedback_dashboard"
    ).hide();
    jQuery(
      "#analyse_eingehendes_feedback_button_active_gefuehls_ueberwachung"
    ).hide();
    jQuery(
      "#analyse_eingehendes_feedback_section_gefuehls_ueberwachung"
    ).hide();
  }
);
//========================================================
//
//Umfrage starten Benutzerfreundliche Umfragen Button Inactive
jQuery(
  "#analyse_umfragen_starten_button_inactive_benutzerfreundliche_umfragen"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_umfragen_starten_button_active_benutzerfreundliche_umfragen"
  ).show();
  jQuery(
    "#analyse_umfragen_starten_section_benutzerfreundliche_umfragen"
  ).show();
  jQuery("#analyse_umfragen_starten_button_inactive_mehrere_fragetypen").show();
  jQuery(
    "#analyse_umfragen_starten_button_inactive_weitere_besucher_einladen"
  ).show();
  jQuery(
    "#analyse_umfragen_starten_button_inactive_ergebnisse_visualisieren"
  ).show();

  jQuery(
    "#analyse_umfragen_starten_button_inactive_benutzerfreundliche_umfragen"
  ).hide();
  jQuery("#analyse_umfragen_starten_button_active_mehrere_fragetypen").hide();
  jQuery("#analyse_umfragen_starten_section_mehrere_fragetypen").hide();
  jQuery(
    "#analyse_umfragen_starten_button_active_weitere_besucher_einladen"
  ).hide();
  jQuery("#analyse_umfragen_starten_section_weitere_besucher_einladen").hide();
  jQuery(
    "#analyse_umfragen_starten_button_active_ergebnisse_visualisieren"
  ).hide();
  jQuery("#analyse_umfragen_starten_section_ergebnisse_visualisieren").hide();
});
//========================================================
//
//Umfrage starten Benutzerfreundliche Umfragen Button Active
jQuery(
  "#analyse_umfragen_starten_button_active_benutzerfreundliche_umfragen"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_umfragen_starten_button_active_benutzerfreundliche_umfragen"
  ).show();
  jQuery(
    "#analyse_umfragen_starten_section_benutzerfreundliche_umfragen"
  ).show();
  jQuery("#analyse_umfragen_starten_button_inactive_mehrere_fragetypen").show();
  jQuery(
    "#analyse_umfragen_starten_button_inactive_weitere_besucher_einladen"
  ).show();
  jQuery(
    "#analyse_umfragen_starten_button_inactive_ergebnisse_visualisieren"
  ).show();

  jQuery(
    "#analyse_umfragen_starten_button_inactive_benutzerfreundliche_umfragen"
  ).hide();
  jQuery("#analyse_umfragen_starten_button_active_mehrere_fragetypen").hide();
  jQuery("#analyse_umfragen_starten_section_mehrere_fragetypen").hide();
  jQuery(
    "#analyse_umfragen_starten_button_active_weitere_besucher_einladen"
  ).hide();
  jQuery("#analyse_umfragen_starten_section_weitere_besucher_einladen").hide();
  jQuery(
    "#analyse_umfragen_starten_button_active_ergebnisse_visualisieren"
  ).hide();
  jQuery("#analyse_umfragen_starten_section_ergebnisse_visualisieren").hide();
});
//========================================================
//
//Umfrage starten mehrere Fragetypen Button Inactive
jQuery("#analyse_umfragen_starten_button_inactive_mehrere_fragetypen").click(
  function (e) {
    e.preventDefault();
    jQuery("#analyse_umfragen_starten_button_active_mehrere_fragetypen").show();
    jQuery("#analyse_umfragen_starten_section_mehrere_fragetypen").show();
    jQuery(
      "#analyse_umfragen_starten_button_inactive_benutzerfreundliche_umfragen"
    ).show();
    jQuery(
      "#analyse_umfragen_starten_button_inactive_weitere_besucher_einladen"
    ).show();
    jQuery(
      "#analyse_umfragen_starten_button_inactive_ergebnisse_visualisieren"
    ).show();

    jQuery(
      "#analyse_umfragen_starten_button_inactive_mehrere_fragetypen"
    ).hide();
    jQuery(
      "#analyse_umfragen_starten_button_active_benutzerfreundliche_umfragen"
    ).hide();
    jQuery(
      "#analyse_umfragen_starten_section_benutzerfreundliche_umfragen"
    ).hide();
    jQuery(
      "#analyse_umfragen_starten_button_active_weitere_besucher_einladen"
    ).hide();
    jQuery(
      "#analyse_umfragen_starten_section_weitere_besucher_einladen"
    ).hide();
    jQuery(
      "#analyse_umfragen_starten_button_active_ergebnisse_visualisieren"
    ).hide();
    jQuery("#analyse_umfragen_starten_section_ergebnisse_visualisieren").hide();
  }
);
//========================================================
//
//Umfrage starten mehrere Fragetypen Button Active
jQuery("#analyse_umfragen_starten_button_active_mehrere_fragetypen").click(
  function (e) {
    e.preventDefault();
    jQuery("#analyse_umfragen_starten_button_active_mehrere_fragetypen").show();
    jQuery("#analyse_umfragen_starten_section_mehrere_fragetypen").show();
    jQuery(
      "#analyse_umfragen_starten_button_inactive_benutzerfreundliche_umfragen"
    ).show();
    jQuery(
      "#analyse_umfragen_starten_button_inactive_weitere_besucher_einladen"
    ).show();
    jQuery(
      "#analyse_umfragen_starten_button_inactive_ergebnisse_visualisieren"
    ).show();

    jQuery(
      "#analyse_umfragen_starten_button_inactive_mehrere_fragetypen"
    ).hide();
    jQuery(
      "#analyse_umfragen_starten_button_active_benutzerfreundliche_umfragen"
    ).hide();
    jQuery(
      "#analyse_umfragen_starten_section_benutzerfreundliche_umfragen"
    ).hide();
    jQuery(
      "#analyse_umfragen_starten_button_active_weitere_besucher_einladen"
    ).hide();
    jQuery(
      "#analyse_umfragen_starten_section_weitere_besucher_einladen"
    ).hide();
    jQuery(
      "#analyse_umfragen_starten_button_active_ergebnisse_visualisieren"
    ).hide();
    jQuery("#analyse_umfragen_starten_section_ergebnisse_visualisieren").hide();
  }
);
//========================================================
//
//Umfrage starten weitere Besucher Einladen Button Inactive
jQuery(
  "#analyse_umfragen_starten_button_inactive_weitere_besucher_einladen"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_umfragen_starten_button_active_weitere_besucher_einladen"
  ).show();
  jQuery("#analyse_umfragen_starten_section_weitere_besucher_einladen").show();
  jQuery(
    "#analyse_umfragen_starten_button_inactive_benutzerfreundliche_umfragen"
  ).show();
  jQuery("#analyse_umfragen_starten_button_inactive_mehrere_fragetypen").show();
  jQuery(
    "#analyse_umfragen_starten_button_inactive_ergebnisse_visualisieren"
  ).show();

  jQuery(
    "#analyse_umfragen_starten_button_inactive_weitere_besucher_einladen"
  ).hide();
  jQuery(
    "#analyse_umfragen_starten_button_active_benutzerfreundliche_umfragen"
  ).hide();
  jQuery(
    "#analyse_umfragen_starten_section_benutzerfreundliche_umfragen"
  ).hide();
  jQuery("#analyse_umfragen_starten_button_active_mehrere_fragetypen").hide();
  jQuery("#analyse_umfragen_starten_section_mehrere_fragetypen").hide();
  jQuery(
    "#analyse_umfragen_starten_button_active_ergebnisse_visualisieren"
  ).hide();
  jQuery("#analyse_umfragen_starten_section_ergebnisse_visualisieren").hide();
});
//========================================================
//
//Umfrage starten weitere Besucher Einladen Button Active
jQuery(
  "#analyse_umfragen_starten_button_active_weitere_besucher_einladen"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_umfragen_starten_button_active_weitere_besucher_einladen"
  ).show();
  jQuery("#analyse_umfragen_starten_section_weitere_besucher_einladen").show();
  jQuery(
    "#analyse_umfragen_starten_button_inactive_benutzerfreundliche_umfragen"
  ).show();
  jQuery("#analyse_umfragen_starten_button_inactive_mehrere_fragetypen").show();
  jQuery(
    "#analyse_umfragen_starten_button_inactive_ergebnisse_visualisieren"
  ).show();

  jQuery(
    "#analyse_umfragen_starten_button_inactive_weitere_besucher_einladen"
  ).hide();
  jQuery(
    "#analyse_umfragen_starten_button_active_benutzerfreundliche_umfragen"
  ).hide();
  jQuery(
    "#analyse_umfragen_starten_section_benutzerfreundliche_umfragen"
  ).hide();
  jQuery("#analyse_umfragen_starten_button_active_mehrere_fragetypen").hide();
  jQuery("#analyse_umfragen_starten_section_mehrere_fragetypen").hide();
  jQuery(
    "#analyse_umfragen_starten_button_active_ergebnisse_visualisieren"
  ).hide();
  jQuery("#analyse_umfragen_starten_section_ergebnisse_visualisieren").hide();
});
//========================================================
//
//Umfrage starten Ergebnisse visualisieren Button Inactive
jQuery(
  "#analyse_umfragen_starten_button_inactive_ergebnisse_visualisieren"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_umfragen_starten_button_active_ergebnisse_visualisieren"
  ).show();
  jQuery("#analyse_umfragen_starten_section_ergebnisse_visualisieren").show();
  jQuery(
    "#analyse_umfragen_starten_button_inactive_benutzerfreundliche_umfragen"
  ).show();
  jQuery("#analyse_umfragen_starten_button_inactive_mehrere_fragetypen").show();
  jQuery(
    "#analyse_umfragen_starten_button_inactive_weitere_besucher_einladen"
  ).show();

  jQuery(
    "#analyse_umfragen_starten_button_inactive_ergebnisse_visualisieren"
  ).hide();
  jQuery(
    "#analyse_umfragen_starten_button_active_benutzerfreundliche_umfragen"
  ).hide();
  jQuery(
    "#analyse_umfragen_starten_section_benutzerfreundliche_umfragen"
  ).hide();
  jQuery("#analyse_umfragen_starten_button_active_mehrere_fragetypen").hide();
  jQuery("#analyse_umfragen_starten_section_mehrere_fragetypen").hide();
  jQuery(
    "#analyse_umfragen_starten_button_active_weitere_besucher_einladen"
  ).hide();
  jQuery("#analyse_umfragen_starten_section_weitere_besucher_einladen").hide();
});
//========================================================
//
//Umfrage starten Ergebnisse visualisieren Button Active
jQuery(
  "#analyse_umfragen_starten_button_active_ergebnisse_visualisieren"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_umfragen_starten_button_active_ergebnisse_visualisieren"
  ).show();
  jQuery("#analyse_umfragen_starten_section_ergebnisse_visualisieren").show();
  jQuery(
    "#analyse_umfragen_starten_button_inactive_benutzerfreundliche_umfragen"
  ).show();
  jQuery("#analyse_umfragen_starten_button_inactive_mehrere_fragetypen").show();
  jQuery(
    "#analyse_umfragen_starten_button_inactive_weitere_besucher_einladen"
  ).show();

  jQuery(
    "#analyse_umfragen_starten_button_inactive_ergebnisse_visualisieren"
  ).hide();
  jQuery(
    "#analyse_umfragen_starten_button_active_benutzerfreundliche_umfragen"
  ).hide();
  jQuery(
    "#analyse_umfragen_starten_section_benutzerfreundliche_umfragen"
  ).hide();
  jQuery("#analyse_umfragen_starten_button_active_mehrere_fragetypen").hide();
  jQuery("#analyse_umfragen_starten_section_mehrere_fragetypen").hide();
  jQuery(
    "#analyse_umfragen_starten_button_active_weitere_besucher_einladen"
  ).hide();
  jQuery("#analyse_umfragen_starten_section_weitere_besucher_einladen").hide();
});
//========================================================
//
//Testnutzer generieren Rekrutieren sie Teilnehmer Button Inactive
jQuery(
  "#analyse_testnutzer_generieren_button_inactive_rekrutieren_sie_teilnehmer"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_testnutzer_generieren_button_active_rekrutieren_sie_teilnehmer"
  ).show();
  jQuery(
    "#analyse_testnutzer_generieren_section_rekrutieren_sie_teilnehmer"
  ).show();
  jQuery(
    "#analyse_testnutzer_generieren_button_inactive_details_der_befragten"
  ).show();
  jQuery(
    "#analyse_testnutzer_generieren_button_inactive_anpassbares_widget"
  ).show();

  jQuery(
    "#analyse_testnutzer_generieren_button_inactive_rekrutieren_sie_teilnehmer"
  ).hide();
  jQuery(
    "#analyse_testnutzer_generieren_button_active_details_der_befragten"
  ).hide();
  jQuery("#analyse_testnutzer_generieren_section_details_der_befragten").hide();
  jQuery(
    "#analyse_testnutzer_generieren_button_active_anpassbares_widget"
  ).hide();
  jQuery("#analyse_testnutzer_generieren_section_anpassbares_widget").hide();
});
//========================================================
//
//Testnutzer generieren Rekrutieren sie Teilnehmer Button Active
jQuery(
  "#analyse_testnutzer_generieren_button_active_rekrutieren_sie_teilnehmer"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_testnutzer_generieren_button_active_rekrutieren_sie_teilnehmer"
  ).show();
  jQuery(
    "#analyse_testnutzer_generieren_section_rekrutieren_sie_teilnehmer"
  ).show();
  jQuery(
    "#analyse_testnutzer_generieren_button_inactive_details_der_befragten"
  ).show();
  jQuery(
    "#analyse_testnutzer_generieren_button_inactive_anpassbares_widget"
  ).show();

  jQuery(
    "#analyse_testnutzer_generieren_button_inactive_rekrutieren_sie_teilnehmer"
  ).hide();
  jQuery(
    "#analyse_testnutzer_generieren_button_active_details_der_befragten"
  ).hide();
  jQuery("#analyse_testnutzer_generieren_section_details_der_befragten").hide();
  jQuery(
    "#analyse_testnutzer_generieren_button_active_anpassbares_widget"
  ).hide();
  jQuery("#analyse_testnutzer_generieren_section_anpassbares_widget").hide();
});
//========================================================
//
//Testnutzer generieren Details der Befragten Button Inactive
jQuery(
  "#analyse_testnutzer_generieren_button_inactive_details_der_befragten"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_testnutzer_generieren_button_active_details_der_befragten"
  ).show();
  jQuery("#analyse_testnutzer_generieren_section_details_der_befragten").show();
  jQuery(
    "#analyse_testnutzer_generieren_button_inactive_rekrutieren_sie_teilnehmer"
  ).show();
  jQuery(
    "#analyse_testnutzer_generieren_button_inactive_anpassbares_widget"
  ).show();

  jQuery(
    "#analyse_testnutzer_generieren_button_inactive_details_der_befragten"
  ).hide();
  jQuery(
    "#analyse_testnutzer_generieren_button_active_rekrutieren_sie_teilnehmer"
  ).hide();
  jQuery(
    "#analyse_testnutzer_generieren_section_rekrutieren_sie_teilnehmer"
  ).hide();
  jQuery(
    "#analyse_testnutzer_generieren_button_active_anpassbares_widget"
  ).hide();
  jQuery("#analyse_testnutzer_generieren_section_anpassbares_widget").hide();
});
//========================================================
//
//Testnutzer generieren Details der Befragten Button Active
jQuery(
  "#analyse_testnutzer_generieren_button_active_details_der_befragten"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_testnutzer_generieren_button_active_details_der_befragten"
  ).show();
  jQuery("#analyse_testnutzer_generieren_section_details_der_befragten").show();
  jQuery(
    "#analyse_testnutzer_generieren_button_inactive_rekrutieren_sie_teilnehmer"
  ).show();
  jQuery(
    "#analyse_testnutzer_generieren_button_inactive_anpassbares_widget"
  ).show();

  jQuery(
    "#analyse_testnutzer_generieren_button_inactive_details_der_befragten"
  ).hide();
  jQuery(
    "#analyse_testnutzer_generieren_button_active_rekrutieren_sie_teilnehmer"
  ).hide();
  jQuery(
    "#analyse_testnutzer_generieren_section_rekrutieren_sie_teilnehmer"
  ).hide();
  jQuery(
    "#analyse_testnutzer_generieren_button_active_anpassbares_widget"
  ).hide();
  jQuery("#analyse_testnutzer_generieren_section_anpassbares_widget").hide();
});
//========================================================
//
//Testnutzer generieren Anpassbares Widget Button Inactive
jQuery(
  "#analyse_testnutzer_generieren_button_inactive_anpassbares_widget"
).click(function (e) {
  e.preventDefault();
  jQuery(
    "#analyse_testnutzer_generieren_button_active_anpassbares_widget"
  ).show();
  jQuery("#analyse_testnutzer_generieren_section_anpassbares_widget").show();
  jQuery(
    "#analyse_testnutzer_generieren_button_inactive_rekrutieren_sie_teilnehmer"
  ).show();
  jQuery(
    "#analyse_testnutzer_generieren_button_inactive_details_der_befragten"
  ).show();

  jQuery(
    "#analyse_testnutzer_generieren_button_inactive_anpassbares_widget"
  ).hide();
  jQuery(
    "#analyse_testnutzer_generieren_button_active_rekrutieren_sie_teilnehmer"
  ).hide();
  jQuery(
    "#analyse_testnutzer_generieren_section_rekrutieren_sie_teilnehmer"
  ).hide();
  jQuery(
    "#analyse_testnutzer_generieren_button_active_details_der_befragten"
  ).hide();
  jQuery("#analyse_testnutzer_generieren_section_details_der_befragten").hide();
});
//========================================================
//
//Testnutzer generieren Anpassbares Widget Button Active
jQuery("#analyse_testnutzer_generieren_button_active_anpassbares_widget").click(
  function (e) {
    e.preventDefault();
    jQuery(
      "#analyse_testnutzer_generieren_button_active_anpassbares_widget"
    ).show();
    jQuery("#analyse_testnutzer_generieren_section_anpassbares_widget").show();
    jQuery(
      "#analyse_testnutzer_generieren_button_inactive_rekrutieren_sie_teilnehmer"
    ).show();
    jQuery(
      "#analyse_testnutzer_generieren_button_inactive_details_der_befragten"
    ).show();

    jQuery(
      "#analyse_testnutzer_generieren_button_inactive_anpassbares_widget"
    ).hide();
    jQuery(
      "#analyse_testnutzer_generieren_button_active_rekrutieren_sie_teilnehmer"
    ).hide();
    jQuery(
      "#analyse_testnutzer_generieren_section_rekrutieren_sie_teilnehmer"
    ).hide();
    jQuery(
      "#analyse_testnutzer_generieren_button_active_details_der_befragten"
    ).hide();
    jQuery(
      "#analyse_testnutzer_generieren_section_details_der_befragten"
    ).hide();
  }
);
//========================================================

/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/*                       DESIGN                      */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */

/* Hide & Show Sections */

jQuery(document).ready(function () {
  //HIDE THINGS ON PAGE DESIGN
  jQuery(".design_logo_standard_btn_inactive").hide();
  jQuery(".design_logo_pro_btn_active").hide();
  jQuery("#design_logo_pro_section").hide();
  jQuery(".design_webdesign_inhouse_btn_inactive").hide();
  jQuery(".design_webdesign_designnetzwerk_btn_active").hide();
  jQuery("#design_webdesign_designnetzwerk_section").hide();
  jQuery(".design_banner_inhouse_btn_inactive").hide();
  jQuery(".design_banner_designnetzwerk_btn_active").hide();
  jQuery("#design_banner_designnetzwerk_section").hide();
  //==========================
});

//BUTTON FUNCTIONS ON PAGE DESIGN
//Logo Standrad Active
jQuery(".design_logo_standard_btn_active").click(function (e) {
  e.preventDefault();
  jQuery(".design_logo_standard_btn_inactive").hide();
  jQuery(".design_logo_pro_btn_active").hide();
  jQuery("#design_logo_pro_section").hide();
  jQuery(".design_logo_pro_btn_inactive").show();
  jQuery(".design_logo_standard_btn_active").show();
  jQuery("#design_logo_standard_section").show();
});
//====================
//
//Logo Standrad Inactive
jQuery(".design_logo_standard_btn_inactive").click(function (e) {
  e.preventDefault();
  jQuery(".design_logo_standard_btn_inactive").hide();
  jQuery(".design_logo_pro_btn_active").hide();
  jQuery("#design_logo_pro_section").hide();
  jQuery(".design_logo_pro_btn_inactive").show();
  jQuery(".design_logo_standard_btn_active").show();
  jQuery("#design_logo_standard_section").show();
});
//======================
//
//Logo Pro Active
jQuery(".design_logo_pro_btn_active").click(function (e) {
  e.preventDefault();
  jQuery(".design_logo_standard_btn_inactive").show();
  jQuery(".design_logo_pro_btn_active").show();
  jQuery("#design_logo_pro_section").show();
  jQuery(".design_logo_pro_btn_inactive").hide();
  jQuery(".design_logo_standard_btn_active").hide();
  jQuery("#design_logo_standard_section").hide();
});
//===============
//
//Design Logo Pro Inactive
jQuery(".design_logo_pro_btn_inactive").click(function (e) {
  e.preventDefault();
  jQuery(".design_logo_standard_btn_inactive").show();
  jQuery(".design_logo_pro_btn_active").show();
  jQuery("#design_logo_pro_section").show();
  jQuery(".design_logo_pro_btn_inactive").hide();
  jQuery(".design_logo_standard_btn_active").hide();
  jQuery("#design_logo_standard_section").hide();
});
//=================
//
// Design Webdesign InHouse Button Inactive
jQuery(".design_webdesign_inhouse_btn_inactive").click(function (e) {
  e.preventDefault();
  jQuery(".design_webdesign_inhouse_btn_active").show();
  jQuery("#design_webdesign_inhouse_section").show();
  jQuery(".design_webdesign_designnetzwerk_btn_inactive").show();
  jQuery(".design_webdesign_inhouse_btn_inactive").hide();
  jQuery(".design_webdesign_designnetzwerk_btn_active").hide();
  jQuery("#design_webdesign_designnetzwerk_section").hide();
});
// ========================================
//
// Design Webdesign InHouse Button Active
jQuery(".design_webdesign_inhouse_btn_active").click(function (e) {
  e.preventDefault();
  jQuery(".design_webdesign_inhouse_btn_active").show();
  jQuery("#design_webdesign_inhouse_section").show();
  jQuery(".design_webdesign_designnetzwerk_btn_inactive").show();
  jQuery(".design_webdesign_inhouse_btn_inactive").hide();
  jQuery(".design_webdesign_designnetzwerk_btn_active").hide();
  jQuery("#design_webdesign_designnetzwerk_section").hide();
});
// ========================================
//
// Design Webdesign Designnetzwerk Button Inactive
jQuery(".design_webdesign_designnetzwerk_btn_inactive").click(function (e) {
  e.preventDefault();
  jQuery(".design_webdesign_designnetzwerk_btn_active").show();
  jQuery("#design_webdesign_designnetzwerk_section").show();
  jQuery(".design_webdesign_inhouse_btn_inactive").show();
  jQuery(".design_webdesign_designnetzwerk_btn_inactive").hide();
  jQuery(".design_webdesign_inhouse_btn_active").hide();
  jQuery("#design_webdesign_inhouse_section").hide();
});
// ========================================
//
// Design Webdesign Designnetzwerk Button Active
jQuery(".design_webdesign_designnetzwerk_btn_active").click(function (e) {
  e.preventDefault();
  jQuery(".design_webdesign_designnetzwerk_btn_active").show();
  jQuery("#design_webdesign_designnetzwerk_section").show();
  jQuery(".design_webdesign_inhouse_btn_inactive").show();
  jQuery(".design_webdesign_designnetzwerk_btn_inactive").hide();
  jQuery(".design_webdesign_inhouse_btn_active").hide();
  jQuery("#design_webdesign_inhouse_section").hide();
});
// ========================================
//
// Design Bannerdesign InHouse Button Inactive
jQuery(".design_banner_inhouse_btn_inactive").click(function (e) {
  e.preventDefault();
  jQuery(".design_banner_inhouse_btn_active").show();
  jQuery("#design_banner_inhouse_section").show();
  jQuery(".design_banner_designnetzwerk_btn_inactive").show();
  jQuery(".design_banner_inhouse_btn_inactive").hide();
  jQuery(".design_banner_designnetzwerk_btn_active").hide();
  jQuery("#design_banner_designnetzwerk_section").hide();
});
// ========================================
//
// Design Bannerdesign InHouse Button Active
jQuery(".design_banner_inhouse_btn_active").click(function (e) {
  e.preventDefault();
  jQuery(".design_banner_inhouse_btn_active").show();
  jQuery("#design_banner_inhouse_section").show();
  jQuery(".design_banner_designnetzwerk_btn_inactive").show();
  jQuery(".design_banner_inhouse_btn_inactive").hide();
  jQuery(".design_banner_designnetzwerk_btn_active").hide();
  jQuery("#design_banner_designnetzwerk_section").hide();
});
// ========================================
//
// Design Bannerdesign Designnetzwerk Button Inactive
jQuery(".design_banner_designnetzwerk_btn_inactive").click(function (e) {
  e.preventDefault();
  jQuery(".design_banner_designnetzwerk_btn_active").show();
  jQuery("#design_banner_designnetzwerk_section").show();
  jQuery(".design_banner_inhouse_btn_inactive").show();
  jQuery(".design_banner_designnetzwerk_btn_inactive").hide();
  jQuery(".design_banner_inhouse_btn_active").hide();
  jQuery("#design_banner_inhouse_section").hide();
});
// ========================================
//
// Design Bannerdesign Designnetzwerk Button Active
jQuery(".design_banner_designnetzwerk_btn_active").click(function (e) {
  e.preventDefault();
  jQuery(".design_banner_designnetzwerk_btn_active").show();
  jQuery("#design_banner_designnetzwerk_section").show();
  jQuery(".design_banner_inhouse_btn_inactive").show();
  jQuery(".design_banner_designnetzwerk_btn_inactive").hide();
  jQuery(".design_banner_inhouse_btn_active").hide();
  jQuery("#design_banner_inhouse_section").hide();
});
// ========================================

/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/*                      HOSTING                      */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */

/* ************************************************* */
/*              JS HIDE SHOW SECTIONS                */
/* ************************************************* */

jQuery(document).ready(function () {
  //HIDE THINGS ON PAGE HOSTING
  jQuery("#hosting_apps_blog_button_inactive").hide();

  jQuery("#hosting_apps_portal_button_active").hide();
  jQuery("#hosting_apps_portal_section").hide();

  jQuery("#hosting_apps_foren_button_active").hide();
  jQuery("#hosting_apps_foren_section").hide();

  jQuery("#hosting_apps_eCommerce_button_active").hide();
  jQuery("#hosting_apps_eCommerce_section").hide();

  jQuery("#hosting_apps_wiki_button_active").hide();
  jQuery("#hosting_apps_wiki_section").hide();

  jQuery("#hosting_apps_email_button_active").hide();
  jQuery("#hosting_apps_email_section").hide();

  jQuery("#hosting_apps_umfragen_button_active").hide();
  jQuery("#hosting_apps_umfragen_section").hide();

  jQuery("#hosting_apps_bilder_dateien_button_active").hide();
  jQuery("#hosting_apps_bilder_dateien_section").hide();

  jQuery("#hosting_apps_verschiedenes_button_active").hide();
  jQuery("#hosting_apps_verschiedenes_section").hide();

  jQuery("#hosting_preistabelle_formular_section").hide();
  //===========================
});

//BUTTON FUNCTIONS ON PAGE HOSTING
//BLOG  INACTIVE
jQuery("#hosting_apps_blog_button_inactive").click(function (e) {
  e.preventDefault();

  jQuery("#hosting_apps_blog_button_active").show();
  jQuery("#hosting_apps_blog_section").show();
  jQuery("#hosting_apps_portal_button_inactive").show();
  jQuery("#hosting_apps_foren_button_inactive").show();
  jQuery("#hosting_apps_eCommerce_button_inactive").show();
  jQuery("#hosting_apps_wiki_button_inactive").show();
  jQuery("#hosting_apps_email_button_inactive").show();
  jQuery("#hosting_apps_umfragen_button_inactive").show();
  jQuery("#hosting_apps_bilder_dateien_button_inactive").show();
  jQuery("#hosting_apps_verschiedenes_button_inactive").show();

  jQuery("#hosting_apps_blog_button_inactive").hide();

  jQuery("#hosting_apps_portal_button_active").hide();
  jQuery("#hosting_apps_portal_section").hide();

  jQuery("#hosting_apps_foren_button_active").hide();
  jQuery("#hosting_apps_foren_section").hide();

  jQuery("#hosting_apps_eCommerce_button_active").hide();
  jQuery("#hosting_apps_eCommerce_section").hide();

  jQuery("#hosting_apps_wiki_button_active").hide();
  jQuery("#hosting_apps_wiki_section").hide();

  jQuery("#hosting_apps_email_button_active").hide();
  jQuery("#hosting_apps_email_section").hide();

  jQuery("#hosting_apps_umfragen_button_active").hide();
  jQuery("#hosting_apps_umfragen_section").hide();

  jQuery("#hosting_apps_bilder_dateien_button_active").hide();
  jQuery("#hosting_apps_bilder_dateien_section").hide();

  jQuery("#hosting_apps_verschiedenes_button_active").hide();
  jQuery("#hosting_apps_verschiedenes_section").hide();
});
//====================
//
//
//BLOG  ACTIVE
jQuery("#hosting_apps_blog_button_active").click(function (e) {
  e.preventDefault();

  jQuery("#hosting_apps_blog_button_active").show();
  jQuery("#hosting_apps_blog_section").show();
  jQuery("#hosting_apps_portal_button_inactive").show();
  jQuery("#hosting_apps_foren_button_inactive").show();
  jQuery("#hosting_apps_eCommerce_button_inactive").show();
  jQuery("#hosting_apps_wiki_button_inactive").show();
  jQuery("#hosting_apps_email_button_inactive").show();
  jQuery("#hosting_apps_umfragen_button_inactive").show();
  jQuery("#hosting_apps_bilder_dateien_button_inactive").show();
  jQuery("#hosting_apps_verschiedenes_button_inactive").show();

  jQuery("#hosting_apps_blog_button_inactive").hide();

  jQuery("#hosting_apps_portal_button_active").hide();
  jQuery("#hosting_apps_portal_section").hide();

  jQuery("#hosting_apps_foren_button_active").hide();
  jQuery("#hosting_apps_foren_section").hide();

  jQuery("#hosting_apps_eCommerce_button_active").hide();
  jQuery("#hosting_apps_eCommerce_section").hide();

  jQuery("#hosting_apps_wiki_button_active").hide();
  jQuery("#hosting_apps_wiki_section").hide();

  jQuery("#hosting_apps_email_button_active").hide();
  jQuery("#hosting_apps_email_section").hide();

  jQuery("#hosting_apps_umfragen_button_active").hide();
  jQuery("#hosting_apps_umfragen_section").hide();

  jQuery("#hosting_apps_bilder_dateien_button_active").hide();
  jQuery("#hosting_apps_bilder_dateien_section").hide();

  jQuery("#hosting_apps_verschiedenes_button_active").hide();
  jQuery("#hosting_apps_verschiedenes_section").hide();
});
//====================
//
//
//Portal  INACTIVE
jQuery("#hosting_apps_portal_button_inactive").click(function (e) {
  e.preventDefault();

  jQuery("#hosting_apps_portal_button_active").show();
  jQuery("#hosting_apps_portal_section").show();
  jQuery("#hosting_apps_blog_button_inactive").show();
  jQuery("#hosting_apps_foren_button_inactive").show();
  jQuery("#hosting_apps_eCommerce_button_inactive").show();
  jQuery("#hosting_apps_wiki_button_inactive").show();
  jQuery("#hosting_apps_email_button_inactive").show();
  jQuery("#hosting_apps_umfragen_button_inactive").show();
  jQuery("#hosting_apps_bilder_dateien_button_inactive").show();
  jQuery("#hosting_apps_verschiedenes_button_inactive").show();

  jQuery("#hosting_apps_portal_button_inactive").hide();

  jQuery("#hosting_apps_blog_button_active").hide();
  jQuery("#hosting_apps_blog_section").hide();

  jQuery("#hosting_apps_foren_button_active").hide();
  jQuery("#hosting_apps_foren_section").hide();

  jQuery("#hosting_apps_eCommerce_button_active").hide();
  jQuery("#hosting_apps_eCommerce_section").hide();

  jQuery("#hosting_apps_wiki_button_active").hide();
  jQuery("#hosting_apps_wiki_section").hide();

  jQuery("#hosting_apps_email_button_active").hide();
  jQuery("#hosting_apps_email_section").hide();

  jQuery("#hosting_apps_umfragen_button_active").hide();
  jQuery("#hosting_apps_umfragen_section").hide();

  jQuery("#hosting_apps_bilder_dateien_button_active").hide();
  jQuery("#hosting_apps_bilder_dateien_section").hide();

  jQuery("#hosting_apps_verschiedenes_button_active").hide();
  jQuery("#hosting_apps_verschiedenes_section").hide();
});
//====================
//
//
//Portal  ACTIVE
jQuery("#hosting_apps_portal_button_active").click(function (e) {
  e.preventDefault();

  jQuery("#hosting_apps_portal_button_active").show();
  jQuery("#hosting_apps_portal_section").show();
  jQuery("#hosting_apps_blog_button_inactive").show();
  jQuery("#hosting_apps_foren_button_inactive").show();
  jQuery("#hosting_apps_eCommerce_button_inactive").show();
  jQuery("#hosting_apps_wiki_button_inactive").show();
  jQuery("#hosting_apps_email_button_inactive").show();
  jQuery("#hosting_apps_umfragen_button_inactive").show();
  jQuery("#hosting_apps_bilder_dateien_button_inactive").show();
  jQuery("#hosting_apps_verschiedenes_button_inactive").show();

  jQuery("#hosting_apps_portal_button_inactive").hide();

  jQuery("#hosting_apps_blog_button_active").hide();
  jQuery("#hosting_apps_blog_section").hide();

  jQuery("#hosting_apps_foren_button_active").hide();
  jQuery("#hosting_apps_foren_section").hide();

  jQuery("#hosting_apps_eCommerce_button_active").hide();
  jQuery("#hosting_apps_eCommerce_section").hide();

  jQuery("#hosting_apps_wiki_button_active").hide();
  jQuery("#hosting_apps_wiki_section").hide();

  jQuery("#hosting_apps_email_button_active").hide();
  jQuery("#hosting_apps_email_section").hide();

  jQuery("#hosting_apps_umfragen_button_active").hide();
  jQuery("#hosting_apps_umfragen_section").hide();

  jQuery("#hosting_apps_bilder_dateien_button_active").hide();
  jQuery("#hosting_apps_bilder_dateien_section").hide();

  jQuery("#hosting_apps_verschiedenes_button_active").hide();
  jQuery("#hosting_apps_verschiedenes_section").hide();
});
//====================
//
//
//Foren  INACTIVE
jQuery("#hosting_apps_foren_button_inactive").click(function (e) {
  e.preventDefault();

  jQuery("#hosting_apps_foren_button_active").show();
  jQuery("#hosting_apps_foren_section").show();
  jQuery("#hosting_apps_blog_button_inactive").show();
  jQuery("#hosting_apps_portal_button_inactive").show();
  jQuery("#hosting_apps_eCommerce_button_inactive").show();
  jQuery("#hosting_apps_wiki_button_inactive").show();
  jQuery("#hosting_apps_email_button_inactive").show();
  jQuery("#hosting_apps_umfragen_button_inactive").show();
  jQuery("#hosting_apps_bilder_dateien_button_inactive").show();
  jQuery("#hosting_apps_verschiedenes_button_inactive").show();

  jQuery("#hosting_apps_foren_button_inactive").hide();

  jQuery("#hosting_apps_blog_button_active").hide();
  jQuery("#hosting_apps_blog_section").hide();

  jQuery("#hosting_apps_portal_button_active").hide();
  jQuery("#hosting_apps_portal_section").hide();

  jQuery("#hosting_apps_eCommerce_button_active").hide();
  jQuery("#hosting_apps_eCommerce_section").hide();

  jQuery("#hosting_apps_wiki_button_active").hide();
  jQuery("#hosting_apps_wiki_section").hide();

  jQuery("#hosting_apps_email_button_active").hide();
  jQuery("#hosting_apps_email_section").hide();

  jQuery("#hosting_apps_umfragen_button_active").hide();
  jQuery("#hosting_apps_umfragen_section").hide();

  jQuery("#hosting_apps_bilder_dateien_button_active").hide();
  jQuery("#hosting_apps_bilder_dateien_section").hide();

  jQuery("#hosting_apps_verschiedenes_button_active").hide();
  jQuery("#hosting_apps_verschiedenes_section").hide();
});
//====================
//
//
//Foren  ACTIVE
jQuery("#hosting_apps_foren_button_active").click(function (e) {
  e.preventDefault();

  jQuery("#hosting_apps_foren_button_active").show();
  jQuery("#hosting_apps_foren_section").show();
  jQuery("#hosting_apps_blog_button_inactive").show();
  jQuery("#hosting_apps_portal_button_inactive").show();
  jQuery("#hosting_apps_eCommerce_button_inactive").show();
  jQuery("#hosting_apps_wiki_button_inactive").show();
  jQuery("#hosting_apps_email_button_inactive").show();
  jQuery("#hosting_apps_umfragen_button_inactive").show();
  jQuery("#hosting_apps_bilder_dateien_button_inactive").show();
  jQuery("#hosting_apps_verschiedenes_button_inactive").show();

  jQuery("#hosting_apps_foren_button_inactive").hide();

  jQuery("#hosting_apps_blog_button_active").hide();
  jQuery("#hosting_apps_blog_section").hide();

  jQuery("#hosting_apps_portal_button_active").hide();
  jQuery("#hosting_apps_portal_section").hide();

  jQuery("#hosting_apps_eCommerce_button_active").hide();
  jQuery("#hosting_apps_eCommerce_section").hide();

  jQuery("#hosting_apps_wiki_button_active").hide();
  jQuery("#hosting_apps_wiki_section").hide();

  jQuery("#hosting_apps_email_button_active").hide();
  jQuery("#hosting_apps_email_section").hide();

  jQuery("#hosting_apps_umfragen_button_active").hide();
  jQuery("#hosting_apps_umfragen_section").hide();

  jQuery("#hosting_apps_bilder_dateien_button_active").hide();
  jQuery("#hosting_apps_bilder_dateien_section").hide();

  jQuery("#hosting_apps_verschiedenes_button_active").hide();
  jQuery("#hosting_apps_verschiedenes_section").hide();
});
//====================
//
//
//eCommerce  INACTIVE
jQuery("#hosting_apps_eCommerce_button_inactive").click(function (e) {
  e.preventDefault();

  jQuery("#hosting_apps_eCommerce_button_active").show();
  jQuery("#hosting_apps_eCommerce_section").show();
  jQuery("#hosting_apps_blog_button_inactive").show();
  jQuery("#hosting_apps_portal_button_inactive").show();
  jQuery("#hosting_apps_foren_button_inactive").show();
  jQuery("#hosting_apps_wiki_button_inactive").show();
  jQuery("#hosting_apps_email_button_inactive").show();
  jQuery("#hosting_apps_umfragen_button_inactive").show();
  jQuery("#hosting_apps_bilder_dateien_button_inactive").show();
  jQuery("#hosting_apps_verschiedenes_button_inactive").show();

  jQuery("#hosting_apps_eCommerce_button_inactive").hide();

  jQuery("#hosting_apps_blog_button_active").hide();
  jQuery("#hosting_apps_blog_section").hide();

  jQuery("#hosting_apps_portal_button_active").hide();
  jQuery("#hosting_apps_portal_section").hide();

  jQuery("#hosting_apps_foren_button_active").hide();
  jQuery("#hosting_apps_foren_section").hide();

  jQuery("#hosting_apps_wiki_button_active").hide();
  jQuery("#hosting_apps_wiki_section").hide();

  jQuery("#hosting_apps_email_button_active").hide();
  jQuery("#hosting_apps_email_section").hide();

  jQuery("#hosting_apps_umfragen_button_active").hide();
  jQuery("#hosting_apps_umfragen_section").hide();

  jQuery("#hosting_apps_bilder_dateien_button_active").hide();
  jQuery("#hosting_apps_bilder_dateien_section").hide();

  jQuery("#hosting_apps_verschiedenes_button_active").hide();
  jQuery("#hosting_apps_verschiedenes_section").hide();
});
//====================
//
//
//eCommerce  ACTIVE
jQuery("#hosting_apps_eCommerce_button_active").click(function (e) {
  e.preventDefault();

  jQuery("#hosting_apps_eCommerce_button_active").show();
  jQuery("#hosting_apps_eCommerce_section").show();
  jQuery("#hosting_apps_blog_button_inactive").show();
  jQuery("#hosting_apps_portal_button_inactive").show();
  jQuery("#hosting_apps_foren_button_inactive").show();
  jQuery("#hosting_apps_wiki_button_inactive").show();
  jQuery("#hosting_apps_email_button_inactive").show();
  jQuery("#hosting_apps_umfragen_button_inactive").show();
  jQuery("#hosting_apps_bilder_dateien_button_inactive").show();
  jQuery("#hosting_apps_verschiedenes_button_inactive").show();

  jQuery("#hosting_apps_eCommerce_button_inactive").hide();

  jQuery("#hosting_apps_blog_button_active").hide();
  jQuery("#hosting_apps_blog_section").hide();

  jQuery("#hosting_apps_portal_button_active").hide();
  jQuery("#hosting_apps_portal_section").hide();

  jQuery("#hosting_apps_foren_button_active").hide();
  jQuery("#hosting_apps_foren_section").hide();

  jQuery("#hosting_apps_wiki_button_active").hide();
  jQuery("#hosting_apps_wiki_section").hide();

  jQuery("#hosting_apps_email_button_active").hide();
  jQuery("#hosting_apps_email_section").hide();

  jQuery("#hosting_apps_umfragen_button_active").hide();
  jQuery("#hosting_apps_umfragen_section").hide();

  jQuery("#hosting_apps_bilder_dateien_button_active").hide();
  jQuery("#hosting_apps_bilder_dateien_section").hide();

  jQuery("#hosting_apps_verschiedenes_button_active").hide();
  jQuery("#hosting_apps_verschiedenes_section").hide();
});
//====================
//
//
//Wiki  INACTIVE
jQuery("#hosting_apps_wiki_button_inactive").click(function (e) {
  e.preventDefault();

  jQuery("#hosting_apps_wiki_button_active").show();
  jQuery("#hosting_apps_wiki_section").show();
  jQuery("#hosting_apps_blog_button_inactive").show();
  jQuery("#hosting_apps_portal_button_inactive").show();
  jQuery("#hosting_apps_foren_button_inactive").show();
  jQuery("#hosting_apps_eCommerce_button_inactive").show();
  jQuery("#hosting_apps_email_button_inactive").show();
  jQuery("#hosting_apps_umfragen_button_inactive").show();
  jQuery("#hosting_apps_bilder_dateien_button_inactive").show();
  jQuery("#hosting_apps_verschiedenes_button_inactive").show();

  jQuery("#hosting_apps_wiki_button_inactive").hide();

  jQuery("#hosting_apps_blog_button_active").hide();
  jQuery("#hosting_apps_blog_section").hide();

  jQuery("#hosting_apps_portal_button_active").hide();
  jQuery("#hosting_apps_portal_section").hide();

  jQuery("#hosting_apps_foren_button_active").hide();
  jQuery("#hosting_apps_foren_section").hide();

  jQuery("#hosting_apps_eCommerce_button_active").hide();
  jQuery("#hosting_apps_eCommerce_section").hide();

  jQuery("#hosting_apps_email_button_active").hide();
  jQuery("#hosting_apps_email_section").hide();

  jQuery("#hosting_apps_umfragen_button_active").hide();
  jQuery("#hosting_apps_umfragen_section").hide();

  jQuery("#hosting_apps_bilder_dateien_button_active").hide();
  jQuery("#hosting_apps_bilder_dateien_section").hide();

  jQuery("#hosting_apps_verschiedenes_button_active").hide();
  jQuery("#hosting_apps_verschiedenes_section").hide();
});
//====================
//
//
//Wiki  ACTIVE
jQuery("#hosting_apps_wiki_button_active").click(function (e) {
  e.preventDefault();

  jQuery("#hosting_apps_wiki_button_active").show();
  jQuery("#hosting_apps_wiki_section").show();
  jQuery("#hosting_apps_blog_button_inactive").show();
  jQuery("#hosting_apps_portal_button_inactive").show();
  jQuery("#hosting_apps_foren_button_inactive").show();
  jQuery("#hosting_apps_eCommerce_button_inactive").show();
  jQuery("#hosting_apps_email_button_inactive").show();
  jQuery("#hosting_apps_umfragen_button_inactive").show();
  jQuery("#hosting_apps_bilder_dateien_button_inactive").show();
  jQuery("#hosting_apps_verschiedenes_button_inactive").show();

  jQuery("#hosting_apps_wiki_button_inactive").hide();

  jQuery("#hosting_apps_blog_button_active").hide();
  jQuery("#hosting_apps_blog_section").hide();

  jQuery("#hosting_apps_portal_button_active").hide();
  jQuery("#hosting_apps_portal_section").hide();

  jQuery("#hosting_apps_foren_button_active").hide();
  jQuery("#hosting_apps_foren_section").hide();

  jQuery("#hosting_apps_eCommerce_button_active").hide();
  jQuery("#hosting_apps_eCommerce_section").hide();

  jQuery("#hosting_apps_email_button_active").hide();
  jQuery("#hosting_apps_email_section").hide();

  jQuery("#hosting_apps_umfragen_button_active").hide();
  jQuery("#hosting_apps_umfragen_section").hide();

  jQuery("#hosting_apps_bilder_dateien_button_active").hide();
  jQuery("#hosting_apps_bilder_dateien_section").hide();

  jQuery("#hosting_apps_verschiedenes_button_active").hide();
  jQuery("#hosting_apps_verschiedenes_section").hide();
});
//====================
//
//
//Email  INACTIVE
jQuery("#hosting_apps_email_button_inactive").click(function (e) {
  e.preventDefault();

  jQuery("#hosting_apps_email_button_active").show();
  jQuery("#hosting_apps_email_section").show();
  jQuery("#hosting_apps_blog_button_inactive").show();
  jQuery("#hosting_apps_portal_button_inactive").show();
  jQuery("#hosting_apps_foren_button_inactive").show();
  jQuery("#hosting_apps_eCommerce_button_inactive").show();
  jQuery("#hosting_apps_wiki_button_inactive").show();
  jQuery("#hosting_apps_umfragen_button_inactive").show();
  jQuery("#hosting_apps_bilder_dateien_button_inactive").show();
  jQuery("#hosting_apps_verschiedenes_button_inactive").show();

  jQuery("#hosting_apps_email_button_inactive").hide();

  jQuery("#hosting_apps_blog_button_active").hide();
  jQuery("#hosting_apps_blog_section").hide();

  jQuery("#hosting_apps_portal_button_active").hide();
  jQuery("#hosting_apps_portal_section").hide();

  jQuery("#hosting_apps_foren_button_active").hide();
  jQuery("#hosting_apps_foren_section").hide();

  jQuery("#hosting_apps_eCommerce_button_active").hide();
  jQuery("#hosting_apps_eCommerce_section").hide();

  jQuery("#hosting_apps_wiki_button_active").hide();
  jQuery("#hosting_apps_wiki_section").hide();

  jQuery("#hosting_apps_umfragen_button_active").hide();
  jQuery("#hosting_apps_umfragen_section").hide();

  jQuery("#hosting_apps_bilder_dateien_button_active").hide();
  jQuery("#hosting_apps_bilder_dateien_section").hide();

  jQuery("#hosting_apps_verschiedenes_button_active").hide();
  jQuery("#hosting_apps_verschiedenes_section").hide();
});
//====================
//
//
//Email  ACTIVE
jQuery("#hosting_apps_email_button_active").click(function (e) {
  e.preventDefault();

  jQuery("#hosting_apps_email_button_active").show();
  jQuery("#hosting_apps_email_section").show();
  jQuery("#hosting_apps_blog_button_inactive").show();
  jQuery("#hosting_apps_portal_button_inactive").show();
  jQuery("#hosting_apps_foren_button_inactive").show();
  jQuery("#hosting_apps_eCommerce_button_inactive").show();
  jQuery("#hosting_apps_wiki_button_inactive").show();
  jQuery("#hosting_apps_umfragen_button_inactive").show();
  jQuery("#hosting_apps_bilder_dateien_button_inactive").show();
  jQuery("#hosting_apps_verschiedenes_button_inactive").show();

  jQuery("#hosting_apps_email_button_inactive").hide();

  jQuery("#hosting_apps_blog_button_active").hide();
  jQuery("#hosting_apps_blog_section").hide();

  jQuery("#hosting_apps_portal_button_active").hide();
  jQuery("#hosting_apps_portal_section").hide();

  jQuery("#hosting_apps_foren_button_active").hide();
  jQuery("#hosting_apps_foren_section").hide();

  jQuery("#hosting_apps_eCommerce_button_active").hide();
  jQuery("#hosting_apps_eCommerce_section").hide();

  jQuery("#hosting_apps_wiki_button_active").hide();
  jQuery("#hosting_apps_wiki_section").hide();

  jQuery("#hosting_apps_umfragen_button_active").hide();
  jQuery("#hosting_apps_umfragen_section").hide();

  jQuery("#hosting_apps_bilder_dateien_button_active").hide();
  jQuery("#hosting_apps_bilder_dateien_section").hide();

  jQuery("#hosting_apps_verschiedenes_button_active").hide();
  jQuery("#hosting_apps_verschiedenes_section").hide();
});
//====================
//
//
//Umfragen  INACTIVE
jQuery("#hosting_apps_umfragen_button_inactive").click(function (e) {
  e.preventDefault();

  jQuery("#hosting_apps_umfragen_button_active").show();
  jQuery("#hosting_apps_umfragen_section").show();
  jQuery("#hosting_apps_blog_button_inactive").show();
  jQuery("#hosting_apps_portal_button_inactive").show();
  jQuery("#hosting_apps_foren_button_inactive").show();
  jQuery("#hosting_apps_eCommerce_button_inactive").show();
  jQuery("#hosting_apps_wiki_button_inactive").show();
  jQuery("#hosting_apps_email_button_inactive").show();
  jQuery("#hosting_apps_bilder_dateien_button_inactive").show();
  jQuery("#hosting_apps_verschiedenes_button_inactive").show();

  jQuery("#hosting_apps_umfragen_button_inactive").hide();

  jQuery("#hosting_apps_blog_button_active").hide();
  jQuery("#hosting_apps_blog_section").hide();

  jQuery("#hosting_apps_portal_button_active").hide();
  jQuery("#hosting_apps_portal_section").hide();

  jQuery("#hosting_apps_foren_button_active").hide();
  jQuery("#hosting_apps_foren_section").hide();

  jQuery("#hosting_apps_eCommerce_button_active").hide();
  jQuery("#hosting_apps_eCommerce_section").hide();

  jQuery("#hosting_apps_wiki_button_active").hide();
  jQuery("#hosting_apps_wiki_section").hide();

  jQuery("#hosting_apps_email_button_active").hide();
  jQuery("#hosting_apps_email_section").hide();

  jQuery("#hosting_apps_bilder_dateien_button_active").hide();
  jQuery("#hosting_apps_bilder_dateien_section").hide();

  jQuery("#hosting_apps_verschiedenes_button_active").hide();
  jQuery("#hosting_apps_verschiedenes_section").hide();
});
//====================
//
//
//Umfragen  ACTIVE
jQuery("#hosting_apps_umfragen_button_active").click(function (e) {
  e.preventDefault();

  jQuery("#hosting_apps_umfragen_button_active").show();
  jQuery("#hosting_apps_umfragen_section").show();
  jQuery("#hosting_apps_blog_button_inactive").show();
  jQuery("#hosting_apps_portal_button_inactive").show();
  jQuery("#hosting_apps_foren_button_inactive").show();
  jQuery("#hosting_apps_eCommerce_button_inactive").show();
  jQuery("#hosting_apps_wiki_button_inactive").show();
  jQuery("#hosting_apps_email_button_inactive").show();
  jQuery("#hosting_apps_bilder_dateien_button_inactive").show();
  jQuery("#hosting_apps_verschiedenes_button_inactive").show();

  jQuery("#hosting_apps_umfragen_button_inactive").hide();

  jQuery("#hosting_apps_blog_button_active").hide();
  jQuery("#hosting_apps_blog_section").hide();

  jQuery("#hosting_apps_portal_button_active").hide();
  jQuery("#hosting_apps_portal_section").hide();

  jQuery("#hosting_apps_foren_button_active").hide();
  jQuery("#hosting_apps_foren_section").hide();

  jQuery("#hosting_apps_eCommerce_button_active").hide();
  jQuery("#hosting_apps_eCommerce_section").hide();

  jQuery("#hosting_apps_wiki_button_active").hide();
  jQuery("#hosting_apps_wiki_section").hide();

  jQuery("#hosting_apps_email_button_active").hide();
  jQuery("#hosting_apps_email_section").hide();

  jQuery("#hosting_apps_bilder_dateien_button_active").hide();
  jQuery("#hosting_apps_bilder_dateien_section").hide();

  jQuery("#hosting_apps_verschiedenes_button_active").hide();
  jQuery("#hosting_apps_verschiedenes_section").hide();
});
//====================
//
//
//Bilder und Dateien  INACTIVE
jQuery("#hosting_apps_bilder_dateien_button_inactive").click(function (e) {
  e.preventDefault();

  jQuery("#hosting_apps_bilder_dateien_button_active").show();
  jQuery("#hosting_apps_bilder_dateien_section").show();
  jQuery("#hosting_apps_blog_button_inactive").show();
  jQuery("#hosting_apps_portal_button_inactive").show();
  jQuery("#hosting_apps_foren_button_inactive").show();
  jQuery("#hosting_apps_eCommerce_button_inactive").show();
  jQuery("#hosting_apps_wiki_button_inactive").show();
  jQuery("#hosting_apps_email_button_inactive").show();
  jQuery("#hosting_apps_umfragen_button_inactive").show();
  jQuery("#hosting_apps_verschiedenes_button_inactive").show();

  jQuery("#hosting_apps_bilder_dateien_button_inactive").hide();

  jQuery("#hosting_apps_blog_button_active").hide();
  jQuery("#hosting_apps_blog_section").hide();

  jQuery("#hosting_apps_portal_button_active").hide();
  jQuery("#hosting_apps_portal_section").hide();

  jQuery("#hosting_apps_foren_button_active").hide();
  jQuery("#hosting_apps_foren_section").hide();

  jQuery("#hosting_apps_eCommerce_button_active").hide();
  jQuery("#hosting_apps_eCommerce_section").hide();

  jQuery("#hosting_apps_wiki_button_active").hide();
  jQuery("#hosting_apps_wiki_section").hide();

  jQuery("#hosting_apps_email_button_active").hide();
  jQuery("#hosting_apps_email_section").hide();

  jQuery("#hosting_apps_umfragen_button_active").hide();
  jQuery("#hosting_apps_umfragen_section").hide();

  jQuery("#hosting_apps_verschiedenes_button_active").hide();
  jQuery("#hosting_apps_verschiedenes_section").hide();
});
//====================
//
//
//Bilder und Dateien  ACTIVE
jQuery("#hosting_apps_bilder_dateien_button_active").click(function (e) {
  e.preventDefault();

  jQuery("#hosting_apps_bilder_dateien_button_active").show();
  jQuery("#hosting_apps_bilder_dateien_section").show();
  jQuery("#hosting_apps_blog_button_inactive").show();
  jQuery("#hosting_apps_portal_button_inactive").show();
  jQuery("#hosting_apps_foren_button_inactive").show();
  jQuery("#hosting_apps_eCommerce_button_inactive").show();
  jQuery("#hosting_apps_wiki_button_inactive").show();
  jQuery("#hosting_apps_email_button_inactive").show();
  jQuery("#hosting_apps_umfragen_button_inactive").show();
  jQuery("#hosting_apps_verschiedenes_button_inactive").show();

  jQuery("#hosting_apps_bilder_dateien_button_inactive").hide();

  jQuery("#hosting_apps_blog_button_active").hide();
  jQuery("#hosting_apps_blog_section").hide();

  jQuery("#hosting_apps_portal_button_active").hide();
  jQuery("#hosting_apps_portal_section").hide();

  jQuery("#hosting_apps_foren_button_active").hide();
  jQuery("#hosting_apps_foren_section").hide();

  jQuery("#hosting_apps_eCommerce_button_active").hide();
  jQuery("#hosting_apps_eCommerce_section").hide();

  jQuery("#hosting_apps_wiki_button_active").hide();
  jQuery("#hosting_apps_wiki_section").hide();

  jQuery("#hosting_apps_email_button_active").hide();
  jQuery("#hosting_apps_email_section").hide();

  jQuery("#hosting_apps_umfragen_button_active").hide();
  jQuery("#hosting_apps_umfragen_section").hide();

  jQuery("#hosting_apps_verschiedenes_button_active").hide();
  jQuery("#hosting_apps_verschiedenes_section").hide();
});
//====================
//
//
//Verschiedenes  INACTIVE
jQuery("#hosting_apps_verschiedenes_button_inactive").click(function (e) {
  e.preventDefault();

  jQuery("#hosting_apps_verschiedenes_button_active").show();
  jQuery("#hosting_apps_verschiedenes_section").show();
  jQuery("#hosting_apps_blog_button_inactive").show();
  jQuery("#hosting_apps_portal_button_inactive").show();
  jQuery("#hosting_apps_foren_button_inactive").show();
  jQuery("#hosting_apps_eCommerce_button_inactive").show();
  jQuery("#hosting_apps_wiki_button_inactive").show();
  jQuery("#hosting_apps_email_button_inactive").show();
  jQuery("#hosting_apps_umfragen_button_inactive").show();
  jQuery("#hosting_apps_bilder_dateien_button_inactive").show();

  jQuery("#hosting_apps_verschiedenes_button_inactive").hide();

  jQuery("#hosting_apps_blog_button_active").hide();
  jQuery("#hosting_apps_blog_section").hide();

  jQuery("#hosting_apps_portal_button_active").hide();
  jQuery("#hosting_apps_portal_section").hide();

  jQuery("#hosting_apps_foren_button_active").hide();
  jQuery("#hosting_apps_foren_section").hide();

  jQuery("#hosting_apps_eCommerce_button_active").hide();
  jQuery("#hosting_apps_eCommerce_section").hide();

  jQuery("#hosting_apps_wiki_button_active").hide();
  jQuery("#hosting_apps_wiki_section").hide();

  jQuery("#hosting_apps_email_button_active").hide();
  jQuery("#hosting_apps_email_section").hide();

  jQuery("#hosting_apps_umfragen_button_active").hide();
  jQuery("#hosting_apps_umfragen_section").hide();

  jQuery("#hosting_apps_bilder_dateien_button_active").hide();
  jQuery("#hosting_apps_bilder_dateien_section").hide();
});
//====================
//
//
//Verschiedenes  ACTIVE
jQuery("#hosting_apps_verschiedenes_button_active").click(function (e) {
  e.preventDefault();

  jQuery("#hosting_apps_verschiedenes_button_active").show();
  jQuery("#hosting_apps_verschiedenes_section").show();
  jQuery("#hosting_apps_blog_button_inactive").show();
  jQuery("#hosting_apps_portal_button_inactive").show();
  jQuery("#hosting_apps_foren_button_inactive").show();
  jQuery("#hosting_apps_eCommerce_button_inactive").show();
  jQuery("#hosting_apps_wiki_button_inactive").show();
  jQuery("#hosting_apps_email_button_inactive").show();
  jQuery("#hosting_apps_umfragen_button_inactive").show();
  jQuery("#hosting_apps_bilder_dateien_button_inactive").show();

  jQuery("#hosting_apps_verschiedenes_button_inactive").hide();

  jQuery("#hosting_apps_blog_button_active").hide();
  jQuery("#hosting_apps_blog_section").hide();

  jQuery("#hosting_apps_portal_button_active").hide();
  jQuery("#hosting_apps_portal_section").hide();

  jQuery("#hosting_apps_foren_button_active").hide();
  jQuery("#hosting_apps_foren_section").hide();

  jQuery("#hosting_apps_eCommerce_button_active").hide();
  jQuery("#hosting_apps_eCommerce_section").hide();

  jQuery("#hosting_apps_wiki_button_active").hide();
  jQuery("#hosting_apps_wiki_section").hide();

  jQuery("#hosting_apps_email_button_active").hide();
  jQuery("#hosting_apps_email_section").hide();

  jQuery("#hosting_apps_umfragen_button_active").hide();
  jQuery("#hosting_apps_umfragen_section").hide();

  jQuery("#hosting_apps_bilder_dateien_button_active").hide();
  jQuery("#hosting_apps_bilder_dateien_section").hide();
});
//====================
//
// HOSTING Preistabelle Formular Toggle
jQuery(".hosting_preistabelle_button").click(function (e) {
  e.preventDefault();
  jQuery("#hosting_preistabelle_formular_section").slideToggle();
  jQuery(".hosting_preistabelle_button").toggleClass("opened closed");
});
// ====================================

/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/*                    SOCIAL MEDIA                   */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */

/* ************************************************* */
/*                  JS HIDE SHOW                     */
/* ************************************************* */

jQuery(document).ready(function () {
  // HIDE THINGS ON PAGE SOCIAL MEDIA
  // HIDE SOCIAL ICONS AND TEXTS
  jQuery("#sm_facebook_inactive").hide();
  jQuery("#sm_instagram_active").hide();
  jQuery("#sm_instagram_text").hide();
  jQuery("#sm_pinterest_active").hide();
  jQuery("#sm_pinterest_text").hide();
  jQuery("#sm_googleplus_active").hide();
  jQuery("#sm_googleplus_text").hide();
  jQuery("#sm_youtube_active").hide();
  jQuery("#sm_youtube_text").hide();
  jQuery("#sm_linkedin_active").hide();
  jQuery("#sm_linkedin_text").hide();
  //============
});

//BUTTON FUNCTIONS ON PAGE SOCIAL MEDIA
//Facebook Button Inactive
jQuery("#sm_facebook_inactive").click(function (e) {
  e.preventDefault();
  jQuery("#sm_facebook_active").show();
  jQuery("#sm_facebook_text").show();
  jQuery("#sm_instagram_inactive").show();
  jQuery("#sm_pinterest_inactive").show();
  jQuery("#sm_googleplus_inactive").show();
  jQuery("#sm_youtube_inactive").show();
  jQuery("#sm_linkedin_inactive").show();

  jQuery("#sm_facebook_inactive").hide();
  jQuery("#sm_instagram_active").hide();
  jQuery("#sm_instagram_text").hide();
  jQuery("#sm_pinterest_active").hide();
  jQuery("#sm_pinterest_text").hide();
  jQuery("#sm_googleplus_active").hide();
  jQuery("#sm_googleplus_text").hide();
  jQuery("#sm_youtube_active").hide();
  jQuery("#sm_youtube_text").hide();
  jQuery("#sm_linkedin_active").hide();
  jQuery("#sm_linkedin_text").hide();
});
//=====================================
//
//Facebook Button Active
jQuery("#sm_facebook_active").click(function (e) {
  e.preventDefault();
  jQuery("#sm_facebook_active").show();
  jQuery("#sm_facebook_text").show();
  jQuery("#sm_instagram_inactive").show();
  jQuery("#sm_pinterest_inactive").show();
  jQuery("#sm_googleplus_inactive").show();
  jQuery("#sm_youtube_inactive").show();
  jQuery("#sm_linkedin_inactive").show();

  jQuery("#sm_facebook_inactive").hide();
  jQuery("#sm_instagram_active").hide();
  jQuery("#sm_instagram_text").hide();
  jQuery("#sm_pinterest_active").hide();
  jQuery("#sm_pinterest_text").hide();
  jQuery("#sm_googleplus_active").hide();
  jQuery("#sm_googleplus_text").hide();
  jQuery("#sm_youtube_active").hide();
  jQuery("#sm_youtube_text").hide();
  jQuery("#sm_linkedin_active").hide();
  jQuery("#sm_linkedin_text").hide();
});
//=====================================
//
//Instagram Button Inactive
jQuery("#sm_instagram_inactive").click(function (e) {
  e.preventDefault();
  jQuery("#sm_instagram_active").show();
  jQuery("#sm_instagram_text").show();
  jQuery("#sm_facebook_inactive").show();
  jQuery("#sm_pinterest_inactive").show();
  jQuery("#sm_googleplus_inactive").show();
  jQuery("#sm_youtube_inactive").show();
  jQuery("#sm_linkedin_inactive").show();

  jQuery("#sm_instagram_inactive").hide();
  jQuery("#sm_facebook_active").hide();
  jQuery("#sm_facebook_text").hide();
  jQuery("#sm_pinterest_active").hide();
  jQuery("#sm_pinterest_text").hide();
  jQuery("#sm_googleplus_active").hide();
  jQuery("#sm_googleplus_text").hide();
  jQuery("#sm_youtube_active").hide();
  jQuery("#sm_youtube_text").hide();
  jQuery("#sm_linkedin_active").hide();
  jQuery("#sm_linkedin_text").hide();
});
//=====================================
//
//Instagram Button Active
jQuery("#sm_instagram_active").click(function (e) {
  e.preventDefault();
  jQuery("#sm_instagram_active").show();
  jQuery("#sm_instagram_text").show();
  jQuery("#sm_facebook_inactive").show();
  jQuery("#sm_pinterest_inactive").show();
  jQuery("#sm_googleplus_inactive").show();
  jQuery("#sm_youtube_inactive").show();
  jQuery("#sm_linkedin_inactive").show();

  jQuery("#sm_instagram_inactive").hide();
  jQuery("#sm_facebook_active").hide();
  jQuery("#sm_facebook_text").hide();
  jQuery("#sm_pinterest_active").hide();
  jQuery("#sm_pinterest_text").hide();
  jQuery("#sm_googleplus_active").hide();
  jQuery("#sm_googleplus_text").hide();
  jQuery("#sm_youtube_active").hide();
  jQuery("#sm_youtube_text").hide();
  jQuery("#sm_linkedin_active").hide();
  jQuery("#sm_linkedin_text").hide();
});
//=====================================
//
//Pinterest Button Inactive
jQuery("#sm_pinterest_inactive").click(function (e) {
  e.preventDefault();
  jQuery("#sm_pinterest_active").show();
  jQuery("#sm_pinterest_text").show();
  jQuery("#sm_facebook_inactive").show();
  jQuery("#sm_instagram_inactive").show();
  jQuery("#sm_googleplus_inactive").show();
  jQuery("#sm_youtube_inactive").show();
  jQuery("#sm_linkedin_inactive").show();

  jQuery("#sm_pinterest_inactive").hide();
  jQuery("#sm_facebook_active").hide();
  jQuery("#sm_facebook_text").hide();
  jQuery("#sm_instagram_active").hide();
  jQuery("#sm_instagram_text").hide();
  jQuery("#sm_googleplus_active").hide();
  jQuery("#sm_googleplus_text").hide();
  jQuery("#sm_youtube_active").hide();
  jQuery("#sm_youtube_text").hide();
  jQuery("#sm_linkedin_active").hide();
  jQuery("#sm_linkedin_text").hide();
});
//=====================================
//
//Pinterest Button Active
jQuery("#sm_pinterest_active").click(function (e) {
  e.preventDefault();
  jQuery("#sm_pinterest_active").show();
  jQuery("#sm_pinterest_text").show();
  jQuery("#sm_facebook_inactive").show();
  jQuery("#sm_instagram_inactive").show();
  jQuery("#sm_googleplus_inactive").show();
  jQuery("#sm_youtube_inactive").show();
  jQuery("#sm_linkedin_inactive").show();

  jQuery("#sm_pinterest_inactive").hide();
  jQuery("#sm_facebook_active").hide();
  jQuery("#sm_facebook_text").hide();
  jQuery("#sm_instagram_active").hide();
  jQuery("#sm_instagram_text").hide();
  jQuery("#sm_googleplus_active").hide();
  jQuery("#sm_googleplus_text").hide();
  jQuery("#sm_youtube_active").hide();
  jQuery("#sm_youtube_text").hide();
  jQuery("#sm_linkedin_active").hide();
  jQuery("#sm_linkedin_text").hide();
});
//=====================================
//
//Google Plus Button Inactive
jQuery("#sm_googleplus_inactive").click(function (e) {
  e.preventDefault();
  jQuery("#sm_googleplus_active").show();
  jQuery("#sm_googleplus_text").show();
  jQuery("#sm_facebook_inactive").show();
  jQuery("#sm_instagram_inactive").show();
  jQuery("#sm_pinterest_inactive").show();
  jQuery("#sm_youtube_inactive").show();
  jQuery("#sm_linkedin_inactive").show();

  jQuery("#sm_googleplus_inactive").hide();
  jQuery("#sm_facebook_active").hide();
  jQuery("#sm_facebook_text").hide();
  jQuery("#sm_instagram_active").hide();
  jQuery("#sm_instagram_text").hide();
  jQuery("#sm_pinterest_active").hide();
  jQuery("#sm_pinterest_text").hide();
  jQuery("#sm_youtube_active").hide();
  jQuery("#sm_youtube_text").hide();
  jQuery("#sm_linkedin_active").hide();
  jQuery("#sm_linkedin_text").hide();
});
//=====================================
//
//Google Plus Button Active
jQuery("#sm_googleplus_active").click(function (e) {
  e.preventDefault();
  jQuery("#sm_googleplus_active").show();
  jQuery("#sm_googleplus_text").show();
  jQuery("#sm_facebook_inactive").show();
  jQuery("#sm_instagram_inactive").show();
  jQuery("#sm_pinterest_inactive").show();
  jQuery("#sm_youtube_inactive").show();
  jQuery("#sm_linkedin_inactive").show();

  jQuery("#sm_googleplus_inactive").hide();
  jQuery("#sm_facebook_active").hide();
  jQuery("#sm_facebook_text").hide();
  jQuery("#sm_instagram_active").hide();
  jQuery("#sm_instagram_text").hide();
  jQuery("#sm_pinterest_active").hide();
  jQuery("#sm_pinterest_text").hide();
  jQuery("#sm_youtube_active").hide();
  jQuery("#sm_youtube_text").hide();
  jQuery("#sm_linkedin_active").hide();
  jQuery("#sm_linkedin_text").hide();
});
//=====================================
//
//Youtube Button Inactive
jQuery("#sm_youtube_inactive").click(function (e) {
  e.preventDefault();
  jQuery("#sm_youtube_active").show();
  jQuery("#sm_youtube_text").show();
  jQuery("#sm_facebook_inactive").show();
  jQuery("#sm_instagram_inactive").show();
  jQuery("#sm_pinterest_inactive").show();
  jQuery("#sm_googleplus_inactive").show();
  jQuery("#sm_linkedin_inactive").show();

  jQuery("#sm_youtube_inactive").hide();
  jQuery("#sm_facebook_active").hide();
  jQuery("#sm_facebook_text").hide();
  jQuery("#sm_instagram_active").hide();
  jQuery("#sm_instagram_text").hide();
  jQuery("#sm_pinterest_active").hide();
  jQuery("#sm_pinterest_text").hide();
  jQuery("#sm_googleplus_active").hide();
  jQuery("#sm_googleplus_text").hide();
  jQuery("#sm_linkedin_active").hide();
  jQuery("#sm_linkedin_text").hide();
});
//=====================================
//
//Youtube Button Active
jQuery("#sm_youtube_active").click(function (e) {
  e.preventDefault();
  jQuery("#sm_youtube_active").show();
  jQuery("#sm_youtube_text").show();
  jQuery("#sm_facebook_inactive").show();
  jQuery("#sm_instagram_inactive").show();
  jQuery("#sm_pinterest_inactive").show();
  jQuery("#sm_googleplus_inactive").show();
  jQuery("#sm_linkedin_inactive").show();

  jQuery("#sm_youtube_inactive").hide();
  jQuery("#sm_facebook_active").hide();
  jQuery("#sm_facebook_text").hide();
  jQuery("#sm_instagram_active").hide();
  jQuery("#sm_instagram_text").hide();
  jQuery("#sm_pinterest_active").hide();
  jQuery("#sm_pinterest_text").hide();
  jQuery("#sm_googleplus_active").hide();
  jQuery("#sm_googleplus_text").hide();
  jQuery("#sm_linkedin_active").hide();
  jQuery("#sm_linkedin_text").hide();
});
//=====================================
//
//LinkedIn Button Inactive
jQuery("#sm_linkedin_inactive").click(function (e) {
  e.preventDefault();
  jQuery("#sm_linkedin_active").show();
  jQuery("#sm_linkedin_text").show();
  jQuery("#sm_facebook_inactive").show();
  jQuery("#sm_instagram_inactive").show();
  jQuery("#sm_pinterest_inactive").show();
  jQuery("#sm_googleplus_inactive").show();
  jQuery("#sm_youtube_inactive").show();

  jQuery("#sm_linkedin_inactive").hide();
  jQuery("#sm_facebook_active").hide();
  jQuery("#sm_facebook_text").hide();
  jQuery("#sm_instagram_active").hide();
  jQuery("#sm_instagram_text").hide();
  jQuery("#sm_pinterest_active").hide();
  jQuery("#sm_pinterest_text").hide();
  jQuery("#sm_googleplus_active").hide();
  jQuery("#sm_googleplus_text").hide();
  jQuery("#sm_youtube_active").hide();
  jQuery("#sm_youtube_text").hide();
});
//=====================================
//
//LinkedIn Button Active
jQuery("#sm_linkedin_active").click(function (e) {
  e.preventDefault();
  jQuery("#sm_linkedin_active").show();
  jQuery("#sm_linkedin_text").show();
  jQuery("#sm_facebook_inactive").show();
  jQuery("#sm_instagram_inactive").show();
  jQuery("#sm_pinterest_inactive").show();
  jQuery("#sm_googleplus_inactive").show();
  jQuery("#sm_youtube_inactive").show();

  jQuery("#sm_linkedin_inactive").hide();
  jQuery("#sm_facebook_active").hide();
  jQuery("#sm_facebook_text").hide();
  jQuery("#sm_instagram_active").hide();
  jQuery("#sm_instagram_text").hide();
  jQuery("#sm_pinterest_active").hide();
  jQuery("#sm_pinterest_text").hide();
  jQuery("#sm_googleplus_active").hide();
  jQuery("#sm_googleplus_text").hide();
  jQuery("#sm_youtube_active").hide();
  jQuery("#sm_youtube_text").hide();
});
//=====================================

/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/*                   ÜBERSETZUNGEN                   */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */
/* ************************************************* */

/* ************************************************* */
/*              JS HIDE SHOW SECTIONS                */
/* ************************************************* */

jQuery(document).ready(function () {
  //Hide Things on Page Uebersetzungen
  jQuery("#uebersetzungen_preise_normale_texte_btn_inactive").hide();
  jQuery("#uebersetzungen_preise_fachtexte_btn_active").hide();
  jQuery("#uebersetzungen_preise_fachtexte_section").hide();
  //==================================
});

//UEBERSETZUNGEN Preistabelle Normale Texte Button Inactive
jQuery("#uebersetzungen_preise_normale_texte_btn_inactive").click(function (e) {
  e.preventDefault();
  jQuery("#uebersetzungen_preise_normale_texte_btn_active").show();
  jQuery("#uebersetzungen_preise_normale_texte_section").show();
  jQuery("#uebersetzungen_preise_fachtexte_btn_inactive").show();
  jQuery("#uebersetzungen_preise_normale_texte_btn_inactive").hide();
  jQuery("#uebersetzungen_preise_fachtexte_btn_active").hide();
  jQuery("#uebersetzungen_preise_fachtexte_section").hide();
});
//=======================================================
//
//UEBERSETZUNGEN Preistabelle Normale Texte Button Active
jQuery("#uebersetzungen_preise_normale_texte_btn_active").click(function (e) {
  e.preventDefault();
  jQuery("#uebersetzungen_preise_normale_texte_btn_active").show();
  jQuery("#uebersetzungen_preise_normale_texte_section").show();
  jQuery("#uebersetzungen_preise_fachtexte_btn_inactive").show();
  jQuery("#uebersetzungen_preise_normale_texte_btn_inactive").hide();
  jQuery("#uebersetzungen_preise_fachtexte_btn_active").hide();
  jQuery("#uebersetzungen_preise_fachtexte_section").hide();
});
//=======================================================
//
//UEBERSETZUNGEN Preistabelle Fachtexte Button Inactive
jQuery("#uebersetzungen_preise_fachtexte_btn_inactive").click(function (e) {
  e.preventDefault();
  jQuery("#uebersetzungen_preise_fachtexte_btn_active").show();
  jQuery("#uebersetzungen_preise_fachtexte_section").show();
  jQuery("#uebersetzungen_preise_normale_texte_btn_inactive").show();
  jQuery("#uebersetzungen_preise_fachtexte_btn_inactive").hide();
  jQuery("#uebersetzungen_preise_normale_texte_btn_active").hide();
  jQuery("#uebersetzungen_preise_normale_texte_section").hide();
});
//=======================================================
//
//UEBERSETZUNGEN Preistabelle Fachtexte Button Active
jQuery("#uebersetzungen_preise_fachtexte_btn_active").click(function (e) {
  e.preventDefault();
  jQuery("#uebersetzungen_preise_fachtexte_btn_active").show();
  jQuery("#uebersetzungen_preise_fachtexte_section").show();
  jQuery("#uebersetzungen_preise_normale_texte_btn_inactive").show();
  jQuery("#uebersetzungen_preise_fachtexte_btn_inactive").hide();
  jQuery("#uebersetzungen_preise_normale_texte_btn_active").hide();
  jQuery("#uebersetzungen_preise_normale_texte_section").hide();
});
//=======================================================
