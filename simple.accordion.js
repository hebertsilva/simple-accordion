(function($) {
    var SimpleAccordion = function( el ) {
        this.accordion = el;

        // all accordion
        this.accordionContentAll = $('[data-simple-accordion-content]');
        this.accordionToggleAll = $('[data-simple-accordion-toggle]');

        // single accordion current
        this.accordionToggle = $('[data-simple-accordion-toggle]', this.accordion);
        this.accordionContent = $('[data-simple-accordion-content]', this.accordion);
        
        // event
        this.accordionToggle.on('click', $.proxy(this, 'accordionHandler'));
    }

    SimpleAccordion.prototype = {
        accordionHandler: function( event ) {
            event.preventDefault();
            var that = this,
                target = $(event.currentTarget);

            if ( this.accordion.data('simple-accordion') === 'close' ) {
                if ( target.parents(this.accordion).find(this.accordionContent).is(':visible') ) {
                    this.showCurrentAccordion( target );
                } else {
                    this.hideAllAccordion();
                    this.showCurrentAccordion( target );
                }
            } else {
                this.showCurrentAccordion( target );
            }
        },

        showCurrentAccordion: function( target ) {
            target.toggleClass('active');
            target.parents(this.accordion).find(this.accordionContent).stop().slideToggle('fast');
        },

        hideAllAccordion: function() {
            this.accordionToggleAll.removeClass('active');
            this.accordionContentAll.stop().slideUp('fast');
        }
    }

    $(function() {
        $('[data-simple-accordion]').each(function() {
            new SimpleAccordion( $(this) );
        });
    });
})(jQuery);
