<div id="ss_menu">
    <div>
        <a href="https://www.jqueryscript.net/menu/">Menu</a> 1
    </div>
    <div>
        Menu 3
    </div>
    <div>
        Menu 4
    </div>
    <div>
        Menu 5
    </div>
    <div class="menu">
        <div class="share" id="ss_toggle" data-rot="180">
            <div class="circle"></div>
            <div class="bar"></div>
        </div>
    </div>
</div>

<script src="//code.jquery.com/jquery-2.1.4.min.js"></script> 
<script>
    $(document).ready(function(ev) {
        var toggle = $('#ss_toggle');
        var menu = $('#ss_menu');
        var rot;

        $('#ss_toggle').on('click', function(ev) {
            rot = parseInt($(this).data('rot')) - 180;
            menu.css('transform', 'rotate(' + rot + 'deg)');
            menu.css('webkitTransform', 'rotate(' + rot + 'deg)');
            if ((rot / 180) % 2 == 0) {
                //Moving in
                toggle.parent().addClass('ss_active');
                toggle.addClass('close');
            } else {
                //Moving Out
                toggle.parent().removeClass('ss_active');
                toggle.removeClass('close');
            }
            $(this).data('rot', rot);
        });

        menu.on('transitionend webkitTransitionEnd oTransitionEnd', function() {
            if ((rot / 180) % 2 == 0) {
                $('#ss_menu div i').addClass('ss_animate');
            } else {
                $('#ss_menu div i').removeClass('ss_animate');
            }
        });

    });
</script>