$(function() {
  var data = [{
    projects: [{
      number:'1',
      name: 'musaa Branding',
      categories: 'branding, ui, development',
      href: 'portfolio-html/portfolio-html/nochoice.html',
      image: 'img/bg2.jpg',
    }, {
      number:'2',
      name: 'No Choice',
      categories: 'video, conceptual',
      href: '/portfolio-html/nochoice.html',
      image: 'https://source.unsplash.com/random',
    }, {
      number:'3',
      name: 'skucon Event',
      categories: 'branding, multimedia, ui',
      href: '/portfolio-html/nochoice.html',
      image: 'https://source.unsplash.com/user/muringa',
    }, {
      number:'4',
      name: 'Project4',
      categories: 'development',
      href: '/portfolio-html/nochoice.html',
      image: 'https://source.unsplash.com/user/lifeof_peter_',
    }, {
      number:'5',
      name: 'Project5',
      categories: 'branding',
      href: '/portfolio-html/nochoice.html',
      image: 'https://source.unsplash.com/user/nathanielyeo',
    }, {
      number:'6',
      name: 'Project6',
      categories: 'ui',
      href: '/portfolio-html/nochoice.html',
      image: 'https://source.unsplash.com/user/tobolenkoph',

    }],
  }];

  data.forEach(function(box) {
    box.projects.forEach(function(project) {

    var $boxContainer = $('<a class="box-container" href="' + project.href + '"></a>');
    var $box = $('<div class="box box' + project.number + '"></div>');
    var $mobInfo = $('<div class="mob-project-info"><h2>' + project.name + '</h2><p>' + project.categories + '</p></div>');

    $box.append('<div class="bg" style="background-image:url(' + project.image + ')"></div>');
    $box.append('<div class="box-overlay"><div class="project-info"><h2>' + project.name + '</h2><p>' + project.categories + '</p></div></div>');

    $('.grid-container').append($boxContainer);
    $boxContainer.append($box);
    $boxContainer.append($mobInfo);

    });
  });
});
//     $menuItem.click(function() {
//       var $videoContainer = $panel.find('.flex-video');
//       $('.flex-video iframe').remove();
//       $videoContainer.append('<iframe src="' + item.url + '" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>');
//       window.location.hash = item.id;
//     });
//
//     $('#skucon2021-deeplinked-accordion').append($menuItem);
//   });
// });
//
//   $(document).foundation();
//
//   jumpToHash();
// });
//
// function jumpToHash() {
//   var hash = window.location.hash;
//   var $hashLink = $('li.tabs-title>a[href="' + hash + '"]');
//   if ($hashLink.length === 0) {
//     $hashLink = $('li.tabs-title>a[href="#vid-1"]');
//   }
//   var $submenuItem = $hashLink.parent();
//   var $menuLink = $submenuItem.parent().parent().siblings('a.accordion-title');
//
//   $menuLink.click();
//   $submenuItem.click();
// }
//
// $('.side-menu').scroll(function() {
//     var scroll = $('.side-menu').scrollTop();
//     if (scroll >= 700) {
//         $(".scroll-arrow").addClass("rotate");
//     } else {
//         $(".scroll-arrow").removeClass("rotate");
//     }
// });
//
//
//
// if (window.location != window.parent.location) {
//   $('.skucon2021-header button').css('display','none');
// }
