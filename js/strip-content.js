// *** Limit Content ( See More / See Less ) ***

var showChar = 256;
var ellipsestext = "...";
var moretext = "See More";
var lesstext = "See Less";
$('.comments-space').each(function () {
    var content = $(this).html();
    if (content.length > showChar) {
        var show_content = content.substr(0, showChar);
        var hide_content = content.substr(showChar, content.length - showChar);
        var html = show_content + '<span class="moreelipses">' + ellipsestext + '</span><span class="remaining-content"><span>' + hide_content + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
        $(this).html(html);
    }
});

$(".morelink").click(function () {
    if ($(this).hasClass("less")) {
        $(this).removeClass("less");
        $(this).html(moretext);
    } else {
        $(this).addClass("less");
        $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
});

// *** Limit Content & add link to ( See More / See Less ) ***

var showChar = 256;
var ellipsestext = "...";
var moretext = "<a href='https://google.com/' target='_blank'>See More</a>";
$('.comments-space-with-link').each(function () {
    var content = $(this).html();
    if (content.length > showChar) {
        var show_content = content.substr(0, showChar);
        var hide_content = content.substr(showChar, content.length - showChar);
        var html = show_content + '<span class="moreelipses">' + ellipsestext + '</span><span class="remaining-content"><span>' + hide_content + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
        $(this).html(html);
    }
});

// *** Load More Table Rows ***

$(document).ready(function() {

  var pagelength = 10;
  var pageIndex = 1;
  //hide all tr greater than page length
  var selector = "tr:gt(" + pagelength + ")";
  $(selector).hide();
  
  $(".tbl-loadMore-btn").click(function(){
  	var itemsCount = ((pageIndex * pagelength) + pagelength);   
  	var selector = "tr:lt(" + itemsCount + ")";
  	$(selector).show();
    pageIndex++;
  });
  
});

/* New Lines for watch */

$(document).ready(function() {
  console.log('I will delete this codes');
});
