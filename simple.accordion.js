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
        this.accordionToggle.on('click', $.proxy(this, 'showAccordionHandler'));
    }

    SimpleAccordion.prototype = {
        showAccordionHandler: function( event ) {
            event.preventDefault();
            var that = this,
                target = $(event.currentTarget);

            if ( this.accordion.data('simple-accordion') === 'close' ) {
                if ( target.parents(this.accordion).find(this.accordionContent).is(':visible') ) {
                    this.showDefaultAccordion( target );
                } else {
                    this.hideAllAccordion( target );
                }
            } else {
                this.showDefaultAccordion( target );
            }
        },

        showDefaultAccordion: function( target ) {
            target.toggleClass('active');
            target.parents(this.accordion).find(this.accordionContent).stop().slideToggle('fast');
        },

        hideAllAccordion: function( target ) {
            this.accordionToggleAll.removeClass('active');
            this.accordionContentAll.stop().slideUp('fast');
            this.showDefaultAccordion( target );
        }
    }

    $(function() {
        $('[data-simple-accordion]').each(function() {
            new SimpleAccordion( $(this) );
        });
    });
})(jQuery);
