jQuery(window).bind("load", function() {
    changeMapInfoboxWidth();
    setEqualColumnHeights();
});

function changeMapInfoboxWidth() {
    if (typeof markers[0] === 'undefined'){
        setTimeout(changeMapInfoboxWidth, 200);
    }
    else {
        var tempInfoBoxContent = jQuery(".info-window").html();
        if (typeof tempInfoBoxContent === 'undefined') {
            setTimeout(changeMapInfoboxWidth, 200); 
        }
        else {
            jQuery(".info-window").html("<span>" + tempInfoBoxContent + "</span>");
            var infoBoxTextWidth = jQuery(".info-window>span").width();

            var newInfoboxOptions = {
                pixelOffset: new google.maps.Size(-infoBoxTextWidth/2, 10)
                ,boxStyle: { 
                    width: null
                }
            };
            markers[0]['infowindow'].setOptions(newInfoboxOptions);
        }
        
    }

}
    

function setEqualColumnHeights() {
    var paragraphs = jQuery("#services .content-container p");
    var maxHeight = 0;
    if (typeof paragraphs !== 'undefined') {
        paragraphs.each(function() {
            var height = jQuery(this).height();
            if (height>maxHeight)
                maxHeight = height;
        });
         paragraphs.each(function() {
            jQuery(this).height(maxHeight);
        });
    }
}