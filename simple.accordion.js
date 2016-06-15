(function($) {
    var SimpleAccordion = function( el ) {
        this.el = el;
        this.accordion = $('[data-simple-accordion]', this.el)
        this.accordionToggle = $('[data-simple-accordion-toggle]', this.el);
        this.accordionContent = $('[data-simple-accordion-content]', this.el);
        
        this.accordionToggle.on('click', $.proxy(this, 'showAccordionHandler'));
    }

    SimpleAccordion.prototype = {
        showAccordionHandler: function( event ) {
           event.preventDefault();
           var target = $(event.currentTarget);
           target.toggleClass('active');
           target.parents(this.accordion).find(this.accordionContent).stop().slideToggle('fast');
        }
    }

    $(function() {
        $('[data-simple-accordion]').each(function() {
            new SimpleAccordion( $(this) );
        });
    });
})(jQuery);
