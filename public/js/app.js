/*!
 * DEVELOPMENT VERSION
 * EERE Template v0.0.1 (https://github.com/NREL/eere-app-template)
 * 2014-11-03 8:52
 */
(function ($) {
  $(document).ready(function() {
    var host = '//apps1.eere.energy.gov';

    var fileTypes = {
        doc:  '/images/icon_word.gif',
        docx: '/images/icon_word.gif',
        pdf:  '/images/icon_pdf.gif',
        ppt:  '/images/icon_powerpoint.gif',
        pptx: '/images/icon_powerpoint.gif',
        xls:  '/images/icon_excel.gif',
        xlsx: '/images/icon_excel.gif',
        xlsm: '/images/icon_excel.gif'
    };

    var altText = {
        doc:  'Microsoft Word',
        docx: 'Microsoft Word',
        pdf:  'PDF',
        ppt:  'Microsoft PowerPoint',
        pptx: 'Microsoft PowerPoint',
        xls:  'Microsoft Excel',
        xlsx: 'Microsoft Excel',
        xlsm: 'Microsoft Excel'
    };

    var context,
        $a,
        ext,
        src,
        alt;

    context = $('body');

    $( 'a[href]', context).each( function() {
      $a = $(this);
      ext = $a.attr('href').split('.').pop().toLowerCase();

      // Proceed only if this is a known filetype and not wrapping an image.
      if ( fileTypes[ext] && $a.has('img').length == 0 ) {
        src = fileTypes[ext];
        alt = altText[ext];

        $('<img />',{
                'src': host + src,
                'alt': alt,
                'class': 'icon-file'
        }).appendTo( $a );
      }
    });
  });
})(jQuery);
;/*
 *  Your custom code and plugins
 *
 */
;/*
 *  Your custom code and plugins
 *
 */
