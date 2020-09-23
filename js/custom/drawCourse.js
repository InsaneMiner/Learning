// TODO: Star based rating
// TODO: Tutor webpage
function drawCourse(title, desc, url, thumb, tutorName, tutorIcon) {
  const html = `
<div class="item col-xs-12 col-sm-6 col-lg-4">
  <div class="panel panel-default paper-shadow" data-z="0.5">

    <div class="cover overlay cover-image-full hover">
      <a href="${url}" class="padding-none overlay overlay-full icon-block bg-default">
        <img src="${thumb}" class="img height-150">
      </a>

      <a href="${url}" class="overlay overlay-full overlay-hover overlay-bg-white">
        <span class="v-center">
          <span class="btn btn-circle btn-white btn-lg"><i class="fa fa-graduation-cap"></i></span>
        </span>
      </a>
    </div>

    <div class="panel-body">
      <h4 class="text-headline margin v-0-10"><a href="${url}">${title}</a></h4>
    </div>

    <hr class="margin-none">

    <div class="panel-body">
      <p>${desc}</p>

      <div class="media v-middle">
        <div class="media-left">
          <img src="${tutorIcon}" class="img-circle width-40">
        </div>
        <div class="media-body">
          <h4>${tutorName}<br></h4>
          Instructor
        </div>
      </div>
    </div>

  </div>
</div>
  `
  return html
}
