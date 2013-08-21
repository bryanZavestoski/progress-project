$('.facebook').on('click', function() {
    var w = 580, h = 300,
            left = (screen.width/2)-(w/2),
            top = (screen.height/2)-(h/2);


        if ((screen.width < 480) || (screen.height < 480)) {
            window.open ('http://www.facebook.com/sharer/sharer.php?s=100&p[url]=http://bit.ly/progressmfg&p[images][0]=&p[title]=Progress%20Project%20on%20Kickstarter&p[summary]=Repurposed,%20one-of-a-kind%20bags%20by%20Progress%20Project%20on%20Kickstarter', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
        } else {
            window.open ('http://www.facebook.com/sharer/sharer.php?s=100&p[url]=http://bit.ly/progressmfg&p[images][0]=&p[title]=Progress%20Project%20on%20Kickstarter&p[summary]=Repurposed,%20one-of-a-kind%20bags%20by%20Progress%20Project%20on%20Kickstarter', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
        }
});

$('.twitter').on('click', function() {
    var loc = encodeURIComponent('http://bit.ly/progressmfg'),
            title = "Repurposed, one-of-a-kind bags by @progressproject on @kickstarter — ",
            w = 580, h = 300,
            left = (screen.width/2)-(w/2),
            top = (screen.height/2)-(h/2);

        window.open('http://twitter.com/share?text=' + title + '&url=' + loc, '', 'height=' + h + ', width=' + w + ', top='+top +', left='+ left +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
});